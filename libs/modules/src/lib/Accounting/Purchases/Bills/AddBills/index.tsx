import { Body } from '../../../Global/Styling';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { StyledTextarea } from './styles/NotesStyles';
import Box from '@mui/material/Box';
import Table from './components/Table';
import Button from '@mui/material/Button';
import { datePickerStyles, textFieldStyles } from '../../../Global/Styling';
import { addBill } from 'libs/services/BillsService/BillService';
import { useNavigate } from 'react-router-dom';
import { BillsDataType } from 'libs/modules/interfaces/Bills/Bills';
import { getAllVendors } from 'libs/services/VendorService/VendorService';
import { getAllCurrency } from 'libs/services/ConfigurartionService/ConfigurartionService';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  DPicker,
  FControl,
  Fields,
  InputFields,
  Section,
  TextArea,
} from './styles/AddBillStyles';
// import { VendorDataType } from 'libs/modules/interfaces/Vendors/Vendor';

const validationSchema = Yup.object().shape({
  vendorID: Yup.string().required('Vendor is required'),
});

const initialValues: BillsDataType = {
  vendorID: '',
  currencyID: null,
  billDate: '',
  dueDate: '',
  PoSo: null,
  billNumber: null,
  note: '',
  productTable: [
    {
      itemID: null,
      expenseCategory: null,
      description: '',
      quantity: null,
      price: null,
      ammount: null,
    },
  ],
  subTotal: null,
  tax: null,
  total: null,
};

