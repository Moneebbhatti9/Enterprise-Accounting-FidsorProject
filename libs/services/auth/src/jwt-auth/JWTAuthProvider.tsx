import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AuthUserType } from '@crema/models/AuthUser';
import jwtAxios, { setAuthToken } from './index';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { getAllBusinesses } from 'libs/services/BusinessService/BusinessService';
interface JWTAuthContextProps {
  user: AuthUserType | null | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  permissionNames: string[];
}
interface SignUpProps {
  fullName: string;
  email: string;
  password: string;
}

interface SignInProps {
  email: string;
  password: string;
}
interface PermissionsProps {
  names: string[];
}
interface JwtToken {
  fullName: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  expireAt: number;
  error: string;
}
interface JWTAuthActionsProps {
  signUpUser: (data: SignUpProps) => void;
  signInUser: (data: SignInProps) => void;
  logout: () => void;
  
}
const JWTAuthContext = createContext<JWTAuthContextProps>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  permissionNames:[],
});
const JWTAuthActionsContext = createContext<JWTAuthActionsProps>({
  signUpUser: () => {},
  signInUser: () => {},
  logout: () => {},
  
});
export const useJWTAuth = () => useContext(JWTAuthContext);
export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);
interface JWTAuthAuthProviderProps {
  children: ReactNode;
}

const initialAuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  permissionNames:[],
};

const isTokenExpired = (expireAt: any) => {
  const currentTime = new Date().getTime();
  return currentTime >= new Date(expireAt).getTime();
};

const getFormattedDate = (timestamp: any) => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };

  const formattedDate = date.toLocaleDateString(undefined, options);
  return formattedDate;
};
const fetchUserPermissions = async () => {
  try {
    const response = await jwtAxios.get('Permission/user-permission');
    // Assuming the permissions are an array in the response
    const permissions = response.data;

    // Save permissions in the desired state or context
    // For example, if you have a state variable for permissions:
    // setPermissions(permissions);

    console.log('User Permissions:', permissions);
  } catch (error) {
    console.error('Error fetching user permissions:', error);
  }
};

const JWTAuthProvider: React.FC<JWTAuthAuthProviderProps> = ({ children }) => {
  const [jwtAuthData, setJWTAuthData] =
    useState<JWTAuthContextProps>(initialAuthState);
  const infoViewActionsContext = useInfoViewActionsContext();
  useEffect(() => {
    const getAuthUser = async () => {
      const token = localStorage.getItem('token');
      const expireAt = localStorage.getItem('expireAt');

      if (!token || !expireAt || isTokenExpired(expireAt)) {
        logout();
        return;
      }

      const formattedExpireAt = getFormattedDate(parseInt(expireAt));
      console.log('Token expires at:', formattedExpireAt);

      setAuthToken(token);

      try {
        const { data } = await jwtAxios.get('User/account');
        const response = await jwtAxios.get('Permission/user-permission');
        console.log('User Permissions:', response);
        const permissions = response.data.map((permission: { name: any; }) => permission.name);
        console.log('Specific User Permissions:', permissions);
        localStorage.setItem('userPermissions', JSON.stringify(permissions));
        setJWTAuthData({
          user: data,
          isLoading: false,
          isAuthenticated: true,
          permissionNames: response.data,
        });
      } catch (error) {
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
          permissionNames:[],
        });
      }
    };

    getAuthUser();
  }, []);

  const navigate = useNavigate();
  const { messages } = useIntl();

  const signInUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await jwtAxios.post('Authentication/login', {
        email,
        password,
      });
      if (response.data.expireAt && response.data.accessToken !== '') {
        const expireAt = response.data.expireAt;
        localStorage.setItem('token', response.data.accessToken);
        localStorage.setItem('expireAt', expireAt.toString());

        const formattedExpireAt = getFormattedDate(expireAt);
        console.log('Token will expire at:', formattedExpireAt);
        setAuthToken(response.data.accessToken);
        

        console.log(response.data, 'dataaaaaaa');
        const responsePermission = await jwtAxios.get('Permission/user-permission');
        console.log('User Permissions:', responsePermission.data);
        setJWTAuthData({
          user: response.data,
          isAuthenticated: true,
          isLoading: false,
          permissionNames:responsePermission.data,
        });
        checkBusinesses();
        // navigate('/dashboard');
      } else {
        infoViewActionsContext.fetchError(
          String(messages[response.data.error])
        );
        ClearJWTAuth();
      }
      infoViewActionsContext.fetchSuccess();
    } catch (error: any) {
      if (error.response.status >= 400 && error.response.status <= 499) {
        ClearJWTAuth();
        infoViewActionsContext.fetchError(String(messages['login.error']));
      } else {
        infoViewActionsContext.fetchError(
          String(messages['message.somethingWentWrong'])
        );
      }
    }
  };

  const ClearJWTAuth = () => {
    setJWTAuthData({
      ...jwtAuthData,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const signUpUser = async ({
    fullName,
    email,
    password,
  }: {
    fullName: string;
    email: string;
    password: string;
  }) => {
    infoViewActionsContext.fetchStart();
    try {
      await jwtAxios.post('Authentication/SignUp', {
        fullName,
        email,
        password,
      });
      infoViewActionsContext.fetchSuccess();
      navigate('/signin');
    } catch (error: any) {
      console.log(error);
      if (error.response && error.response.status === 403) {
        setJWTAuthData({
          ...jwtAuthData,
          isAuthenticated: false,
          isLoading: false,
        });
        infoViewActionsContext.fetchError(
          String(messages['message.userExists'])
        );
      } else {
        setJWTAuthData({
          ...jwtAuthData,
          isAuthenticated: false,
          isLoading: false,
        });
        infoViewActionsContext.fetchError('Something went wrong');
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expireAt');
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      permissionNames:[],
    });
    // navigate('/signin');
  };
  async function checkBusinesses() {
    try {
      const data = await getAllBusinesses();
      if (data && data.length > 0) {
        console.log('I have records');
        window.location.href = '/dashboard';
      } else {
        console.log('I am empty');
        window.location.href = '/subscribe';
      }
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  }
  return (
    <JWTAuthContext.Provider
      value={{
        ...jwtAuthData,
        //
      }}
    >
      <JWTAuthActionsContext.Provider
        value={{
          signUpUser,
          signInUser,
          logout,
         
        }}
      >
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthProvider;
