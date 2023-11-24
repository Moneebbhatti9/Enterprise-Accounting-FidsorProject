import React, { useState, ReactNode } from 'react';
import {
  StyledContainer,
  DetailTextField,
  StyledButton,
  LabelStyle,
  StyledHeading,
  ButtonStack,
  CustomDivider,
} from '../../../estimates/Actions/AddEstimateComponent/AddEstimateStyles';
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
import ProductModal from '../../../estimates/Actions/Modal/ProductModal';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { textFieldStyles } from '../../../Accounting/Global/Styling';
const customers = [
  'Customer 2',
  'Customer 3',
  'The Shawshank Redemption',
  'Moneeb',
  'Pulp Fiction',
  '12 Angry Men',
];

const currencyList = ['USD', 'EUR', 'PKR', 'GBP'];

const PageForm = () => {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [isCustomerModalOpen, setIsCustomerModalOpen] = useState(false);
  const [isValidationError, setIsValidationError] = useState(false);
  const [isEstimateNumberError, setIsEstimateNumberError] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, '');
    setInputValue(inputValue);
    setIsEstimateNumberError(inputValue === '');
  };

  const handleCustomerChange = (event: any) => {
    setSelectedCustomer(event.target.value);
  };

  const handleSave = () => {
    if (
      selectedCustomer !== '' &&
      !isValidationError &&
      !isEstimateNumberError
    ) {
      setIsValidationError(false);
      setIsEstimateNumberError(false);
      navigate('/salespayment/quotations/view');
    } else {
      setIsValidationError(true);
    }
  };

  const DropDown = ({
    children,
    ...other
  }: {
    children: ReactNode;
    [x: string]: any;
  }) => (
    <Paper {...other}>
      {children}
      <Button
        onClick={(e) => {
          e.stopPropagation();
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

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const textFieldStyle = textFieldStyles();
  return (
    <StyledContainer>
      <Link
        to="/salespayment/quotations"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ButtonStack>
          <span style={{ paddingTop: '7px' }} className="icon">
            <ArrowBackIosNewOutlinedIcon />
          </span>

          <StyledHeading className="text">Add Bill</StyledHeading>
        </ButtonStack>
      </Link>
      <Grid container rowSpacing={6} columnSpacing={6}>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <LabelStyle>Quotation Name</LabelStyle>
            <TextField variant="outlined" sx={{ width: '62%' }}  
            InputProps={{
          classes: {
            root: textFieldStyle.customTextField,
          },
        }}/>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <LabelStyle>Quotation Number</LabelStyle>
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
                  Please Ente Quotation Number
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
              Customer <span style={{ color: 'red' }}>*</span>
            </LabelStyle>
            <Stack direction="column" width="62%">
              <Autocomplete
                options={customers}
                onChange={handleCustomerChange}
                getOptionLabel={(option) => option}
                PaperComponent={({ children }) => (
                  <DropDown>{children}</DropDown>
                )}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" fullWidth  
                  InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}/>
                )}
              />
              {isValidationError &&
                (selectedCustomer === '' || isEstimateNumberError) && (
                  <span style={{ color: 'red' }}>Please select a customer</span>
                )}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <LabelStyle>Date</LabelStyle>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                sx={{ width: '62%' }}
              />
            </LocalizationProvider>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <LabelStyle>SubHeading</LabelStyle>
            <TextField sx={{ width: '62%' }} variant="outlined" 
             InputProps={{
              classes: {
                root: textFieldStyle.customTextField,
              },
            }}/>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <LabelStyle>
              Currency
              <span style={{ color: 'red', visibility: 'hidden' }}>r*</span>
            </LabelStyle>
            <Stack direction="column" width="62%">
              <Autocomplete
                options={currencyList}
                onChange={handleCustomerChange}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" fullWidth 
                   InputProps={{
                    classes: {
                      root: textFieldStyle.customTextField,
                    },
                  }}/>
                )}
              />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <LabelStyle>Date</LabelStyle>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                sx={{ width: '62%' }}
              />
            </LocalizationProvider>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <LabelStyle>Footer</LabelStyle>
            <TextField sx={{ width: '62%' }} variant="outlined" 
             InputProps={{
              classes: {
                root: textFieldStyle.customTextField,
              },
            }}/>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <LabelStyle>P.O/S.O</LabelStyle>
            <TextField variant="outlined" sx={{ width: '62%' }}
             InputProps={{
              classes: {
                root: textFieldStyle.customTextField,
              },
            }} />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <LabelStyle>Memo</LabelStyle>
            <DetailTextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              sx={{ width: '62%' }}
            />
          </Stack>
        </Grid>
        <Grid item>
          <PageGrid />
        </Grid>
      </Grid>

      <StyledButton>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </StyledButton>
      <ProductModal
        isOpen={isCustomerModalOpen}
        onClose={handleCloseCustomerModal}
      />
    </StyledContainer>
  );
};

export default PageForm;
