import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Typography, useTheme, Stack } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import Grid from '@mui/material/Grid';
import { useIntl } from 'react-intl';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import { grey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Fonts } from '@crema/constants/AppEnums';
import AppAnimate from '@crema/components/AppAnimate';
import AppTextField from '@crema/components/AppTextField';
import { ReactComponent as Logo } from '../../../assets/user/login.svg';
import { textFieldStyles } from 'libs/modules/src/lib/Accounting/Global/Styling';
import CountrySelect from 'libs/modules/src/lib/dashboards/Setting/Businesses/AddBusiness/CountrySelect';
interface FormValues {
  email: string;
  cardNumber: string;
  expiration: string;
  cvc: string;
  zip: string;
  cardholdername: string;
  selectedCountry: string;
}
const BankDetails = () => {
  const theme = useTheme();
  const textFieldStyle = textFieldStyles();
  const { messages } = useIntl();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(String(messages['validation.emailFormat']))
      .required(String(messages['validation.emailRequired'])),
    cardNumber: yup
      .string()
      .matches(/^\d{16}$/, 'Enter a valid 16-digit card number')
      .required('Card number is required'),
    expiration: yup
      .string()
      .matches(/^\d{2}\/\d{2}$/, 'Enter a valid expiration date (MM/YY)')
      .required('Expiration date is required'),
    cvc: yup
      .string()
      .matches(/^\d{3}$/, 'Enter a valid 3-digit CVC')
      .required('CVC is required'),
    zip: yup.string().required('ZIP is required'),
    cardholdername: yup.string().required('Cardholder Name is required.'),
    selectedCountry: yup.string().required('Please select a country'),
  });
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedCountry(event.target.value);
  };
  const navigate = useNavigate();
  const selectedPackageTitle = localStorage.getItem('selectedPackageTitle');
  const selectedPackagePrice = localStorage.getItem('selectedPackagePrice');
  const selectedBillingFormat = localStorage.getItem('selectedBillingFormat');
  const handleSubmitForm = (values: FormValues) => {
    console.log(values);
    navigate('/businesses/add');
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
            maxWidth: 1024,
            width: '100%',
            padding: 8,
            paddingLeft: { xs: 8, md: 2 },
            overflow: 'hidden',
            boxShadow:
              '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                width: '100%',
                height: '100%',
                textAlign: 'center',
                '& svg': {
                  width: '100%',
                  height: '100%',
                  display: 'inline-block',
                  paddingRight: { xs: 0, lg: 10 },
                },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontWeight: Fonts.BOLD,
                  fontSize: { xs: 28, md: 32, lg: 36 },
                }}
              >
                {selectedPackageTitle}
              </Typography>
              <Typography
                component="h4"
                sx={{
                  fontSize: { xs: 20, md: 22, lg: 24 },
                  mb: { xs: 5, lg: 7.5 },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: Fonts.BOLD,
                  }}
                >
                  ${selectedPackagePrice}
                </Box>
                /{selectedBillingFormat}
              </Typography>
              <Logo fill={theme.palette.primary.main} />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  mb: { xs: 3, xl: 4 },
                  fontWeight: Fonts.BOLD,
                  fontSize: 20,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: '100%',
                    height: 44,
                    backgroundColor: 'black', // Background color set to black
                    color: 'white', // Text color set to white for better visibility
                  }}
                  type="submit"
                >
                  G Pay
                  {/* <IntlMessages id="common.login" /> */}
                </Button>

                <Typography style={{ paddingTop: '20px' }}>
                  Or Pay With Card
                </Typography>
              </Box>

              <Formik
                validateOnChange={true}
                initialValues={{
                  email: '',
                  cvc: '',
                  expiration: '',
                  cardNumber: '',
                  cardholdername: '',
                  zip: '',
                  selectedCountry: '',
                }}
                // validationSchema={validationSchema}
                onSubmit={(values) => handleSubmitForm(values)}
              >
                {({ isSubmitting }) => (
                  <Form noValidate autoComplete="off">
                    <Box sx={{ mb: { xs: 5, xl: 8 } }}>
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

                    <Box sx={{ mb: { xs: 5, xl: 8 } }}>
                      <Stack alignItems={'start'}>
                        <Typography fontSize={'12px'}>
                          Card Information
                        </Typography>
                        <AppTextField
                          //   type="password"
                          placeholder="1234 1234 1234 1234"
                          // label={messages['common.password'] as string}
                          name="cardNumber"
                          variant="outlined"
                          sx={{
                            width: '100%',
                            mb: 2, // Adding margin at the bottom for spacing
                          }}
                          InputProps={{
                            classes: {
                              root: textFieldStyle.customTextField,
                            },
                          }}
                        />
                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Stack alignItems={'start'}>
                              <Typography fontSize={'12px'}>
                                Expiration Date
                              </Typography>
                              <AppTextField
                                placeholder="MM/YY"
                                // label="Expiration Date"
                                name="expiration"
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
                          </Grid>
                          <Grid item xs={6}>
                            <Stack alignItems={'start'}>
                              <Typography fontSize={'12px'}>CVC</Typography>
                              <AppTextField
                                placeholder="CVC"
                                // label="CVC"
                                name="cvc"
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
                          </Grid>
                        </Grid>
                      </Stack>
                    </Box>
                    <Box sx={{ mb: { xs: 5, xl: 8 } }}>
                      <Stack alignItems={'start'}>
                        <Typography fontSize={'12px'}>
                          Cardholder Name
                        </Typography>
                        <AppTextField
                          placeholder="Cardholder Name"
                          // label="Full name on card"
                          name="cardholdername"
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
                    <Box sx={{ mb: { xs: 5, xl: 8 } }}>
                      <Stack alignItems={'start'}>
                        <Typography fontSize={'12px'}>
                          Country or Region
                        </Typography>
                        <CountrySelect
                          value={selectedCountry}
                          onChange={handleCountryChange}
                          disabled={false}
                          error={false}
                        />
                        <Typography fontSize={'12px'}>ZIP</Typography>
                        <AppTextField
                          placeholder="ZIP"
                          // label="ZIP"
                          name="zip"
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
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      // disabled={isSubmitting}
                      sx={{
                        width: '100%',
                        height: 44,
                      }}
                    >
                      Pay
                    </Button>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </AppAnimate>
  );
};

export default BankDetails;
