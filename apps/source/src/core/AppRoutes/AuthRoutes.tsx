import React from 'react';
import {useNavigate } from 'react-router-dom';
const ViewInvoices = React.lazy(
  () =>
    import(
      '../../../../../libs/modules/src/lib/Accounting/Salespayments/Invoices/screens/ViewInvoice'
    )
);
const Signin = React.lazy(() => import('../../modules/auth/Signin'));
const Invoices = React.lazy(() => import('../../modules/auth/Invoice/Invoice'));
const Signup = React.lazy(() => import('../../modules/auth/Signup'));
const ForgotPassword = React.lazy(
  () => import('../../modules/auth/ForgetPassword')
);
const Otp = React.lazy(() => import('../../modules/auth/Otp'));
const ConfirmSignupAwsCognito = React.lazy(
  () => import('../../modules/auth/Signup/ConfirmSignupAwsCognito')
);
const ResetPassword = React.lazy(
  () => import('../../modules/auth/ForgetPassword/ResetPasswordAwsCognito')
);
const EmailActivation = React.lazy(
  () => import('../../modules/auth/EmailActivation/index')
);

const ResetPasswordRedirect = () => {
  const navigate = useNavigate();
  React.useEffect(() => {

    const key = window.location.pathname.split('/').pop();
    navigate(`/resetPassword/${key}`);
  }, [navigate]);

  return null;
};
const VerifyEmailRedirect = () => {
  const navigate = useNavigate();
  React.useEffect(() => {

    const key = window.location.pathname.split('/').pop();
    navigate(`/verifyEmail/${key}`);
  }, [navigate]);

  return null;
};

export const authRouteConfig = [
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/invoice/72ab345de123f4c98b2a567e',
    element: <ViewInvoices />,
  },
  {
    path: '/signin/otp',
    element: <Otp />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/forget-password',
    element: <ForgotPassword />,
  },
  {
    path: '/confirm-signup',
    element: <ConfirmSignupAwsCognito />,
  },
  {
    path: '/resetPassword/:key',
    element: <ResetPassword />,
  },
  {
    path: 'redirect/resetPassword/:key',
    element: <ResetPasswordRedirect />,
  },
  {
    path: 'redirect/verifyEmail/:key',
    element: <VerifyEmailRedirect />,
  },
  {
    path: '/verifyEmail/:key',
    element: <EmailActivation />,
  },
];


