import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  SelectChangeEvent,
} from '@mui/material';
import { useIntl } from 'react-intl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import EmployeeFields from './EmployeeInterface';
import PageFooterWithButtons from '../../../../Global/Components/PageFooterWithSaveCancelbtn';
import {
  CustomDivider,
  CustomAsterik,
} from '../../../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import mandatoryError from '../../../../Salespayments/Customer/AddCustomer/Components/mandatoryError';
import { addEmployee } from '../../../../../../../../services/EmployeeService/EmployeeService';
import { datePickerStyles } from '../../../../Global/Styling';
import { useParams, useNavigate } from 'react-router-dom';

const workLocations = [
  { id: 1, name: 'Work from Home' },
  { id: 2, name: 'On-site' },
];
const wageTypes = [
  { id: 1, name: 'Wage1' },
  { id: 2, name: 'Wage2' },
];
const vacationPolicies = [
  { id: 1, name: 'Yes' },
  { id: 2, name: 'No' },
];

const AddEmployeeFields = () => {
  const navigate = useNavigate();
  const dateStyle = datePickerStyles();
  const { messages } = useIntl();
  const [inviteToOnboard, setInviteToOnboard] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [datePickerError, setDatePickerError] = useState(false);
  const [dobError, setDobError] = useState(false);
  const [formData, setFormData] = useState<EmployeeFields>({
    firstName: '',
    lastName: '',
    // street: '',
    // city: '',
    // state: '',
    // zipCode: '',
    ssn: '',
    dob: null,
    email: '',
    inviteToOnboard: false,
    dateOfHire: null,
    workLocation: '',
    wageType: '',
    wageAmount: '',
    directDeposit: true,
    vacationPolicy: '',
    address: {
      cityId: 1,
      addressDetails: '',
      addressOptional: '',
      countryId: 1,
      postal: null,
      state: '',
    },
  });
  const providedData={
    firstName: formData.firstName,
    lastName: formData.lastName,
    // street: '',
    // city: '',
    // state: '',
    // zipCode: '',
    ssn: formData.ssn,
    dob: formData.dob,
    email: formData.email,
    inviteToOnboard: formData.inviteToOnboard,
    dateOfHire: formData.dateOfHire,
    workLocation: formData.workLocation,
    wageType: formData.wageType,
    wageAmount: formData.wageAmount,
    directDeposit: formData.directDeposit,
    vacationPolicy: formData.vacationPolicy,
    address: {
      cityId: 1,
      addressDetails: formData.address.addressDetails,
      addressOptional: formData.address.addressOptional,
      countryId: 1,
      postal: formData.address.postal,
      state: formData.address.state,
    },
  };

  const [fieldValidation, setFieldValidation] = useState({
    firstName: true,
    lastName: true,
    address: true,
    state: true,
    cityId: true,
    postalCode: true,
    dob: true,
    ssn: true,
    dateOfHire: true,
    workLocation: true,
    wageType: true,
    wageAmount: true,
    vacationPolicy: true,
    directDeposit: true,
    email: true,
  });

  const [fieldFocus, setFieldFocus] = useState({
    firstName: false,
    lastName: false,
    address: false,
    state: false,
    cityId: false,
    postalCode: false,
    ssn: false,
    workLocation: false,
    wageType: false,
    wageAmount: false,
    vacationPolicy: false,
    directDeposit: false,
  });

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      firstName: value,
    }));
    // setCompanyNameError(false);
  };
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      lastName: value,
    }));
    // setCompanyNameError(false);
  };

  const handleStreetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      address: {
        ...prevData.address,
        addressDetails: value,
      },
    }));
    // setCompanyNameError(false);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      address: {
        ...prevData.address,
        state: value,
      },
    }));
    // setCompanyNameError(false);
  };

  const handleStateChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    const cityId = parseFloat(value);
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      address: {
        ...prevData.address,
        cityId: cityId,
      },
    }));
    // setOrganizationTypeError(false);
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const postal = parseFloat(value);
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      address: {
        ...prevData.address,
        postal: postal,
      },
    }));
    // setCompanyNameError(false);
  };

  const handleSSNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      ssn: value,
    }));
    // setCompanyNameError(false);
  };

  const handleDOBChange = (newDate: Date | null) => {
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      dob: newDate,
    }));
    if (newDate === null) {
      setDobError(true);
    } else {
      setDobError(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      email: value,
    }));
    if (inviteToOnboard) {
      validateEmailField(value, inviteToOnboard);
    }
  };

  const isValidEmail = (email: string) => {
    // Regular expression for a simple email format check
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const validateEmailField = (email: string, inviteToOnboard: boolean) => {
    // If "Invite employee to onboard" is checked, email is mandatory
    const emailIsRequired = inviteToOnboard;

    // Check if the email is empty when it's required
    const emailIsValid = !emailIsRequired || (email && isValidEmail(email));

    setFieldValidation((prevValidation) => ({
      ...prevValidation,
      email: emailIsValid as boolean, // Ensure email is a boolean
    }));
  };

  const handleInviteTBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked; // Use checked property for checkbox input
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      inviteToOnboard: value,
    }));
    setInviteToOnboard(value);
    if (!value) {
      setFieldValidation((prevValidation) => ({
        ...prevValidation,
        email: true,
      }));
    }
  };

  const handleDOHChange = (newDate: Date | null) => {
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      dateOfHire: newDate,
    }));
    if (newDate === null) {
      setDatePickerError(true);
    } else {
      setDatePickerError(false);
    }
  };

  const handleWorkLocationChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      workLocation: value,
    }));
    // setOrganizationTypeError(false);
  };

  const handleWageTypeChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      wageType: value,
    }));
    // setOrganizationTypeError(false);
  };

  const handleWageAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      wageAmount: value,
    }));
    // setCompanyNameError(false);
  };

  const handleDirectDepositChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value === 'true'; // Convert the string back to a boolean
    setFormData((prevData) => ({
      ...prevData,
      directDeposit: value,
    }));
  };

  const handleVacationPolicyChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setFormData((prevData: EmployeeFields) => ({
      ...prevData,
      vacationPolicy: value,
    }));
    // setOrganizationTypeError(false);
  };

  const validateForm = () => {
    // Check if any of the mandatory fields are empty
    if (
      formData.firstName === '' ||
      formData.lastName === '' ||
      formData.address.addressDetails === '' ||
      formData.address.state === '' ||
      formData.address.cityId === null ||
      formData.dob === null ||
      formData.address.postal === null ||
      formData.ssn === '' ||
      formData.dateOfHire === null ||
      formData.workLocation === '' ||
      formData.wageType === '' ||
      formData.wageAmount === '' ||
      formData.vacationPolicy === '' ||
      (inviteToOnboard && (formData.email === '' || !fieldValidation.email))
    ) {
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    // Validate the form
    const isValid = validateForm();

    if (formData.dateOfHire === null) {
      setDatePickerError(true);
    } else {
      setDatePickerError(false);
    }
    if (formData.dob === null) {
      setDobError(true);
    } else {
      setDobError(false);
    }

    // Step 3: Set field validation status
    setFieldValidation({
      ...fieldValidation,
      firstName: formData.firstName !== '',
      lastName: formData.lastName !== '',
      address: formData.address.addressDetails !== '',
      dob: formData.dob !== null,
      state: formData.address.state !== '',
      cityId: formData.address.cityId !== null,
      postalCode: formData.address.postal !== null,
      ssn: formData.ssn !== '',
      dateOfHire: formData.dateOfHire !== null,
      workLocation: formData.workLocation !== '',
      wageType: formData.wageType !== '',
      wageAmount: formData.wageAmount !== '',
      vacationPolicy: formData.vacationPolicy !== '',
      email: (!inviteToOnboard ||
        (formData.email && isValidEmail(formData.email))) as boolean,
    });

    if (!isValid || datePickerError || dobError) {
      console.log('Validation failed. Please fill in all mandatory fields.');
      setShowErrorMessage(true);
      return;
    }
    setShowErrorMessage(false);
    console.log('Form Data:', formData);
    try {
      // Call the addEmployeeApiCall function to make the POST request
      const response = await addEmployee(providedData);
      navigate('/hr/employees');
      console.log(formData);
      console.log('Employee added successfully:', response);

      // Optionally, you can handle the response or redirect the user
    } catch (error) {
      console.error('Error adding Employee:', error);
      // Handle the error here, e.g., show an error message to the user
    }
  
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
          Personal Information
        </div>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box width={{ xs: '75%', sm: '50%' }} marginTop="2%">
          <Grid
            container
            textAlign={{ xs: 'left', sm: 'right' }}
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
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                placeholder={messages['AddCustomer.PCFName'] as string}
                variant="outlined"
                fullWidth
                size="small"
                value={formData.firstName}
                onChange={handleFirstNameChange}
                error={!fieldValidation.firstName}
                onFocus={() =>
                  setFieldFocus({ ...fieldFocus, firstName: true })
                }
                onInput={() => {
                  if (!fieldValidation.firstName) {
                    setFieldValidation({ ...fieldValidation, firstName: true });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                placeholder={messages['AddCustomer.PCLName'] as string}
                variant="outlined"
                fullWidth
                size="small"
                value={formData.lastName}
                onChange={handleLastNameChange}
                error={!fieldValidation.lastName}
                onFocus={() => setFieldFocus({ ...fieldFocus, lastName: true })}
                onInput={() => {
                  if (!fieldValidation.firstName) {
                    setFieldValidation({ ...fieldValidation, lastName: true });
                  }
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
                Home Address
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                // placeholder={messages['AddCustomer.BAddress'] as string}
                placeholder={'Street'}
                variant="outlined"
                fullWidth
                size="small"
                value={formData.address.addressDetails}
                onChange={handleStreetChange}
                error={!fieldValidation.address}
                onFocus={() => setFieldFocus({ ...fieldFocus, address: true })}
                onInput={() => {
                  if (!fieldValidation.firstName) {
                    setFieldValidation({ ...fieldValidation, address: true });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                placeholder={'City'}
                variant="outlined"
                fullWidth
                size="small"
                value={formData.address.state}
                onChange={handleCityChange}
                error={!fieldValidation.state}
                onFocus={() => setFieldFocus({ ...fieldFocus, state: true })}
                onInput={() => {
                  if (!fieldValidation.firstName) {
                    setFieldValidation({ ...fieldValidation, state: true });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4} textAlign={'left'}>
              <FormControl fullWidth>
                <Select
                  value={formData.address.cityId.toString()}
                  onChange={handleStateChange}
                  error={!fieldValidation.cityId}
                  onFocus={() => setFieldFocus({ ...fieldFocus, cityId: true })}
                  onInput={() => {
                    if (!fieldValidation.firstName) {
                      setFieldValidation({
                        ...fieldValidation,
                        cityId: true,
                      });
                    }
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                placeholder={'ZIP/Postal Code'}
                variant="outlined"
                fullWidth
                size="small"
                value={formData.address.postal}
                onChange={handleZipChange}
                error={!fieldValidation.postalCode}
                onFocus={() =>
                  setFieldFocus({ ...fieldFocus, postalCode: true })
                }
                onInput={() => {
                  if (!fieldValidation.firstName) {
                    setFieldValidation({
                      ...fieldValidation,
                      postalCode: true,
                    });
                  }
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
                Social Security Number
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                placeholder={'123-45-6789'}
                variant="outlined"
                fullWidth
                size="small"
                value={formData.ssn}
                onChange={handleSSNChange}
                error={!fieldValidation.ssn}
                onFocus={() => setFieldFocus({ ...fieldFocus, ssn: true })}
                onInput={() => {
                  if (!fieldValidation.firstName) {
                    setFieldValidation({ ...fieldValidation, ssn: true });
                  }
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
                Date of birth
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} display="flex" justifyContent="start">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={formData.dob}
                  className={dateStyle.pickerInput}
                  onChange={handleDOBChange}
                  sx={
                    dobError
                      ? { border: '1px solid red', borderRadius: '8px' }
                      : {}
                  }
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="subtitle1"
                marginRight={{ xs: '0%', sm: '5%' }}
                marginLeft={{ xs: '0%', sm: '5%' }}
                fontSize="12px"
              >
                Email
                {inviteToOnboard && <CustomAsterik>*</CustomAsterik>}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                value={formData.email}
                onChange={handleEmailChange}
                error={!fieldValidation.email}
              />
            </Grid>
            <Grid item xs={12} sm={4}></Grid>
            <Grid item xs={12} sm={8}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={formData.inviteToOnboard}
                      onChange={handleInviteTBChange}
                    />
                  }
                  label="Invite employee to onboard and enter their information."
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CustomDivider variant="middle" />
      <Box
        marginLeft={{ xs: '5%', sm: '0%' }}
        marginRight={{ xs: '5%', sm: '0%' }}
        marginTop="1%"
        marginBottom="1%"
      >
        <div style={{ fontSize: '14px', fontWeight: 900 }}>
          Work Information
        </div>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box width={{ xs: '75%', sm: '50%' }} marginTop="2%" marginBottom="2%">
          <Grid
            container
            textAlign={{ xs: 'left', sm: 'right' }}
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
                Date of hire
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} display="flex" justifyContent="start">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className={dateStyle.pickerInput}
                  value={formData.dateOfHire}
                  onChange={handleDOHChange}
                  sx={
                    datePickerError
                      ? { border: '1px solid red', borderRadius: '8px' }
                      : {}
                  }
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="subtitle1"
                marginRight={{ xs: '0%', sm: '5%' }}
                marginLeft={{ xs: '0%', sm: '5%' }}
                fontSize="12px"
              >
                Work location
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} textAlign={'left'}>
              <FormControl fullWidth>
                <Select
                  value={formData.workLocation}
                  onChange={handleWorkLocationChange}
                  error={!fieldValidation.workLocation}
                  onFocus={() =>
                    setFieldFocus({ ...fieldFocus, workLocation: true })
                  }
                  onInput={() => {
                    if (!fieldValidation.firstName) {
                      setFieldValidation({
                        ...fieldValidation,
                        workLocation: true,
                      });
                    }
                  }}
                >
                  <MenuItem key={0} disabled>
                    Please Select Work Location
                  </MenuItem>
                  {workLocations.map((workLocation) => (
                    <MenuItem key={workLocation.id} value={workLocation.name}>
                      {workLocation.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="subtitle1"
                marginRight={{ xs: '0%', sm: '5%' }}
                marginLeft={{ xs: '0%', sm: '5%' }}
                fontSize="12px"
              >
                Wage type
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} textAlign={'left'}>
              <FormControl fullWidth>
                <Select
                  value={formData.wageType}
                  onChange={handleWageTypeChange}
                  error={!fieldValidation.wageType}
                  onFocus={() =>
                    setFieldFocus({ ...fieldFocus, wageType: true })
                  }
                  onInput={() => {
                    if (!fieldValidation.firstName) {
                      setFieldValidation({
                        ...fieldValidation,
                        wageType: true,
                      });
                    }
                  }}
                >
                  <MenuItem key={0} disabled>
                    Please Select Wage Type
                  </MenuItem>
                  {wageTypes.map((wageType) => (
                    <MenuItem key={wageType.id} value={wageType.name}>
                      {wageType.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="subtitle1"
                marginRight={{ xs: '0%', sm: '5%' }}
                marginLeft={{ xs: '0%', sm: '5%' }}
                fontSize="12px"
              >
                Wage Amount
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                value={formData.wageAmount}
                onChange={handleWageAmountChange}
                error={!fieldValidation.wageAmount}
                onFocus={() =>
                  setFieldFocus({ ...fieldFocus, wageAmount: true })
                }
                onInput={() => {
                  if (!fieldValidation.firstName) {
                    setFieldValidation({
                      ...fieldValidation,
                      wageAmount: true,
                    });
                  }
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
                Direct Deposit
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={formData.directDeposit ? 'true' : 'false'}
                onChange={handleDirectDepositChange}
              >
                <FormControlLabel
                  value="true" // Set value to true for 'Yes'
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false" // Set value to false for 'No'
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="subtitle1"
                marginRight={{ xs: '0%', sm: '5%' }}
                marginLeft={{ xs: '0%', sm: '5%' }}
                fontSize="12px"
              >
                Vacation policy
                <CustomAsterik>*</CustomAsterik>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} textAlign={'left'}>
              <FormControl fullWidth>
                <Select
                  value={formData.vacationPolicy}
                  onChange={handleVacationPolicyChange}
                  error={!fieldValidation.vacationPolicy}
                  onFocus={() =>
                    setFieldFocus({ ...fieldFocus, vacationPolicy: true })
                  }
                  onInput={() => {
                    if (!fieldValidation.firstName) {
                      setFieldValidation({
                        ...fieldValidation,
                        vacationPolicy: true,
                      });
                    }
                  }}
                >
                  <MenuItem key={0} disabled>
                    Please Select Vacation Policy
                  </MenuItem>
                  {vacationPolicies.map((vacationPolicy) => (
                    <MenuItem
                      key={vacationPolicy.id}
                      value={vacationPolicy.name}
                    >
                      {vacationPolicy.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <PageFooterWithButtons onSaveClick={handleSave} />
      {showErrorMessage && mandatoryError()}
    </>
  );
};

export default AddEmployeeFields;
