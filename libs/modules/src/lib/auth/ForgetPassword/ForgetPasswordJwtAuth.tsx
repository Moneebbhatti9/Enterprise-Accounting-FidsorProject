import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Form, Formik } from 'formik';
import { Card, Stack } from '@mui/material';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import AppInfoView from '@crema/components/AppInfoView';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppTextField from '@crema/components/AppTextField';
import { Fonts } from '@crema/constants/AppEnums';
import { useIntl } from 'react-intl';
import AppAnimate from '@crema/components/AppAnimate';
import AppLngSwitcher from '@crema/components/AppLngSwitcher';
import jwtAxios from '@crema/services/auth/JWT';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { textFieldStyles } from '../../Accounting/Global/Styling';
const ForgetPasswordJwtAuth = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { messages } = useIntl();
  const textFieldStyle = textFieldStyles();
  const infoViewActionsContext = useInfoViewActionsContext();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
  });

  const handleForgetPasswordSubmission = async (data: { email: string }) => {
    try {
      const response = await jwtAxios.post(
        'Authentication/reset-password/init',
        { email: data.email }
      );
      if (response.status === 200) {
        setShowSuccessMessage(true);
      } else {
        setShowSuccessMessage(false);
      }
      infoViewActionsContext.showMessage(
        String(messages['message.checkEmailToChangePassword'])
      );
    } catch (error: any) {
      setShowSuccessMessage(false);
      if (error.response.status === 404) {
        infoViewActionsContext.fetchError(
          String(messages['message.emailNotFound'])
        );
      }
    }
  };

  return (
    <AppAnimate animation="transition.slideUpIn" delay={200}>
      <Box
        sx={{
          pb: 6,
          py: { xl: 8 },
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          sx={{
            maxWidth: 576,
            width: '100%',
            textAlign: 'center',
            padding: { xs: 8, lg: 12, xl: '48px 64px' },
            overflow: 'hidden',
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Box sx={{ mb: { xs: 8, xl: 10 } }}>
            <Box
              sx={{
                mb: { xs: 3, xl: 4 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  mr: 2,
                  '.logo': {
                    height: 24,
                  },
                }}
              >
                <img
                  className="logo"
                  src={'/assets/images/digiturnal.png'}
                  alt="EnterpriseConnect"
                  title="EnterpriseConnect"
                />
              </Box>
              <Box
                sx={{
                  mb: 1.5,
                  fontWeight: Fonts.BOLD,
                  fontSize: 20,
                }}
              >
                <IntlMessages id="common.forgetPassword" />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                }}
              />
              <AppLngSwitcher iconOnly={true} tooltipPosition="bottom" />
            </Box>
            <Typography
              sx={{
                pt: 3,
                fontSize: 15,
                color: 'grey.500',
              }}
            >
              <span style={{ marginRight: 4 }}>
                <IntlMessages id="common.alreadyHavePassword" />
              </span>
              <Box
                component="span"
                sx={{
                  fontWeight: Fonts.MEDIUM,
                  '& a': {
                    color: (theme) => theme.palette.primary.main,
                    textDecoration: 'none',
                  },
                }}
              >
                <Link to="/signin">
                  <IntlMessages id="common.signIn" />
                </Link>
              </Box>
            </Typography>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Formik
                validateOnChange={true}
                initialValues={{
                  email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  await handleForgetPasswordSubmission(values);
                  resetForm();
                }}
              >
                {({ isSubmitting }) => (
                  <Form style={{ textAlign: 'left' }}>
                    {!showSuccessMessage && (
                      <Stack sx={{ mb: { xs: 5, lg: 8 } }}>
                        <Typography fontSize={'12px'}>Enter Email</Typography>
                        <AppTextField
                          name="email"
                          sx={{
                            width: '100%',
                            '& .MuiInputBase-input': {
                              fontSize: 14,
                            },
                          }}
                          variant="outlined"
                          InputProps={{
                            classes: {
                              root: textFieldStyle.customTextField,
                            },
                          }}
                        />
                      </Stack>
                    )}
                    {showSuccessMessage && (
                      <Box sx={{ textAlign: 'center', mt: 4, mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ color: 'green' }}>
                          {
                            messages[
                              'message.checkEmailToChangePassword'
                            ] as string
                          }
                        </Typography>
                      </Box>
                    )}

                    {!showSuccessMessage && (
                      <div>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                          sx={{
                            fontWeight: Fonts.REGULAR,
                            textTransform: 'capitalize',
                            fontSize: 16,
                            width: 'fit-content',
                          }}
                          type="submit"
                        >
                          <IntlMessages id="common.fogetPasswordButton" />
                        </Button>
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
            </Box>

            <AppInfoView />
          </Box>
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default ForgetPasswordJwtAuth;
