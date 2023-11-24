import React, { ReactNode } from 'react';
//import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
//import FirebaseAuthProvider from '@crema/services/auth/FirebaseAuthProvider';
import JWTAuthProvider from '@crema/services/auth/JWTAuthProvider';

type Props = {
  children: ReactNode;
};

const AppAuthProvider = ({ children }: Props) => {
  // const { fetchStart, fetchSuccess, fetchError } = useInfoViewActionsContext();

  return <JWTAuthProvider>{children}</JWTAuthProvider>;
};

export default AppAuthProvider;
