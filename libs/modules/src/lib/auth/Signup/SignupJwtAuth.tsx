import React, { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import AppTextField from '@crema/components/AppTextField';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppInfoView from '@crema/components/AppInfoView';
import { Fonts } from '@crema/constants/AppEnums';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import AppAnimate from '@crema/components/AppAnimate';
import Card from '@mui/material/Card';
import AppLngSwitcher from '@crema/components/AppLngSwitcher';
import { useJWTAuthActions } from '@crema/services/auth/JWTAuthProvider';
import InputAdornment from '@mui/material/InputAdornment';
import { Stack, Typography } from '@mui/material';
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';
import { textFieldStyles } from '../../Accounting/Global/Styling';

const SignupJwtAuth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signUpUser } = useJWTAuthActions();
  const { messages } = useIntl();
  const textFieldStyle = textFieldStyles();
  const validationSchema = yup.object({
    name: yup

      .string()
      .matches(
        /^[A-Za-z]+( [A-Za-z]+)?$/,
        String(messages['validation.nameAlphabets'])
      )
      .required(String(messages['validation.nameRequired'])),
    email: yup
      .string()
      .trim()
      .email(String(messages['validation.emailFormat']))
      .max(50, String(messages['validation.emailMaxLength']))
      .required(String(messages['validation.emailRequired'])),
    password: yup
      .string()
      .required(String(messages['validation.passwordRequired']))
      .min(8, String(messages['validation.passwordMinLength']))
      .max(30, String(messages['validation.passwordMaxLength']))
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
    checkbox: yup
      .boolean()
      .oneOf([true], String(messages['validation.agreeToTerms'])),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
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
              justifyContent: 'space-between',
            }}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={'8px'}>
              <img
                className="logo"
                src={'/assets/images/digiturnal.png'}
                alt="EnterpriseConnect"
                title="EnterpriseConnect"
                style={{
                  width: '24px',
                }}
              />

              <Typography mb={'6px'} fontSize={'20px'} fontWeight={'bold'}>
                <IntlMessages id="common.signup" />
              </Typography>
            </Stack>
            <AppLngSwitcher iconOnly={true} tooltipPosition="bottom" />
          </Box>
          <Formik
            validateOnChange={true}
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
              checkbox: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              signUpUser({
                email: data.email,
                password: data.password,
                fullName: data.name,
              });
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate autoComplete="off">
                <Box
                  sx={{
                    mb: { xs: 3, xl: 4 },
                  }}
                >
                  <Stack alignItems={'start'}>
                    <Typography fontSize={'12px'}>
                      <IntlMessages id="common.name" />
                    </Typography>
                    <AppTextField
                      name="name"
                      variant="outlined"
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                      inputProps={{ maxLength: 100 }}
                      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (e.key >= '0' && e.key <= '9') {
                          e.preventDefault();
                        }
                      }}
                      onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => {
                        e.preventDefault();
                      }}
                      sx={{
                        width: '100%',
                      }}
                    />
                  </Stack>
                </Box>
                <Box
                  sx={{
                    mb: { xs: 3, xl: 4 },
                  }}
                >
                  <Stack alignItems={'start'}>
                    <Typography fontSize={'12px'}>
                      <IntlMessages id="common.email" />
                    </Typography>
                    <AppTextField
                      name="email"
                      variant="outlined"
                      sx={{
                        width: '100%',
                      }}
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                  </Stack>
                </Box>
                <Box
                  sx={{
                    mb: { xs: 3, xl: 4 },
                  }}
                >
                  <Stack alignItems={'start'}>
                    <Typography fontSize={'12px'}>
                      <IntlMessages id="common.password" />
                    </Typography>
                    <AppTextField
                      name="password"
                      variant="outlined"
                      sx={{
                        width: '100%',
                      }}
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility}>
                              {showPassword ? (
                                <MdVisibility fontSize={'16px'} />
                              ) : (
                                <MdVisibilityOff fontSize={'16px'} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Stack>
                </Box>
                <Box
                  sx={{
                    mb: { xs: 3, xl: 4 },
                  }}
                >
                  <Stack alignItems={'start'}>
                    <Typography fontSize={'12px'}>
                      <IntlMessages id="common.retypePassword" />
                    </Typography>
                    <AppTextField
                      name="confirmPassword"
                      variant="outlined"
                      sx={{
                        width: '100%',
                      }}
                      type={showConfirmPassword ? 'text' : 'password'}
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={toggleConfirmPasswordVisibility}
                            >
                              {showConfirmPassword ? (
                                <MdVisibility fontSize={'16px'} />
                              ) : (
                                <MdVisibilityOff fontSize={'16px'} />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Stack>
                </Box>
                <Box
                  sx={{
                    mb: { xs: 5, xl: 6 },
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      ml: -3,
                    }}
                  >
                    <Field type="checkbox" name="checkbox" as={Checkbox} />
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      mr: 2,
                      fontSize: 14,
                    }}
                  >
                    <IntlMessages id="common.iAgreeTo" />
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      // color: 'primary.main',
                      color: '#57B8C9',
                      fontWeight: Fonts.BOLD,
                      fontSize: 14,
                      cursor: 'pointer',
                    }}
                  >
                    <IntlMessages id="common.termConditions" />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    color: 'red',
                    fontSize: 12,
                    marginTop: -8,
                    marginBottom: 10,
                    textAlign: 'start',
                  }}
                >
                  <Typography fontSize={'0.75rem'} color={'#d32f2f'}>
                    <ErrorMessage name="checkbox" component="div" />
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{
                    width: '100%',
                    height: 44,
                    backgroundColor: '#57B8C9',
                  }}
                  type="submit"
                >
                  <IntlMessages id="common.signup" />
                </Button>
              </Form>
            )}
          </Formik>
          <Typography
            mt={'3px'}
            fontSize={'14px'}
            color={'#616161'}
            fontWeight={'bold'}
          >
            <IntlMessages id="common.alreadyHaveAccount" />
            <span style={{ display: 'inline-block', marginLeft: '4px' }}>
              <Link
                to="/signIn"
                style={{ cursor: 'pointer', textDecoration: 'none' }}
              >
                <Typography
                  mt={'3px'}
                  fontSize={'14px'}
                  fontWeight={'bold'}
                  color={'#57B8C9'}
                >
                  <IntlMessages id="common.signInHere" />
                </Typography>
              </Link>
            </span>
          </Typography>
          {/* <Box
            sx={{
              mt: { xs: 3, xl: 4 },
              textAlign: 'center',
              color: grey[700],
              fontSize: 14,
              fontWeight: Fonts.BOLD,
            }}
          >
            <Box component="span" sx={{ mr: 1 }}>
              <IntlMessages id="common.alreadyHaveAccount" />
            </Box>
            <Box
              component="span"
              sx={{
                color: 'primary.main',
                fontWeight: Fonts.MEDIUM,
                cursor: 'pointer',
              }}
            >
              <Link to="/signIn">
                <IntlMessages id="common.signInHere" />
              </Link>
            </Box>
          </Box> */}
          {/* <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 3,
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            <IntlMessages id="common.orLoginWith" />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignSelf: 'center',
              justifyContent: 'center',
              width: '100%',
              marginTop: 2,
            }}
          >
            <IconButton sx={{ p: 2, '& svg': { fontSize: 18 } }}>
              <AiOutlineGoogle />
            </IconButton>
            <IconButton
              sx={{
                p: 1.5,
                '& svg': { fontSize: 18 },
              }}
            >
              <FaFacebookF />
            </IconButton>
          </Box> */}
          <AppInfoView />
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default SignupJwtAuth;
