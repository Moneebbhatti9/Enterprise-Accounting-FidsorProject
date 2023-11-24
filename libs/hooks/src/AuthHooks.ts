
import { getUserFromJwtAuth } from '@crema/helpers';
import {
  useJWTAuth,
  useJWTAuthActions,
} from '@crema/services/auth/JWTAuthProvider';

export const useAuthUser = () => {
  const { user, isAuthenticated, isLoading,permissionNames } = useJWTAuth();
  return {
    isLoading,
    isAuthenticated,
    user: getUserFromJwtAuth(user),
    permissionNames,
  };
};
export const useAuthMethod = () => {
  const { signInUser, signUpUser, logout } = useJWTAuthActions();
  return {
    signInUser,
    logout,
    signUpUser,
  };
};



