import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { customerList, CustomerType } from './db/data';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import ProductTable from './components/ProductTable';
import Header from './components/Header';
import { AiOutlinePlus } from 'react-icons/ai';

const CreateInvoice = () => {
  const [customer, setCustomer] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerType | null>(
    null
  );
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [editableInvoiceID, setEditableInvoiceID] = useState('2023-09-25-13');
  const [isEditingInvoiceID, setIsEditingInvoiceID] = useState(false);
  const [editableInvoiceDate, setEditableInvoiceDate] = useState(
    dayjs('25/09/2023')
  );
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [paymentTerms, setPaymentTerms] = useState(30); // Default to 30 days
  const [isEditingPaymentTerms, setIsEditingPaymentTerms] = useState(false);
  const [isEditingIntroduction, setIsIntroduction] = useState(false);
  const [introduction, setIntroduction] = useState('');
  const [isEditingConclusion, setIsConclusion] = useState(false);
  const [conclusion, setConclusion] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const selectedCustomerId = event.target.value as string;
    setCustomer(selectedCustomerId);

    const foundCustomer = customerList.find(
      (customer) => customer.id === selectedCustomerId
    );
    setSelectedCustomer(foundCustomer || null);
    setShowCustomerDetails(true);
  };

  const handleCloseButtonClick = () => {
    setShowCustomerDetails(false);
    setSelectedCustomer(null);
    setCustomer('');
  };

  const handleEditInvoiceID = () => {
    setIsEditingInvoiceID(true);
  };

  const handleInvoiceIDChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditableInvoiceID(event.target.value);
  };

  const handleSaveInvoiceID = () => {
    setIsEditingInvoiceID(false);
  };

  const handleEditInvoiceDate = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const handleSaveInvoiceDate = (newDate: dayjs.Dayjs | null) => {
    if (newDate !== null) {
      setEditableInvoiceDate(newDate);
    }
    setIsDatePickerOpen(false);
  };

  const handleEditPaymentTerms = () => {
    setIsEditingPaymentTerms(true);
  };

  const handlePaymentTermsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = parseInt(event.target.value);
    setPaymentTerms(newValue);
  };

  const handleSavePaymentTerms = () => {
    setIsEditingPaymentTerms(false);
  };

  const handleIntroductionClick = () => {
    setIsIntroduction(true);
  };

  const handleIntroductionFieldBlur = () => {
    setIsIntroduction(false);
  };

  const handleIntroductionFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIntroduction(event.target.value);
  };

  const handleIntroTextClick = () => {
    setIsIntroduction(true);
  };
  const handleConclusionClick = () => {
    setIsConclusion(true);
  };

  const handleConclusionFieldBlur = () => {
    setIsConclusion(false);
  };

  const handleConclusionFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConclusion(event.target.value);
  };

  const handleConcoTextClick = () => {
    setIsConclusion(true);
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2% 2%',
        borderRadius: '10px',
        backgroundColor: '#fff',
      }}
    >
      <Header redirectLink="/salespayment/invoices" />
      <Box padding={'40px 16px'} display={'flex'} flexDirection={'column'}>
        <Stack direction={'row'}>
          <Box width={'40%'}>
            {showCustomerDetails && selectedCustomer ? (
              <Stack
                padding={'12px'}
                width={'75%'}
                spacing={2}
                sx={{
                  '&:hover': {
                    border: '1px solid #eee',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  },
                }}
              >
                <Stack
                  width={'100%'}
                  direction={'row'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Typography fontSize={'14px'} fontWeight={'600'}>
                    {selectedCustomer.name}
                  </Typography>
                  <IconButton onClick={handleCloseButtonClick}>
                    <CloseIcon />
                  </IconButton>
                </Stack>
                <Typography fontSize={'12px'}>
                  {`${selectedCustomer.firstName} ${selectedCustomer.lastName}`}
                </Typography>
                <Typography fontSize={'12px'}>
                  {`${selectedCustomer.city}, ${selectedCustomer.zipCode}, ${selectedCustomer.state}, ${selectedCustomer.country}`}
                </Typography>
                <Typography fontSize={'12px'}>
                  VAT ID: {selectedCustomer.vatId}
                </Typography>
              </Stack>
            ) : (
              <Stack>
                <Typography fontSize={'12px'} fontWeight={'500'}>
                  Select Customer
                </Typography>
                <FormControl sx={{ width: '75%' }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={customer}
                    onChange={handleChange}
                  >
                    {customerList.map((customer) => (
                      <MenuItem key={customer.id} value={customer.id}>
                        {customer.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            )}
          </Box>
          <Box width={'60%'} display={'flex'} justifyContent={'end'}>
            <Stack spacing={2}>
              <Typography fontSize={'14px'} fontWeight={'600'}>
                EcoVacs Tech Pvt Ltd.
              </Typography>
              <Typography fontSize={'12px'}>
                New York
                <br />
                827102
              </Typography>
              <Typography fontSize={'12px'}>
                +91 9372371278
                <br />
                abc@email.com
              </Typography>
              <Typography fontSize={'12px'}>
                VAT ID: KH239J88JJ22UI
                <br />
                Tax ID: SAK31234JK21
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack width={'100%'} spacing={2}>
          <Typography fontSize={'14px'} fontWeight={'600'}>
            Invoice
          </Typography>
          <Stack
            width={'100%'}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                ...(isEditingInvoiceID
                  ? {}
                  : {
                      '&:hover': {
                        border: '1px solid #eee',
                        borderRadius: '8px',
                        cursor: 'pointer',
                      },
                    }),
              }}
              onClick={handleEditInvoiceID}
            >
              {isEditingInvoiceID ? (
                <>
                  <Typography fontSize={'12px'}>Invoice ID:&nbsp;</Typography>
                  <TextField
                    value={editableInvoiceID}
                    onChange={handleInvoiceIDChange}
                    onBlur={handleSaveInvoiceID}
                    autoFocus
                  />
                </>
              ) : (
                <Typography fontSize={'12px'}>
                  Invoice ID:&nbsp;<span>{editableInvoiceID}</span>
                </Typography>
              )}
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                  ...(isDatePickerOpen
                    ? {}
                    : {
                        '&:hover': {
                          border: '1px solid #eee',
                          borderRadius: '8px',
                          cursor: 'pointer',
                        },
                      }),
                }}
                onClick={handleEditInvoiceDate}
              >
                {isDatePickerOpen ? (
                  <>
                    <Typography fontSize={'12px'}>
                      Invoice Date:&nbsp;
                    </Typography>
                    <DatePicker
                      value={editableInvoiceDate}
                      onChange={(newDate) => handleSaveInvoiceDate(newDate)}
                      open
                    />
                  </>
                ) : (
                  <>
                    <Typography fontSize={'12px'}>
                      Invoice Date:&nbsp;
                    </Typography>
                    <span style={{ fontSize: '12px' }}>
                      {editableInvoiceDate.format('DD/MM/YYYY')}
                    </span>
                  </>
                )}
              </Box>
            </LocalizationProvider>
          </Stack>
          <Box width={'fit-content'}>
            {isEditingIntroduction ? (
              <TextField
                variant="outlined"
                value={introduction}
                onBlur={handleIntroductionFieldBlur}
                onChange={handleIntroductionFieldChange}
                autoFocus
              />
            ) : introduction ? (
              <Typography
                onClick={handleIntroTextClick}
                sx={{
                  fontSize: '12px',
                  cursor: 'pointer',
                }}
              >
                {introduction}
              </Typography>
            ) : (
              <Button
                variant="outlined"
                onClick={handleIntroductionClick}
                sx={{
                  fontSize: '14px',
                  color: '#0A8FDC',
                }}
              >
                <AiOutlinePlus style={{ fontSize: '14px' }} />
                Add Introduction Text (Optional)
              </Button>
            )}
          </Box>
        </Stack>

        <ProductTable />

        {isEditingPaymentTerms ? (
          <Box margin={'40px 0px'} padding={'12px'} width={'fit-content'}>
            <TextField
              type="number"
              value={paymentTerms.toString()}
              onChange={handlePaymentTermsChange}
              onBlur={handleSavePaymentTerms}
              autoFocus
            />
          </Box>
        ) : (
          <Box
            sx={{
              width: '100%',
              margin: '40px 0px',
              padding: '4px',
              userSelect: 'none',
              '&:hover': {
                border: '1px solid #eee',
                borderRadius: '8px',
                cursor: 'pointer',
              },
            }}
            onClick={handleEditPaymentTerms}
          >
            <Typography fontSize={'14px'} fontWeight={'600'}>
              Payment Terms
              <br />
              <span style={{ fontSize: '12px', fontWeight: '400' }}>
                Please Pay within {paymentTerms} days of receiving this invoice.
              </span>
            </Typography>
          </Box>
        )}
        <Box width={'fit-content'}>
          {isEditingConclusion ? (
            <TextField
              variant="outlined"
              value={conclusion}
              onBlur={handleConclusionFieldBlur}
              onChange={handleConclusionFieldChange}
              autoFocus
            />
          ) : conclusion ? (
            <Typography
              onClick={handleConcoTextClick}
              sx={{
                fontSize: '12px',
                cursor: 'pointer',
              }}
            >
              {conclusion}
            </Typography>
          ) : (
            <Button
              variant="outlined"
              onClick={handleConclusionClick}
              sx={{
                fontSize: '14px',
                color: '#0A8FDC',
              }}
            >
              <AiOutlinePlus style={{ fontSize: '14px' }} />
              Add Concluding Text (Optional)
            </Button>
          )}
        </Box>
        <Box width={'100%'} margin={'12px 0px'}>
          <Divider />
        </Box>
        <Stack
          padding={'12px'}
          border={'1px solid #eee'}
          borderRadius={'8px'}
          width={'fit-content'}
          spacing={2}
        >
          <Typography fontSize={'14px'} fontWeight={'600'}>
            Bank Account
          </Typography>
          <Box>
            <Typography fontSize={'12px'}>
              Receiver: EcoVacs Tech Pvt. Ltd
            </Typography>
            <Typography fontSize={'12px'}>Bank Name: Canara Bank</Typography>
            <Typography fontSize={'12px'}>Country of bank: India</Typography>
            <Typography fontSize={'12px'}>
              Account Number: 312718521635726626
            </Typography>
            <Typography fontSize={'12px'}>SWIFT/BIC: CNRBINBBXXX</Typography>
            <Typography fontSize={'12px'}>IFSC: CNRB0000540</Typography>
          </Box>
        </Stack>
        <Button
          variant="contained"
          sx={{ width: 'fit-content', margin: '12px 0px' }}
        >
          Invoice
        </Button>
      </Box>
    </Box>
  );
};

export default CreateInvoice;
