import React, { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import {
  Box,
  Grid,
  Dialog,
  DialogContent,
  MenuItem,
  FormControl,
  Stack,
  Link,
  Typography,
  TextField,
} from '@mui/material';
import {
  CustomTitleBox,
  CustomHR,
  StyledTypography,
  StyledTextField,
  CustomMenuItem,
  CustomListSubheader,
} from '../../../chartsOfAccounts/Components/StyledComponents';
import IntlMessages from '@crema/helpers/IntlMessages';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDropzone } from 'react-dropzone';
import Popover from '@mui/material/Popover';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import AddVendorSelect from './Components/AddVendorDropdown';
import SalesTaxSelect from './Components/SalesTaxSelect';
import AddCustomerSelect from './Components/AddCustomerSelect';
import { TransactionDetails } from './Components/AddIncomeInterfaces';
import { datePickerStyles } from '../../../../Global/Styling';

interface AddIncomeDialogProps {
  open: boolean;
  onClose: () => void;
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
      marginRight: '10px', // Override margin for screens with max-width 399px
    },
  },
  disabledField: {
    '& .MuiInputBase-root.Mui-disabled': {
      backgroundColor: '#f1f1f1',
      cursor: 'not-allowed',
    },
  },
}));

const AddIncomeDialog: React.FC<AddIncomeDialogProps> = ({ open, onClose }) => {
  const [transactionDetails, setTransactionDetails] =
    useState<TransactionDetails>({
      date: null,
      description: '',
      account: '',
      categoryType: 20,
      selectedVendor: '',
      originalAmount: '0',
      splitTransactions: [],
      salesTaxSelect: '',
      selectedCustomer: '',
      notes: '',
      file: null,
    });
  const salesTaxes = ['12%', '15%', '17%'];
  const vendors = ['Ali', 'Ahmed', 'Sara', 'Giga'];
  const customers = ['Wahab', 'Ibrahim', 'Sadia'];
  const categories = ['Withdrawl', 'Deposit'];
  const classes = useStyles();
  const [showSalesTax, setShowSalesTax] = useState(false);
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [showVendorDropdown, setShowVendorDropdown] = useState(false);
  const [isVendorAdded, setIsVendorAdded] = useState(false);
  const [salesTaxSelect, setSalesTaxSelect] = React.useState('');
  const [splitTransaction, setSplitTransaction] = useState(false);
  const [amountText, setAmountText] = useState('common.estimate.amount');
  const [amountTextDisabled, setAmountTextDisabled] = useState(false);
  const [splitTransactionsFields, setSplitTransactionsFields] = useState<
    TransactionDetails['splitTransactions']
  >([]);
  // const [categoryType, setCategoryType] = useState<number | null>(null);
  const [salesTaxIncluded, setSalesTaxIncluded] = useState(
    splitTransactionsFields.map(() => false)
  );
  const [showAddCustomerFields, setShowAddCustomerFields] = useState<boolean[]>(
    splitTransactionsFields.map(() => false)
  );
  const [salesTaxCustomerSelects, setSalesTaxCustomerSelects] = useState<
    string[]
  >(splitTransactionsFields.map(() => ''));
  const [selectedVendor, setSelectedVendor] = useState('');

  const [salesTaxSelectsSplit, setSalesTaxSelectsSplit] = React.useState<
    string[]
  >(splitTransactionsFields.map(() => ''));
  const [popoverOpenStates, setPopoverOpenStates] = useState(
    splitTransactionsFields.map(() => false)
  );
  // const [originalAmount, setOriginalAmount] = useState<string>('0');
  const [splitAmountTotalError, setSplitAmountTotalError] =
    useState<boolean>(false);
  const [salesTaxAmountError, setSalesTaxAmountError] =
    useState<boolean>(false);
  const [salesTaxAmount, setSalesTaxAmount] = useState<string>('');
  const [selectedSalesTaxRate, setSelectedSalesTaxRate] = useState<
    string | number
  >('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleDateChange = (date: Date | null) => {
    setTransactionDetails({ ...transactionDetails, date });
  };

  const handleDescriptionChange = (description: string) => {
    setTransactionDetails({ ...transactionDetails, description });
  };

  const handleAccountChange = (account: string) => {
    setTransactionDetails({ ...transactionDetails, account });
  };

  const handleCategoryTypeChange = (selectedValue: number) => {
    setTransactionDetails((prevDetails) => ({
      ...prevDetails,
      categoryType: selectedValue,
    }));
  };

  const handleVendorsChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setTransactionDetails((prevDetails) => ({
      ...prevDetails,
      selectedVendor: value,
    }));
  };

  const handleCustomerWSChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setTransactionDetails((prevDetails) => ({
      ...prevDetails,
      selectedCustomer: value,
    }));
  };

  const handleNotesChange = (notes: string) => {
    setTransactionDetails({ ...transactionDetails, notes });
  };

  const handleOriginalAmountChange = (originalAmount: string) => {
    setTransactionDetails({ ...transactionDetails, originalAmount });
  };

  const handleSalesTaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSalesTaxAmount(value);

    if (salesTaxAmount > transactionDetails.originalAmount) {
      setSalesTaxAmountError(true);
    } else {
      setSalesTaxAmountError(false);
    }
  };

  const handleSalesTaxSelectEditChange = (
    event: SelectChangeEvent<string | number>,
    index: number
  ) => {
    const updatedSalesTaxSelects = [...salesTaxSelectsSplit];
    updatedSalesTaxSelects[index] = event.target.value as string;
    setSalesTaxSelectsSplit(updatedSalesTaxSelects);
    setSelectedSalesTaxRate(event.target.value);
  };

  const toggleAddVendor = () => {
    setShowVendorDropdown(!showVendorDropdown);
    setIsVendorAdded(!isVendorAdded);
  };

  const handleIncludeSalesTaxClick = (index: number) => {
    // Toggle Sales Tax inclusion for the specific split transaction
    const updatedSalesTaxIncluded = [...salesTaxIncluded];
    updatedSalesTaxIncluded[index] = !updatedSalesTaxIncluded[index];
    setSalesTaxIncluded(updatedSalesTaxIncluded);
  };

  const handleAddCustomerChange = (index: number) => {
    const updatedShowAddCustomerFields = [...showAddCustomerFields];
    updatedShowAddCustomerFields[index] = !updatedShowAddCustomerFields[index];
    setShowAddCustomerFields(updatedShowAddCustomerFields);
  };

  const handleSalesTaxSelectChange = (event: SelectChangeEvent) => {
    setTransactionDetails((prevDetails) => ({
      ...prevDetails,
      salesTaxSelect: event.target.value as string,
    }));
  };

  const handleSplitSalesTaxCustomerSelectChange = (
    event: SelectChangeEvent,
    index: number
  ) => {
    const updatedSalesTaxCustomerSelects = [...salesTaxCustomerSelects];
    updatedSalesTaxCustomerSelects[index] = event.target.value as string;
    setSalesTaxCustomerSelects(updatedSalesTaxCustomerSelects);
  };

  const toggleSalesTax = () => {
    setShowSalesTax(!showSalesTax);
  };

  const toggleAddCustomer = () => {
    setShowAddCustomer(!showAddCustomer);
  };

  const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setPopoverAnchorEl(null);
  };

  const resetPopover = () => {
    setSalesTaxSelect('');
    handleClosePopover();
  };

  const handleSplitEditClick = (
    // event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    const updatedPopoverOpenStates = [...popoverOpenStates];
    updatedPopoverOpenStates[index] = !updatedPopoverOpenStates[index];
    setPopoverOpenStates(updatedPopoverOpenStates);
    // setPopoverAnchorEl(event.currentTarget);
  };

  const handleSplitClosePopover = (index: number) => {
    const updatedPopoverOpenStates = [...popoverOpenStates];
    updatedPopoverOpenStates[index] = false;
    setPopoverOpenStates(updatedPopoverOpenStates);
  };

  const resetSplitPopover = (index: number) => {
    const updatedSalesTaxSelects = [...salesTaxSelectsSplit];
    updatedSalesTaxSelects[index] = '';
    setSalesTaxSelectsSplit(updatedSalesTaxSelects);
    handleSplitClosePopover(index);
  };

  const handleSplitTransactionClick = () => {
    toggleAmountText();
    setAmountTextDisabled(true);

    setSplitTransaction(true);
    setShowSalesTax(false);
    const newSplitTransaction = {
      splitAmount: '',
      splitCategory: '',
      customer: '',
      salesTaxAmount: '',
    };

    // Add the new split transaction to the existing list
    setSplitTransactionsFields([
      ...splitTransactionsFields,
      newSplitTransaction,
    ]);
    setShowAddCustomerFields([...showAddCustomerFields, false]);
  };

  const toggleAmountText = () => {
    setAmountText('Original Amount');
  };

  const calculateTotalSplitAmounts = () => {
    const total = splitTransactionsFields.reduce((acc, transaction) => {
      return acc + parseFloat(transaction.splitAmount || '0');
    }, 0);

    return total;
  };

  const calculateTotalTaxAmounts = () => {
    const total = splitTransactionsFields.reduce((acc, transaction) => {
      return acc + parseFloat(transaction.salesTaxAmount || '0');
    }, 0);

    return total;
  };

  const handleSplitAmountChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const updatedTransactions = [...splitTransactionsFields];
    updatedTransactions[index].splitAmount = (
      e.target as HTMLInputElement
    ).value;
    setSplitTransactionsFields(updatedTransactions);

    const totalSplitAmount = calculateTotalSplitAmounts();
    const originalAmountNumber = parseFloat(transactionDetails.originalAmount);

    if (totalSplitAmount > originalAmountNumber) {
      setSplitAmountTotalError(true);
    } else {
      setSplitAmountTotalError(false);
    }
  };

  const calculateSalesTaxAmount = (index: number) => {
    const splitAmount = parseFloat(
      splitTransactionsFields[index].splitAmount || '0'
    );
    const taxRate = parseFloat(selectedSalesTaxRate as string) / 100;
    const salesTaxAmount = (splitAmount * taxRate).toFixed(2);
    return salesTaxAmount;
  };

  const handleSplitTaxAmountChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const updatedTransactions = [...splitTransactionsFields];
    updatedTransactions[index].salesTaxAmount = (
      e.target as HTMLInputElement
    ).value;
    setSplitTransactionsFields(updatedTransactions);

    const totalTaxAmount = calculateTotalTaxAmounts();
    const originalAmountNumber = parseFloat(transactionDetails.originalAmount);
    if (totalTaxAmount > originalAmountNumber) {
      setSalesTaxAmountError(true);
    } else {
      setSalesTaxAmountError(false);
    }
  };

  const handleSplitCategoryChange = (
    event: SelectChangeEvent<string>,
    index: number
  ) => {
    const updatedTransactions = [...splitTransactionsFields];
    updatedTransactions[index].splitCategory = event.target.value;
    setSplitTransactionsFields(updatedTransactions);
  };

  const handleCustomerChange = (
    event: SelectChangeEvent<string>,
    index: number
  ) => {
    const updatedSplitTransactions = [...splitTransactionsFields];
    updatedSplitTransactions[index].customer = event.target.value;
    setSplitTransactionsFields(updatedSplitTransactions);
  };

  const handleRemoveSplit = (indexToRemove: number) => {
    const updatedSplitTransactions = [...splitTransactionsFields];
    updatedSplitTransactions.splice(indexToRemove, 1);
    setSplitTransactionsFields(updatedSplitTransactions);

    // Check if there are any split transactions left
    if (updatedSplitTransactions.length === 0) {
      // No splits left, change the original amount text
      setSplitTransaction(false);
      setAmountText('common.estimate.amount');
      setAmountTextDisabled(false);
    }
  };

  const handleFileDrop = (acceptedFiles: File[]) => {
    if (fileUploaded) {
      // If a file has already been uploaded, do nothing
      return;
    }

    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const allowedFormats = [
        'image/jpg',
        'image/jpeg',
        'image/gif',
        'image/tiff',
        'image/tif',
        'image/bmp',
        'image/png',
        'application/pdf',
        'image/heic',
      ];
      const maxSize = 6 * 1024 * 1024; // 6MB in bytes

      if (allowedFormats.includes(file.type) && file.size <= maxSize) {
        // Handle the valid file here, you can set it in state or perform other actions
        const reader = new FileReader();
        reader.onload = (e) => {
          const uploadedImageUrl = e.target?.result as string;
          setUploadedImage(uploadedImageUrl);
          setFileUploaded(true); // Set fileUploaded to true after successful upload
        };
        reader.readAsDataURL(file);
      } else {
        // Display an error message for invalid files
        console.error('Invalid file format or size.');
      }
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setFileUploaded(false); // Reset fileUploaded when removing the image
  };

  const viewOriginalReceipt = () => {
    if (uploadedImage) {
      // Display the image within your application
      const imageWindow = window.open('', '_blank');
      imageWindow!.document.write(
        '<html><head><title>Original Receipt</title>'
      );
      imageWindow!.document.write('<style>');
      imageWindow!.document.write('html, body { height: 100%; margin: 0; }');
      imageWindow!.document.write(
        'body { display: flex; align-items: center; justify-content: center; }'
      );
      imageWindow!.document.write(
        'img { max-width: 100%; max-height: 150px; border-radius: 8px; }'
      );
      imageWindow!.document.write('</style></head><body>');
      imageWindow!.document.write('<div>');
      imageWindow!.document.write(
        '<img src="' + uploadedImage + '" alt="Original Receipt">'
      );
      imageWindow!.document.write('</div>');
      imageWindow!.document.write('</body></html>');
      imageWindow!.document.close();
    }
  };

  // UseDropzone hook to handle file drop
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleFileDrop,
    maxFiles: 1, // Allow only one file to be dropped
    maxSize: 6 * 1024 * 1024, // 6MB in bytes
    accept: {
      'image/png': [
        '.jpg',
        '.jpeg',
        '.gif',
        '.tiff',
        '.tif',
        '.bmp',
        '.png',
        '.pdf',
        '.heic',
      ],
    },
  });

  const resetDialogFields = () => {
    setTransactionDetails({
      date: null,
      description: '',
      account: '',
      categoryType: 20,
      selectedVendor: '',
      originalAmount: '0',
      splitTransactions: [],
      salesTaxSelect: '',
      selectedCustomer: '',
      notes: '',
      file: null,
    });
    // Reset other state variables as needed
    setShowSalesTax(false);
    setShowAddCustomer(false);
    setPopoverAnchorEl(null);
    setShowVendorDropdown(false);
    setIsVendorAdded(false);
    setSalesTaxSelect('');
    setSplitTransaction(false);
    setAmountText('common.estimate.amount');
    setAmountTextDisabled(false);
    setSplitTransactionsFields([]);
    setSalesTaxIncluded([]);
    setShowAddCustomerFields([]);
    setSalesTaxCustomerSelects([]);
    setSelectedVendor('');
    setSalesTaxSelectsSplit([]);
    setPopoverOpenStates([]);
    setSplitAmountTotalError(false);
    setSalesTaxAmountError(false);
    setSalesTaxAmount('');
    setSelectedSalesTaxRate('');
    setUploadedImage(null);
    setFileUploaded(false);
  };

  const handleCloseDialog = () => {
    // Call the resetDialogFields function to reset the dialog fields
    resetDialogFields();
    onClose();
  };
  const dateStyle = datePickerStyles();

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <CustomTitleBox>
        <DialogTitle>
          {/* {editEntry ? (
            `${editEntry.accountName}`
          ) : (
            <IntlMessages id="COA.DialogTitle" />
          )} */}
          <IntlMessages id="transactions.addIncome" />
        </DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCloseDialog}
          sx={{ mr: 6 }}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </CustomTitleBox>
      <CustomHR />
      <Box style={{ padding: '2%', paddingRight: '2%', background: '#f4f7fe' }}>
        <DialogContent>
          <Grid
            container
            spacing={2}
            columns={12}
            alignItems="center"
            marginTop={'2%'}
          >
            <Grid item xs={12} sm={6}>
              <Stack direction="column">
                <Typography variant="subtitle1" className={classes.smallLabel}>
                  Date
                  {/* {messages['COA.DialogAT'] as string} */}
                  {/* <CustomAsterik>*</CustomAsterik> */}
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={transactionDetails.date}
                    onChange={handleDateChange}
                    sx={{ background: 'white', borderRadius: '8px' }}
                    className={dateStyle.pickerInput}
                  />
                </LocalizationProvider>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack direction="column">
                <Typography variant="subtitle1" className={classes.smallLabel}>
                  <IntlMessages id="common.description" />
                  {/* {messages['COA.DialogAT'] as string} */}
                  {/* <CustomAsterik>*</CustomAsterik> */}
                </Typography>
                <StyledTextField
                  value={transactionDetails.description}
                  onChange={(e) => handleDescriptionChange(e.target.value)}
                  fullWidth
                  size="small"
                />
              </Stack>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            columns={12}
            alignItems="center"
            marginTop={'2%'}
          >
            <Grid item xs={12} sm={6}>
              <Stack direction="column">
                <Typography variant="subtitle1" className={classes.smallLabel}>
                  <IntlMessages id="sidebar.pages.extraPages.account" />
                </Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={transactionDetails.account}
                    onChange={(e) =>
                      handleAccountChange(e.target.value as string)
                    }
                  >
                    <CustomListSubheader key="income-header">
                      {/* {messages['COA.IncomeTitle'] as string} */}
                      Cash and Bank
                    </CustomListSubheader>
                    ,
                    <MenuItem value={10} sx={{ paddingLeft: '14%' }}>
                      Ten
                    </MenuItem>
                    ,
                    <MenuItem value={20} sx={{ paddingLeft: '14%' }}>
                      Twenty
                    </MenuItem>
                    ,
                    <MenuItem value={30} sx={{ paddingLeft: '14%' }}>
                      Thirty
                    </MenuItem>
                    ,
                    <CustomHR />
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack direction="column">
                <Typography variant="subtitle1" className={classes.smallLabel}>
                  <IntlMessages id="common.type" />
                </Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={transactionDetails.categoryType}
                    onChange={(e) => {
                      const selectedValue = Number(e.target.value);
                      handleCategoryTypeChange(selectedValue);
                    }}
                  >
                    <CustomMenuItem value={10}>Withdrawl</CustomMenuItem>
                    <CustomMenuItem value={20}>Deposit</CustomMenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
          </Grid>

          {splitTransaction && (
            <>
              {showVendorDropdown && transactionDetails.categoryType === 10 && (
                <Grid
                  container
                  spacing={2}
                  columns={12}
                  alignItems="center"
                  marginTop={'2%'}
                >
                  <Grid item xs={12} sm={6}>
                    <Stack direction="column">
                      <Typography
                        variant="subtitle1"
                        className={classes.smallLabel}
                      >
                        Vendor
                      </Typography>
                      <AddVendorSelect
                        value={transactionDetails.selectedVendor}
                        onChange={handleVendorsChange}
                        vendors={vendors}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              )}
              {transactionDetails.categoryType === 10 && (
                <Stack
                  direction={'row'}
                  spacing={2}
                  marginBottom={'2%'}
                  marginTop={'2%'}
                >
                  <Link
                    component="button"
                    variant="body2"
                    underline="hover"
                    onClick={toggleAddVendor}
                  >
                    {isVendorAdded ? 'Remove Vendor' : 'Add Vendor'}
                  </Link>
                </Stack>
              )}
              <Typography variant="h4" marginTop={'2%'}>
                Split transaction
              </Typography>
            </>
          )}

          <Grid
            container
            spacing={2}
            columns={12}
            alignItems="center"
            marginTop={'2%'}
          >
            <Grid item xs={12} sm={6}>
              <Stack direction="column">
                <Typography variant="subtitle1" className={classes.smallLabel}>
                  <IntlMessages id={amountText} />
                </Typography>
                <StyledTextField
                  value={transactionDetails.originalAmount}
                  onChange={(e) => handleOriginalAmountChange(e.target.value)}
                  fullWidth
                  size="small"
                  disabled={amountTextDisabled}
                  className={`${
                    amountTextDisabled ? classes.disabledField : ''
                  }`}
                />
              </Stack>
            </Grid>
            {splitAmountTotalError && (
              <Typography variant="body2" color="error">
                Total split amount cannot exceed the original amount.
              </Typography>
            )}
            {splitTransactionsFields.map((transaction, index) => (
              <>
                <Grid
                  container
                  spacing={2}
                  columns={12}
                  alignItems="center"
                  marginTop={'2%'}
                >
                  <Grid item xs={12} sm={6}>
                    <Stack direction="column">
                      <Typography variant="subtitle1">Split Amount</Typography>
                      <TextField
                        value={transaction.splitAmount}
                        onChange={(e) => handleSplitAmountChange(e, index)}
                        fullWidth
                        size="small"
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Stack direction="column">
                      <Typography variant="subtitle1">Category</Typography>
                      <FormControl fullWidth size="small">
                        <Select
                          value={transaction.splitCategory}
                          onChange={(e) => handleSplitCategoryChange(e, index)}
                        >
                          <CustomMenuItem value={10}>
                            Cash & Bank
                          </CustomMenuItem>
                          <CustomMenuItem value={20}>Income</CustomMenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {showAddCustomerFields[index] && (
                      <Stack direction="column">
                        <Typography
                          variant="subtitle1"
                          className={classes.smallLabel}
                        >
                          Customer
                        </Typography>
                        <AddCustomerSelect
                          value={salesTaxCustomerSelects[index]}
                          onChange={(e) =>
                            handleSplitSalesTaxCustomerSelectChange(e, index)
                          }
                          customers={customers}
                        />
                      </Stack>
                    )}
                  </Grid>
                </Grid>

                <Stack direction={'row'} spacing={2} marginTop={'2%'}>
                  {!salesTaxIncluded[index] ? (
                    <Link
                      component="button"
                      variant="body2"
                      underline="hover"
                      onClick={() => handleIncludeSalesTaxClick(index)}
                    >
                      Include sales tax/VAT
                    </Link>
                  ) : (
                    <Typography
                      variant="body2"
                      display="flex"
                      alignItems="center"
                    >
                      {salesTaxSelectsSplit[index] || salesTaxes[0]} included:
                      $0.00
                      <Link
                        component="button"
                        variant="body2"
                        onClick={() => handleSplitEditClick(index)}
                        underline="hover"
                      >
                        {' '}
                        Edit
                      </Link>
                      <Popover
                        open={popoverOpenStates[index]}
                        anchorEl={popoverAnchorEl}
                        onClose={() => handleSplitClosePopover(index)}
                        anchorOrigin={{
                          vertical: 'center',
                          horizontal: 'center',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'center',
                        }}
                        PaperProps={{ style: { width: '15%' } }}
                      >
                        <IconButton
                          edge="end"
                          color="inherit"
                          onClick={() => handleSplitClosePopover(index)}
                          sx={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            marginRight: '0',
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                        {/* Popover content */}
                        <Stack
                          direction="column"
                          style={{ padding: '12% 10% 16px' }}
                        >
                          {salesTaxAmountError && (
                            <Typography variant="body2" color="error">
                              The tax amount you entered is more than the
                              transaction. Please change the tax amount.
                            </Typography>
                          )}
                          {/* Add your popover content here */}
                          <Typography
                            variant="body1"
                            marginBottom="0.75rem"
                            textAlign="left"
                          >
                            Include sales tax/VAT
                          </Typography>
                          <SalesTaxSelect
                            value={salesTaxSelectsSplit[index]}
                            onChange={(e) =>
                              handleSalesTaxSelectEditChange(e, index)
                            }
                            salesTaxes={salesTaxes}
                            // defaultValue={salesTaxes[0]}
                          />

                          {salesTaxSelectsSplit[index] && (
                            <>
                              <TextField
                                value={calculateSalesTaxAmount(index)}
                                onChange={(e) =>
                                  handleSplitTaxAmountChange(e, index)
                                }
                                placeholder="Sales tax amount"
                                sx={{ marginTop: '8px' }}
                                fullWidth
                                size="small"
                                disabled={!selectedSalesTaxRate}
                              />
                              <Link
                                sx={{ marginTop: '8px' }}
                                component="button"
                                variant="body2"
                                display="flex"
                                underline="hover"
                                onClick={() => resetSplitPopover(index)}
                              >
                                Remove sales tax
                              </Link>
                            </>
                          )}
                          <Stack
                            direction="row"
                            marginTop={'8px'}
                            marginBottom={'8px'}
                            justifyContent={'space-between'}
                          >
                            <Link
                              component="button"
                              variant="body2"
                              display="flex"
                              underline="hover"
                            >
                              Create new tax
                            </Link>
                            <Link
                            // href={'https://' + selectedData.website}
                            // href="#"
                            // target="_blank"
                            >
                              <OpenInNewOutlinedIcon />
                            </Link>
                          </Stack>
                          {salesTaxSelectsSplit[index] && (
                            <Stack direction="column">
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                              >
                                <Typography variant="body2">
                                  Before sales tax:
                                </Typography>
                                <Typography variant="body2">
                                  {salesTaxSelectsSplit[index] || salesTaxes[0]}
                                </Typography>
                              </Stack>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                              >
                                <Typography variant="body2">
                                  Sales tax amount:
                                </Typography>
                                <Typography variant="body2">
                                  ${calculateSalesTaxAmount(index)}
                                </Typography>
                              </Stack>
                              <Stack
                                direction="row"
                                justifyContent="space-between"
                              >
                                <Typography variant="body2">
                                  After sales tax:
                                </Typography>
                                <Typography variant="body2">12%</Typography>
                              </Stack>
                            </Stack>
                          )}
                          <Stack
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                            marginTop={'8px'}
                          >
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => setPopoverAnchorEl(null)}
                            >
                              Cancel
                            </Button>
                            <Button variant="contained" size="small">
                              Update
                            </Button>
                          </Stack>
                        </Stack>
                      </Popover>
                    </Typography>
                  )}
                  <Link
                    component="button"
                    variant="body2"
                    underline="hover"
                    onClick={() => {
                      handleAddCustomerChange(index);
                    }}
                  >
                    {showAddCustomerFields[index]
                      ? 'Remove Customer'
                      : 'Add Customer'}
                  </Link>
                  <Link
                    component="button"
                    variant="body2"
                    underline="hover"
                    onClick={() => handleRemoveSplit(index)}
                  >
                    Remove Split
                  </Link>
                </Stack>
              </>
            ))}
            {!splitTransaction && (
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" className={classes.smallLabel}>
                  <IntlMessages id="common.category" />
                </Typography>
                <FormControl fullWidth size="small">
                  <Select>
                    <CustomMenuItem value={10}>Cash and Bank</CustomMenuItem>
                    <CustomMenuItem value={20}>Income</CustomMenuItem>
                  </Select>
                </FormControl>
              </Grid>
            )}
            {!splitTransaction && (
              <>
                {showAddCustomer && (
                  <Grid item xs={12} sm={6}>
                    <Stack direction="column">
                      <Typography
                        variant="subtitle1"
                        className={classes.smallLabel}
                      >
                        Customer
                      </Typography>
                      <AddCustomerSelect
                        value={transactionDetails.selectedCustomer}
                        onChange={handleCustomerWSChange}
                        customers={customers}
                      />
                    </Stack>
                  </Grid>
                )}
                {showVendorDropdown &&
                  transactionDetails.categoryType === 10 && ( // Render the dropdown select when showDropdown is true
                    <Grid item xs={12} sm={6}>
                      <AddVendorSelect
                        value={transactionDetails.selectedVendor}
                        onChange={handleVendorsChange}
                        vendors={vendors}
                      />
                    </Grid>
                  )}
              </>
            )}
          </Grid>
          {!splitTransaction && (
            <Stack direction={'row'} spacing={2} marginTop={'2%'}>
              {!showSalesTax ? (
                <Link
                  component="button"
                  variant="body2"
                  underline="hover"
                  onClick={toggleSalesTax}
                >
                  Include sales tax/VAT
                </Link>
              ) : (
                <Typography variant="body2" display="flex" alignItems="center">
                  {salesTaxSelect || salesTaxes[0]} included: $0.00
                  <Link
                    component="button"
                    variant="body2"
                    onClick={(event) => handleEditClick(event)}
                    underline="hover"
                  >
                    {' '}
                    Edit
                  </Link>
                  <Popover
                    open={Boolean(popoverAnchorEl)}
                    anchorEl={popoverAnchorEl}
                    onClose={() => setPopoverAnchorEl(null)}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    PaperProps={{ style: { width: '15%' } }}
                  >
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={() => setPopoverAnchorEl(null)}
                      sx={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        marginRight: '0',
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    {/* Popover content */}
                    <Stack
                      direction="column"
                      style={{ padding: '12% 10% 16px' }}
                    >
                      {salesTaxAmountError && (
                        <Typography variant="body2" color="error">
                          The tax amount you entered is more than the
                          transaction. Please change the tax amount.
                        </Typography>
                      )}
                      {/* Add your popover content here */}
                      <Typography
                        variant="body1"
                        marginBottom="0.75rem"
                        textAlign="left"
                      >
                        Include sales tax/VAT
                      </Typography>
                      <SalesTaxSelect
                        value={transactionDetails.salesTaxSelect} // Update to use transactionDetails
                        onChange={handleSalesTaxSelectChange}
                        salesTaxes={salesTaxes}
                        // defaultValue={salesTaxes[0]}
                      />
                      {transactionDetails.salesTaxSelect && (
                        <>
                          <TextField
                            value={salesTaxAmount}
                            onChange={handleSalesTaxChange}
                            placeholder="Sales tax amount"
                            sx={{ marginTop: '8px' }}
                            fullWidth
                            size="small"
                          />
                          <Link
                            sx={{ marginTop: '8px' }}
                            component="button"
                            variant="body2"
                            display="flex"
                            underline="hover"
                            onClick={resetPopover}
                          >
                            Remove sales tax
                          </Link>
                        </>
                      )}
                      <Stack
                        direction="row"
                        marginTop={'8px'}
                        marginBottom={'8px'}
                        justifyContent={'space-between'}
                      >
                        <Link
                          component="button"
                          variant="body2"
                          display="flex"
                          underline="hover"
                        >
                          Create new tax
                        </Link>
                        <Link
                        // href={'https://' + selectedData.website}
                        // href="#"
                        // target="_blank"
                        >
                          <OpenInNewOutlinedIcon />
                        </Link>
                      </Stack>
                      {transactionDetails.salesTaxSelect && (
                        <Stack direction="column">
                          <Stack direction="row" justifyContent="space-between">
                            <Typography variant="body2">
                              Before sales tax:
                            </Typography>
                            <Typography variant="body2">12%</Typography>
                          </Stack>
                          <Stack direction="row" justifyContent="space-between">
                            <Typography variant="body2">
                              Sales tax amount:
                            </Typography>
                            <Typography variant="body2">12%</Typography>
                          </Stack>
                          <Stack direction="row" justifyContent="space-between">
                            <Typography variant="body2">
                              After sales tax:
                            </Typography>
                            <Typography variant="body2">12%</Typography>
                          </Stack>
                        </Stack>
                      )}
                      <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        marginTop={'8px'}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => setPopoverAnchorEl(null)}
                        >
                          Cancel
                        </Button>
                        <Button variant="contained" size="small">
                          Update
                        </Button>
                      </Stack>
                    </Stack>
                  </Popover>
                </Typography>
              )}
              <Link
                component="button"
                variant="body2"
                underline="hover"
                onClick={toggleAddCustomer}
              >
                {showAddCustomer ? 'Remove Customer' : 'Add Customer'}
              </Link>
              {transactionDetails.categoryType === 10 && (
                <Link
                  component="button"
                  variant="body2"
                  underline="hover"
                  onClick={toggleAddVendor}
                >
                  {isVendorAdded ? 'Remove Vendor' : 'Add Vendor'}
                </Link>
              )}
            </Stack>
          )}
          <Stack direction={'row'} spacing={2} marginTop={'2%'}>
            <Button
              variant="outlined"
              size="small"
              onClick={handleSplitTransactionClick}
              sx={{
                borderColor: '#57b8c9',
                color: '#57b8c9',
                '&:hover': {
                  borderColor: '#57b8c9',
                },
              }}
            >
              Split transactions
            </Button>
          </Stack>
          <Box marginTop={'40px'}>
            <Typography
              variant="subtitle1"
              className={classes.smallLabel}
              marginBottom={'4px'}
            >
              <IntlMessages id="common.notes" />
              {/* {messages['COA.DialogAT'] as string} */}
              {/* <CustomAsterik>*</CustomAsterik> */}
            </Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              fullWidth
              placeholder="Write a note here..."
              value={transactionDetails.notes}
              onChange={(e) => handleNotesChange(e.target.value)}
            />
          </Box>
          <Stack direction="column" marginTop={'40px'}>
            <Typography
              variant="subtitle1"
              className={classes.smallLabel}
              marginBottom={'4px'}
            >
              <IntlMessages id="common.recceipt" />
              {/* {messages['COA.DialogAT'] as string} */}
              {/* <CustomAsterik>*</CustomAsterik> */}
            </Typography>

            <Box
              display="flex"
              justifyContent={'center'}
              alignItems={'center'}
              border={'1px solid black'}
              borderRadius={'8px'}
              flexDirection="column"
              style={{
                outline: 'none',
                borderStyle: 'dashed',
                height: 'fit-content',
              }}
            >
              {uploadedImage ? ( // Render the uploaded image if available
                <>
                  <Box padding={'16px'}>
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '150px',
                        borderRadius: '8px',
                      }} // Set the maximum height to 150px
                    />
                  </Box>
                  <Button onClick={viewOriginalReceipt}>
                    View original receipt
                  </Button>
                  <Button onClick={removeImage}>Remove Image</Button>
                </>
              ) : (
                <Box
                  sx={{ maxWidth: '100%', maxHeight: '150px' }}
                  padding={'16px'}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} disabled={fileUploaded} />
                  <Typography
                    variant="subtitle2"
                    display={'flex'}
                    justifyContent="center"
                  >
                    Drag your file here or
                    <Link component="button" variant="subtitle2">
                      Select a file
                    </Link>
                    to upload
                  </Typography>
                  <Typography
                    variant="body2"
                    display="flex"
                    justifyContent="center"
                    margin="2% 16%"
                  >
                    Files must be 6MB or smaller, and in one of these formats:
                    JPG, JPEG, GIF, TIFF, TIF, BMP, PNG, PDF, or HEIC
                  </Typography>
                </Box>
              )}
            </Box>
          </Stack>
        </DialogContent>
      </Box>
      <CustomHR />
      <DialogActions sx={{ padding: '2%' }}>
        <Button
          onClick={handleCloseDialog}
          color="primary"
          variant="outlined"
          size="medium"
          sx={{ borderRadius: '8px', borderColor: '#57b8c9' }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddIncomeDialog;
