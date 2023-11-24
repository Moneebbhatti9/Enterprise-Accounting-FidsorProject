import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Checkbox, IconButton, Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import AppInfoView from '@crema/components/AppInfoView';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import AppTextField from '@crema/components/AppTextField';
import { useJWTAuthActions } from '@crema/services/auth/JWTAuthProvider';
import AppAnimate from '@crema/components/AppAnimate';
import Card from '@mui/material/Card';
import AppLngSwitcher from '@crema/components/AppLngSwitcher';
import { AiOutlineGoogle } from 'react-icons/ai';
import FacebookIcon from '@mui/icons-material/Facebook';
import InputAdornment from '@mui/material/InputAdornment';
import { MdVisibilityOff, MdVisibility } from 'react-icons/md';
import { textFieldStyles } from '../../Accounting/Global/Styling';
import { getAllBusinesses } from 'libs/services/BusinessService/BusinessService';
const SigninJwtAuth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { signInUser } = useJWTAuthActions();
  const { messages } = useIntl();
  const textFieldStyle = textFieldStyles();
  const onGoToForgetPassword = () => {
    navigate('/forget-password');
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const validationSchema = yup.object({
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
      .max(30, String(messages['validation.passwordMaxLength'])),
  });
  useEffect(() => {
    const rememberMeValue = localStorage.getItem('rememberMe');
    setRememberMe(rememberMeValue === 'true');
  }, []);
  
  async function checkBusinesses() {
    try {
      const data = await getAllBusinesses();
      //   debugger;
      console.log("SigninJwtAuth");
      if (data.length > 0) {
        // console.log('I have records');
        window.location.href = '/dashboard';
      } else {
        // console.log('I am empty');
        window.location.href = '/subscribe';
      }
    } catch (error) {
      console.error('Error fetching accounts:', error);
    }
  }
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
                <IntlMessages id="common.login" />
              </Typography>
            </Stack>
            <AppLngSwitcher iconOnly={true} tooltipPosition="bottom" />
          </Box>
          <Formik
            validateOnChange={true}
            initialValues={{
              email: '',
              password: '',
              isActive: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              if (data.isActive) {
                // checkBusinesses();
              } else {
                signInUser(data);
              }
              localStorage.setItem('rememberMe', rememberMe.toString());

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
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { sm: 'center' },
                  }}
                >
                  <Stack direction={'row'} alignItems={'center'}>
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      style={{ marginLeft: '-12px' }}
                    />
                    <Typography fontSize={'14px'}>
                      <IntlMessages id="common.rememberMe" />
                    </Typography>
                  </Stack>
                  <Typography
                    ml={{ sm: 'auto' }}
                    mt={{ xs: 2, sm: 0 }}
                    fontSize={'14px'}
                    fontWeight={'bold'}
                    color={'#57B8C9'}
                    sx={{ cursor: 'pointer' }}
                    onClick={onGoToForgetPassword}
                  >
                    <IntlMessages id="common.forgetPassword" />
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    width: '100%',
                    height: 44,
                    background: '#57B8C9',
                  }}
                >
                  <IntlMessages id="common.login" />
                </Button>
              </Form>
            )}
          </Formik>

          {/* <Box
            sx={{
              mt: { xs: 3, xl: 4 },
              mb: { xs: 2, xl: 4 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: { sm: 'center' },
              alignItems: { sm: 'center' },
            }}
          >
            <Typography mr={'4px'} fontSize={'14px'} color={'#757575'}>
              <IntlMessages id="common.orLoginWith" />
            </Typography>
            <Box display="inline-block">
              <IconButton
                sx={{
                  p: 2,
                  '& svg': { fontSize: 18 },
                  color: (theme) => theme.palette.text.secondary,
                }}
              >
                <AiOutlineGoogle />
              </IconButton>
              <IconButton>
                <FacebookIcon
                  sx={{
                    fontSize: 18,
                    color: (theme) => theme.palette.text.secondary,
                  }}
                />
              </IconButton>
            </Box>
          </Box> */}
          <Typography
            mt={'3px'}
            fontSize={'14px'}
            color={'#616161'}
            fontWeight={'bold'}
          >
            <IntlMessages id="common.dontHaveAccount" />
            <span style={{ display: 'inline-block', marginLeft: '4px' }}>
              <Link
                to="/signup"
                style={{ cursor: 'pointer', textDecoration: 'none' }}
              >
                <Typography
                  mt={'3px'}
                  fontSize={'14px'}
                  fontWeight={'bold'}
                  color={'#57B8C9'}
                >
                  <IntlMessages id="common.signup" />
                </Typography>
              </Link>
            </span>
          </Typography>
          <AppInfoView />
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default SigninJwtAuth;
