import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppTextField from '@crema/components/AppTextField';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import Card from '@mui/material/Card';
import { Fonts } from '@crema/constants/AppEnums';
import AppAnimate from '@crema/components/AppAnimate';
import AppLngSwitcher from '@crema/components/AppLngSwitcher';

interface OTPFormValues {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
}

const OTP = () => {
  const navigate = useNavigate();
  const { messages } = useIntl();

  const validationSchema = yup
    .object({
      otp1: yup.string(),
      otp2: yup.string(),
      otp3: yup.string(),
      otp4: yup.string(),
    })
    .test({
      name: 'emptyFields',
      test: function (values) {
        const { otp1, otp2, otp3, otp4 } = values;
        const isAnyFieldEmpty = !otp1 || !otp2 || !otp3 || !otp4;
        if (isAnyFieldEmpty) {
          return this.createError({
            message: 'All fields are required',
            path: 'otp1',
          });
        }
        return true;
      },
    });

  const handleSubmit = (
    data: OTPFormValues,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    setSubmitting(true);
    // Perform OTP verification logic
    const otp = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;
    const otpPlaceholder = '1234'; // Replace with your actual OTP logic
    if (otp === otpPlaceholder) {
      // OTP verification successful, navigate to dashboard
      // navigate('/dashboard');
      console.log('OTP verification successful');
      resetForm();
    } else {
      // Invalid OTP
      console.log('Invalid OTP');
    }
    setSubmitting(false);
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
              Verify OTP
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <AppLngSwitcher iconOnly={true} tooltipPosition="bottom" />
          </Box>
          <Box
            sx={{
              mb: { xs: 3, xl: 4 },
              color: grey[700],
              fontSize: 16,
              fontWeight: Fonts.BOLD,
            }}
          >
            <Box
              component="span"
              sx={{
                mr: 2,
              }}
            >
              <IntlMessages id="Enter the 6-digit security code being sent to you!" />
            </Box>
            <span id="emptyFieldsError" style={{ color: 'red' }}></span>
          </Box>

          <Formik<OTPFormValues>
            initialValues={{
              otp1: '',
              otp2: '',
              otp3: '',
              otp4: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form noValidate autoComplete="off">
                <Box
                  sx={{
                    mb: { xs: 3, xl: 4 },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <AppTextField
                      name="otp1"
                      variant="outlined"
                      inputProps={{ maxLength: 1 }}
                      sx={{
                        width: '40px',
                        marginRight: '5px',
                        textAlign: 'center',
                      }}
                    />
                    <AppTextField
                      name="otp2"
                      variant="outlined"
                      inputProps={{ maxLength: 1 }}
                      sx={{
                        width: '40px',
                        marginRight: '5px',
                        textAlign: 'center',
                      }}
                    />
                    <AppTextField
                      name="otp3"
                      variant="outlined"
                      inputProps={{ maxLength: 1 }}
                      sx={{
                        width: '40px',
                        marginRight: '5px',
                        textAlign: 'center',
                      }}
                    />
                    <AppTextField
                      name="otp4"
                      variant="outlined"
                      inputProps={{ maxLength: 1 }}
                      sx={{
                        width: '40px',
                        marginRight: '5px',
                        textAlign: 'center',
                      }}
                    />
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                  sx={{
                    width: '100%',
                    height: 44,
                  }}
                >
                  Verify and Login
                </Button>
              </Form>
            )}
          </Formik>
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default OTP;
