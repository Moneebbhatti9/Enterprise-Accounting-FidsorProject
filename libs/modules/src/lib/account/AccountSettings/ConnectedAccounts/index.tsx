import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Formik } from 'formik';
import * as yup from 'yup';
import { MemberType } from '@crema/models/account';
import ConnectedAccountForm from './ConnectedAccountForm';

const validationSchema = yup.object({
  facebook: yup.string().label('Please Enter your Facebook url'),
  google: yup.string().label('Please Enter your Google url'),
});

type SocialProps = {
  social: MemberType[];
};

const ConnectedAccounts: React.FC<SocialProps> = ({ social }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Typography
        component="h3"
        sx={{
          fontSize: 16,
          fontWeight: Fonts.BOLD,
          mb: { xs: 3, lg: 5 },
        }}
      >
        <IntlMessages id="common.socialLinks" />
      </Typography>
      <Formik
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={{
          facebook: '',
          linkedIn: '',
          google: 'https://google.com/?lang=en',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log('data: ', data);
          //TODO Api Call here to save user info
          setSubmitting(false);
        }}
      >
        <ConnectedAccountForm social={social} />
      </Formik>
    </Box>
  );
};

export default ConnectedAccounts;
