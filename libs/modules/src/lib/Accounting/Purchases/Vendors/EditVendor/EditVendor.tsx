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
} from '../../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { getVendorByID } from 'libs/services/VendorService/VendorService';
import {
  VendorDataType,
  Currency,
  Country,
  City,
  Address,
} from '../../../../../../../modules/interfaces/Vendors/Vendor';
import {
  getAllCurrency,
  getAllCountry,
  getAllCity,
} from 'libs/services/ConfigurartionService/ConfigurartionService';
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

interface EditVendorFieldsProps {
  id: string;
}

const EditFieldsVendors: React.FC<EditVendorFieldsProps> = ({ id }) => {
  const navigate = useNavigate();
  const textFieldStyle = textFieldStyles();
  const [initialValues, setInitialValues] = useState<VendorDataType>({
    vendorName: '',
    vendorType: 'regular',
    contractorType: 0,
    firstName: '',
    lastName: '',
    currencyId: 1,
    email: '',
    address: {
      countryId: 1,
      cityId: 1,
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
  });

  const sampleAddress: Address = {
    state: 'California',
    countryId: 1,
    cityId: 123,
    addressDetails: '123 Main Street',
    addressOptional: 'Apt 101',
    postal: '90210',
  };

  const [countryData, setCountryData] = useState<Country[]>([]);
  const [cityData, setCityData] = useState<City[]>([]);
  const [currencyData, setCurrencyData] = useState<Currency[]>([]);
  const [vendorData, setVendorData] = useState<VendorDataType | null>(null);
  const handleEditVendor = async (vendorId: string) => {
    try {
      const data = await getVendorByID(vendorId);
      setInitialValues({
        vendorName: data.vendorName,
        vendorType: data.vendorType,
        contractorType: data.contractorType,
        firstName: data.firstName,
        lastName: data.lastName,
        currencyId: data.currencyId,
        email: data.email,
        address: {
          countryId: data.address.countryId,
          cityId: data.address.cityId,
          addressDetails: data.address.addressDetails,
          addressOptional: data.address.addressOptional,
          postal: data.address.postal,
          state: data.address.state,
        },
        accountNumber: data.accountNumber,
        phone: data.phone,
        fax: data.fax,
        mobile: data.mobile,
        tollFree: data.tollFree,
        website: data.website,
        sin: data.sin,
        cra: data.cra,
        businessName: data.businessName,
        // ... (update other fields accordingly)
      });
      setVendorData(data);
      console.log(data);
    } catch (error) {
      console.error('Error ', error);
    }
  };
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
    handleEditVendor(id);
    // const dummyData: dummyData = {
    //   customerName: 'John Doe',
    //   // ... (other fields with dummy data)
    // };

    // setCustomerData(dummyData);
  }, [id]);

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
    // let data = values;
    // const providedData: VendorDataType = {
    //   contractorType: data.contractorType,
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   vendorName: data.vendorName,
    //   email: data.email,
    //   phone: data.phone,
    //   vendorType: data.vendorType,
    //   // directDeposit: data.directDeposit,
    //   // tax: data.tax,
    //   mobile: data.mobile,
    //   tollFree: data.tollFree,
    //   fax: data.fax,
    //   accountNumber: data.accountNumber,
    //   website: data.website,
    //   currencyId: 45,
    //   businessName: data.vendorName
    //   address: {
    //     state: data.address.state,
    //     countryId: data.address.countryId,
    //     cityId: 1,
    //     addressDetails: 'Giga',
    //     addressOptional: 'string',
    //     postal: '4400',
    //   },
    // };
    // data = {
    //   ...data,
    //   // businessName: values.vendorName,
    // };
    console.log('Vendor Data', values);

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

  const theme = useTheme();
  const classes = useStyles();
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);

  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleCurrencyChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedCurrency(event.target.value);
  };
  return (
    <>
      {vendorData ? (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={(values: VendorDataType) => {
            const errors: Partial<VendorDataType> = {};
            if (!values.vendorName) {
              errors.vendorName = 'Vendor Name is required';
            }
            // uncomment this after successfull backend
            if (
              values.vendorType === 'contractor' &&
              values.contractorType === 0
            ) {
              if (!values.sin) {
                errors.sin = 'SIN is Required';
              } else if (isNaN(Number(values.sin))) {
                errors.sin = 'SIN should be a number';
              }
            }
            if (
              values.vendorType === 'contractor' &&
              values.contractorType === 1
            ) {
              if (!values.cra) {
                errors.cra = 'CRA is Required';
              } else if (isNaN(Number(values.cra))) {
                errors.cra = 'CRA should be a number';
              }
            }
            if (
              values.vendorType === 'contractor' &&
              values.contractorType === 0
            ) {
              if (!values.firstName) {
                errors.firstName = 'First Name is required';
              }
            }
            if (
              values.vendorType === 'contractor' &&
              values.contractorType === 0
            ) {
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
                      value={values.vendorName}
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
                          value={values.contractorType}
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
                            values={values.sin}
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
                              values.contractorType === 1
                                ? values.vendorName
                                : null
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
                            value={values.cra}
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
                          value={values.firstName}
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
                          value={values.lastName}
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
                          <Field
                            as={Select}
                            name="currencyId"
                            value={values.currencyId}
                            displayEmpty
                          >
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
                      value={values.email}
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
                    <FormControl fullWidth size="small">
                      <Field
                        as={Select}
                        name="address.countryId"
                        value={values.address.countryId}
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
                    <FormControl fullWidth size="small">
                      <Field
                        as={Select}
                        name="address.cityId"
                        value={values.address.cityId}
                        displayEmpty
                        disabled={!selectedCountry}
                      >
                        <MenuItem disabled value="0">
                          <em style={{ fontStyle: 'unset' }}>Select Region</em>
                        </MenuItem>
                        {cityData
                          .filter(
                            (city) =>
                              !selectedCountry ||
                              city.countryId === selectedCountry
                          )
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
                      value={values.address.addressDetails}
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
                      value={values.address.addressOptional}
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
                      value={values.address.state}
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
                      value={values.address.postal}
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
                      value={values.accountNumber}
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
                      value={values.phone}
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
                      value={values.fax}
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
                      value={values.mobile}
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
                      value={values.tollFree}
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
                      value={values.website}
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
      ) : (
        <div>Loading Vendor Data</div>
      )}
    </>
  );
};

export default EditFieldsVendors;
