import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import AppTextField from '@crema/components/AppTextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppInfoView from '@crema/components/AppInfoView';
import { Fonts } from '@crema/constants/AppEnums';
import FacebookIcon from '@mui/icons-material/Facebook';
import { grey } from '@mui/material/colors';
import Card from '@mui/material/Card';
import { AiOutlineGoogle } from 'react-icons/ai';
import AppAnimate from '@crema/components/AppAnimate';
import AppLngSwitcher from '@crema/components/AppLngSwitcher';

const SigninFirebase = () => {
  const navigate = useNavigate();
  const { messages } = useIntl();

  const onGoToForgetPassword = () => {
    navigate('/forget-password');
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    password: yup
      .string()
      .required(String(messages['validation.passwordRequired'])),
  });

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
              <IntlMessages id="common.login" />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <AppLngSwitcher iconOnly={true} tooltipPosition="bottom" />
          </Box>

          <Formik
            validateOnChange={true}
            initialValues={{
              email: 'rehmanmemon007@gmail.com',
              password: 'rehman1234',
              isActive: false,
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
              setSubmitting(true);
              console.log(data, 'signedin');
              if (data.isActive) {
                navigate('/signin/otp');
              }
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
                  <AppTextField
                    placeholder={messages['common.email'] as string}
                    label={messages['common.email'] as string}
                    name="email"
                    variant="outlined"
                    sx={{
                      width: '100%',
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    mb: { xs: 3, xl: 4 },
                  }}
                >
                  <AppTextField
                    type="password"
                    placeholder={messages['common.password'] as string}
                    label={messages['common.password'] as string}
                    name="password"
                    variant="outlined"
                    sx={{
                      width: '100%',
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    mb: { xs: 3, xl: 4 },
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { sm: 'center' },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        ml: -3,
                      }}
                    >
                      <Checkbox />
                    </Box>
                    <Box component="span" sx={{ fontSize: 14 }}>
                      <IntlMessages id="common.rememberMe" />
                    </Box>
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      ml: { sm: 'auto' },
                      color: 'primary.main',
                      mt: { xs: 2, sm: 0 },
                      fontWeight: Fonts.BOLD,
                      fontSize: 14,
                      cursor: 'pointer',
                    }}
                    onClick={onGoToForgetPassword}
                  >
                    <IntlMessages id="common.forgetPassword" />
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{
                    width: '100%',
                    height: 44,
                  }}
                >
                  <IntlMessages id="common.login" />
                </Button>
              </Form>
            )}
          </Formik>

          <Box
            sx={{
              mt: { xs: 3, xl: 4 },
              mb: { xs: 2, xl: 4 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: { sm: 'center' },
              alignItems: { sm: 'center' },
            }}
          >
            <Box
              component="span"
              sx={{
                mr: 4,
                color: grey[600],
                fontSize: 14,
              }}
            >
              <IntlMessages id="common.orLoginWith" />
            </Box>
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
                    color: 'text.secondary',
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              color: grey[700],
              fontSize: 14,
              fontWeight: Fonts.BOLD,
            }}
          >
            <Box
              component="span"
              sx={{
                mr: 2,
              }}
            >
              <IntlMessages id="common.dontHaveAccount" />
            </Box>
            <Box
              component="span"
              color="primary.main"
              sx={{
                width: '100%',
                height: 44,
              }}
            >
              <Link to="/signup">
                <IntlMessages id="common.signup" />
              </Link>
            </Box>
          </Box>

          <AppInfoView />
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default SigninFirebase;
