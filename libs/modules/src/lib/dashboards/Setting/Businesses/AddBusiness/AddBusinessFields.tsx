import React, { useState, useEffect, ChangeEvent } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@mui/styles';
import {
  Grid,
  Typography,
  Box,
  Button,
  Divider,
  TextField,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';

import { getBusinessClass } from '../../../../../../../services/BusinessService/BusinessService';
import { useNavigate } from 'react-router-dom';
import {
  getAllCurrency,
  getAllCountry,
} from 'libs/services/ConfigurartionService/ConfigurartionService';
import {
  getBusinessType,
  addBusiness,
} from 'libs/services/BusinessService/BusinessService';
import {
  BusinessFields,
  Country,
  Currency,
  BusinessClass,
  BusinessType,
} from './AddBusinessInterface';

const useStyles = makeStyles(() => ({
  gridLabel: {
    '@media (min-width: 600px)': {
      justifyContent: 'end',
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
  labelStyle: {
    fontSize: '12px',
  },
}));

const validationSchema = Yup.object({
  name: Yup.string().required('Company Name is required'),
  businessTypeId: Yup.number()
    .required('Business Class is required')
    .test(
      'is-greater-than-one',
      'Select a Business Class',
      (value) => value > 0
    ),
  businessClassId: Yup.number()
    .required('Type of Business is required')
    .test(
      'is-greater-than-one',
      'Select a Business Type',
      (value) => value > 0
    ),
  countryId: Yup.number()
    .required('Country is required')
    .test('is-greater-than-one', 'Select a Country', (value) => value > 0),
  currencyId: Yup.number()
    .required('Business Currency is required')
    .test('is-greater-than-one', 'Select a Currency', (value) => value > 0),
  organizationTypeId: Yup.number()
    .required('Organization Type is required')
    .test(
      'is-greater-than-one',
      'Select an Organization Type',
      (value) => value > 0
    ),
  // Add validation for other fields as needed
});

const AddBusinessFields = () => {
  const initialValues: BusinessFields = {
    name: '',
    businessClassId: 0,
    businessTypeId: 0,
    currencyId: 0,
    countryId: 0,
    organizationTypeId: 0,
  };

  const navigate = useNavigate();
  const classes = useStyles();
  const [selectedBusinessType, setSelectedBusinessType] = useState<
    number | null
  >(null);

  const organizationtypes = [
    { id: 1, name: 'Sole Proprietor' },
    { id: 2, name: 'Partnership' },
    { id: 3, name: 'Corporation' },
  ];

  const handleSubmit = async (values: BusinessFields) => {
    try {
      const response = await addBusiness(values);
      console.log('Customer added successfully:', response);
      // {
      //   if (!isDialogOpen) {
      //     setIsDialogOpen(true);
      //   }
      //   handleClose();
      // }
    } catch (error) {
      console.error('Error adding customer:', error);
    }

    console.log(values);
  };

  const [businessClassData, setBusinessClassData] = useState<BusinessClass[]>(
    []
  );
  const [businessTypeData, setBusinessTypeData] = useState<BusinessType[]>([]);
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [currencyData, setCurrencyData] = useState<Currency[]>([]);

  useEffect(() => {
    async function fetchBusinessType() {
      try {
        const data = await getBusinessType();
        console.log(data);
        setBusinessTypeData(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    }

    async function fetchCurrency() {
      try {
        const data = await getAllCurrency();
        console.log(data);
        setCurrencyData(data);
      } catch (error) {
        console.error('Error fetching currencies:', error);
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

    async function fetchBusinessClass() {
      try {
        const data = await getBusinessClass();
        console.log(data);
        setBusinessClassData(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    }

    fetchBusinessClass();
    fetchCurrency();
    fetchCountry();
    fetchBusinessType();
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, setFieldValue, values, errors, touched }) => (
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
                  Company Name
                  <span style={{ color: 'red' }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  name="name"
                  fullWidth
                  variant="outlined"
                  size="small"
                  error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  Type of Business
                  <span style={{ color: 'red' }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth size="small">
                  <Field
                    as={Select}
                    name="businessClassId"
                    displayEmpty
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                      const selectedValue = Number(e.target.value);
                      setFieldValue('businessClassId', selectedValue);
                      setSelectedBusinessType(selectedValue);
                    }}
                    error={Boolean(
                      errors.businessClassId && touched.businessClassId
                    )}
                  >
                    <MenuItem disabled value="0">
                      <em style={{ fontStyle: 'unset' }}>Select Type</em>
                    </MenuItem>
                    {businessClassData.map((businessclass) => (
                      <MenuItem key={businessclass.id} value={businessclass.id}>
                        {businessclass.name}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
                {touched.businessClassId && errors.businessClassId && (
                  <Typography
                    style={{
                      color: 'red',
                      fontSize: '12px',
                    }}
                  >
                    {errors.businessClassId}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12} sm={8}>
                <Typography color="text.disabled">
                  {/* <IntlMessages id="AddCustomer.DisabledBusiness" /> */}
                  This helps EC display the right accounts, saving you time.
                  Choose the option that best represents your business.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                ></Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth size="small">
                  <Field
                    as={Select}
                    name="businessTypeId"
                    displayEmpty
                    disabled={!selectedBusinessType}
                    error={Boolean(
                      errors.businessTypeId && touched.businessTypeId
                    )}
                  >
                    <MenuItem disabled value="0">
                      <em style={{ fontStyle: 'unset' }}>Select Type</em>
                    </MenuItem>
                    {businessTypeData
                      .filter(
                        (businessT) =>
                          businessT.businessClassId === selectedBusinessType
                      )
                      .map((businessType) => (
                        <MenuItem key={businessType.id} value={businessType.id}>
                          {businessType.name}
                        </MenuItem>
                      ))}
                  </Field>
                </FormControl>
                {touched.businessTypeId &&
                  errors.businessTypeId &&
                  selectedBusinessType && (
                    <Typography
                      style={{
                        color: 'red',
                        fontSize: '12px',
                      }}
                    >
                      {errors.businessTypeId}
                    </Typography>
                  )}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  Country
                  <span style={{ color: 'red' }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth size="small">
                  <Field
                    as={Select}
                    name="countryId"
                    displayEmpty
                    error={Boolean(errors.countryId && touched.countryId)}
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
                {touched.countryId && errors.countryId && (
                  <Typography
                    style={{
                      color: 'red',
                      fontSize: '12px',
                    }}
                  >
                    {errors.countryId}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12} sm={8}>
                <Typography color="text.disabled">
                  If you do business in one country but are based in another,
                  choose the country where you file your taxes, or where your
                  business is incorporated. Once you start using Payroll or
                  Payments, you won't be able to change your business country.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  Business Currency
                  <span style={{ color: 'red' }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth size="small">
                  <Field
                    as={Select}
                    name="currencyId"
                    displayEmpty
                    error={Boolean(errors.currencyId && touched.currencyId)}
                  >
                    <MenuItem disabled value="0">
                      <em style={{ fontStyle: 'unset' }}>Select Currency</em>
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
                {touched.currencyId && errors.currencyId && (
                  <Typography
                    style={{
                      color: 'red',
                      fontSize: '12px',
                    }}
                  >
                    {errors.currencyId}
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} sm={4}></Grid>
              <Grid item xs={12} sm={8}>
                <Typography color="text.disabled">
                  {/* <IntlMessages id="AddCustomer.DisabledBusiness" /> */}
                  This is your reporting currency and cannot be changed. You can
                  still send invoices, track expenses and enter transactions in
                  any currency and an exchange rate is applied for you.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  Organization Type
                  <span style={{ color: 'red' }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth size="small">
                  <Field
                    as={Select}
                    name="organizationTypeId"
                    displayEmpty
                    error={Boolean(
                      errors.organizationTypeId && touched.organizationTypeId
                    )}
                  >
                    <MenuItem disabled value="0">
                      <em style={{ fontStyle: 'unset' }}>
                        Select Organization Type
                      </em>
                    </MenuItem>
                    {organizationtypes.map((organizationtype) => (
                      <MenuItem
                        key={organizationtype.name}
                        value={organizationtype.id}
                      >
                        {organizationtype.name}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
                {touched.organizationTypeId && errors.organizationTypeId && (
                  <Typography
                    style={{
                      color: 'red',
                      fontSize: '12px',
                    }}
                  >
                    {errors.organizationTypeId}
                  </Typography>
                )}
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddBusinessFields;
