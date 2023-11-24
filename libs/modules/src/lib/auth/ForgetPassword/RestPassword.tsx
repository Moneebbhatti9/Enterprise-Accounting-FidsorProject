/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Form, Formik, FormikValues } from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';
import AppAnimate from '@crema/components/AppAnimate';
import AppTextField from '@crema/components/AppTextField';
import { useIntl } from 'react-intl';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import jwtAxios from '@crema/services/auth/JWT';
import { useParams, useNavigate } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AppLngSwitcher from '@crema/components/AppLngSwitcher';
import AppInfoView from '@crema/components/AppInfoView';

interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const infoViewActionsContext = useInfoViewActionsContext();
  const { messages } = useIntl();
  const navigate = useNavigate();
  const { key } = useParams();

  const validationSchema = yup.object({
    password: yup
      .string()
      .required(String(messages['validation.passwordRequired']))
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
        String(messages['validation.passwordComplexity'])
      ),
    confirmPassword: yup
      .string()
      .required(String(messages['validation.reTypePassword']))
      .oneOf(
        [yup.ref('password')],
        String(messages['validation.passwordMisMatch'])
      ),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  const handleResetPassword = async (
    data: ResetPasswordFormValues,
    resetForm: (nextState?: Partial<FormikValues>) => void,
    setSubmitting: (isSubmitting: boolean) => void,
    setErrors: (errors: { [key: string]: any }) => void
  ) => {
    try {
      if (data.password !== data.confirmPassword) {
        setErrors({
          confirmPassword: <IntlMessages id="validation.passwordMisMatch" />,
        });
      } else {
        setSubmitting(true);
        await jwtAxios.post(`Authentication/reset-password/finish`, {
          key,
          newPassword: data.password,
        });

        infoViewActionsContext.fetchSuccess();
        resetForm();
        navigate('/signin');
      }
    } catch (error: any) {
      if (error.response.status === 404) {
        infoViewActionsContext.fetchError(
          String(messages['message.keyMisMatch'])
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
              <IntlMessages id="common.resetPassword" />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <AppLngSwitcher iconOnly={true} tooltipPosition="bottom" />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Formik
              validateOnChange={true}
              initialValues={{
                password: '',
                confirmPassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(data, { setErrors, resetForm, setSubmitting }) =>
                handleResetPassword(data, resetForm, setSubmitting, setErrors)
              }
            >
              {({ isSubmitting }) => (
                <Form>
                  <Box
                    sx={{
                      mb: 6,
                      fontSize: { xs: 16, sm: 18 },
                    }}
                  >
                    {/* <Typography>
                  <IntlMessages id="common.verificationMessage" />
                </Typography> */}
                  </Box>
                  {/* <Box
                sx={{
                  mb: { xs: 4, lg: 6 },
                }}
              >
                <ReactCodeInput
                  name="password"
                  type="password"
                  inputMode="numeric"
                  value={pin}
                  fields={6}
                  onChange={(value) => setPin(value)}
                />
              </Box> */}

                  <Box
                    sx={{
                      mb: { xs: 4, lg: 6 },
                    }}
                  >
                    <AppTextField
                      name="password"
                      label={<IntlMessages id="common.password" />}
                      sx={{
                        width: '100%',
                      }}
                      variant="outlined"
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      mb: { xs: 4, lg: 6 },
                    }}
                  >
                    <AppTextField
                      name="confirmPassword"
                      label={<IntlMessages id="common.retypePassword" />}
                      sx={{
                        width: '100%',
                      }}
                      variant="outlined"
                      type={showConfirmPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={toggleConfirmPasswordVisibility}
                            >
                              {showConfirmPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      sx={{
                        fontWeight: Fonts.REGULAR,
                        textTransform: 'capitalize',
                        fontSize: 16,
                        minWidth: 160,
                      }}
                      type="submit"
                    >
                      <IntlMessages id="common.resetMyPassword" />
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Box>
          <AppInfoView />
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default ResetPassword;
