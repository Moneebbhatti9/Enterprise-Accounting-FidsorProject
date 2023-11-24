import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Divider,
  Button,
} from '@mui/material';
import { Formik, Field, Form } from 'formik';
import {
  EditBusinessFields,
  City,
  Country,
  Currency,
} from '../AddBusiness/AddBusinessInterface';
import {
  getAllCurrency,
  getAllCountry,
  getAllCity,
} from 'libs/services/ConfigurartionService/ConfigurartionService';
import {
  getBusinessByID,
  updateBusiness,
} from 'libs/services/BusinessService/BusinessService';
import CustomDialog from '../../../../Accounting/Global/Components/ConfirmationDialog';

interface EditBusinessFieldsProps {
  id: string;
}

const EditBusinessField: React.FC<EditBusinessFieldsProps> = ({ id }) => {
  const [initialValues, setInitialValues] = useState<EditBusinessFields>({
    id: id,
    name: '',
    address: {
      state: '',
      countryId: 0,
      cityId: 0,
      addressDetails: '',
      addressOptional: '',
      postal: '',
    },
    timeZone: 0,
    phone: '',
    fax: '',
    mobile: '',
    tollFree: '',
    website: '',
    currencyName: '',
    businessTypeId: 0,
  });

  const [countryData, setCountryData] = useState<Country[]>([]);
  const [cityData, setCityData] = useState<City[]>([]);
  const [currencyData, setCurrencyData] = useState<Currency[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
  const [businessData, setBusinessData] = useState<EditBusinessFields | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditBusiness = async (businessId: string) => {
    try {
      const data = await getBusinessByID(businessId);
      console.log(data);
      setInitialValues({
        id: data.id,
        name: data.name,
        address: {
          state: data.address.state,
          countryId: data.address.countryId,
          cityId: data.address.cityId,
          addressDetails: data.address.addressDetails,
          addressOptional: data.address.addressOptional,
          postal: data.address.postal,
        },
        timeZone: 1,
        phone: data.phone,
        fax: data.fax,
        mobile: data.mobile,
        tollFree: data.tollFree,
        website: data.website,
        currencyName: data.currencyName,
        businessTypeId: data.businessTypeId,
        // ... (update other fields accordingly)
      });
      setBusinessData(data);
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
    handleEditBusiness(id);
    // const dummyData: dummyData = {
    //   customerName: 'John Doe',
    //   // ... (other fields with dummy data)
    // };

    // setCustomerData(dummyData);
  }, [id]);

  const handleSubmit = async (values: EditBusinessFields) => {
    console.log('Form Edited: ', values);

    let data = values;
    data = {
      ...data,
      businessTypeId: data.businessTypeId,
    };
    try {
      // Call the updateCustomer function with the customerId and form data
      const response = await updateBusiness(id, data);

      // Handle the response if needed
      console.log('Business updated successfully:', response);
      {
        if (!isDialogOpen) {
          setIsDialogOpen(true);
        }
        handleClose();
      }
    } catch (error) {
      console.error('Error updating business:', error);

      // Handle the error, show an error message, etc.
    }
  };

  return businessData ? (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      //validationSchema={validationSchema}
    >
      {({ isSubmitting, setFieldValue, values, errors, touched }) => (
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box width={'100%'} marginTop="2%" marginBottom="2%">
            <Typography variant="h3">You're Editing {values.name}</Typography>
          </Box>
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
                  value={values.name}
                  variant="outlined"
                  size="small"
                  // error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  Address Line 1
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  name="address.addressDetails"
                  value={values.address.addressDetails || ''}
                  fullWidth
                  variant="outlined"
                  size="small"
                  // error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  Address Line 2
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  name="address.addressOptional"
                  value={values.address.addressOptional || ''}
                  fullWidth
                  variant="outlined"
                  size="small"
                  // error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  City
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  as={TextField}
                  name="address.state"
                  value={values.address.state || ''}
                  fullWidth
                  variant="outlined"
                  size="small"
                  // error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  Country <span style={{ color: 'red' }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth size="small">
                  <Field
                    as={Select}
                    name="address.countryId"
                    value={values.address.countryId || ''}
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
                  Province/State <span style={{ color: 'red' }}>*</span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth size="small">
                  <Field
                    as={Select}
                    name="address.cityId"
                    value={values.address.cityId || ''}
                    displayEmpty
                    //disabled={!selectedCountry}
                  >
                    <MenuItem disabled value="0">
                      <em style={{ fontStyle: 'unset' }}>
                        Select Province/State
                      </em>
                    </MenuItem>
                    {cityData
                      .filter(
                        (city) =>
                          !selectedCountry || city.countryId === selectedCountry
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
                >
                  Time Zone
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <FormControl fullWidth size="small">
                  <Field
                    as={Select}
                    name="timeZone"
                    value={values.timeZone}
                    displayEmpty
                    //disabled={!selectedCountry}
                  >
                    <MenuItem disabled value="0">
                      <em style={{ fontStyle: 'unset' }}>Select Time Zone</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
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
                  Primary Contact
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  placeholder="Phone"
                  as={TextField}
                  name="phone"
                  value={values.phone}
                  fullWidth
                  variant="outlined"
                  size="small"
                  // error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  placeholder="Fax"
                  as={TextField}
                  name="fax"
                  value={values.fax}
                  fullWidth
                  variant="outlined"
                  size="small"
                  // error={Boolean(errors.name && touched.name)}
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
                  placeholder="Mobile"
                  as={TextField}
                  name="mobile"
                  value={values.mobile}
                  fullWidth
                  variant="outlined"
                  size="small"
                  // error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Field
                  placeholder="tollFree"
                  as={TextField}
                  name="tollFree"
                  value={values.tollFree}
                  fullWidth
                  variant="outlined"
                  size="small"
                  // error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  Website
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Field
                  placeholder="https://www.abc.com"
                  as={TextField}
                  name="website"
                  value={values.website}
                  fullWidth
                  variant="outlined"
                  size="small"
                  // error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="subtitle1"
                  marginRight={{ xs: '0%', sm: '5%' }}
                  marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                >
                  Business Currency
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                {/* <FormControl fullWidth size="small"> */}
                {/* onChange={(e) => setFieldValue('billing.currencyId', e.target.value)} */}
                <Typography
                  variant="subtitle1"
                  // marginRight={{ xs: '0%', sm: '5%' }}
                  // marginLeft={{ xs: '0%', sm: '5%' }}
                  fontSize="12px"
                  fontWeight={700}
                >
                  {values.currencyName}
                </Typography>
                {/* <Field
                    as={Select}
                    name="currencyId"
                    value={values.currencyName}
                    // disabled
                    displayEmpty
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
                  </Field> */}
                {/* </FormControl> */}
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
    // You can add a loading state or a message here if businessData is not available
    <div>Loading Business Data</div>
  );
  <CustomDialog
    open={isDialogOpen}
    onClose={() => setIsDialogOpen(false)}
    title={'Business Edited'}
    titleBackground={'#4BB543'}
    footerBg={'white'}
    text={'Business edited sucessfully.'}
    link={'/settings/businesses'}
  />;
};

export default EditBusinessField;
