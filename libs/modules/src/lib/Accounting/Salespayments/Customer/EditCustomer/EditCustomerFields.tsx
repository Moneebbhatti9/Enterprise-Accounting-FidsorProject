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
import { CustomHR } from '../../../Global/Styling';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import CustomDialog from '../../../Global/Components/ConfirmationDialog';
import DialogContentText from '@mui/material/DialogContentText';
import {
  getAllCurrency,
  getAllCountry,
  getAllCity,
} from 'libs/services/ConfigurartionService/ConfigurartionService';
import {
  updateCustomer,
  getCustomerByID,
} from 'libs/services/CustomerService/CustomerService';
import { makeStyles } from '@mui/styles';
import * as Yup from 'yup';
import {
  EditFormValues,
  Currency,
  Country,
  City,
} from '../AddCustomer/Components/AddCustomerInterface';
import { useNavigate } from 'react-router-dom';
interface EditCustomerFieldsProps {
  id: string;
}

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

const EditCustomerFields: React.FC<EditCustomerFieldsProps> = ({ id }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = React.useState('');
  const [additionalFields, setAdditionalFields] = React.useState<string[]>([]);
  const availableOptions = ['Mobile', 'Toll Free', 'Fax'];
  const [showAdditionalFields, setShowAdditionalFields] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [addedContacts, setAddedContacts] = React.useState<
    EditFormValues['contacts']
  >([]);
  const [sameAsBilling, setSameAsBilling] = React.useState(false);
  const { messages } = useIntl();

  const validationSchema = Yup.object().shape({
    customerName: Yup.string()
      .required('Customer Name is required')
      .matches(
        /^[A-Za-z\d\s]+$/,
        'Only letters, numbers, and spaces are allowed'
      ),
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

  const [initialValues, setInitialValues] = useState<EditFormValues>({
    id: id,
    customerName: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    mobile: '',
    tollFree: '',
    fax: '',
    contacts: [{ name: '', email: '', phone: '' }],
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
  });
  const handleClose = () => {
    setAnchorEl(null);
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
  const [countryData, setCountryData] = useState<Country[]>([]);
  const [cityData, setCityData] = useState<City[]>([]);
  const [currencyData, setCurrencyData] = useState<Currency[]>([]);
  const [customerData, setCustomerData] = useState<EditFormValues | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
  const [selectedShipCountry, setSelectedShipCountry] = useState<number | null>(
    null
  );
  const handleEditCustomer = async (customerId: string) => {
    try {
      const data = await getCustomerByID(customerId);
      setInitialValues({
        id: data.id,
        customerName: data.customerName,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        mobile: data.mobile,
        tollFree: data.tollFree,
        fax: data.fax,
        contacts: data.contacts || [{ name: '', email: '', phone: '' }],
        accountNumber: data.accountNumber,
        website: data.website,
        note: data.note,
        sameAsBilling: data.sameAsBilling,
        billing: {
          currencyId: data.billing.currencyId,
          address: {
            state: data.billing.address.state,
            countryId: data.billing.address.countryId,
            cityId: data.billing.address.cityId,
            addressDetails: data.billing.address.addressDetails,
            addressOptional: data.billing.address.addressOptional,
            postal: data.billing.address.postal,
          },
        },
        shipping: {
          shipTo: data.shipping.shipTo,
          phone: data.shipping.phone,
          instructions: data.shipping.instructions,
          address: {
            state: data.shipping.address.state,
            countryId: data.shipping.address.countryId,
            cityId: data.shipping.address.cityId,
            addressDetails: data.shipping.address.addressDetails,
            addressOptional: data.shipping.address.addressOptional,
            postal: data.shipping.address.postal,
          },
        },

        // ... (update other fields accordingly)
      });
      setCustomerData(data);
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
    handleEditCustomer(id);
    // const dummyData: dummyData = {
    //   customerName: 'John Doe',
    //   // ... (other fields with dummy data)
    // };

    // setCustomerData(dummyData);
  }, [id]);

  const handleSubmit = async (values: EditFormValues) => {
    // Handle form submission here
    let data = values;
    data = {
      ...data,
    };
    try {
      // Call the updateCustomer function with the customerId and form data
      const response = await updateCustomer(id, data);

      // Handle the response if needed
      console.log('Customer updated successfully:', response);
      {
        if (!isDialogOpen) {
          setIsDialogOpen(true);
        }
        handleClose();
      }
    } catch (error) {
      console.error('Error updating customer:', error);

      // Handle the error, show an error message, etc.
    }
    console.log(values);
  };

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
      {customerData ? (
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
                      value={values.customerName}
                      // onChange={(e) => setFieldValue('customerName', e.target.value)}
                      error={Boolean(
                        touched.customerName && errors.customerName
                      )}
                      helperText={touched.customerName && errors.customerName}
                    />
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
                      value={values.firstName}
                      // onChange={(e) => setFieldValue('firstName', e.target.value)}
                      error={Boolean(touched.firstName && errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Field
                      placeholder="Last name"
                      as={TextField}
                      name="lastName"
                      variant="outlined"
                      fullWidth
                      size="small"
                      value={values.lastName}
                      // onChange={(e) => setFieldValue('lastName', e.target.value)}
                      error={Boolean(touched.lastName && errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
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
                      name="email"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={values.email}
                      // onChange={(e) => setFieldValue('email', e.target.value)}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email && errors.email}
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
                      name="phone"
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={values.phone}
                      // onChange={(e) => setFieldValue('phone', e.target.value)}
                      error={Boolean(touched.phone && errors.phone)}
                      helperText={touched.phone && errors.phone}
                    />
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
                          value={values.mobile}
                          // onChange={(e) => setFieldValue('mobile', e.target.value)}
                          error={Boolean(touched.mobile && errors.mobile)}
                          helperText={touched.mobile && errors.mobile}
                        />
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
                          value={values.tollFree}
                          // onChange={(e) => setFieldValue('tollFree', e.target.value)}
                          error={Boolean(touched.tollFree && errors.tollFree)}
                          helperText={touched.tollFree && errors.tollFree}
                        />
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
                          value={values.fax}
                          // onChange={(e) => setFieldValue('fax', e.target.value)}
                          error={Boolean(touched.fax && errors.fax)}
                          helperText={touched.fax && errors.fax}
                        />
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
                          value={values.contacts[index]?.name || ''}
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
                          value={values.contacts[index]?.email || ''}
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
                          value={values.contacts[index]?.phone || ''}
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
                      value={values.accountNumber}
                      // onChange={(e) => setFieldValue('accountNumber', e.target.value)}
                      error={Boolean(
                        touched.accountNumber && errors.accountNumber
                      )}
                      helperText={touched.accountNumber && errors.accountNumber}
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
                      value={values.website}
                      // onChange={(e) => setFieldValue('website', e.target.value)}
                      error={Boolean(touched.website && errors.website)}
                      helperText={touched.website && errors.website}
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
                      value={values.note}
                      // onChange={(e) => setFieldValue('note', e.target.value)}
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
                      {/* onChange={(e) => setFieldValue('billing.currencyId', e.target.value)} */}
                      <Field
                        as={Select}
                        name="billing.currencyId"
                        value={values.billing.currencyId}
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
                      value={values.billing.address.addressDetails}
                      // onChange={(e) => setFieldValue('billing.address.addressDetails', e.target.value)}
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
                      value={values.billing.address.addressOptional}
                      // onChange={(e) => setFieldValue('billing.address.addressOptional', e.target.value)}
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
                        value={values.billing.address.countryId}
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
                        <MenuItem disabled value="">
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
                        value={values.billing.address.cityId}
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
                      value={values.billing.address.state}
                      // onChange={(e) => setFieldValue('billing.address.state', e.target.value)}
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
                      value={values.billing.address.postal}
                      // onChange={(e) => setFieldValue('billing.address.postal', e.target.value)}
                      error={Boolean(
                        touched.billing?.address?.postal &&
                          errors.billing?.address?.postal
                      )}
                      helperText={
                        touched.billing?.address?.postal &&
                        errors.billing?.address?.postal
                      }
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
                      value={values.shipping.shipTo}
                      // onChange={(e) => setFieldValue('shipping.shipTo', e.target.value)}
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
                      value={values.shipping.address.addressDetails}
                      // onChange={(e) => setFieldValue('shipping.address.addressDetails', e.target.value)}
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
                      value={values.shipping.address.addressOptional}
                      // onChange={(e) => setFieldValue('shipping.address.addressOptional', e.target.value)}
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
                      {/* value={values.shipping.address.countryId}
                   onChange={(e) => setFieldValue('shipping.address.countryId', e.target.value)} */}
                      <Field
                        as={Select}
                        name="shipping.address.countryId"
                        displayEmpty
                        disabled={values.sameAsBilling}
                        value={values.shipping.address.countryId}
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
                        value={values.shipping.address.cityId}
                        displayEmpty
                        disabled={values.sameAsBilling || !selectedShipCountry}
                      >
                        <MenuItem disabled value="0">
                          <em style={{ fontStyle: 'unset' }}>Select Region</em>
                        </MenuItem>
                        {cityData
                          .filter(
                            (city) =>
                              !selectedShipCountry ||
                              city.countryId === selectedShipCountry
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
                      value={values.shipping.address.state}
                      // onChange={(e) => setFieldValue('shipping.address.state', e.target.value)}
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
                      error={Boolean(
                        touched.shipping?.address?.postal &&
                          errors.shipping?.address?.postal
                      )}
                      helperText={
                        touched.shipping?.address?.postal &&
                        errors.shipping?.address?.postal
                      }
                      value={values.shipping.address.postal}
                      // onChange={(e) => setFieldValue('shipping.address.postal', e.target.value)}
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
                      value={values.shipping.phone}
                      // onChange={(e) => setFieldValue('shipping.phone', e.target.value)}
                      error={Boolean(
                        touched.shipping?.phone && errors.shipping?.phone
                      )}
                      helperText={
                        touched.shipping?.phone && errors.shipping?.phone
                      }
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
                      value={values.shipping.instructions}
                      // onChange={(e) => setFieldValue('shipping.instructions', e.target.value)}
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
      ) : (
        <div>Loading Customer Data</div>
      )}
      <CustomDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={'Customer Added'}
        titleBackground={'#4BB543'}
        footerBg={'white'}
        text={'Customer record edited sucessfully.'}
        link={'/salespayment/customer'}
      />
    </>
  );
};

export default EditCustomerFields;
