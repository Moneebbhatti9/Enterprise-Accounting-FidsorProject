import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Divider,
} from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from 'styled-components';
import { FormValues } from './CompanySignatoryInterface';
import * as Yup from 'yup';
import { makeStyles } from '@mui/styles';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.object().shape({
    street: Yup.string().required('Street is required'),
    regionId: Yup.number()
      .min(1, 'Select a valid Region')
      .required('Region is required'),
    city: Yup.string().required('City is required'),
    postal: Yup.string().required('Postal is required'),
  }),
  jobTitle: Yup.number()
    .min(1, 'Select a valid Region')
    .required('Region is required'), // Ensure it's a string
  dob: Yup.date()
    .nullable()
    .required('Date of Birth is required')
    .max(new Date(), 'Date of Birth cannot be in the future'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  sin: Yup.string().required('Social Insurance Number is required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  address: {
    street: '',
    regionId: 0,
    city: '',
    postal: '',
  },
  jobTitle: 0,
  dob: null,
  phoneNumber: '',
  sin: '',
};

const jobTitles = [
  { value: 10, label: 'Ten' },
  { value: 20, label: 'Twenty' },
  { value: 30, label: 'Thirty' },
];

const regions = [
  { value: 1, label: 'CA' },
  { value: 2, label: 'LA' },
  { value: 3, label: 'London' },
];

const handleSubmit = (values: FormValues) => {
  // Handle form submission here
  console.log(values);
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const useStyles = makeStyles((theme) => ({
  errorStyles: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
  },
  button: {
    backgroundColor: '#57b8c9',
    '&:hover': {
      backgroundColor: '#57b8c9',
    },
  },
}));

const CompanySignatoryFields = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        marginLeft={{ xs: '5%', sm: '0%' }}
        marginRight={{ xs: '5%', sm: '0%' }}
        marginTop="1%"
        marginBottom="1%"
      >
        <div style={{ fontSize: '14px', fontWeight: 900 }}>
          Company signatory
        </div>
        <Typography variant="subtitle2" fontWeight={'normal'} fontSize={16}>
          Add basic information about the person who can sign legally binding
          documents on behalf of your company.
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={'normal'}
          fontSize={14}
          color="#68757d"
        >
          Please note: To be applicable, the signatory's name must be attached
          to the company's business bank account.
        </Typography>
      </Box>
      <Box display="flex" alignSelf={'center'}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box width={{ xs: '75%', sm: '50%' }} marginTop="2%">
                <Grid
                  container
                  // textAlign={{ xs: 'left', sm: 'right' }}
                  alignItems={'center'}
                  columnSpacing={{ xs: 2, sm: 2, md: 3 }}
                  rowSpacing={2}
                >
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Name
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      placeholder="First name"
                      as={TextField}
                      name="firstName"
                      variant="outlined"
                      fullWidth
                      error={!!(isSubmitting && values.firstName === '')}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className={classes.errorStyles}
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <Field
                      placeholder="Last name"
                      as={TextField}
                      name="lastName"
                      variant="outlined"
                      fullWidth
                      error={!!(isSubmitting && values.lastName === '')}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className={classes.errorStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Home address
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      placeholder={'Street'}
                      as={TextField}
                      name="address.street"
                      variant="outlined"
                      fullWidth
                    />
                    <ErrorMessage
                      name="address.street"
                      component="div"
                      className={classes.errorStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}></Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      as={TextField}
                      placeholder={'City'}
                      name="address.city"
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                    <ErrorMessage
                      name="address.city"
                      component="div"
                      className={classes.errorStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} textAlign={'left'}>
                    <FormControl fullWidth>
                      <Select
                        name="address.regionId"
                        value={values.address.regionId} // Make sure to set the selected value here
                        onChange={(event) =>
                          setFieldValue('address.regionId', event.target.value)
                        }
                      >
                        <MenuItem disabled value={0}>
                          <em style={{ fontStyle: 'unset' }}>Select Region</em>
                        </MenuItem>
                        {regions.map((region) => (
                          <MenuItem key={region.value} value={region.value}>
                            {region.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <ErrorMessage
                      name="address.regionId"
                      component="div"
                      className={classes.errorStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}></Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      placeholder={'Zip/Postal Code'}
                      as={TextField}
                      name="address.postal"
                      variant="outlined"
                      fullWidth
                    />
                    <ErrorMessage
                      name="address.postal"
                      component="div"
                      className={classes.errorStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Job title
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <FormControl fullWidth>
                      <Select
                        name="jobTitle"
                        value={values.jobTitle} // Make sure to set the selected value here
                        onChange={(event) =>
                          setFieldValue('jobTitle', event.target.value)
                        }
                      >
                        <MenuItem disabled value={0}>
                          <em style={{ fontStyle: 'unset' }}>
                            Select Job Title
                          </em>
                        </MenuItem>
                        {jobTitles.map((jobTitle) => (
                          <MenuItem key={jobTitle.value} value={jobTitle.value}>
                            {jobTitle.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <ErrorMessage
                      name="jobTitle"
                      component="div"
                      className={classes.errorStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Date of birth
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={values.dob}
                        onChange={(date) => setFieldValue('dob', date)}
                      />
                    </LocalizationProvider>
                    <ErrorMessage
                      name="dob"
                      component="div"
                      className={classes.errorStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Phone number
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      as={TextField}
                      name="phoneNumber"
                      variant="outlined"
                      fullWidth
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className={classes.errorStyles}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Social Insurance Number
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      placeholder="123-456-789"
                      as={TextField}
                      name="sin"
                      variant="outlined"
                    />
                    <ErrorMessage
                      name="sin"
                      component="div"
                      className={classes.errorStyles}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Divider sx={{ m: '15px 0' }} />
              <Container
                style={{
                  flexDirection: 'row-reverse', // Change to 'row' to place buttons in the same line
                  paddingTop: '10px',
                  paddingBottom: '8px',
                }}
              >
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className={classes.button}
                >
                  Save
                </Button>
              </Container>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default CompanySignatoryFields;
