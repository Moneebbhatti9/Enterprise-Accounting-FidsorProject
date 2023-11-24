import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  CustomAsterik,
  CustomCustomerGridLabel,
  CustomCustomerName,
  CustomDisabledText,
  SectionMainGrid,
  StyledTextField,
  StyledTypography,
  CustomDivider,
  BillingAddressScnGrid1,
  SubHeading,
  BilingAddressScnGrid,
  AccountNumberMainGrid,
  StyledTypographyPC,
  PrimaryContactDetailGrid,
} from '../../../../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Autocomplete from '@mui/material/Autocomplete';
import {
  VendorDataType,
  Address,
  Currency,
  Country,
  City,
} from '../../../../../../../../../modules/interfaces/Vendors/Vendor';
import * as Yup from 'yup';
import CountrySelect from 'libs/modules/src/lib/dashboards/Setting/Businesses/AddBusiness/CountrySelect';
import CurrencySelect from 'libs/modules/src/lib/dashboards/Setting/Businesses/AddBusiness/CurrencySelect';
import { addVendor } from 'libs/services/VendorService/VendorService';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import styled from 'styled-components';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { textFieldStyles } from 'libs/modules/src/lib/Accounting/Global/Styling';
import {
  getAllCurrency,
  getAllCountry,
  getAllCity,
} from 'libs/services/ConfigurartionService/ConfigurartionService';

