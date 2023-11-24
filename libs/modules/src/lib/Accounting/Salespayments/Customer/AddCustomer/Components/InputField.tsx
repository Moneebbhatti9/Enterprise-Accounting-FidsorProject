import React, { useState, useEffect, ChangeEvent } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  SelectChangeEvent,
  MenuItem,
  FormControl,
  Select,
  IconButton,
  Divider,
  Link,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomDialog from '../../../../Global/Components/ConfirmationDialog';
import { makeStyles } from '@mui/styles';
import {
  getAllCurrency,
  getAllCountry,
  getAllCity,
} from 'libs/services/ConfigurartionService/ConfigurartionService';
import { CustomHR } from '../../../../Global/Styling';
import * as Yup from 'yup';
import { FormValues, Currency, Country, City } from './AddCustomerInterface';
import { addCustomer } from '../../../../../../../../services/CustomerService/CustomerService';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  smallLabel: {
    '@media (max-width: 399px)': {
      fontSize: '8px',
    },
    '@media (min-width: 400px) and (max-width: 510px)': {
      fontSize: '10px',
    },
  },
  closeButton: {
    '@media (max-width: 510px)': {
      marginRight: '10px',
    },
  },
}));

const InputFields = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = React.useState('');
  const [additionalFields, setAdditionalFields] = React.useState<string[]>([]);
  const availableOptions = ['Mobile', 'Toll Free', 'Fax'];
  const [showAdditionalFields, setShowAdditionalFields] = React.useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [addedContacts, setAddedContacts] = React.useState<
    FormValues['contacts']
  >([]);
  const [sameAsBilling, setSameAsBilling] = React.useState(false);
  const { messages } = useIntl();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const validationSchema = Yup.object().shape({
    customerName: Yup.string()
      .required('Customer Name is required')
      .matches(/^[A-Za-z\s]+$/, 'Only letters and spaces are allowed'),
    firstName: Yup.string()
      .required('First Name is required')
      .matches(/^[A-Za-z\s]+$/, 'Only letters and spaces are allowed'),
    lastName: Yup.string()
      .required('Last Name is required')
      .matches(/^[A-Za-z\s]+$/, 'Only letters and spaces are allowed'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email format'),
    phone: Yup.string()
      .required('Phone is required')
      .matches(/^[0-9+\s]+$/, 'Only numbers, +, and spaces are allowed'),
    mobile: Yup.string()
      .matches(
        /^[0-9+\s]+$/,
        'Invalid format. Only numbers, +, and spaces are allowed'
      )
      .nullable(),
    tollFree: Yup.string()
      .matches(
        /^[0-9+\s]+$/,
        'Invalid format. Only numbers, +, and spaces are allowed'
      )
      .nullable(),
    fax: Yup.string()
      .matches(
        /^[0-9+\s]+$/,
        'Invalid format. Only numbers, +, and spaces are allowed'
      )
      .nullable(),
    website: Yup.string().url('Invalid website URL').nullable(),
    accountNumber: Yup.string()
      .max(20, 'Account Number must be 20 characters or less')
      .nullable(),
    shipping: Yup.object().shape({
      phone: Yup.string()
        .max(15, 'Shipping Address Phone must be 15 characters or less')
        .nullable(),

      address: Yup.object().shape({
        postal: Yup.string()
          .max(10, 'Shipping Address Postal must be 10 characters or less')
          .nullable(),
      }),
    }),

    billing: Yup.object().shape({
      address: Yup.object().shape({
        postal: Yup.string()
          .max(10, 'Billing Address Postal must be 10 characters or less')
          .nullable(),
      }),
    }),
    // Add other validation rules for other fields if needed
  });
  const handleClose = () => {
    setAnchorEl(null);
  };
  const initialValues = {
    customerName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    tollFree: '',
    fax: '',
    contacts: [],
    accountNumber: null,
    website: '',
    note: '',
    sameAsBilling: false,
    billing: {
      currencyId: 0,
      address: {
        state: '',
        countryId: 0,
        cityId: 0,
        addressDetails: '',
        addressOptional: '',
        postal: '',
      },
    },
    shipping: {
      shipTo: '',
      phone: '',
      instructions: '',
      address: {
        state: '',
        countryId: 0,
        cityId: 0,
        addressDetails: '',
        addressOptional: '',
        postal: '',
      },
    },
  };
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate('/salespayment/customer');
  };

  const handleOptionChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (additionalFields.includes(value)) {
      handleDeleteField(value);
    } else if (value !== '' && !additionalFields.includes(value)) {
      setAdditionalFields([...additionalFields, value]);
    }
  };

  const handleDeleteField = (fieldName: string) => {
    const updatedFields = additionalFields.filter(
      (field) => field !== fieldName
    );
    setAdditionalFields(updatedFields);
  };
  const handleAddContactClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (addedContacts.length < 3) {
      setAddedContacts([...addedContacts, { name: '', email: '', phone: '' }]);
    }
  };
  const handleRemoveContact = (index: number, event: React.MouseEvent) => {
    event.preventDefault();
    const updatedContacts = addedContacts.filter((_, i) => i !== index);
    setAddedContacts(updatedContacts);
  };

  const handleSubmit = async (values: FormValues) => {
    // Handle form submission here
    try {
      const response = await addCustomer(values);
      console.log('Customer added successfully:', response);
      {
        if (!isDialogOpen) {
          setIsDialogOpen(true);
        }
        handleClose();
      }
    } catch (error) {
      console.error('Error adding customer:', error);
    }
    console.log('Form Data:', values);
    // console.log(values);
  };

  const [currencyData, setCurrencyData] = useState<Currency[]>([]);
  useEffect(() => {
    async function fetchCountry() {
      try {
        const data = await getAllCurrency();
        console.log(data);
        setCurrencyData(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }
    fetchCountry();
  }, []);
  const [cityData, setCityData] = useState<City[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
  const [selectedShipCountry, setSelectedShipCountry] = useState<number | null>(
    null
  );

  useEffect(() => {
    async function fetchCity() {
      try {
        const data = await getAllCity();
        console.log(data);
        setCityData(data);
      } catch (error) {
        console.error('Error fetching city:', error);
      }
    }
    fetchCity();
  }, []);

  const [countryData, setCountryData] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const data = await getAllCountry();
        setCountryData(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountry();
  }, []);

  return (
    <>
      <Box
        marginLeft={{ xs: '5%', sm: '0%' }}
        marginRight={{ xs: '5%', sm: '0%' }}
        marginTop="1%"
        marginBottom="1%"
      >
        <div style={{ fontSize: '14px', fontWeight: 900 }}>
          Basic Information
        </div>
      </Box>
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
                    Customer Name
                    <span style={{ color: 'red' }}>*</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Field
                    as={TextField}
                    name="customerName"
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(errors.customerName && touched.customerName)}
                  />
                  {touched.customerName && errors.customerName && (
                    <Typography
                      style={{
                        color: 'red',
                        fontSize: '12px',
                      }}
                    >
                      {errors.customerName}
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
                    Primary Contact
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
                    size="small"
                    error={Boolean(errors.firstName && touched.firstName)}
                  />
                  {touched.firstName && errors.firstName && (
                    <Typography
                      style={{
                        color: 'red',
                        fontSize: '12px',
                      }}
                    >
                      {errors.firstName}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field
                    placeholder="Last name"
                    as={TextField}
                    name="lastName"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors.lastName && touched.lastName)}
                  />
                  {touched.lastName && errors.lastName && (
                    <Typography
                      style={{
                        color: 'red',
                        fontSize: '12px',
                      }}
                    >
                      {errors.lastName}
                    </Typography>
                  )}
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
                  <Field
                    placeholder="Email"
                    as={TextField}
                    name="email"
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(errors.email && touched.email)}
                  />
                  {touched.email && errors.email && (
                    <Typography
                      style={{
                        color: 'red',
                        fontSize: '12px',
                      }}
                    >
                      {errors.email}
                    </Typography>
                  )}
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
                  <Field
                    placeholder="Phone"
                    as={TextField}
                    name="phone"
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(errors.phone && touched.phone)}
                  />
                  {touched.phone && errors.phone && (
                    <Typography
                      style={{
                        color: 'red',
                        fontSize: '12px',
                      }}
                    >
                      {errors.phone}
                    </Typography>
                  )}
                </Grid>
                {additionalFields.length < 3 && (
                  <>
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
                          value={selectedOption}
                          onChange={handleOptionChange}
                          displayEmpty
                          fullWidth
                        >
                          <MenuItem disabled value="">
                            <em style={{ fontStyle: 'unset' }}>
                              <IntlMessages id="AddCustomer.AddAcc" />
                            </em>
                          </MenuItem>
                          {availableOptions.map(
                            (option) =>
                              !additionalFields.includes(option) && (
                                <MenuItem key={option} value={option}>
                                  {option}
                                </MenuItem>
                              )
                          )}
                        </Field>
                      </FormControl>
                    </Grid>
                  </>
                )}
                {additionalFields.includes('Mobile') && (
                  <>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        variant="subtitle1"
                        marginRight={{ xs: '0%', sm: '5%' }}
                        marginLeft={{ xs: '0%', sm: '5%' }}
                        fontSize="12px"
                      ></Typography>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Field
                        as={TextField}
                        label={<IntlMessages id="AddCustomer.Mobile" />}
                        variant="outlined"
                        fullWidth
                        size="small"
                        name="mobile"
                        error={Boolean(errors.mobile && touched.mobile)}
                      />
                      {touched.mobile && errors.mobile && (
                        <Typography
                          style={{
                            color: 'red',
                            fontSize: '12px',
                          }}
                        >
                          {errors.mobile}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs>
                      <IconButton
                        onClick={() => handleDeleteField('Mobile')}
                        sx={{ color: '#57B8C9' }}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </>
                )}
                {additionalFields.includes('Toll Free') && (
                  <>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        variant="subtitle1"
                        marginRight={{ xs: '0%', sm: '5%' }}
                        marginLeft={{ xs: '0%', sm: '5%' }}
                        fontSize="12px"
                      ></Typography>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Field
                        as={TextField}
                        label={<IntlMessages id="AddCustomer.TollTax" />}
                        variant="outlined"
                        fullWidth
                        size="small"
                        name="tollFree"
                        error={Boolean(errors.tollFree && touched.tollFree)}
                      />
                      {touched.tollFree && errors.tollFree && (
                        <Typography
                          style={{
                            color: 'red',
                            fontSize: '12px',
                          }}
                        >
                          {errors.tollFree}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs>
                      <IconButton
                        onClick={() => handleDeleteField('Toll Free')}
                        sx={{ color: '#57B8C9' }}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </>
                )}
                {additionalFields.includes('Fax') && (
                  <>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        variant="subtitle1"
                        marginRight={{ xs: '0%', sm: '5%' }}
                        marginLeft={{ xs: '0%', sm: '5%' }}
                        fontSize="12px"
                      ></Typography>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Field
                        as={TextField}
                        label={<IntlMessages id="AddCustomer.Fax" />}
                        variant="outlined"
                        fullWidth
                        size="small"
                        name="fax"
                        error={Boolean(errors.fax && touched.fax)}
                      />
                      {touched.fax && errors.fax && (
                        <Typography
                          style={{
                            color: 'red',
                            fontSize: '12px',
                          }}
                        >
                          {errors.fax}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs>
                      <IconButton
                        onClick={() => handleDeleteField('Fax')}
                        sx={{ color: '#57B8C9' }}
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </>
                )}

                {addedContacts.map((contact, index) => (
                  <React.Fragment key={index}>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        variant="subtitle1"
                        marginRight={{ xs: '0%', sm: '5%' }}
                        marginLeft={{ xs: '0%', sm: '5%' }}
                        fontSize="12px"
                      >
                        Contact {index + 1}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Field
                        placeholder="Name"
                        as={TextField}
                        name={`contacts[${index}].name`}
                        fullWidth
                        variant="outlined"
                        size="small"
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
                    <Grid item xs={12} sm={8}>
                      <Field
                        placeholder="Email"
                        as={TextField}
                        name={`contacts[${index}].email`}
                        fullWidth
                        variant="outlined"
                        size="small"
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
                    <Grid item xs={12} sm={8}>
                      <Field
                        placeholder="Phone"
                        as={TextField}
                        name={`contacts[${index}].phone`}
                        fullWidth
                        variant="outlined"
                        size="small"
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
                    <Grid
                      item
                      xs={12}
                      sm={8}
                      display={'flex'}
                      justifyContent={'center'}
                    >
                      <Link
                        component="button"
                        variant="body2"
                        underline="hover"
                        color="error"
                        onClick={(event: React.MouseEvent) =>
                          handleRemoveContact(index, event)
                        }
                      >
                        Remove Contact
                      </Link>
                    </Grid>
                  </React.Fragment>
                ))}
                {addedContacts.length < 3 && (
                  <>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        variant="subtitle1"
                        marginRight={{ xs: '0%', sm: '5%' }}
                        marginLeft={{ xs: '0%', sm: '5%' }}
                        fontSize="12px"
                      ></Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={8}
                      display={'flex'}
                      justifyContent={'center'}
                    >
                      <Link
                        component="button"
                        variant="body2"
                        underline="hover"
                        onClick={(event: React.MouseEvent) =>
                          handleAddContactClick(event)
                        }
                      >
                        Add Contact
                      </Link>
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
                    {<IntlMessages id="AddCustomer.AccNum" />}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Field
                    as={TextField}
                    name="accountNumber"
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(errors.accountNumber)}
                    helperText={errors.accountNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    marginRight={{ xs: '0%', sm: '5%' }}
                    marginLeft={{ xs: '0%', sm: '5%' }}
                    fontSize="12px"
                  >
                    {<IntlMessages id="AddCustomer.Web" />}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Field
                    as={TextField}
                    name="website"
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(errors.website)}
                    helperText={errors.website}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    marginRight={{ xs: '0%', sm: '5%' }}
                    marginLeft={{ xs: '0%', sm: '5%' }}
                    fontSize="12px"
                  >
                    {<IntlMessages id="AddCustomer.Notes" />}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Field
                    as={TextField}
                    name="note"
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
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
              <Box
                marginLeft={{ xs: '5%', sm: '0%' }}
                marginRight={{ xs: '5%', sm: '0%' }}
                marginTop="1%"
                marginBottom="1%"
                fontSize="14px"
                fontWeight="900"
              >
                {<IntlMessages id="AddCustomer.Billing" />}
              </Box>
            </Box>
            <Box
              width={{ xs: '75%', sm: '50%' }}
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
                    {<IntlMessages id="AddCustomer.Currency" />}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <FormControl fullWidth size="small">
                    <Field as={Select} name="billing.currencyId" displayEmpty>
                      <MenuItem disabled value="">
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
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    marginRight={{ xs: '0%', sm: '5%' }}
                    marginLeft={{ xs: '0%', sm: '5%' }}
                    fontSize="12px"
                  >
                    {<IntlMessages id="AddCustomer.BillingAddress" />}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Field
                    placeholder={messages['AddCustomer.BAddress'] as string}
                    as={TextField}
                    name="billing.address.addressDetails"
                    fullWidth
                    variant="outlined"
                    size="small"
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
                <Grid item xs={12} sm={8}>
                  <Field
                    placeholder={messages['AddCustomer.BAddress2'] as string}
                    as={TextField}
                    name="billing.address.addressOptional"
                    fullWidth
                    variant="outlined"
                    size="small"
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
                  <FormControl fullWidth size="small">
                    <Field
                      as={Select}
                      name="billing.address.countryId"
                      displayEmpty
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                        const selectedValue = Number(e.target.value);
                        setFieldValue(
                          'billing.address.countryId',
                          selectedValue
                        );
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
                  <FormControl fullWidth size="small">
                    <Field
                      as={Select}
                      name="billing.address.cityId"
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
                    placeholder={messages['AddCustomer.BCity'] as string}
                    as={TextField}
                    name="billing.address.state"
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field
                    placeholder={messages['AddCustomer.BPostal'] as string}
                    as={TextField}
                    name="billing.address.postal"
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(errors.billing?.address?.postal)}
                    helperText={errors.billing?.address?.postal}
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
                <Grid item xs={12} sm={8}>
                  <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => {
                      // Clear the billing address fields here
                      setFieldValue('billing.address.addressDetails', '');
                      setFieldValue('billing.address.addressOptional', '');
                      setFieldValue('billing.address.countryId', '');
                      setFieldValue('billing.address.cityId', '');
                      setFieldValue('billing.address.state', '');
                      setFieldValue('billing.address.postal', '');
                    }}
                  >
                    Clear Address
                  </Link>
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
              <Box
                marginLeft={{ xs: '5%', sm: '0%' }}
                marginRight={{ xs: '5%', sm: '0%' }}
                marginTop="1%"
                marginBottom="1%"
                fontSize="14px"
                fontWeight="900"
              >
                <IntlMessages id="AddCustomer.Shipping" />
              </Box>
            </Box>
            <Box
              width={{ xs: '75%', sm: '50%' }}
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
                  ></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <label>
                    <input
                      type="checkbox"
                      checked={values.sameAsBilling}
                      onChange={() => {
                        setFieldValue('sameAsBilling', !values.sameAsBilling);
                        if (!values.sameAsBilling) {
                          // Copy billing details to shipping when checkbox is checked
                          setFieldValue(
                            'shipping.address.addressDetails',
                            values.billing.address.addressDetails
                          );
                          setFieldValue(
                            'shipping.address.addressOptional',
                            values.billing.address.addressOptional
                          );
                          setFieldValue(
                            'shipping.address.countryId',
                            values.billing.address.countryId
                          );
                          setFieldValue(
                            'shipping.address.cityId',
                            values.billing.address.cityId
                          );
                          setFieldValue(
                            'shipping.address.state',
                            values.billing.address.state
                          );
                          setFieldValue(
                            'shipping.address.postal',
                            values.billing.address.postal
                          );
                        }
                      }}
                      style={{ marginRight: '5px' }}
                    />
                    <IntlMessages id="AddCustomer.SameAsBilling" />
                  </label>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    marginRight={{ xs: '0%', sm: '5%' }}
                    marginLeft={{ xs: '0%', sm: '5%' }}
                    fontSize="12px"
                  >
                    <IntlMessages id="AddCustomer.SShipto" />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Field
                    as={TextField}
                    name="shipping.shipTo"
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    marginRight={{ xs: '0%', sm: '5%' }}
                    marginLeft={{ xs: '0%', sm: '5%' }}
                    fontSize="12px"
                  >
                    <IntlMessages id="AddCustomer.SAddress" />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Field
                    placeholder={messages['AddCustomer.BAddress'] as string}
                    as={TextField}
                    name="shipping.address.addressDetails"
                    fullWidth
                    variant="outlined"
                    size="small"
                    disabled={values.sameAsBilling}
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
                <Grid item xs={12} sm={8}>
                  <Field
                    placeholder={messages['AddCustomer.BAddress2'] as string}
                    as={TextField}
                    name="shipping.address.addressOptional"
                    fullWidth
                    variant="outlined"
                    size="small"
                    disabled={values.sameAsBilling}
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
                  <FormControl fullWidth size="small">
                    <Field
                      as={Select}
                      name="shipping.address.countryId"
                      displayEmpty
                      disabled={values.sameAsBilling}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                        const selectedValue = Number(e.target.value);
                        setFieldValue(
                          'shipping.address.countryId',
                          selectedValue
                        );
                        setSelectedShipCountry(selectedValue);
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
                  <FormControl fullWidth size="small">
                    <Field
                      as={Select}
                      name="shipping.address.cityId"
                      displayEmpty
                      disabled={values.sameAsBilling || !selectedShipCountry}
                    >
                      <MenuItem disabled value="0">
                        <em style={{ fontStyle: 'unset' }}>Select Region</em>
                      </MenuItem>
                      {cityData
                        .filter(
                          (city) => city.countryId === selectedShipCountry
                        )
                        .map((region) => (
                          <MenuItem key={region.id} value={region.id}>
                            {region.name}
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
                  ></Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field
                    placeholder={messages['AddCustomer.BCity'] as string}
                    as={TextField}
                    name="shipping.address.state"
                    fullWidth
                    variant="outlined"
                    size="small"
                    disabled={values.sameAsBilling}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Field
                    placeholder={messages['AddCustomer.BPostal'] as string}
                    as={TextField}
                    name="shipping.address.postal"
                    fullWidth
                    variant="outlined"
                    size="small"
                    disabled={values.sameAsBilling}
                    error={Boolean(errors.shipping?.address?.postal)}
                    helperText={errors.shipping?.address?.postal}
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
                <Grid item xs={12} sm={8}>
                  <Link
                    component="button"
                    variant="body2"
                    underline="none"
                    onClick={() => {
                      // Clear the billing address fields here
                      setFieldValue('shipping.address.addressDetails', '');
                      setFieldValue('shipping.address.addressOptional', '');
                      setFieldValue('shipping.address.countryId', '');
                      setFieldValue('shipping.address.cityId', '');
                      setFieldValue('shipping.address.state', '');
                      setFieldValue('shipping.address.postal', '');
                    }}
                    disabled={values.sameAsBilling}
                  >
                    Clear Address
                  </Link>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    marginRight={{ xs: '0%', sm: '5%' }}
                    marginLeft={{ xs: '0%', sm: '5%' }}
                    fontSize="12px"
                  >
                    <IntlMessages id="AddCustomer.AddAccPhone" />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Field
                    as={TextField}
                    name="shipping.phone"
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(errors.shipping?.phone)}
                    helperText={errors.shipping?.phone}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant="subtitle1"
                    marginRight={{ xs: '0%', sm: '5%' }}
                    marginLeft={{ xs: '0%', sm: '5%' }}
                    fontSize="12px"
                  >
                    <IntlMessages id="AddCustomer.DInstructions" />
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Field
                    as={TextField}
                    name="shipping.instructions"
                    fullWidth
                    variant="outlined"
                    size="small"
                  />
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
      <CustomDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={'Customer Added'}
        titleBackground={'#4BB543'}
        footerBg={'white'}
        text={'Customer record added sucessfully.'}
        link={'/salespayment/customer'}
      />
    </>
  );
};

export default InputFields;

// import React, { useState } from 'react';
// import {
//   Grid,
//   Typography,
//   MenuItem,
//   FormControl,
//   Select,
//   SelectChangeEvent,
//   IconButton,
//   Link,
//   Checkbox,
//   FormControlLabel,
// } from '@mui/material';

// import DeleteIcon from '@mui/icons-material/Delete';
// import CurrencySelect from 'libs/modules/src/lib/dashboards/Setting/Businesses/AddBusiness/CurrencySelect';
// import CountrySelect from 'libs/modules/src/lib/dashboards/Setting/Businesses/AddBusiness/CountrySelect';
// import RegionSelect from './RegionSelect';
// import mandatoryError from './mandatoryError';
// import {
//   AccountNumberMainGrid,
//   SectionMainGrid,
//   ClearAddress,
//   CustomCustomerGridLabel,
//   CustomCustomerName,
//   CustomDisabledText,
//   PrimaryContactMainGrid,
//   PrimaryContactDetailGrid,
//   DetailCotactGrid,
//   AdditionalFSelectGrid,
//   ContactMainGrid,
//   ContactScnGrid,
//   ContactScnGrid1,
//   RemoveContactGrid,
//   AddContactMainGrid,
//   CustomAddIcon,
//   BilingAddressScnGrid,
//   BillingAddressScnGrid1,
//   DeliveryInsGrid,
//   DeliveryInsPhone,
//   CustomDivider,
//   StyledTypography,
//   StyledTextField,
//   CustomAsterik,
//   SubHeading,
//   StyledTypographyPC,
// } from './AddCustomerStyled';
// import { makeStyles } from '@mui/styles';
// import { useTheme } from '@mui/material/styles';
// import IntlMessages from '@crema/helpers/IntlMessages';
// import { useIntl } from 'react-intl';
// import { useNavigate } from 'react-router-dom';
// import PageFooterWithButtons from '../../../../Global/Components/PageFooterWithSaveCancelbtn';
// // import fs from 'fs';
// import { AddCustomerInterface } from './AddCustomerInterface';
// // import { addCustomer } from '../../../../../../../../services/CustomerService/CustomerService';

// // const fs = require('fs');

// const useStyles = makeStyles(() => ({
//   gridLabel: {
//     '@media (min-width: 600px)': {
//       justifyContent: 'end',
//     },
//   },
//   disabledText: {
//     '@media (min-width: 600px)': {
//       justifyContent: 'center',
//     },
//   },
//   disabledField: {
//     '& .MuiInputBase-root.Mui-disabled': {
//       backgroundColor: '#f1f1f1',
//     },
//   },
//   labelStyle: {
//     fontSize: '12px',
//   },
// }));

// const InputFields = () => {
//   const [formData, setFormData] = React.useState<AddCustomerInterface>({
//     customerName: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     website: '',
//     accountNumber: '',
//     note: '',
//     currency: '',
//     mobile: '', // Add mobile property with an empty string
//     tollFree: '', // Add tollFree property with an empty string
//     fax: '', // Add fax property with an empty string
//     contact: [],
//     billing: {
//       email: '',
//       phone: '',
//       currencyId: 0,
//       address: {
//         state: '',
//         countryId: 0,
//         regionId: 0,
//         addressDetails: '',
//         addressOptional: '',
//         postal: null,
//       },
//     },
//     shipping: {
//       shipTo: '',
//       phone: '',
//       instructions: '',
//       address: {
//         state: '',
//         countryId: 0,
//         regionId: 0,
//         addressDetails: '',
//         addressOptional: '',
//         postal: null,
//       },
//     },
//   });
//   const navigate = useNavigate();
//   const customerNameRef = React.useRef<HTMLDivElement | null>(null);
//   const { messages } = useIntl();
//   const theme = useTheme();
//   const classes = useStyles();
//   const [customerName, setCustomerName] = React.useState('');
//   const [firstName, setFirstName] = React.useState('');
//   const [lastName, setLastName] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [emailError, setEmailError] = useState(false);
//   const [emailErrorMessage, setEmailErrorMessage] = useState('');
//   const [phone, setPhone] = React.useState('');
//   const [customerNameError, setCustomerNameError] = React.useState(false);
//   const [customerError, setCustomerError] = React.useState(false);
//   const [contacts, setContacts] = useState<AddCustomerInterface['contact']>([]);
//   const [billingAddress, setBillingAddress] = useState('');
//   const [billingAddress2, setBillingAddress2] = useState('');
//   const [billingCity, setBillingCity] = useState('');
//   const [billingPostal, setBillingPostal] = useState<number | null>();
//   const [shippingName, setshippingName] = useState('');
//   const [shippingAddress, setShippingAddress] = useState('');
//   const [shippingAddress2, setShippingAddress2] = useState('');
//   const [shippingCity, setShippingCity] = useState('');
//   const [shippingPostal, setShippingPostal] = useState<number | null>();
//   const [mobileFieldValue, setMobileFieldValue] = useState('');
//   const [tollTaxFieldValue, setTollTaxFieldValue] = useState('');
//   const [faxFieldValue, setFaxFieldValue] = useState('');
//   const [deliveryIns, setDeliveryIns] = useState('');
//   const [shippingPhone, setShippingPhone] = useState('');
//   const [selectedOption, setSelectedOption] = React.useState('');
//   const [additionalFields, setAdditionalFields] = React.useState<string[]>([]);
//   const availableOptions = ['Mobile', 'Toll Tax', 'Fax'];
//   const [selectedCurrency, setSelectedCurrency] = useState('');
//   const [selectedBillingCountry, setSelectedBillingCountry] =
//     useState<number>(0);
//   const [selectedBillingRegion, setSelectedBillingRegion] = useState<number>(0);
//   const [selectedShippingCountry, setSelectedShippingCountry] =
//     useState<number>(0);
//   const [selectedShippingRegion, setSelectedShippingRegion] =
//     useState<number>(0);
//   const [accountNumber, setAccountNumber] = React.useState('');
//   const [website, setWebsite] = React.useState('');
//   const [notes, setNotes] = React.useState('');
//   const [accountNumberError, setAccountNumberError] = React.useState(false);
//   const [sameAsBilling, setSameAsBilling] = useState(false);
//   const [websiteError, setWebsiteError] = useState(false);
//   const [websiteErrorMessage, setWebsiteErrorMessage] = useState('');
//   const [showErrorMessage, setShowErrorMessage] = useState(false);
//   const [phoneNumberError, setPhoneNumberError] = useState(false);
//   const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');
//   const [accountNumberErrorMessage, setAccountNumberErrorMessage] =
//     useState('');
//   const [shippingPhoneNumberError, setShippingPhoneNumberError] =
//     useState(false);
//   const [shippingPhoneNumberErrorMessage, setShippingPhoneNumberErrorMessage] =
//     useState('');

//   const handleSameAsBillingChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setSameAsBilling(event.target.checked);

//     if (event.target.checked) {
//       // Copy billing address fields to shipping address fields
//       const billingAddress = formData.billing.address;

//       // Create a new copy of formData with updated shipping property
//       const updatedFormData = {
//         ...formData,
//         shipping: {
//           ...formData.shipping,
//           address: {
//             ...formData.shipping.address,
//             addressDetails: billingAddress.addressDetails,
//             addressOptional: billingAddress.addressOptional,
//             state: billingAddress.state,
//             postal: billingAddress.postal,
//             countryId: billingAddress.countryId,
//             regionId: billingAddress.regionId,
//           },
//         },
//       };

//       // Update the state with the new formData
//       setFormData(updatedFormData);
//     }
//   };

//   const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       customerName: value,
//     }));
//     setCustomerName(value);
//     setCustomerNameError(false);
//   };

//   const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       firstName: value,
//     }));
//     setFirstName(value);
//   };

//   const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       lastName: value,
//     }));
//     setLastName(value);
//   };

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       email: value,
//     }));
//     setEmail(value);

//     if (value.trim() === '') {
//       // If the email field is empty, clear the error state and message
//       setEmailError(false);
//       setEmailErrorMessage('');
//     } else {
//       // If the email field is not empty, perform email format validation
//       if (!emailRegex.test(value)) {
//         setEmailError(true);
//         setEmailErrorMessage('Enter a valid email');
//       } else {
//         setEmailError(false);
//         setEmailErrorMessage('');
//       }
//     }
//   };

//   const mobileNumberRegex = /^[0-9#+*\s]+$/;
//   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       phone: value,
//     }));
//     setPhone(value);
//     if (value.trim() === '') {
//       // If the mobile number field is empty, clear the error state and message
//       setPhoneNumberError(false);
//       setPhoneNumberErrorMessage('');
//     } else {
//       // If the mobile number field is not empty, perform validation
//       if (!mobileNumberRegex.test(value)) {
//         setPhoneNumberError(true);
//         setPhoneNumberErrorMessage('Phone number should contain numbers');
//       } else {
//         setPhoneNumberError(false);
//         setPhoneNumberErrorMessage('');
//       }
//     }
//   };

//   const handleBillingAddressChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       billing: {
//         ...prevData.billing,
//         address: {
//           ...prevData.billing.address,
//           addressDetails: value,
//         },
//       },
//     }));
//     setBillingAddress(value);
//   };

//   const handleBillingAddress2Change = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       billing: {
//         ...prevData.billing,
//         address: {
//           ...prevData.billing.address,
//           addressOptional: value,
//         },
//       },
//     }));
//     setBillingAddress2(value);
//   };

//   const handleBillingCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       billing: {
//         ...prevData.billing,
//         address: {
//           ...prevData.billing.address,
//           state: value,
//         },
//       },
//     }));
//     setBillingCity(value);
//   };

//   const handleBillingPostalChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = e.target.value;
//     // Parse the value into a number
//     const postalValue = value === '' ? null : parseInt(value, 10);

//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       billing: {
//         ...prevData.billing,
//         address: {
//           ...prevData.billing.address,
//           postal: postalValue,
//         },
//       },
//     }));
//     setBillingPostal(postalValue);
//   };

//   // const handleBillingPostalChange = (
//   //   e: React.ChangeEvent<HTMLInputElement>
//   // ) => {
//   //   const value = e.target.value;
//   //   setFormData((prevData: AddCustomerInterface) => ({
//   //     ...prevData,
//   //     billingPostal: value,
//   //   }));
//   //   setBillingPostal(value);
//   // };

//   const handleShippingNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       shipping: {
//         ...prevData.shipping,
//         shipTo: value,
//       },
//     }));
//     setshippingName(value);
//   };

//   const handleShippingAddressChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       shipping: {
//         ...prevData.shipping,
//         address: {
//           ...prevData.shipping.address,
//           addressDetails: value,
//         },
//       },
//     }));
//     setShippingAddress(value);
//   };

//   const handleShippingAddress2Change = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       shipping: {
//         ...prevData.shipping,
//         address: {
//           ...prevData.shipping.address,
//           addressOptional: value,
//         },
//       },
//     }));
//     setShippingAddress2(value);
//   };

//   const handleShippingCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       shipping: {
//         ...prevData.shipping,
//         address: {
//           ...prevData.shipping.address,
//           state: value,
//         },
//       },
//     }));
//     setShippingCity(value);
//   };

//   const handleShippingPostalChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = e.target.value;
//     const postalValue = parseInt(value, 10);

//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       shipping: {
//         ...prevData.shipping,
//         address: {
//           ...prevData.shipping.address,
//           postal: postalValue,
//         },
//       },
//     }));
//     setShippingPostal(postalValue);
//   };

//   const handleShippingPhoneChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       shipping: {
//         ...prevData.shipping,
//         phone: value,
//       },
//     }));
//     setShippingPhone(value);
//     if (value.trim() === '') {
//       // If the mobile number field is empty, clear the error state and message
//       setShippingPhoneNumberError(false);
//       setShippingPhoneNumberErrorMessage('');
//     } else {
//       // If the mobile number field is not empty, perform validation
//       if (!mobileNumberRegex.test(value)) {
//         setShippingPhoneNumberError(true);
//         setShippingPhoneNumberErrorMessage(
//           'Phone number should contain numbers'
//         );
//       } else {
//         setShippingPhoneNumberError(false);
//         setShippingPhoneNumberErrorMessage('');
//       }
//     }
//   };

//   const handleDeliveryInsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       shipping: {
//         ...prevData.shipping,
//         instructions: value,
//       },
//     }));
//     setDeliveryIns(value);
//   };

//   const urlRegex =
//     /^(https?:\/\/)?([\da-zA-Z.-]+)\.([a-zA-Z.]{2,6})([/\w .-]*)*\/?$/;
//   const handleWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       website: value,
//     }));
//     setWebsite(value);
//     if (value.trim() === '') {
//       // If the website field is empty, clear the error state and message
//       setWebsiteError(false);
//       setWebsiteErrorMessage('');
//     } else {
//       // If the website field is not empty, perform URL format validation
//       if (!urlRegex.test(value)) {
//         setWebsiteError(true);
//         setWebsiteErrorMessage('Enter a valid URL');
//       } else {
//         setWebsiteError(false);
//         setWebsiteErrorMessage('');
//       }
//     }
//   };

//   const handleNotesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       note: value,
//     }));
//     setNotes(value);
//   };

//   const handleAccountNumberChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       accountNumber: value,
//     }));
//     setAccountNumber(value);

//     if (value.length > 20) {
//       setAccountNumberError(true);
//       setAccountNumberErrorMessage('Account number cannot be more than 20');
//     } else {
//       setAccountNumberError(false);
//       setAccountNumberErrorMessage('');
//     }
//   };

//   const handleAddMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       mobile: value,
//     }));
//   };
//   const handleAddTollTaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       tollFree: value,
//     }));
//   };
//   const handleAddFaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       fax: value,
//     }));
//   };

//   // function generateRandomId() {
//   //   const timestamp = Date.now().toString(36); // Convert timestamp to base36
//   //   const randomString = Math.random().toString(36).substring(2, 10); // Generate a random string
//   //   return timestamp + randomString;
//   // }

//   const handleSave = async () => {
//     if (!customerName) {
//       setCustomerNameError(true);
//       setShowErrorMessage(true);
//       return;
//     }
//     if (websiteError) {
//       setShowErrorMessage(true);
//       return;
//     }
//     if (emailError) {
//       setShowErrorMessage(true);
//       return;
//     }
//     if (phoneNumberError) {
//       setShowErrorMessage(true);
//       return;
//     }
//     if (accountNumberError) {
//       setShowErrorMessage(true);
//       return;
//     }
//     if (shippingPhoneNumberError) {
//       setShowErrorMessage(true);
//       return;
//     }
//     console.log('Form data submitted:', formData);

//     // try {
//     //   // Call the addEmployeeApiCall function to make the POST request
//     //   const response = await addCustomer(formData);
//     //   console.log('Customer added successfully:', response);

//     //   // Optionally, you can handle the response or redirect the user
//     // } catch (error) {
//     //   console.error('Error adding customer:', error);
//     //   // Handle the error here, e.g., show an error message to the user
//     // }
//     // console.log('Form Data:', formData);

//     navigate('/salespayment/customer');

//     clearAllFields();
//   };

//   const clearAllFields = () => {
//     setSameAsBilling(false);
//     setCustomerName('');
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setPhone('');
//     setAccountNumber('');
//     setWebsite('');
//     setNotes('');
//     setCustomerError(false);
//     setContacts([]);
//     setBillingAddress('');
//     setBillingAddress2('');
//     setSelectedBillingCountry(0);
//     setSelectedBillingRegion(0);
//     setBillingCity('');
//     setBillingPostal(null);
//     setshippingName('');
//     setShippingAddress('');
//     setShippingAddress2('');
//     setSelectedShippingCountry(0);
//     setSelectedShippingRegion(0);
//     setShippingCity('');
//     setShippingPostal(null);
//     setSelectedCurrency('');
//     setAdditionalFields([]);
//     setMobileFieldValue('');
//     setTollTaxFieldValue('');
//     setFaxFieldValue('');
//     setDeliveryIns('');
//     setShippingPhone('');
//   };

//   const handleCurrencyChange = (event: SelectChangeEvent<string>) => {
//     const value = event.target.value;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       currency: value,
//     }));
//     setSelectedCurrency(value);
//   };

//   const handleBillingCountryChange = (event: SelectChangeEvent<number>) => {
//     const value = event.target.value as number; // Use type assertion to specify the type as number
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       billing: {
//         ...prevData.billing,
//         address: {
//           ...prevData.billing.address,
//           countryId: value, // Assign the parsed integer value directly
//         },
//       },
//     }));
//     setSelectedBillingCountry(value); // Update the state with the parsed integer
//   };

//   const handleBillingRegionChange = (event: SelectChangeEvent<number>) => {
//     const value = event.target.value as number;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       billing: {
//         ...prevData.billing,
//         address: {
//           ...prevData.billing.address,
//           regionId: value, // Assign the parsed integer value directly
//         },
//       },
//     }));
//     setSelectedBillingRegion(value);
//   };

//   const handleShippingCountryChange = (event: SelectChangeEvent<number>) => {
//     const value = event.target.value as number; // Use type assertion to specify the type as number
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       shipping: {
//         ...prevData.shipping,
//         address: {
//           ...prevData.shipping.address,
//           countryId: value, // Assign the parsed integer value directly
//         },
//       },
//     }));
//     setSelectedShippingCountry(value); // Update the state with the parsed integer
//   };

//   const handleShippingRegionChange = (event: SelectChangeEvent<number>) => {
//     const value = event.target.value as number;
//     setFormData((prevData: AddCustomerInterface) => ({
//       ...prevData,
//       shipping: {
//         ...prevData.shipping,
//         address: {
//           ...prevData.shipping.address,
//           regionId: value, // Assign the parsed integer value directly
//         },
//       },
//     }));
//     setSelectedShippingRegion(value);
//   };

//   const currencies = ['USD', 'EUR', 'JPY', 'GBP', 'CAD'];
//   const countries = [
//     { id: 1, name: 'United Kingdom' },
//     { id: 2, name: 'United States of America' },
//     { id: 3, name: 'Pakistan' },
//     { id: 4, name: 'india' },
//   ];
//   const regions = [
//     { id: 1, name: 'London' },
//     { id: 2, name: 'California' },
//     { id: 3, name: 'Sindh' },
//     { id: 4, name: 'Gujrat' },
//   ];

//   const handleOptionChange = (event: SelectChangeEvent<string>) => {
//     const value = event.target.value;
//     setSelectedOption(value);

//     if (additionalFields.includes(value)) {
//       handleDeleteField(value);
//     } else if (value !== '' && !additionalFields.includes(value)) {
//       setAdditionalFields([...additionalFields, value]);
//     }
//   };

//   const handleDeleteField = (fieldName: string) => {
//     const updatedFields = additionalFields.filter(
//       (field) => field !== fieldName
//     );
//     setAdditionalFields(updatedFields);
//   };

//   const handleAddContact = () => {
//     setContacts([...contacts, { name: '', email: '', phone: '' }]);
//   };

//   const updateContactData = (index: number, field: string, value: string) => {
//     const updatedContacts = [...contacts];
//     updatedContacts[index][field] = value;

//     const updatedFormData = {
//       ...formData,
//       contact: updatedContacts,
//     };

//     setContacts(updatedContacts);
//     setFormData(updatedFormData);
//   };

//   const handleContactChange = (index: number, field: string, value: string) => {
//     updateContactData(index, field, value);
//   };

//   // const handleContactChange = (
//   //   index: number,
//   //   field: keyof Contact,
//   //   value: string
//   // ) => {
//   //   const updatedContacts = [...contacts];
//   //   updatedContacts[index][field] = value;
//   //   setContacts(updatedContacts);
//   // };

//   const handleDeleteContact = (index: number) => {
//     const updatedContacts = contacts.filter((_, i) => i !== index);
//     setContacts(updatedContacts);
//   };

//   const handleClearBillingAddress = () => {
//     setBillingAddress('');
//     setBillingAddress2('');
//     setBillingCity('');
//     setBillingPostal(null);
//     setSelectedBillingCountry(0);
//     setSelectedBillingRegion(0);
//   };

//   const handleClearShippingAddress = () => {
//     setShippingAddress('');
//     setShippingAddress2('');
//     setShippingCity('');
//     setShippingPostal(null);
//     setSelectedShippingCountry(0);
//     setSelectedShippingRegion(0);
//   };

//   const labelStyle = {
//     fontSize: '12px', // You can adjust the font size here
//   };
//   const [selectedCountry, setSelectedCountry] = useState('');

//   const handleCountryChange = (event: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setSelectedCountry(event.target.value);
//   };
//   const [selectedCountryShipping, setSelectedCountryShipping] = useState('');

//   const handleCountryShippingChange = (event: {
//     target: { value: React.SetStateAction<string> };
//   }) => {
//     setSelectedCountryShipping(event.target.value);
//   };
//   return (
//     <>
//       <Grid container>
//         <SubHeading>
//           <IntlMessages id="AddCustomer.BI" />
//         </SubHeading>
//       </Grid>
//       <SectionMainGrid container>
//         <Grid container spacing={2}>
//           <CustomCustomerGridLabel
//             item
//             xs={12}
//             sm={4}
//             className={classes.gridLabel}
//           >
//             <StyledTypography variant="subtitle1">
//               <IntlMessages id="AddCustomer.Customer" />
//               <CustomAsterik>*</CustomAsterik>
//             </StyledTypography>
//           </CustomCustomerGridLabel>
//           <CustomCustomerName
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             lg={4}
//             className={classes.gridLabel}
//           >
//             <StyledTextField
//               value={formData.customerName}
//               onChange={handleCustomerChange}
//               fullWidth
//               error={customerNameError}
//               size="small"
//               helperText={customerNameError && 'Customer name is required'}
//             />
//             <Typography color="text.disabled">
//               <IntlMessages id="AddCustomer.DisabledBusiness" />
//             </Typography>
//           </CustomCustomerName>
//         </Grid>

//         <PrimaryContactMainGrid container spacing={2} sx={{ mt: '2px' }}>
//           <Grid item xs={12} sm={4} md={4} textAlign={'right'}>
//             <StyledTypographyPC
//               variant="subtitle1"
//               className={classes.gridLabel}
//             >
//               <IntlMessages id="AddCustomer.PC" />
//             </StyledTypographyPC>
//           </Grid>
//           <PrimaryContactDetailGrid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             lg={4}
//             container
//             rowSpacing={2}
//           >
//             <Grid
//               container
//               sx={{ display: 'flex' }}
//               columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//               rowSpacing={1}
//             >
//               <DetailCotactGrid item xs={6}>
//                 <StyledTextField
//                   placeholder={messages['AddCustomer.PCFName'] as string}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   value={formData.firstName}
//                   onChange={handleFirstNameChange}
//                 />
//               </DetailCotactGrid>
//               <DetailCotactGrid item xs={6}>
//                 <StyledTextField
//                   placeholder={messages['AddCustomer.PCLName'] as string}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   value={formData.lastName}
//                   onChange={handleLastNameChange}
//                 />
//               </DetailCotactGrid>
//             </Grid>
//             <DetailCotactGrid item xs={12} md={12}>
//               <StyledTextField
//                 placeholder={messages['AddCustomer.PCEmail'] as string}
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 value={formData.email}
//                 onChange={handleEmailChange}
//                 error={emailError}
//                 helperText={emailErrorMessage}
//               />
//             </DetailCotactGrid>
//             <DetailCotactGrid item xs={12} md={12}>
//               <StyledTextField
//                 placeholder={messages['AddCustomer.PCPhone'] as string}
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 value={formData.phone}
//                 onChange={handlePhoneChange}
//                 error={phoneNumberError}
//                 helperText={phoneNumberErrorMessage}
//               />
//             </DetailCotactGrid>
//             {additionalFields.length < 3 && (
//               <AdditionalFSelectGrid item xs={12} md={12}>
//                 <FormControl fullWidth size="small">
//                   <Select
//                     value={selectedOption}
//                     onChange={handleOptionChange}
//                     displayEmpty
//                     fullWidth
//                   >
//                     <MenuItem disabled value="">
//                       <em style={{ fontStyle: 'unset' }}>
//                         <IntlMessages id="AddCustomer.AddAcc" />
//                       </em>
//                     </MenuItem>
//                     {availableOptions.map(
//                       (option) =>
//                         !additionalFields.includes(option) && (
//                           <MenuItem key={option} value={option}>
//                             {option}
//                           </MenuItem>
//                         )
//                     )}
//                   </Select>
//                 </FormControl>
//               </AdditionalFSelectGrid>
//             )}
//             {additionalFields.includes('Mobile') && (
//               <AdditionalFSelectGrid item xs={12}>
//                 <Grid item xs={12}>
//                   <StyledTextField
//                     label={<IntlMessages id="AddCustomer.Mobile" />}
//                     variant="outlined"
//                     fullWidth
//                     size="small"
//                     value={formData.mobile}
//                     onChange={handleAddMobileChange}
//                   />
//                 </Grid>
//                 <Grid item xs>
//                   <IconButton
//                     onClick={() => handleDeleteField('Mobile')}
//                     sx={{ color: '#57B8C9' }}
//                     aria-label="delete"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </Grid>
//               </AdditionalFSelectGrid>
//             )}
//             {additionalFields.includes('Toll Tax') && (
//               <AdditionalFSelectGrid item xs={12}>
//                 <Grid item xs={12}>
//                   <StyledTextField
//                     label={<IntlMessages id="AddCustomer.TollTax" />}
//                     variant="outlined"
//                     fullWidth
//                     value={formData.tollFree}
//                     size="small"
//                     onChange={handleAddTollTaxChange}
//                   />
//                 </Grid>
//                 <Grid item xs>
//                   <IconButton
//                     onClick={() => handleDeleteField('Toll Tax')}
//                     sx={{ color: '#57B8C9' }}
//                     aria-label="delete"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </Grid>
//               </AdditionalFSelectGrid>
//             )}
//             {additionalFields.includes('Fax') && (
//               <AdditionalFSelectGrid item xs={12}>
//                 <Grid item xs={12}>
//                   <StyledTextField
//                     label={<IntlMessages id="AddCustomer.Fax" />}
//                     variant="outlined"
//                     fullWidth
//                     size="small"
//                     value={formData.fax}
//                     onChange={handleAddFaxChange}
//                   />
//                 </Grid>
//                 <Grid item xs>
//                   <IconButton
//                     onClick={() => handleDeleteField('Fax')}
//                     sx={{ color: '#57B8C9' }}
//                     aria-label="delete"
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </Grid>
//               </AdditionalFSelectGrid>
//             )}
//             {contacts.map((contact, index) => (
//               <ContactMainGrid
//                 container
//                 key={index}
//                 xs={12}
//                 lg={12}
//                 sx={{ mt: 2 }}
//               >
//                 <ContactScnGrid container md={12} lg={12} marginBottom={'3%'}>
//                   <Grid container display={'block'} rowSpacing={2}>
//                     <ContactScnGrid1 item xs={12} md={12} lg={12}>
//                       <StyledTextField
//                         label={<IntlMessages id="AddCustomer.AddAccName" />}
//                         variant="outlined"
//                         fullWidth
//                         size="small"
//                         // value={name}
//                         // onChange={handleCustomerChange}
//                         value={contact.name}
//                         onChange={(e) =>
//                           handleContactChange(index, 'name', e.target.value)
//                         }
//                       />
//                     </ContactScnGrid1>
//                     <ContactScnGrid1 item xs={12} md={12} lg={12}>
//                       <StyledTextField
//                         label={<IntlMessages id="AddCustomer.AddAccEmail" />}
//                         variant="outlined"
//                         fullWidth
//                         size="small"
//                         // value={email}
//                         // onChange={handleEmailChange}
//                         // error={emailError}
//                         // helperText={emailErrorMessage}
//                         value={contact.email}
//                         onChange={(e) =>
//                           handleContactChange(index, 'email', e.target.value)
//                         }
//                       />
//                     </ContactScnGrid1>
//                     <ContactScnGrid1 item xs={12} md={12} lg={12}>
//                       <StyledTextField
//                         label={<IntlMessages id="AddCustomer.AddAccPhone" />}
//                         variant="outlined"
//                         fullWidth
//                         size="small"
//                         // value={phone}
//                         // onChange={handlePhoneChange}
//                         value={contact.phone}
//                         onChange={(e) =>
//                           handleContactChange(index, 'phone', e.target.value)
//                         }
//                         // value={contact.phone}
//                         // onChange={(e) =>
//                         //   handleContactChange(index, 'phone', e.target.value)
//                         // }
//                       />
//                     </ContactScnGrid1>
//                   </Grid>
//                   <Grid
//                     item
//                     xs={12}
//                     md={12}
//                     lg={12}
//                     textAlign={'center'}
//                     sx={{ mt: 2 }}
//                   >
//                     <Link
//                       component="button"
//                       variant="body1"
//                       underline="none"
//                       onClick={() => handleDeleteContact(index)}
//                       color={'#57B8C9'}
//                     >
//                       {<IntlMessages id="AddCustomer.RemoveContact" />}
//                     </Link>
//                   </Grid>
//                 </ContactScnGrid>
//               </ContactMainGrid>
//             ))}
//             {contacts.length < 3 && (
//               <AddContactMainGrid xs={12} md={12} lg={12}>
//                 <Link
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}
//                   component="button"
//                   underline="none"
//                   variant="body1"
//                   onClick={handleAddContact}
//                   color={'#57B8C9'}
//                 >
//                   <CustomAddIcon />
//                   {<IntlMessages id="AddCustomer.AddContact" />}
//                 </Link>
//               </AddContactMainGrid>
//             )}
//           </PrimaryContactDetailGrid>
//         </PrimaryContactMainGrid>

//         {/* Render contacts */}
//         <AccountNumberMainGrid container>
//           <Grid container spacing={2} sx={{ mt: '2px' }}>
//             <CustomCustomerGridLabel
//               item
//               xs={12}
//               sm={4}
//               md={4}
//               className={classes.gridLabel}
//             >
//               <StyledTypography variant="subtitle1">
//                 {<IntlMessages id="AddCustomer.AccNum" />}
//               </StyledTypography>
//             </CustomCustomerGridLabel>
//             <CustomCustomerName item xs={12} sm={6} md={4} lg={4}>
//               <StyledTextField
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 value={formData.accountNumber}
//                 onChange={handleAccountNumberChange}
//                 error={accountNumberError}
//                 helperText={accountNumberErrorMessage}
//               />
//             </CustomCustomerName>
//           </Grid>
//           <Grid container spacing={2} sx={{ mt: '2px' }}>
//             <CustomCustomerGridLabel
//               item
//               xs={12}
//               sm={4}
//               md={4}
//               className={classes.gridLabel}
//             >
//               <StyledTypography variant="subtitle1">
//                 {<IntlMessages id="AddCustomer.Web" />}
//               </StyledTypography>
//             </CustomCustomerGridLabel>
//             <CustomCustomerName item xs={12} sm={6} md={4} lg={4}>
//               <StyledTextField
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 value={formData.website}
//                 onChange={handleWebsiteChange}
//                 error={websiteError}
//                 helperText={websiteErrorMessage}
//               />
//             </CustomCustomerName>
//           </Grid>
//           <Grid container spacing={2} sx={{ mt: '2px' }}>
//             <CustomCustomerGridLabel
//               item
//               xs={12}
//               sm={4}
//               md={4}
//               className={classes.gridLabel}
//             >
//               <StyledTypography variant="subtitle1">
//                 {<IntlMessages id="AddCustomer.Notes" />}
//               </StyledTypography>
//             </CustomCustomerGridLabel>
//             <CustomCustomerName item xs={12} sm={6} md={4} lg={4}>
//               <StyledTextField
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 value={formData.note}
//                 onChange={handleNotesChange}
//               />
//             </CustomCustomerName>
//           </Grid>
//         </AccountNumberMainGrid>
//       </SectionMainGrid>
//       <CustomDivider variant="middle" />
//       <Grid container>
//         <SubHeading>{<IntlMessages id="AddCustomer.Billing" />}</SubHeading>
//       </Grid>
//       <SectionMainGrid container>
//         <Grid container spacing={2}>
//           <CustomCustomerGridLabel
//             item
//             xs={12}
//             sm={4}
//             className={classes.gridLabel}
//           >
//             <StyledTypography variant="subtitle1">
//               {<IntlMessages id="AddCustomer.Currency" />}
//             </StyledTypography>
//           </CustomCustomerGridLabel>

//           <CustomCustomerName item xs={12} sm={6} md={4} lg={4}>
//             <CurrencySelect
//               value={formData.currency}
//               onChange={handleCurrencyChange}
//               disabled={false}
//               error={false}
//             />
//             <Typography color="text.disabled">
//               {<IntlMessages id="AddCustomer.DisabledInvoices" />}
//             </Typography>
//           </CustomCustomerName>
//         </Grid>

//         <PrimaryContactMainGrid container spacing={2}>
//           <Grid item xs={12} sm={4}>
//             <StyledTypography variant="subtitle1" className={classes.gridLabel}>
//               {<IntlMessages id="AddCustomer.BillingAddress" />}
//             </StyledTypography>
//           </Grid>
//           <BilingAddressScnGrid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             lg={4}
//             container
//             rowSpacing={2}
//           >
//             <Grid item xs={12} sm={12}>
//               <StyledTextField
//                 placeholder={messages['AddCustomer.BAddress'] as string}
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 value={formData.billing.address.addressDetails}
//                 onChange={handleBillingAddressChange}
//               />
//             </Grid>
//             <Grid item xs={12} sm={12}>
//               <StyledTextField
//                 placeholder={messages['AddCustomer.BAddress2'] as string}
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 value={formData.billing.address.addressOptional}
//                 onChange={handleBillingAddress2Change}
//               />
//             </Grid>
//             <BillingAddressScnGrid1
//               container
//               rowSpacing={2}
//               columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//               sx={{ mt: '2px' }}
//             >
//               <Grid item xs={6}>
//                 <CountrySelect
//                   value={selectedCountry}
//                   onChange={handleCountryChange}
//                   disabled={false}
//                   error={false}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <RegionSelect
//                   value={formData.billing.address.regionId}
//                   onChange={handleBillingRegionChange}
//                   regions={regions}
//                 />
//               </Grid>
//             </BillingAddressScnGrid1>
//             <BillingAddressScnGrid1
//               container
//               rowSpacing={2}
//               columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//               sx={{ mt: '2px' }}
//             >
//               <Grid item xs={6}>
//                 <StyledTextField
//                   placeholder={messages['AddCustomer.BCity'] as string}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   value={formData.billing.address.state}
//                   onChange={handleBillingCityChange}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <StyledTextField
//                   placeholder={messages['AddCustomer.BPostal'] as string}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   value={formData.billing.address.postal}
//                   onChange={handleBillingPostalChange}
//                 />
//               </Grid>
//               <ClearAddress xs={12}>
//                 <Link
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}
//                   component="button"
//                   underline="none"
//                   variant="body1"
//                   onClick={handleClearBillingAddress}
//                   color="#57B8C9"
//                 >
//                   {messages['AddCustomer.Clear'] as string}
//                 </Link>
//               </ClearAddress>
//             </BillingAddressScnGrid1>
//           </BilingAddressScnGrid>
//         </PrimaryContactMainGrid>
//       </SectionMainGrid>
//       <CustomDivider variant="middle" />
//       <Grid container>
//         <SubHeading>
//           <IntlMessages id="AddCustomer.Shipping" />
//         </SubHeading>
//       </Grid>
//       <SectionMainGrid container>
//         <Grid container spacing={2}>
//           <CustomCustomerGridLabel
//             item
//             xs={12}
//             sm={4}
//           ></CustomCustomerGridLabel>
//           <CustomCustomerName
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             lg={4}
//             className={classes.gridLabel}
//           >
//             <FormControlLabel
//               className={classes.labelStyle}
//               control={
//                 <Checkbox
//                   checked={sameAsBilling}
//                   onChange={handleSameAsBillingChange}
//                 />
//               }
//               label={
//                 <span style={labelStyle}>
//                   <IntlMessages id="AddCustomer.SameAsBilling" />
//                 </span>
//               }
//             />
//           </CustomCustomerName>
//         </Grid>
//         <Grid container spacing={2}>
//           <CustomCustomerGridLabel
//             item
//             xs={12}
//             sm={4}
//             className={classes.gridLabel}
//           >
//             <StyledTypography variant="subtitle1">
//               <IntlMessages id="AddCustomer.SShipto" />
//             </StyledTypography>
//           </CustomCustomerGridLabel>
//           <CustomCustomerName item xs={12} sm={6} md={4} lg={4}>
//             <StyledTextField
//               value={formData.shipping.shipTo}
//               onChange={handleShippingNameChange}
//               fullWidth
//               error={customerError}
//               size="small"
//               helperText={customerError && 'Customer is required'}
//             />
//             <Typography color="text.disabled">
//               <IntlMessages id="AddCustomer.DisabledBusiness" />
//             </Typography>
//           </CustomCustomerName>
//         </Grid>
//         <Grid container spacing={2} sx={{ mt: '2px' }}>
//           <Grid item xs={12} sm={4}>
//             <StyledTypography variant="subtitle1" className={classes.gridLabel}>
//               <IntlMessages id="AddCustomer.SAddress" />
//             </StyledTypography>
//           </Grid>
//           <BilingAddressScnGrid
//             item
//             xs={12}
//             sm={6}
//             md={4}
//             lg={4}
//             container
//             rowSpacing={2}
//           >
//             <Grid item xs={12}>
//               <StyledTextField
//                 placeholder={messages['AddCustomer.BAddress'] as string}
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 value={formData.shipping.address.addressDetails}
//                 onChange={handleShippingAddressChange}
//                 disabled={sameAsBilling}
//                 className={classes.disabledField}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <StyledTextField
//                 placeholder={messages['AddCustomer.BAddress2'] as string}
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 value={formData.shipping.address.addressOptional}
//                 onChange={handleShippingAddress2Change}
//                 disabled={sameAsBilling}
//                 className={classes.disabledField}
//               />
//             </Grid>
//             <BillingAddressScnGrid1
//               container
//               rowSpacing={2}
//               columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//               sx={{ mt: '2px' }}
//             >
//               <Grid item xs={6}>
//                 <CountrySelect
//                   value={selectedCountryShipping}
//                   onChange={handleCountryShippingChange}
//                   disabled={false}
//                   error={false}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <RegionSelect
//                   value={formData.shipping.address.regionId}
//                   onChange={handleShippingRegionChange}
//                   regions={regions}
//                   disabled={sameAsBilling}
//                 />
//               </Grid>
//             </BillingAddressScnGrid1>
//             <BillingAddressScnGrid1
//               container
//               rowSpacing={2}
//               columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//               sx={{ mt: '2px' }}
//             >
//               <Grid item xs={6}>
//                 <StyledTextField
//                   placeholder={messages['AddCustomer.BCity'] as string}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   value={formData.shipping.address.state}
//                   onChange={handleShippingCityChange}
//                   disabled={sameAsBilling}
//                   className={classes.disabledField}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <StyledTextField
//                   placeholder={messages['AddCustomer.BPostal'] as string}
//                   variant="outlined"
//                   fullWidth
//                   size="small"
//                   value={formData.shipping.address.postal}
//                   onChange={handleShippingPostalChange}
//                   disabled={sameAsBilling}
//                   className={classes.disabledField}
//                 />
//               </Grid>
//               <ClearAddress xs={12}>
//                 <Link
//                   sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                   }}
//                   component="button"
//                   underline="none"
//                   variant="body1"
//                   onClick={handleClearShippingAddress}
//                   disabled={sameAsBilling}
//                   className={classes.disabledField}
//                   color="#57B8C9"
//                 >
//                   <IntlMessages id="AddCustomer.Clear" />
//                 </Link>
//               </ClearAddress>
//             </BillingAddressScnGrid1>
//           </BilingAddressScnGrid>
//         </Grid>
//         <Grid container spacing={2} sx={{ mt: '2px' }}>
//           <CustomCustomerGridLabel
//             item
//             xs={12}
//             sm={4}
//             className={classes.gridLabel}
//           >
//             <StyledTypography variant="subtitle1">
//               <IntlMessages id="AddCustomer.AddAccPhone" />
//             </StyledTypography>
//           </CustomCustomerGridLabel>
//           <Grid item xs={12} sm={6} md={4} lg={4} className={classes.gridLabel}>
//             <StyledTextField
//               value={formData.shipping.phone}
//               onChange={handleShippingPhoneChange}
//               fullWidth
//               size="small"
//               error={shippingPhoneNumberError}
//               helperText={shippingPhoneNumberErrorMessage}
//             />
//           </Grid>
//         </Grid>
//         <Grid container spacing={2} sx={{ mt: '2px' }}>
//           <CustomCustomerGridLabel
//             item
//             xs={12}
//             sm={4}
//             className={classes.gridLabel}
//           >
//             <StyledTypography variant="subtitle1">
//               <IntlMessages id="AddCustomer.DInstructions" />
//             </StyledTypography>
//           </CustomCustomerGridLabel>
//           <Grid item xs={12} sm={6} md={4} lg={4} className={classes.gridLabel}>
//             <StyledTextField
//               value={formData.shipping.instructions}
//               onChange={handleDeliveryInsChange}
//               fullWidth
//               size="small"
//             />
//           </Grid>
//         </Grid>
//       </SectionMainGrid>
//       <PageFooterWithButtons onSaveClick={handleSave} />

//       {showErrorMessage && mandatoryError()}
//     </>
//   );
// };

// export default InputFields;
