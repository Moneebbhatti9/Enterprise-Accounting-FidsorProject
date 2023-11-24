import React, { useState, ReactNode, useEffect } from 'react';
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
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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

import { getAllCurrency } from 'libs/services/ConfigurartionService/ConfigurartionService';
import {
  textFieldStyles,
  datePickerStyles,
} from '../../../Accounting/Global/Styling';
interface CurrencyDataType {
  id: string;
  name: string;
}
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
  const [ename, setEnameValue] = useState('');
  const [currency, setCurrency] = useState('');
  const [currencyData, setCurrencyData] = useState<CurrencyDataType[]>([]);
  const handleEnameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEnameValue(event.target.value);
  };
  const handleCurrencyChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCurrency(event.target.value);
  };
  useEffect(() => {
    async function fetchCurrency() {
      try {
        const data = await getAllCurrency();
        console.log(data);
        setCurrencyData(data);
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    }
    fetchCurrency();
  }, []);
  const navigate = useNavigate();
  const formData: Estimates = {
    name: ename,
    date: '2023-09-29T12:08:40.717Z',
    currencyType: currency,
    amount: 1000,
    status: 'Pending',
  };
  const handleSave = async () => {
    let isInputValid = true;
    let isCustomerValid = true;

    if (ename === '') {
      setIsNameError(true); // Consider setting an error state for the name field
      isInputValid = false;
    } else {
      setIsNameError(false);
    }
    if (isInputValid) {
      try {
        const response = await addEstimates(formData);
        console.log(formData);
        console.log('Estimate added successfully:', response);
        console.log('clicked');
        navigate('/salespayment/quotations');
      } catch (error) {
        console.error('Error adding Quotations:', error);
      }
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
  //const [currency, setCurrency] = React.useState('');
  const handleCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
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
                  // value={inputValue}
                  // onChange={handleInputChange}
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
                {/* {isValidationError && inputValue === '' && (
                  <span style={{ color: 'red' }}>
                    Please Enter Estimate Number
                  </span>
                )} */}
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
                <TextField
                  variant="outlined"
                  fullWidth
                  value={ename}
                  onChange={handleEnameChange}
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}
                />
                {isValidationError && ename === '' && (
                  <span style={{ color: 'red' }}>
                    Please enter Customer Name
                  </span>
                )}
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
                <FormControl sx={{ width: '100%' }}>
                  <Select value={currency} onChange={handleCurrency}>
                    <MenuItem disabled value="">
                      <em style={{ fontStyle: 'unset' }}>All Currencies</em>
                    </MenuItem>
                    {currencyData.map((account) => (
                      <MenuItem key={account.id} value={account.name}>
                        {account.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
