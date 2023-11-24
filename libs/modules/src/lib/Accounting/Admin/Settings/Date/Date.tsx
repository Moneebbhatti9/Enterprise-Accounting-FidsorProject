import { Body, CustomHR } from '../../../Global/Styling';
import Dialog from './Dialog';
import { Button, Grid, styled } from '@mui/material';
import SimpleHeader from '../../../Global/Components/SimpleHeader';
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import {
  FormControl,
  MenuItem,
  Select,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from '@mui/material';
const CustomCustomerName = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DateTypes = () => {
  const [selectedValues, setSelectedValues] = useState({
    format1: 'Quotation',
    fieldvalue: 'QUO',
    number: 'Number',
    date: 'Date',
    month: 'Month',
    year: 'Year',
  });
  const handleSaveButtonClick = () => {
    const selectedValuesJSON = JSON.stringify(selectedValues);
    localStorage.setItem('selectedValues', selectedValuesJSON);
    console.log('Selected Values saved to local storage:', selectedValues);
  };
  const handleFormatChange = (event: any, key: any) => {
    console.log('Key:', key);
    console.log('Selected value:', event.target.value);
    setSelectedValues({
      ...selectedValues,
      [key]: event.target.value,
    });
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedType, setSelectedType] = useState(
    localStorage.getItem('selectedType') || 'Standard'
  );
  const [isCurrencyDialogOpen, setIsCurrencyDialogOpen] = React.useState(false);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCurrencyClick = () => {
    if (!isCurrencyDialogOpen) {
      setIsCurrencyDialogOpen(true);
    }
    handleClose();
  };
  const handleTypeChange = (event: { target: { value: any } }) => {
    const newValue = event.target.value;
    setSelectedType(newValue);
    localStorage.setItem('selectedType', newValue);
  };
  useEffect(() => {
    const savedValuesJSON = localStorage.getItem('selectedValues');
    if (savedValuesJSON) {
      const savedValues = JSON.parse(savedValuesJSON);
      setSelectedValues(savedValues);
    }
  }, []);
  return (
    <Body>
      <SimpleHeader title="common.dateTypes" />
      <Typography>Current Date Type: {selectedType}</Typography>
      <Grid container spacing={2}>
        <CustomCustomerName item xs={12} sm={6} md={4} lg={4}>
          <RadioGroup
            aria-label="type"
            name="type"
            value={selectedType}
            onChange={handleTypeChange}
            sx={{
              '& .MuiSvgIcon-root': {
                fontSize: 18,
              },
              '& .css-1pm9ezf-MuiFormControlLabel-root .MuiFormControlLabel-label':
                {
                  fontSize: 12,
                },
            }}
          >
            <FormControlLabel
              value="Friendly"
              control={<Radio />}
              label="Friendly"
            />

            <FormControlLabel
              value="Standard"
              control={<Radio />}
              label="Standard"
            />
          </RadioGroup>
        </CustomCustomerName>
      </Grid>

      <Button
        onClick={handleCurrencyClick}
        disabled={selectedType !== 'Standard'}
      >
        Change Date Type
      </Button>
      {isCurrencyDialogOpen && (
        <Dialog
          open={isCurrencyDialogOpen}
          onClose={() => setIsCurrencyDialogOpen(false)}
        />
      )}
      <CustomHR />
      <SimpleHeader title="Formates" />
      <Typography>Quotation</Typography>
      <Typography>Invoices</Typography>
      <Typography>Payments</Typography>
      <Typography>Payment Cash Voucher</Typography>
      <Typography>Petty Cash Voucher</Typography>

      <Typography style={{ paddingTop: '20px' }}>Select Formate: </Typography>
      <FormControl fullWidth style={{ backgroundColor: 'white' }}>
        <Select
          defaultValue={'Quotation'}
          onChange={(event) => handleFormatChange(event, 'format1')}
        >
          <MenuItem value={'Quotation'}>Quotation</MenuItem>
          <MenuItem value={'Invoices'}>Invoices </MenuItem>
          <MenuItem value={'Payments'}>Payments</MenuItem>
          <MenuItem value={'Payment Cash Voucher'}>
            Payment Cash Voucher
          </MenuItem>
          <MenuItem value={'Petty Cash Voucher'}>Petty Cash Voucher</MenuItem>
        </Select>
      </FormControl>
      <TextField
        defaultValue={'QUO'}
        onSubmit={(event) => handleFormatChange(event, 'fieldvalue')}
      />
      <FormControl fullWidth style={{ backgroundColor: 'white' }}>
        <Select
          defaultValue={'Number'}
          onChange={(event) => handleFormatChange(event, 'number')}
        >
          <MenuItem value={'Number'}>Number</MenuItem>
          <MenuItem value={'Date'}>Date </MenuItem>
          <MenuItem value={'Month'}>Month</MenuItem>
          <MenuItem value={'Year'}>Year</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth style={{ backgroundColor: 'white' }}>
        <Select
          defaultValue={'Date'}
          onChange={(event) => handleFormatChange(event, 'date')}
        >
          <MenuItem value={'Number'}>Number</MenuItem>
          <MenuItem value={'Date'}>Date </MenuItem>
          <MenuItem value={'Month'}>Month</MenuItem>
          <MenuItem value={'Year'}>Year</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth style={{ backgroundColor: 'white' }}>
        <Select
          defaultValue={'Month'}
          onChange={(event) => handleFormatChange(event, 'month')}
        >
          <MenuItem value={'Number'}>Number</MenuItem>
          <MenuItem value={'Date'}>Date </MenuItem>
          <MenuItem value={'Month'}>Month</MenuItem>
          <MenuItem value={'Year'}>Year</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth style={{ backgroundColor: 'white' }}>
        <Select
          defaultValue={'Year'}
          onChange={(event) => handleFormatChange(event, 'year')}
        >
          <MenuItem value={'Number'}>Number</MenuItem>
          <MenuItem value={'Date'}>Date </MenuItem>
          <MenuItem value={'Month'}>Month</MenuItem>
          <MenuItem value={'Year'}>Year</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleSaveButtonClick}>Save</Button>
      <QRCode value="https://www.google.com" />
    </Body>
  );
};
export default DateTypes;
