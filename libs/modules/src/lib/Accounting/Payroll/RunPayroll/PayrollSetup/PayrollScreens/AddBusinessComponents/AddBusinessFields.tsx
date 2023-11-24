import {
  Box,
  Typography,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Divider,
} from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormValues } from './AddBusinessInterface';
import * as Yup from 'yup';
import { makeStyles } from '@mui/styles';
import styled from 'styled-components';
import { textFieldStyles } from 'libs/modules/src/lib/Accounting/Global/Styling';
const validationSchema = Yup.object().shape({
  businessLegalName: Yup.string().required('Business Legal Name is required'),
  dbaField: Yup.string().test(
    'conditionallyRequired',
    'Operational Name is required',
    function (value) {
      const dbaChecked = !this.parent.dba; // Access the value of the 'dba' field
      if (dbaChecked) {
        return !!value;
      }
      return true;
    }
  ),
  craField: Yup.string().test(
    'conditionallyRequired',
    'CRA Payroll Account Number is required',
    function (value) {
      const craNotWaiting = !this.parent.cra; // Access the value of the 'cra' field
      if (craNotWaiting) {
        return !!value;
      }
      return true;
    }
  ),
  workAddress: Yup.object().shape({
    address: Yup.object().shape({
      street: Yup.string().required('Street is required'),
      city: Yup.string().required('City is required'),
      regionId: Yup.number()
        .min(1, 'Select a valid Region')
        .required('Region is required'),
      postal: Yup.number().required('Postal Code is required'),
    }),
  }),
  mailingAddress: Yup.object().shape({
    address: Yup.object().shape({
      street: Yup.string().test(
        'isStreetRequired',
        'Street is required',
        function (value) {
          const mACheckbox = this.parent.mACheckbox;
          if (!mACheckbox && !value) {
            return false;
          }
          return true;
        }
      ),
      city: Yup.string().test(
        'isCityRequired',
        'City is required',
        function (value) {
          const mACheckbox = this.parent.mACheckbox;
          if (!mACheckbox && !value) {
            return false;
          }
          return true;
        }
      ),
      regionId: Yup.number().test(
        'isRegionRequired',
        'Region is required',
        function (value) {
          const mACheckbox = this.parent.mACheckbox;
          if (!mACheckbox && value === 0) {
            return false;
          }
          return true;
        }
      ),
      postal: Yup.number().test(
        'isPostalRequired',
        'Postal Code is required',
        function (value) {
          const mACheckbox = this.parent.mACheckbox;
          if (!mACheckbox && !value) {
            return false;
          }
          return true;
        }
      ),
    }),
  }),
  businessType: Yup.number()
    .min(1, 'Select a valid Type')
    .required('Business Type is required'),
  establishedYear: Yup.number()
    .min(1, 'Select a valid Type')
    .required('Established Year is required'),
  businessDescription: Yup.string().required(
    'Business Description is required'
  ),
  employeesPaid: Yup.number()
    .min(1, 'Select a valid Type')
    .required('Employess Paid is required'),
});

