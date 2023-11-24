import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Formik } from 'formik';
import SocialForm from './SocialForm';
import * as yup from 'yup';
import { MemberType } from '@crema/models/account';
import {
  SocialBoxPosition,
  SocialLinksHeading,
} from '../PersonalInfo/ProfileStyledComponent';

const validationSchema = yup.object({
  twitter: yup.string().label('Please Enter your Twitter url'),
  facebook: yup.string().label('Please Enter your Facebook url'),
  google: yup.string().label('Please Enter your Google url'),
  linkedIn: yup.string().label('Please Enter your LinkedIn url'),
  instagram: yup.string().label('Please Enter your Instagram url'),
  quora: yup.string().label('Please Enter your Quora url'),
});

type SocialProps = {
  social?: MemberType[];
};

const Social: React.FC<SocialProps> = ({ social = [] }) => {
  return (
    <SocialBoxPosition>
      <SocialLinksHeading>
        <IntlMessages id="common.socialLinks" />
      </SocialLinksHeading>
      <Formik
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={{
          twitter: 'https://twitter.com/?lang=en',
          facebook: '',
          linkedIn: '',
          google: '',
          instagram: '',
          quora: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log('data: ', data);
          //TODO Api Call here to save user info
          setSubmitting(false);
        }}
      >
        <SocialForm social={social} />
      </Formik>
    </SocialBoxPosition>
  );
};

export default Social;
