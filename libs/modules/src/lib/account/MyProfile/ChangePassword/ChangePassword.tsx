import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Formik, Form, FormikHelpers } from 'formik';
import * as yup from 'yup';
import jwtAxios from '@crema/services/auth/JWT';
import { useIntl } from 'react-intl';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AppTextField from '@crema/components/AppTextField';

import {
  SaveButton,
  EnableButton,
  SecureText,
  ButtonDisplay,
  IconStyle,
  IconBox,
  TwoFactorBox,
  SaveButtonBox,
} from './StyledComponent';

interface FormValues {
  email: string;
  oldPassword: string;
  newPassword: string;
  retypeNewPassword: string;
}

interface ChangePasswordFormProps {
  email: string;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ email }) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const { messages } = useIntl();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRetypeNewPassword, setShowRetypeNewPassword] = useState(false);

  const onShowOldPassword = () => {
    setShowPassword(!showPassword);
  };

  const onDownOldPassword = (event: any) => {
    event.preventDefault();
  };

  const onShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const onDownNewPassword = (event: any) => {
    event.preventDefault();
  };

  const onShowRetypeNewPassword = () => {
    setShowRetypeNewPassword(!showRetypeNewPassword);
  };

  const onDownRetypeNewPassword = (event: any) => {
    event.preventDefault();
  };

  const passwordComplexity =
    /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

  const validationSchema = yup.object({
    oldPassword: yup
      .string()
      .required(String(messages['validation.oldPasswordRequired']))
      .min(8, String(messages['validation.passwordMinLength']))
      .max(30, String(messages['validation.passwordMaxLength'])),
    newPassword: yup
      .string()
      .required(String(messages['validation.newPasswordRequired']))
      .min(8, String(messages['validation.passwordMinLength']))
      .max(30, String(messages['validation.passwordMaxLength']))
      .matches(
        passwordComplexity,
        String(messages['validation.passwordComplexity'])
      )
      .test(
        'passwords-match',
        String(messages['validation.changePassword']),
        function (value) {
          const { oldPassword } = this.parent;
          return value !== oldPassword;
        }
      ),
    retypeNewPassword: yup
      .string()
      .required(String(messages['validation.reTypePassword']))
      .oneOf(
        [yup.ref('newPassword')],
        String(messages['validation.passwordMisMatch'])
      ),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(true);

    try {
      const response = await jwtAxios.post('Authentication/change-password', {
        currentPassword: values.oldPassword,
        newPassword: values.newPassword,
      });

      infoViewActionsContext.fetchSuccess();
      resetForm();
      infoViewActionsContext.showMessage(
        String(messages['meassge.changePasswordSuccessfull'])
      );
    } catch (error: any) {
      if (error.response.status === 403) {
        infoViewActionsContext.fetchError(
          String(messages['message.invalidOldPassword'])
        );
      }
    }
    setSubmitting(false);
  };

  return (
    <Formik
      validateOnChange={false}
      validateOnBlur={true}
      initialValues={{
        email: email || '',
        oldPassword: '',
        newPassword: '',
        retypeNewPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Box>
        <Form autoComplete="off">
          <AppGridContainer spacing={8}>
            <Grid item xs={12} md={6}>
              <AppTextField
                fullWidth
                name="email"
                disabled
                label={<IntlMessages id="common.email" />}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                fullWidth
                type={showPassword ? 'text' : 'password'}
                name="oldPassword"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={onShowOldPassword}
                        onMouseDown={onDownOldPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label={<IntlMessages id="common.oldPassword" />}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <AppTextField
                fullWidth
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={onShowNewPassword}
                        onMouseDown={onDownNewPassword}
                        edge="end"
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label={<IntlMessages id="common.newPassword" />}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <AppTextField
                fullWidth
                type={showRetypeNewPassword ? 'text' : 'password'}
                name="retypeNewPassword"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={onShowRetypeNewPassword}
                        onMouseDown={onDownRetypeNewPassword}
                        edge="end"
                      >
                        {showRetypeNewPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label={<IntlMessages id="common.retypeNewPassword" />}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <SaveButtonBox>
                <SaveButton color="primary" variant="contained" type="submit">
                  <IntlMessages id="common.saveChanges" />
                </SaveButton>
              </SaveButtonBox>
            </Grid>
          </AppGridContainer>
        </Form>
        <TwoFactorBox>
          <IconBox>
            <IconStyle />
            <SecureText variant="h6">
              <IntlMessages id="secure.account" />
            </SecureText>
          </IconBox>
          <Typography>
            <IntlMessages id="authentication.two-factor" />
          </Typography>
          <ButtonDisplay>
            <EnableButton color="primary" variant="contained" type="submit">
              <IntlMessages id="button.enable" />
            </EnableButton>
          </ButtonDisplay>
        </TwoFactorBox>
      </Box>
    </Formik>
  );
};

export default ChangePasswordForm;