const AddBills = () => {
  const dateStyle = datePickerStyles();
  const textFieldStyle = textFieldStyles();
  const [text, setText] = useState('');
  const [billNo, setBillNo] = useState(0);
  const [totalChange, setTotalChange] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [dueDate, setDueDate] = useState(null);
  const handleTextChange = (event: { target: { value: any } }) => {
    const newText = event.target.value;
    setText(newText);
    console.log('Entered Text:', newText);
  };
  const handleBilNoChange = (event: { target: { value: any } }) => {
    const newText = event.target.value;
    setBillNo(newText);
    console.log('Entered Text:', newText);
  };
  const [currency, setCurrency] = React.useState('');
  const handleCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };
  const handleTotalChange = (calculatedTotal: number): void => {
    console.log('Calculated Total:', calculatedTotal);
    setTotalChange(calculatedTotal);
  };
  const handleDateChange = (newDate: any) => {
    setSelectedDate(newDate);
  };
  const handleDueDateChange = (newDate: any) => {
    setDueDate(newDate);
  };

  // const handleSave = async () => {
  const handleSave = (values: BillsDataType) => {
    console.log('Form Values:', values);
    // if (
    //   vendor &&
    //   currency &&
    //   billNo &&
    //   text &&
    //   selectedDate &&
    //   dueDate &&
    //   totalChange
    // ) {
    //   console.log('Vendor:', vendor);
    //   console.log('Currency:', currency);
    //   console.log('Bill No:', billNo);
    //   console.log('Text:', text);
    //   console.log('Selected Date:', selectedDate);
    //   console.log('Due Date:', dueDate);
    //   console.log('Calculated Total:', totalChange);
    //   try {
    //     const response = await addBill(formData);
    //     console.log('Bill added successfully:', response);
    //     navigate('/purchases/bills');
    //   } catch (error) {
    //     console.error('Error adding Bill:', error);
    //   }
    // } else {
    //   console.log(
    //     'Some fields are empty. Please fill in all the required fields.'
    //   );
    //   alert('Some fields are empty. Please fill in all the required fields.');
    // }
  };
  interface VendorDataType {
    id: string;
    name: string;
  }
  interface CurrencyDataType {
    id: string;
    name: string;
  }
  const [vendorData, setVendorData] = useState<VendorDataType[]>([]);
  const [currencyData, setCurrencyData] = useState<CurrencyDataType[]>([]);
  useEffect(() => {
    async function fetchVendors() {
      try {
        const data = await getAllVendors();
        console.log(data);
        setVendorData(data);
      } catch (error) {
        console.error('Error fetching vendors:', error);
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
    fetchVendors();
    fetchCurrency();
  }, []);
  return (
    <Body>
      <PageHeaderWithBack title={'Add Bill'} url="/purchases/bills" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({ isSubmitting, setFieldValue, values, errors, touched }) => (
          <Form>
            <Container>
              <Section spacing={{ xs: 0, sm: 4 }}>
                <Fields spacing={2}>
                  <Typography
                    fontSize={'12px'}
                    color={'#909090'}
                    width={'55px'}
                  >
                    Vendor <span style={{ color: 'red' }}>*</span>
                  </Typography>
                  <FControl>
                    <Field
                      as={Select}
                      name="name"
                      error={Boolean(errors.vendorID && touched.vendorID)}
                    >
                      <MenuItem disabled value="">
                        <em style={{ fontStyle: 'unset' }}>All Vendors</em>
                      </MenuItem>
                      {vendorData.map((account) => (
                        <MenuItem key={account.id} value={account.id}>
                          {account.name}
                        </MenuItem>
                      ))}
                    </Field>
                    {touched.vendorID && errors.vendorID && (
                      <Typography
                        style={{
                          color: 'red',
                          fontSize: '12px',
                          fontWeight: 'bold',
                        }}
                      >
                        {errors.vendorID}
                      </Typography>
                    )}
                  </FControl>
                </Fields>
                <Fields spacing={2}>
                  <Typography
                    fontSize={'12px'}
                    color={'#909090'}
                    width={'55px'}
                  >
                    Currency
                  </Typography>
                  <FControl>
                    <Field as={Select} name="name">
                      <MenuItem disabled value="">
                        <em style={{ fontStyle: 'unset' }}>All Currencies</em>
                      </MenuItem>
                      {currencyData.map((account) => (
                        <MenuItem key={account.id} value={account.id}>
                          {account.name}
                        </MenuItem>
                      ))}
                    </Field>
                    {/* <Select value={currency} onChange={handleCurrency}>
                      <MenuItem disabled value="">
                        <em style={{ fontStyle: 'unset' }}>All Currencies</em>
                      </MenuItem>
                      {currencyData.map((account) => (
                        <MenuItem key={account.id} value={account.id}>
                          {account.name}
                        </MenuItem>
                      ))}
                    </Select> */}
                  </FControl>
                </Fields>
              </Section>
              <Section spacing={{ xs: 0, sm: 4 }}>
                <Fields spacing={2} className={dateStyle.pickerInput}>
                  <Typography
                    fontSize={'12px'}
                    color={'#909090'}
                    width={'55px'}
                  >
                    Bill Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DPicker onChange={handleDateChange} />
                  </LocalizationProvider>
                </Fields>
                <Fields spacing={2} className={dateStyle.pickerInput}>
                  <Typography
                    fontSize={'12px'}
                    color={'#909090'}
                    width={'55px'}
                  >
                    Due Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DPicker onChange={handleDueDateChange} />
                  </LocalizationProvider>
                </Fields>
                <Fields spacing={2}>
                  <Typography
                    fontSize={'12px'}
                    color={'#909090'}
                    width={'55px'}
                  >
                    P.O./S.O.
                  </Typography>
                  <InputFields
                    variant="outlined"
                    InputProps={{
                      classes: {
                        root: textFieldStyle.customTextField,
                      },
                    }}
                    value={text}
                    onChange={handleTextChange}
                  />
                </Fields>
              </Section>
              <Section spacing={{ xs: 0, sm: 4 }}>
                <Fields spacing={2}>
                  <Typography
                    fontSize={'12px'}
                    color={'#909090'}
                    width={'55px'}
                  >
                    Bill #
                  </Typography>
                  <InputFields
                    variant="outlined"
                    InputProps={{
                      classes: {
                        root: textFieldStyle.customTextField,
                      },
                    }}
                    onChange={handleBilNoChange}
                  />
                </Fields>
                <Fields spacing={2}>
                  <Typography
                    fontSize={'12px'}
                    color={'#909090'}
                    width={'55px'}
                  >
                    Notes
                  </Typography>
                  <TextArea />
                </Fields>
              </Section>
            </Container>
            <Table onCalculateTotalChange={handleTotalChange} />
            <Stack
              direction={'row'}
              spacing={6}
              justifyContent={'center'}
              m={'20px 0px 15px 0px'}
            >
              <Button
                variant={'outlined'}
                sx={{ borderColor: '#57B8C9', color: '#57B8C9' }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant={'contained'}
                sx={{ borderColor: '#57B8C9', color: '#FFF' }}
              >
                Save
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Body>
  );
};
export default AddBills;
