import React, { useState, ReactNode } from 'react';
import {
  StyledContainer,
  DetailTextField,
  StyledButton,
  LabelStyle,
  StyledHeading,
  ButtonStack,
  CustomDivider,
} from './AddEstimateStyles';
import {
  TextField,
  Button,
  Typography,
  Paper,
  Autocomplete,
  Grid,
  Stack,
} from '@mui/material';
import PageGrid from './PageGrid';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Link, useNavigate } from 'react-router-dom';
import ProductModal from '../Modal/ProductModal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { useIntl } from 'react-intl';

import { addEstimates } from 'libs/services/EstimateService/EstimateService';
import { Estimates } from 'libs/modules/interfaces/Estimates/Estimates';
import {
  textFieldStyles,
  datePickerStyles,
} from '../../../Accounting/Global/Styling';
const customers = [
  'Customer 2',
  'Customer 3',
  'The Shawshank Redemption',
  'Moneeb',
  'Pulp Fiction',
  '12 Angry Men',
];

const currencyList = ['USD', 'EUR', 'PKR', 'GBP'];

const PageTop = () => {
  const [value, setValue] = React.useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [isValidationError, setIsValidationError] = useState(false);
  const [isEstimateNumberError, setIsEstimateNumberError] = useState(false);

  const [isNameError, setIsNameError] = useState(false);
  const textFieldStyle = textFieldStyles();
  const dateStyle = datePickerStyles();
  const { messages } = useIntl();
  const navigate = useNavigate();
  const formData: Estimates = {
    name: name,
    date: '01/01/2000',
    currencyType: 'USD',
    amount: 1000,
    status: 'Pending',
  };
  const handleInputChange = (event: any) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, '');
    setInputValue(inputValue);
    setIsEstimateNumberError(inputValue === '');
  };
  const handleNameChange = (event: any) => {
    setName(name);
    setIsNameError(name === '');
  };
  const handleCustomerChange = (event: any) => {
    setSelectedCustomer(event.target.value);
  };

  const handleSave = async () => {
    let isInputValid = true;
    let isCustomerValid = true;

    // if (inputValue === '') {
    //   setIsEstimateNumberError(true);
    //   isInputValid = false;
    // } else {
    //   setIsEstimateNumberError(false);
    // }
    // if (name === '') {
    //   setIsNameError(true);
    //   isInputValid = false;
    // } else {
    //   setIsNameError(false);
    // }
    // if (selectedCustomer === '') {
    //   setIsValidationError(true);
    //   isCustomerValid = false;
    // } else {
    //   setIsValidationError(false);
    // }

    if (isInputValid) {
      try {
        const response = await addEstimates(formData);
        console.log(formData);
        console.log('Estimate added successfully:', response);
      } catch (error) {
        console.error('Error adding Vendor:', error);
      }
      console.log('clicked');
      navigate('/salespayment/estimates');
    }
  };

  const CustomButton = ({
    children,
    ...other
  }: {
    children: ReactNode;
    [x: string]: any;
  }) => (
    <Paper {...other}>
      {children}
      <Button
        onClick={() => {
          handleOpenCustomerModal();
          console.log('Button Clicked');
        }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          marginTop: '5px',
          marginBottom: '5px',
        }}
      >
        <AddCircleOutlineIcon fontSize="small" />
        <Typography>Add new Customer</Typography>
      </Button>
    </Paper>
  );

  const handleOpenCustomerModal = () => {
    setIsCustomerModalOpen(true);
  };

  const handleCloseCustomerModal = () => {
    setIsCustomerModalOpen(false);
  };

  return (
    <>
      <StyledContainer>
        <Link
          to="/salespayment/quotations"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ButtonStack>
            <span style={{ paddingTop: '7px' }} className="icon">
              <ArrowBackIosNewOutlinedIcon />
            </span>

            <StyledHeading className="text">
              {messages['common.estimate.addestimate'] as string}
            </StyledHeading>
          </ButtonStack>
        </Link>
        <Grid container rowSpacing={6} columnSpacing={4}>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <LabelStyle>
                {messages['common.estimate.estimateName'] as string}
              </LabelStyle>
              <TextField
                variant="outlined"
                value={name}
                onChange={handleNameChange}
                sx={{ width: '62%' }}
                InputProps={{
                  classes: {
                    root: textFieldStyle.customTextField,
                  },
                }}
              />
              {isValidationError && name === '' && (
                <span style={{ color: 'red' }}>
                  Please Enter Quotation Name
                </span>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <LabelStyle>
                {messages['common.estimate.estimateNumber'] as string}
              </LabelStyle>
              <Stack direction="column" width="62%">
                <TextField
                  variant="outlined"
                  value={inputValue}
                  onChange={handleInputChange}
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
                {isValidationError && inputValue === '' && (
                  <span style={{ color: 'red' }}>
                    Please Enter Estimate Number
                  </span>
                )}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12}>
            <CustomDivider />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <LabelStyle>
                {messages['common.estimate.estimateCustomer'] as string}{' '}
                <span style={{ color: 'red' }}>*</span>
              </LabelStyle>
              <Stack direction="column" width="62%">
                <Autocomplete
                  options={customers}
                  onChange={handleCustomerChange}
                  getOptionLabel={(option) => option}
                  PaperComponent={({ children }) => (
                    <CustomButton>{children}</CustomButton>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                  )}
                />{' '}
                {/* {isValidationError &&
                  (selectedCustomer === '' || isEstimateNumberError) && (
                    <span style={{ color: 'red' }}>
                      Please select a customer
                    </span>
                  )}
               */}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <LabelStyle>
                {messages['common.estimate.estimateDate'] as string}
              </LabelStyle>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  sx={{ width: '62%' }}
                  className={dateStyle.pickerInput}
                />
              </LocalizationProvider>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <LabelStyle>
                {messages['common.estimate.estimateSubheading'] as string}
              </LabelStyle>
              <TextField
                sx={{ width: '62%' }}
                variant="outlined"
                InputProps={{
                  classes: {
                    root: textFieldStyle.customTextField,
                  },
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <LabelStyle>
                {messages['common.estimate.estimateCurrency'] as string}
                <span style={{ color: 'red', visibility: 'hidden' }}>r*</span>
              </LabelStyle>
              <Stack direction="column" width="62%">
                <Autocomplete
                  options={currencyList}
                  onChange={handleCustomerChange}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        classes: {
                          root: textFieldStyle.customTextField,
                        },
                      }}
                    />
                  )}
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <LabelStyle>
                {messages['common.estimate.estimateExpiredDate'] as string}
              </LabelStyle>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  sx={{ width: '62%' }}
                  className={dateStyle.pickerInput}
                />
              </LocalizationProvider>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <LabelStyle>
                {messages['common.estimate.estimateFooter'] as string}
              </LabelStyle>
              <TextField
                sx={{ width: '62%' }}
                variant="outlined"
                InputProps={{
                  classes: {
                    root: textFieldStyle.customTextField,
                  },
                }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <LabelStyle>P.O/S.O</LabelStyle>
              <TextField
                variant="outlined"
                sx={{ width: '62%' }}
                InputProps={{
                  classes: {
                    root: textFieldStyle.customTextField,
                  },
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Stack direction="row" spacing={2} justifyContent="center">
              <LabelStyle>
                {messages['common.estimate.estimateMemo'] as string}
              </LabelStyle>
              <TextField
                variant="outlined"
                sx={{ width: '62%' }}
                InputProps={{
                  classes: {
                    root: textFieldStyle.customTextField,
                  },
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </StyledContainer>
      <StyledContainer>
        <PageGrid />
      </StyledContainer>
      <StyledButton>
        <Button variant="contained" type="button" onClick={handleSave}>
          Save
        </Button>
      </StyledButton>
      <ProductModal
        isOpen={isCustomerModalOpen}
        onClose={handleCloseCustomerModal}
      />
    </>
  );
};

export default PageTop;
