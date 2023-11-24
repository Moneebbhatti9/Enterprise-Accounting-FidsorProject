import React from 'react';
import { Box, Typography } from '@mui/material';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Fonts } from '@crema/constants/AppEnums';
import { useJWTAuth } from '@crema/services/auth/JWTAuthProvider';
import AppInfoView from '@crema/components/AppInfoView';
import ChangePasswordForm from './ChangePassword';
import { ChangePasswordHeading } from './StyledComponent';

const ChangePassword = () => {
  const { user } = useJWTAuth();

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          maxWidth: 550,
        }}
      >
        <ChangePasswordHeading>
          <IntlMessages id="common.changePassword" />
        </ChangePasswordHeading>
        <ChangePasswordForm email={user?.email || ''} />
      </Box>
      <AppInfoView />
    </>
  );
};

export default ChangePassword;