const AddBusinessFields = () => {
  const textFieldStyle = textFieldStyles();
  const initialValues = {
    businessLegalName: '',
    dba: false,
    dbaField: '',
    cra: false,
    craField: '',
    workAddress: {
      address: {
        street: '',
        regionId: 0,
        city: '',
        postal: '',
      },
    },
    mACheckbox: false,
    mailingAddressField: '',
    mailingAddress: {
      address: {
        street: '',
        regionId: 0,
        city: '',
        postal: '',
      },
    },
    businessType: 0,
    establishedYear: 0,
    businessDescription: '',
    businessWebsite: '',
    employeesPaid: 0,
  };

  const businessTypes = [
    { value: 1, label: 'Corporation' },
    { value: 2, label: 'Partnership' },
    { value: 3, label: 'Sole Proprietorship' },
  ];

  const regions = [
    { value: 1, label: 'CA' },
    { value: 2, label: 'LA' },
    { value: 3, label: 'London' },
  ];

  const establishedYears = [
    { value: 1, label: '2023' },
    { value: 2, label: '2022' },
    { value: 3, label: '2021' },
    { value: 4, label: '2020' },
    { value: 5, label: '2019' },
  ];

  const eP = [
    { value: 1, label: 'Yes' },
    { value: 2, label: 'No' },
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
  }));
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
          Business profile
        </div>
        <Typography variant="subtitle2" fontWeight={'normal'} fontSize={14}>
          The following information is used for identity verification and
          communication with the government about your taxes.
        </Typography>
      </Box>

      <Box display="flex" alignSelf={'center'}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue, errors }) => (
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
                      Business Legal Name
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      as={TextField}
                      name="businessLegalName"
                      variant="outlined"
                      fullWidth
                      error={isSubmitting && !values.businessLegalName}
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                    <ErrorMessage name="businessLegalName">
                      {(msg) => (
                        <div className={classes.errorStyles}>{msg}</div>
                      )}
                    </ErrorMessage>
                  </Grid>
                  {/* <Grid item xs={12} sm={4}></Grid>
                  <Grid item xs={12} sm={8}>
                    <div style={{ color: 'red' }}>
                      <ErrorMessage name="businessLegalName" />
                    </div>
                  </Grid> */}
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Doing business as (DBA)
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8} textAlign="left">
                    <FormControlLabel
                      control={
                        <Field
                          as={Checkbox}
                          type="checkbox"
                          name="dba"
                          fullWidth
                          onChange={() => {
                            setFieldValue('dba', !values.dba); // Toggle the checkbox
                            if (!values.dba) {
                              setFieldValue(
                                'dbaField',
                                values.businessLegalName
                              ); // Set DBA Field to Business Legal Name when checked
                            }
                          }}

                        />
                      }
                      label="Same as business name"
                    />
                  </Grid>
                  {values.dba ? null : (
                    <>
                      <Grid item xs={12} sm={4}></Grid>
                      <Grid item xs={12} sm={8}>
                        <TextField
                          placeholder="Operational Name"
                          variant="outlined"
                          fullWidth
                          value={values.dbaField}
                          onChange={(e) =>
                            setFieldValue('dbaField', e.target.value)
                          }
                          InputProps={{
                            classes: {
                              root: textFieldStyle.customTextField,
                            },
                          }}
                        />
                        <ErrorMessage name="dbaField">
                          {(msg) => (
                            <div className={classes.errorStyles}>{msg}</div>
                          )}
                        </ErrorMessage>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      CRA Payroll Account Number
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8} textAlign={'left'}>
                    <FormControlLabel
                      control={
                        <Field
                          as={Checkbox}
                          type="checkbox"
                          name="cra"
                          fullWidth
                          onClick={() => {
                            setFieldValue('craField', ''); // Clear the DBA Field when the checkbox is checked
                          }}
                          InputProps={{
                            classes: {
                              root: textFieldStyle.customTextField,
                            },
                          }}
                        />
                      }
                      label="I applied and am waiting for my Payroll Account Number"
                    />
                  </Grid>
                  {values.cra ? null : ( // Display DBA Field only if the checkbox is not checked
                    <>
                      <Grid item xs={12} sm={4}></Grid>
                      <Grid item xs={12} sm={8}>
                        <Field
                          placeholder="12345 1234 RP1234"
                          as={TextField}
                          name="craField"
                          variant="outlined"
                          fullWidth
                          InputProps={{
                            classes: {
                              root: textFieldStyle.customTextField,
                            },
                          }}
                        />
                        <ErrorMessage name="craField">
                          {(msg) => (
                            <div className={classes.errorStyles}>{msg}</div>
                          )}
                        </ErrorMessage>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Work address
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      placeholder={'Street'}
                      as={TextField}
                      name="workAddress.address.street"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                    <ErrorMessage name="workAddress.address.street">
                      {(msg) => (
                        <div className={classes.errorStyles}>{msg}</div>
                      )}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12} sm={4}></Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      as={TextField}
                      placeholder={'City'}
                      name="workAddress.address.city"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                    <ErrorMessage name="workAddress.address.city">
                      {(msg) => (
                        <div className={classes.errorStyles}>{msg}</div>
                      )}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12} sm={4} textAlign={'left'}>
                    <FormControl fullWidth>
                      <Select
                        name="workAddress.address.regionId"
                        value={values.workAddress.address.regionId} // Make sure to set the selected value here
                        onChange={(event) =>
                          setFieldValue(
                            'workAddress.address.regionId',
                            event.target.value
                          )
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
                    <ErrorMessage name="workAddress.address.regionId">
                      {(msg) => (
                        <div className={classes.errorStyles}>{msg}</div>
                      )}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12} sm={4}></Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      placeholder={'Zip/Postal Code'}
                      as={TextField}
                      name="workAddress.address.postal"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                    <ErrorMessage name="workAddress.address.postal">
                      {(msg) => (
                        <div className={classes.errorStyles}>{msg}</div>
                      )}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    {' '}
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Mailing address
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8} textAlign="left">
                    <FormControlLabel
                      control={
                        <Field
                          as={Checkbox}
                          type="checkbox"
                          name="mACheckbox"
                          fullWidth
                          onChange={() => {
                            setFieldValue('mACheckbox', !values.mACheckbox); // Toggle the checkbox
                            if (!values.mACheckbox) {
                              setFieldValue(
                                'mailingAddress.address.street',
                                values.workAddress.address.street
                              );
                              setFieldValue(
                                'mailingAddress.address.city',
                                values.workAddress.address.city
                              );
                              setFieldValue(
                                'mailingAddress.address.regionId',
                                values.workAddress.address.regionId
                              );
                              setFieldValue(
                                'mailingAddress.address.postal',
                                values.workAddress.address.postal
                              );
                            }
                          }}
                          onClick={() => {
                            setFieldValue('mailingAddressField', ''); // Clear the DBA Field when the checkbox is checked
                          }}
                        />
                      }
                      label="Same as Work address"
                    />
                  </Grid>
                  {values.mACheckbox ? null : ( // Display DBA Field only if the checkbox is not checked
                    <>
                      <Grid item xs={12} sm={4}></Grid>
                      <Grid item xs={12} sm={8}>
                        <Field
                          placeholder={'Street'}
                          as={TextField}
                          name="mailingAddress.address.street"
                          variant="outlined"
                          fullWidth
                          InputProps={{
                            classes: {
                              root: textFieldStyle.customTextField,
                            },
                          }}
                        />
                        <ErrorMessage name="mailingAddress.address.street">
                          {(msg) => (
                            <div className={classes.errorStyles}>{msg}</div>
                          )}
                        </ErrorMessage>
                      </Grid>
                      <Grid item xs={12} sm={4}></Grid>
                      <Grid item xs={12} sm={4}>
                        <Field
                          as={TextField}
                          placeholder={'City'}
                          name="mailingAddress.address.city"
                          variant="outlined"
                          fullWidth
                          size="small"
                          InputProps={{
                            classes: {
                              root: textFieldStyle.customTextField,
                            },
                          }}
                        />
                        <ErrorMessage name="mailingAddress.address.city">
                          {(msg) => (
                            <div className={classes.errorStyles}>{msg}</div>
                          )}
                        </ErrorMessage>
                      </Grid>
                      <Grid item xs={12} sm={4} textAlign={'left'}>
                        <FormControl fullWidth>
                          <Select
                            name="mailingAddress.address.regionId"
                            value={values.mailingAddress.address.regionId}
                            onChange={(event) =>
                              setFieldValue(
                                'mailingAddress.address.regionId',
                                event.target.value
                              )
                            }
                          >
                            <MenuItem disabled value={0}>
                              <em style={{ fontStyle: 'unset' }}>
                                Select Region
                              </em>
                            </MenuItem>
                            {regions.map((region) => (
                              <MenuItem key={region.value} value={region.value}>
                                {region.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <ErrorMessage name="mailingAddress.address.regionId">
                          {(msg) => (
                            <div className={classes.errorStyles}>{msg}</div>
                          )}
                        </ErrorMessage>
                      </Grid>
                      <Grid item xs={12} sm={4}></Grid>
                      <Grid item xs={12} sm={8}>
                        <Field
                          placeholder={'Zip/Postal Code'}
                          as={TextField}
                          name="mailingAddress.address.postal"
                          variant="outlined"
                          fullWidth
                          InputProps={{
                            classes: {
                              root: textFieldStyle.customTextField,
                            },
                          }}
                        />
                        <ErrorMessage name="mailingAddress.address.postal">
                          {(msg) => (
                            <div className={classes.errorStyles}>{msg}</div>
                          )}
                        </ErrorMessage>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Business type
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Select
                      name="businessType"
                      value={values.businessType}
                      onChange={(event) =>
                        setFieldValue('businessType', event.target.value)
                      }
                    >
                      <MenuItem disabled value={0}>
                        <em style={{ fontStyle: 'unset' }}>
                          Select Business Type
                        </em>
                      </MenuItem>
                      {businessTypes.map((businessType) => (
                        <MenuItem
                          key={businessType.value}
                          value={businessType.value}
                        >
                          {businessType.label}
                        </MenuItem>
                      ))}
                    </Select>
                    <ErrorMessage name="businessType">
                      {(msg) => (
                        <div className={classes.errorStyles}>{msg}</div>
                      )}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Established year
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <FormControl fullWidth>
                      <Select
                        name="establishedYear"
                        value={values.establishedYear}
                        onChange={(event) =>
                          setFieldValue('establishedYear', event.target.value)
                        }
                      >
                        <MenuItem disabled value={0}>
                          <em style={{ fontStyle: 'unset' }}>
                            Established Year
                          </em>
                        </MenuItem>
                        {establishedYears.map((establishedYear) => (
                          <MenuItem
                            key={establishedYear.value}
                            value={establishedYear.value}
                          >
                            {establishedYear.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <ErrorMessage name="establishedYear">
                      {(msg) => (
                        <div className={classes.errorStyles}>{msg}</div>
                      )}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Business description
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      as={TextField}
                      name="businessDescription"
                      multiline
                      rows={2}
                      fullWidth
                      placeholder="Enter description"
                     
                    />
                    <ErrorMessage name="businessDescription">
                      {(msg) => (
                        <div className={classes.errorStyles}>{msg}</div>
                      )}
                    </ErrorMessage>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Business website
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      as={TextField}
                      name="businessWebsite"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      Have you paid any employees this year?
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <FormControl fullWidth>
                      <Select
                        name="employeesPaid"
                        value={values.employeesPaid}
                        onChange={(event) =>
                          setFieldValue('employeesPaid', event.target.value)
                        }
                      >
                        <MenuItem disabled value={0}>
                          <em style={{ fontStyle: 'unset' }}>Select</em>
                        </MenuItem>
                        {eP.map((employeesPaid) => (
                          <MenuItem
                            key={employeesPaid.value}
                            value={employeesPaid.value}
                          >
                            {employeesPaid.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <ErrorMessage name="employeesPaid">
                      {(msg) => (
                        <div className={classes.errorStyles}>{msg}</div>
                      )}
                    </ErrorMessage>
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

export default AddBusinessFields;
