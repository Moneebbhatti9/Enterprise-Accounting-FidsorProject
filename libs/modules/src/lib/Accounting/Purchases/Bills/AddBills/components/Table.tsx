import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, Chip, IconButton, ListSubheader } from '@mui/material';
import { BsTrash } from 'react-icons/bs';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { textFieldStyles } from '../../../../Global/Styling';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  eCategory: Yup.string().required('Expense category is required'),
});

interface LineItem {
  item: string;
  eCategory: string;
  selectedOptions: { name: string; percentage: number }[];
  quantity: number;
  price: number;
}
type CalculateTotalCallback = (total: number) => void;

const Table: React.FC<{ onCalculateTotalChange: CalculateTotalCallback }> = ({
  onCalculateTotalChange,
}) => {
  const textFieldStyle = textFieldStyles();
  const calculateLineTotal = (item: LineItem) => {
    const totalTaxPercentage = item.selectedOptions.reduce(
      (total, option) => total + option.percentage,
      0
    );
    const subtotal = item.quantity * item.price;
    const total = subtotal + (subtotal * totalTaxPercentage) / 100;
    return total;
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = parseFloat(event.target.value) || 0;
    setItems(updatedItems);
  };

  const handlePriceChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const updatedItems = [...items];
    updatedItems[index].price = parseFloat(event.target.value) || 0;
    setItems(updatedItems);
  };

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const calculateTotalTaxPercentage = (item: LineItem) => {
    // Calculate the total tax percentage for an individual item.
    return item.selectedOptions.reduce(
      (subtotal, option) => subtotal + option.percentage,
      0
    );
  };

  const calculateTotal = () => {
    const total = items.reduce(
      (total, item) => total + calculateLineTotal(item),
      0
    );

    onCalculateTotalChange(total);
    return total;
  };

  const itemOptions: { value: string; label: string }[] = [
    { value: 'laptop', label: 'Laptop' },
    { value: 'printer', label: 'Printer' },
    { value: 'keyboard', label: 'Keyboard' },
  ];

  const expenseCategoryOptions: { value: string; label: string }[] = [
    { value: 'accountingFee', label: 'Accounting Fee' },
    { value: 'bankServiceCharges', label: 'Bank Service Charges' },
    { value: 'interestExpense', label: 'Interest Expense' },
  ];

  const taxOptions: { name: string; percentage: number }[] = [
    { name: 'Sales Tax', percentage: 7 },
    { name: 'VAT', percentage: 15 },
  ];

  const [items, setItems] = useState<LineItem[]>([
    {
      item: '',
      eCategory: '',
      selectedOptions: [],
      quantity: 0,
      price: 0,
    },
  ]);

  const handleItem = (event: SelectChangeEvent<string>, index: number) => {
    const updatedItems = [...items];
    updatedItems[index].item = event.target.value;
    setItems(updatedItems);
  };

  const handleECategory = (event: SelectChangeEvent<string>, index: number) => {
    const updatedItems = [...items];
    updatedItems[index].eCategory = event.target.value;
    setItems(updatedItems);
  };

  const handleOptionChange = (
    value: { name: string; percentage: number }[],
    index: number
  ) => {
    const updatedItems = [...items];
    updatedItems[index].selectedOptions = value;
    setItems(updatedItems);
  };

  const addLine = () => {
    const updatedItems = [...items];
    updatedItems.push({
      item: '',
      eCategory: '',
      selectedOptions: [],
      quantity: 0, // Initialize with 0 quantity.
      price: 0, // Initialize with 0 price.
    });
    setItems(updatedItems);
  };

  const handleRemoveRow = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <Box style={{ overflowX: 'auto', minWidth: '100%' }}>
      <Stack
        direction={'row'}
        width={'100%'}
        spacing={4}
        justifyContent={'center'}
      >
        <Typography fontSize={'12px'} fontWeight={'500'} width={'14%'}>
          Item
        </Typography>
        <Typography fontSize={'12px'} fontWeight={'500'} width={'14%'}>
          Expense Category<span style={{ color: 'red' }}>*</span>
        </Typography>
        <Typography fontSize={'12px'} fontWeight={'500'} width={'14%'}>
          Description
        </Typography>
        <Typography fontSize={'12px'} fontWeight={'500'} width={'7%'}>
          Qty
        </Typography>
        <Typography fontSize={'12px'} fontWeight={'500'} width={'14%'}>
          Price
        </Typography>
        <Typography
          fontSize={'12px'}
          fontWeight={'500'}
          width={'14%'}
          pl={'26px'}
        >
          Ammount
        </Typography>
      </Stack>
      <Divider sx={{ margin: '10px 0px 15px 0px' }} />
      {items.length === 0 ? (
        <Stack
          width={'100%'}
          direction={'row'}
          alignItems={'center'}
          spacing={4}
          p={'15px'}
          my={'5px'}
          border={'1px solid #0A8FDC'}
          borderRadius={'8px'}
        >
          <AiOutlineInfoCircle style={{ fontSize: '16px', color: '#0A8FDC' }} />
          <Typography sx={{ fontSize: '12px', fontWeight: '500' }}>
            You need to{' '}
            <span
              onClick={addLine}
              style={{ color: '#0A8FDC', cursor: 'pointer' }}
            >
              add
            </span>{' '}
            at least one line.
          </Typography>
        </Stack>
      ) : (
        items.map((item, index) => (
          <Stack
            direction={'row'}
            width={'100%'}
            spacing={4}
            my={'5px'}
            justifyContent={'center'}
          >
            <FormControl sx={{ width: '14%' }}>
              <Select
                value={item.item}
                onChange={(event) => handleItem(event, index)}
              >
                {itemOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '14%' }}>
              <Select defaultValue="" id="grouped-select">
                <ListSubheader>Expense</ListSubheader>
                <MenuItem value={1}>Accounting Fees</MenuItem>
                <MenuItem value={2}>Advertising & Promotion</MenuItem>
                <MenuItem value={3}>Bank Service Charges</MenuItem>
                <MenuItem value={4}>Computer - Hardware</MenuItem>
                <MenuItem value={5}>Computer - Hosting</MenuItem>
                <MenuItem value={6}>Computer - Internet</MenuItem>
                <MenuItem value={7}>Computer - Software</MenuItem>
                <MenuItem value={8}>Depreciation Expense</MenuItem>
                <MenuItem value={9}>Insurance Vehicles</MenuItem>
                <MenuItem value={10}>Interest Expense</MenuItem>
                <MenuItem value={11}>Meals & Entertainment</MenuItem>
                <MenuItem value={12}>Office Supplies</MenuItem>
                <MenuItem value={13}>Payroll Employer Taxes</MenuItem>
                <MenuItem value={14}>Payroll Gross Pay</MenuItem>
                <MenuItem value={15}>Payroll - Employee Benefits</MenuItem>
                <MenuItem value={16}>Payroll - Salary & Wages</MenuItem>
                <MenuItem value={17}>Professional Fees</MenuItem>
                <MenuItem value={18}>Rent Expense</MenuItem>
                <MenuItem value={19}>Repairs & Maintenance</MenuItem>
                <MenuItem value={20}>Taxes - Corporate Tax</MenuItem>
                <MenuItem value={21}>Telephone - Land Line</MenuItem>
                <MenuItem value={22}>Telephone - Wireless</MenuItem>
                <MenuItem value={23}>Travel Expense</MenuItem>
                <MenuItem value={24}>Utilities</MenuItem>
                <MenuItem value={25}>Vehicle - Fuel</MenuItem>
                <MenuItem value={26}>Vehicle - Repairs & Maintenance</MenuItem>
                <ListSubheader>Equity</ListSubheader>
                <MenuItem value={27}>Common Shares</MenuItem>
                <ListSubheader>Liability</ListSubheader>
                <MenuItem value={28}>Payroll Liabilities</MenuItem>
                <MenuItem value={29}>Shareholder Loan</MenuItem>
                <MenuItem value={30}>Taxes Payable</MenuItem>
                <ListSubheader>Asset</ListSubheader>
                <MenuItem value={31}>Taxes</MenuItem>
                <MenuItem value={32}>Recoverable/Refundable</MenuItem>
              </Select>
            </FormControl>
            <TextField
              variant="outlined"
              sx={{ width: '14%' }}
              InputProps={{
                classes: {
                  root: textFieldStyle.customTextField,
                },
              }}
            />
            <TextField
              variant="outlined"
              type="number"
              sx={{ width: '7%' }}
              value={item.quantity}
              onChange={(event) => handleQuantityChange(event, index)}
              InputProps={{
                classes: {
                  root: textFieldStyle.customTextField,
                },
              }}
            />
            <TextField
              variant="outlined"
              type="number"
              sx={{ width: '14%' }}
              value={item.price}
              onChange={(event) => handlePriceChange(event, index)}
              InputProps={{
                classes: {
                  root: textFieldStyle.customTextField,
                },
              }}
            />

            <Stack
              width={'14%'}
              direction={'row'}
              justifyContent={'space-around'}
              alignItems={'center'}
            >
              <Typography fontSize={'12px'} fontWeight={'500'}>
                $ {calculateLineTotal(item).toFixed(2)}
              </Typography>

              <IconButton
                onClick={() => handleRemoveRow(index)}
                style={{ fontSize: '16px', color: '#0A8FDC' }}
              >
                <BsTrash style={{ fontSize: '16px', color: '#57B8C9' }} />
              </IconButton>
            </Stack>
          </Stack>
        ))
      )}
      <Divider sx={{ my: '10px' }} />
      <Stack
        direction={'row'}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Button
          variant="text"
          startIcon={<IoIosAddCircleOutline />}
          sx={{ fontSize: '14px', color: '#57B8C9' }}
          onClick={addLine}
        >
          Add a line
        </Button>
        <Stack spacing={4} width={'21%'}>
          <Typography fontSize={'12px'} fontWeight={'500'}>
            Subtotal: $ {calculateSubtotal().toFixed(2)}
          </Typography>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography fontSize={'12px'} fontWeight={'500'}>
              Tax:{' '}
            </Typography>
            <Autocomplete
              fullWidth
              multiple
              options={taxOptions}
              value={items[0].selectedOptions}
              getOptionLabel={(option) => option.name}
              onChange={(_, value) => handleOptionChange(value, 0)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  style={{ fontSize: '12px' }}
                />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    label={option.name}
                    {...getTagProps({ index })}
                    style={{
                      fontSize: '12px',
                      height: '25px',
                    }}
                  />
                ))
              }
              sx={{
                fontSize: '12px',
                '& .MuiAutocomplete-input': {
                  height: '1px',
                  fontSize: '12px',
                },
              }}
            />
          </Stack>
          <Typography fontSize={'12px'} fontWeight={'500'}>
            Total: $ {calculateTotal().toFixed(2)}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Table;
