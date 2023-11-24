import { Form, Formik } from 'formik';
import * as yup from 'yup';
import AppTextField from '@crema/components/AppTextField';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppInfoView from '@crema/components/AppInfoView';
import { Fonts } from '@crema/constants/AppEnums';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import { grey } from '@mui/material/colors/index';
import AppAnimate from '@crema/components/AppAnimate';
import Card from '@mui/material/Card';
import AppLngSwitcher from '@crema/components/AppLngSwitcher';

const SignupFirebase = () => {
  const { messages } = useIntl();

  const validationSchema = yup.object({
    name: yup.string().required(String(messages['validation.nameRequired'])),
    email: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    password: yup
      .string()
      .required(String(messages['validation.passwordRequired'])),
    confirmPassword: yup
      .string()
      .required(String(messages['validation.reTypePassword'])),
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
              <IntlMessages id="common.signup" />
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
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setErrors, setSubmitting }) => {
              if (data.password !== data.confirmPassword) {
                setErrors({
                  confirmPassword: messages[
                    'validation.passwordMisMatch'
                  ] as string,
                });
              } else {
                setSubmitting(true);
                setSubmitting(false);
              }
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
                    label={<IntlMessages id="common.name" />}
                    name="name"
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
                    label={<IntlMessages id="common.email" />}
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
                    label={<IntlMessages id="common.password" />}
                    name="password"
                    type="password"
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
                    label={<IntlMessages id="common.retypePassword" />}
                    name="confirmPassword"
                    type="password"
                    variant="outlined"
                    sx={{
                      width: '100%',
                    }}
                  />
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
                    <Checkbox />
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
                      color: 'primary.main',
                      fontWeight: Fonts.BOLD,
                      fontSize: 14,
                      cursor: 'pointer',
                    }}
                  >
                    <IntlMessages id="common.termConditions" />
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{
                    width: '100%',
                    height: 44,
                  }}
                  type="submit"
                >
                  <IntlMessages id="common.signup" />
                </Button>
              </Form>
            )}
          </Formik>

          <Box
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
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',

              mx: { xs: -5, lg: -10 },
              mb: { xs: -6, lg: -11 },
              mt: 'auto',
              py: 2,
              px: { xs: 5, lg: 10 },
            }}
          >
            <Box
              sx={{
                color: (theme) => theme.palette.text.secondary,
              }}
            >
              <IntlMessages id="common.orLoginWith" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconButton
                sx={{ p: 2, '& svg': { fontSize: 18 } }}
                // onClick={() => logInWithPopup('google')}
              >
                <AiOutlineGoogle />
              </IconButton>
              <IconButton
                sx={{
                  p: 1.5,
                  '& svg': { fontSize: 18 },
                }}
                // onClick={() => logInWithPopup('facebook')}
              >
                <FaFacebookF />
              </IconButton>
            </Box>
          </Box>

          <AppInfoView />
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default SignupFirebase;