const useStyles = makeStyles((theme) => ({
  gridLabel: {
    '@media (min-width: 600px)': {
      justifyContent: 'end',
    },
    '@media (max-width: 599px)': {
      marginRight: '0px',
      marginLeft: '0px',
    },
  },
  typographyMargin: {
    '@media (max-width: 599px)': {
      marginRight: '0px',
      marginLeft: '0px',
    },
  },
  disabledText: {
    '@media (min-width: 600px)': {
      justifyContent: 'center',
    },
  },
  disabledField: {
    '& .MuiInputBase-root.Mui-disabled': {
      backgroundColor: '#f1f1f1',
    },
  },
  fnamelname: {
    '@media (max-width: 599px)': {
      paddingTop: '14px !important',
    },
  },
}));

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputFieldsVendors = () => {
  const navigate = useNavigate();
  const textFieldStyle = textFieldStyles();
  const initialValues: VendorDataType = {
    vendorName: '',
    vendorType: 'regular',
    contractorType: 0,
    firstName: '',
    lastName: '',
    currencyId: 0,
    email: '',
    address: {
      countryId: 0,
      cityId: 0,
      addressDetails: '',
      addressOptional: '',
      postal: '',
      state: '',
    },
    accountNumber: '',
    phone: null,
    fax: null,
    mobile: null,
    tollFree: null,
    website: '',
    sin: null,
    cra: null,
    businessName: '',
    // directDeposit: 'Regular',
    // tax: '12%',
  };

  const sampleAddress: Address = {
    state: 'California',
    countryId: 1,
    cityId: 123,
    addressDetails: '123 Main Street',
    addressOptional: 'Apt 101',
    postal: '90210',
  };

  // Implementing the VendorDataType interface
  // const sampleVendor: VendorDataType = {
  //   contractorType: 0,
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   vendorName: 'ABC Corporation',
  //   email: 'john@example.com',
  //   phone: 123-456-7890,
  //   vendorType: 'regular',
  //   // directDeposit: 'Regular',
  //   // tax: '123456789',
  //   mobile: 987-654-3210,
  //   tollFree: 800-123-4567,
  //   fax: 123456,
  //   accountNumber: 'Account123',
  //   website: 'https://example.com',
  //   currencyId: 0,
  //   address: sampleAddress, // Assigning the address object created above
  //   sin: 12345678,
  //   cra: 1234356789,
  //   businessName: data.vendorName
  // };
  const handleSubmit = async (values: VendorDataType) => {
    // try {
    //   const response = await addVendor(values);
    //   console.log('Vendor added successfully:', response);
    //   // setOpenDialog(true);
    // } catch (error) {
    //   console.error('Error adding customer:', error);
    // }
    console.log('Form Data:', values);
    navigate('/purchases/vendors');
    // try {
    //   // Call the addEmployeeApiCall function to make the POST request
    //   const response = await addVendor(providedData);
    //   navigate('/purchases/vendors');
    //   console.log(data);
    //   console.log('Vendor added successfully:', response);

    //   // Optionally, you can handle the response or redirect the user
    // } catch (error) {
    //   console.error('Error adding Vendor:', error);
    //   // Handle the error here, e.g., show an error message to the user
    // }
  };
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [cityData, setCityData] = useState<City[]>([]);
  const [currencyData, setCurrencyData] = useState<Currency[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
  useEffect(() => {
    async function fetchCurrency() {
      try {
        const data = await getAllCurrency();
        console.log(data);
        setCurrencyData(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }
    const fetchCountry = async () => {
      try {
        const data = await getAllCountry();
        setCountryData(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    const fetchCity = async () => {
      try {
        const data = await getAllCity();
        setCityData(data);
      } catch (error) {
        console.error('Error fetching regions:', error);
      }
    };

    fetchCurrency();
    fetchCountry();
    fetchCity();
    // const dummyData: dummyData = {
    //   customerName: 'John Doe',
    //   // ... (other fields with dummy data)
    // };

    // setCustomerData(dummyData);
  }, []);

  const theme = useTheme();
  const classes = useStyles();

  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleCurrencyChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedCurrency(event.target.value);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={(values: VendorDataType) => {
        const errors: Partial<VendorDataType> = {};
        if (!values.vendorName) {
          errors.vendorName = 'Vendor Name is required';
        }
        // uncomment this after successfull backend
        if (values.vendorType === 'contractor' && values.contractorType === 0) {
          if (!values.sin) {
            errors.sin = 'SIN is Required';
          } else if (isNaN(Number(values.sin))) {
            errors.sin = 'SIN should be a number';
          }
        }
        if (values.vendorType === 'contractor' && values.contractorType === 1) {
          if (!values.cra) {
            errors.cra = 'CRA is Required';
          } else if (isNaN(Number(values.cra))) {
            errors.cra = 'CRA should be a number';
          }
        }
        if (values.vendorType === 'contractor' && values.contractorType === 0) {
          if (!values.firstName) {
            errors.firstName = 'First Name is required';
          }
        }
        if (values.vendorType === 'contractor' && values.contractorType === 0) {
          if (!values.lastName) {
            errors.lastName = 'Last Name is required';
          }
        }
        if (values.vendorType === 'contractor' && !values.email) {
          errors.email = 'Email is required';
        } else if (
          values.vendorType === 'contractor' &&
          !/^\S+@\S+\.\S+$/.test(values.email)
        ) {
          errors.email = 'Invalid email format';
        }
        // if (values.vendorType === 'contractor') {
        //   if (!values.address || !values.address.regionId) {
        //     errors.address!.regionId = 'Region is required';
        //   }
        //   if (!values.address.addressDetails) {
        //     errors.address!.addressDetails = 'Address is required';
        //   }
        //   if (!values.address.city) {
        //     errors.address!.city = 'City is required';
        //   }
        //   if (!values.address.postal) {
        //     errors.address!.postal = 'Postal code is required';
        //   }
        // }

        return errors;
      }}
    >
      {({
        values,
        handleChange,
        errors,
        touched,
        setValues,
        setFieldValue,
      }) => (
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            width={{ xs: '75%', md: '50%' }}
            marginTop="2%"
            marginBottom="2%"
          >
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
                  <IntlMessages id="addVendor.VendorName" />
                  <span style={{ color: 'red' }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  id="vendorName"
                  name="vendorName"
                  fullWidth
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
                {errors.vendorName && touched.vendorName && (
                  <div className="error" style={{ color: 'red' }}>
                    {errors.vendorName}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  <IntlMessages id="common.type" />
                  <span style={{ color: 'red' }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="type"
                    name="vendorType"
                    value={values.vendorType}
                    onChange={(e) => {
                      setValues(initialValues);
                      handleChange(e);
                    }}
                  >
                    <FormControlLabel
                      value="regular"
                      control={<Radio />}
                      label="Regular"
                    />
                    <FormControlLabel
                      value="contractor"
                      control={<Radio />}
                      label="Contractor"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          {values.vendorType && (
            <Box width="100%">
              <Divider
                sx={{
                  marginTop: '3%',
                  marginBottom: '15px',
                  marginLeft: '0px',
                  marginRight: '0px',
                }}
                variant="middle"
              />
              <Box
                marginLeft={{ xs: '5%', sm: '0%' }}
                marginRight={{ xs: '5%', sm: '0%' }}
                marginTop="1%"
                marginBottom="1%"
                fontSize="14px"
                fontWeight={900}
              >
                <IntlMessages id="userProfile.information" />
              </Box>
            </Box>
          )}
          <Box
            width={{ xs: '75%', md: '50%' }}
            marginTop="2%"
            marginBottom="2%"
          >
            <Grid
              container
              // textAlign={{ xs: 'left', sm: 'right' }}
              alignItems={'center'}
              columnSpacing={{ xs: 2, sm: 2, md: 3 }}
              rowSpacing={2}
            >
              {values.vendorType === 'contractor' && (
                <>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      <IntlMessages id="addVendor.CT" />
                      <CustomAsterik>*</CustomAsterik>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Field
                      as={Select}
                      id="contractorType"
                      name="contractorType"
                      fullWidth
                      onChange={(e: SelectChangeEvent) => {
                        // When contractorType changes, set "sin" and "cra" to initial values
                        setValues({
                          ...values,
                          sin: initialValues.sin,
                          cra: initialValues.cra,
                          firstName: initialValues.firstName,
                          lastName: initialValues.lastName,
                        });
                        handleChange(e);
                      }}
                    >
                      <MenuItem value={0}>Individual</MenuItem>
                      <MenuItem value={1}>Business</MenuItem>
                    </Field>
                  </Grid>
                </>
              )}
              {values.vendorType === 'contractor' &&
                values.contractorType === 0 && (
                  <>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        variant="subtitle1"
                        marginRight={{ xs: '0%', sm: '5%' }}
                        marginLeft={{ xs: '0%', sm: '5%' }}
                        fontSize="12px"
                      >
                        <IntlMessages id="addVendor.SIN" />
                        <CustomAsterik>*</CustomAsterik>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Field
                        as={TextField}
                        id="sin"
                        name="sin"
                        fullWidth
                        InputProps={{
                          classes: {
                            root: textFieldStyle.customTextField,
                          },
                        }}
                      />
                      {errors.sin && touched.sin && (
                        <div className="error" style={{ color: 'red' }}>
                          {errors.sin}
                        </div>
                      )}
                    </Grid>
                  </>
                )}
              {values.vendorType === 'contractor' &&
                values.contractorType === 1 && (
                  <>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        variant="subtitle1"
                        marginRight={{ xs: '0%', sm: '5%' }}
                        marginLeft={{ xs: '0%', sm: '5%' }}
                        fontSize="12px"
                        className={classes.gridLabel}
                      >
                        <IntlMessages id="addVendor.BName" />
                        <CustomAsterik>*</CustomAsterik>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Field
                        as={TextField}
                        id="businessName"
                        name="businessName"
                        fullWidth
                        disabled={values.contractorType === 1}
                        value={
                          values.contractorType === 1 ? values.vendorName : null
                          // : values.businessName
                        }
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
                        className={classes.gridLabel}
                      >
                        <IntlMessages id="addVendor.CRAAN" />
                        <CustomAsterik>*</CustomAsterik>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Field
                        as={TextField}
                        id="cra"
                        name="cra"
                        fullWidth
                        InputProps={{
                          classes: {
                            root: textFieldStyle.customTextField,
                          },
                        }}
                      />
                      {/* {errors.cra && touched.cra && (
                      <div className="error" style={{ color: 'red' }}>
                        {errors.cra}
                      </div>
                    )} */}
                    </Grid>
                  </>
                )}
              {values.contractorType === 0 && (
                <>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      <IntlMessages id="common.name" />
                      <span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      as={TextField}
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      fullWidth
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="error" style={{ color: 'red' }}>
                        {errors.firstName}
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      as={TextField}
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      fullWidth
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                    {errors.lastName && touched.lastName && (
                      <div className="error" style={{ color: 'red' }}>
                        {errors.lastName}
                      </div>
                    )}
                  </Grid>
                </>
              )}
              {values.vendorType === 'regular' && (
                <>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      variant="subtitle1"
                      marginRight={{ xs: '0%', sm: '5%' }}
                      marginLeft={{ xs: '0%', sm: '5%' }}
                      fontSize="12px"
                    >
                      <IntlMessages id="AddCustomer.Currency" />
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <FormControl fullWidth size="small">
                      <Field as={Select} name="currencyId" displayEmpty>
                        <MenuItem disabled value="0">
                          <em style={{ fontStyle: 'unset' }}>
                            Select Currency
                          </em>
                        </MenuItem>
                        {currencyData.map((currenciesData) => (
                          <MenuItem
                            key={currenciesData.id}
                            value={currenciesData.id}
                          >
                            {currenciesData.name}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
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
                  <IntlMessages id="AddCustomer.PCEmail" />
                  {values.vendorType === 'contractor' && (
                    <CustomAsterik>*</CustomAsterik>
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  id="email"
                  name="email"
                  fullWidth
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
                {errors.email && touched.email && (
                  <div className="error" style={{ color: 'red' }}>
                    {errors.email}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  <IntlMessages id="common.country" />
                  {values.vendorType === 'contractor' && (
                    <CustomAsterik>*</CustomAsterik>
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                {/* <Autocomplete
                  id="country"
                  options={countryData}
                  getOptionLabel={(option) => option.name}
                  value={
                    countryData.find(
                      (country) => country.id === values.address.countryId
                    ) || null
                  }
                  onChange={(event, newValue) => {
                    const selectedCountryId = newValue ? newValue.id : 0;
                    handleChange({
                      target: {
                        name: 'address.countryId',
                        value: selectedCountryId,
                      },
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={
                        !!errors.address?.countryId &&
                        touched.address?.countryId
                      }
                      helperText={errors.address?.countryId}
                      InputProps={{
                        ...params.InputProps,
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                  )}
                /> */}
                <FormControl fullWidth size="small">
                  <Field
                    as={Select}
                    name="address.countryId"
                    displayEmpty
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      const selectedValue = Number(e.target.value);
                      setFieldValue('address.countryId', selectedValue);
                      setSelectedCountry(selectedValue);
                    }}
                  >
                    <MenuItem disabled value="0">
                      <em style={{ fontStyle: 'unset' }}>Select Country</em>
                    </MenuItem>
                    {countryData.map((country) => (
                      <MenuItem key={country.id} value={country.id}>
                        {country.name}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  <IntlMessages id="common.region" />
                  {values.vendorType === 'contractor' && (
                    <CustomAsterik>*</CustomAsterik>
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                {/* <Autocomplete
                  id="country"
                  options={cityData}
                  getOptionLabel={(option) => option.name}
                  value={
                    cityData.find(
                      (city) => city.id === values.address.cityId
                    ) || null
                  }
                  onChange={(event, newValue) => {
                    const selectedCityId = newValue ? newValue.id : 0;
                    handleChange({
                      target: {
                        name: 'address.cityId',
                        value: selectedCityId,
                      },
                    });
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={
                        !!errors.address?.cityId && touched.address?.cityId
                      }
                      helperText={errors.address?.cityId}
                      InputProps={{
                        ...params.InputProps,
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                  )}
                /> */}
                <FormControl fullWidth size="small">
                  <Field
                    as={Select}
                    name="address.cityId"
                    displayEmpty
                    disabled={!selectedCountry}
                  >
                    <MenuItem disabled value="0">
                      <em style={{ fontStyle: 'unset' }}>Select Region</em>
                    </MenuItem>
                    {cityData
                      .filter((city) => city.countryId === selectedCountry)
                      .map((region) => (
                        <MenuItem key={region.id} value={region.id}>
                          {region.name}
                        </MenuItem>
                      ))}
                  </Field>
                </FormControl>
                {errors.address?.cityId && touched.address?.cityId && (
                  <div className="error" style={{ color: 'red' }}>
                    {errors.address?.cityId}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  <IntlMessages id="common.addressLine1" />
                  {values.vendorType === 'contractor' && (
                    <CustomAsterik>*</CustomAsterik>
                  )}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  id="address.addressDetails"
                  name="address.addressDetails"
                  fullWidth
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
                {errors.address?.addressDetails &&
                  touched.address?.addressDetails && (
                    <div className="error" style={{ color: 'red' }}>
                      {errors.address?.addressDetails}
                    </div>
                  )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  <IntlMessages id="common.addressLine2" />
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  id="address.addressOptional"
                  name="address.addressOptional"
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
                ></Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  as={TextField}
                  id="address.state"
                  name="address.state"
                  placeholder="State"
                  fullWidth
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
                {errors.address?.state && touched.address?.state && (
                  <div className="error" style={{ color: 'red' }}>
                    {errors.address.state}
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  as={TextField}
                  id="address.postal"
                  name="address.postal"
                  placeholder="Postal/Zip Code"
                  fullWidth
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
                {errors.address?.postal && touched.address?.postal && (
                  <div className="error" style={{ color: 'red' }}>
                    {errors.address?.postal}
                  </div>
                )}
              </Grid>
            </Grid>
          </Box>
          {values.vendorType && (
            <Box width="100%">
              <Divider
                sx={{
                  marginTop: '3%',
                  marginBottom: '15px',
                  marginLeft: '0px',
                  marginRight: '0px',
                }}
                variant="middle"
              />
              <Box
                marginLeft={{ xs: '5%', sm: '0%' }}
                marginRight={{ xs: '5%', sm: '0%' }}
                marginTop="1%"
                marginBottom="1%"
                fontSize="14px"
                fontWeight={900}
              >
                <IntlMessages id="addVendor.AdditionalInformation" />
              </Box>
            </Box>
          )}
          <Box
            width={{ xs: '75%', md: '50%' }}
            marginTop="2%"
            marginBottom="2%"
          >
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
                  <IntlMessages id="AddCustomer.AccNum" />
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  id="accountNumber"
                  name="accountNumber"
                  fullWidth
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
                {/* <ErrorMessage name="vendorName" component="div" /> */}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                ></Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  as={TextField}
                  id="phone"
                  name="phone"
                  fullWidth
                  placeholder="Phone"
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  as={TextField}
                  id="fax"
                  name="fax"
                  placeholder="Fax"
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
                ></Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  as={TextField}
                  id="mobile"
                  name="mobile"
                  fullWidth
                  placeholder="Mobile"
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  as={TextField}
                  id="tollFree"
                  name="tollFree"
                  placeholder="Toll Free"
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
                  <IntlMessages id="common.website" />
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  id="website"
                  name="website"
                  fullWidth
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
                {/* <ErrorMessage name="vendorName" component="div" /> */}
              </Grid>
            </Grid>
          </Box>
          <Box width="100%">
            <Divider
              sx={{
                marginTop: '3%',
                marginBottom: '15px',
                marginLeft: '0px',
                marginRight: '0px',
              }}
              variant="middle"
            />
          </Box>
          <Container
            style={{
              justifyContent: 'center',
              paddingTop: '10px',
              paddingBottom: '8px',
            }}
          >
            <Button
              type="submit"
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: '#57B8C9',
                '&:hover': { backgroundColor: '#57B8C9' },
              }}
            >
              Submit
            </Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default InputFieldsVendors;
