import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  Grid,
  DialogActions,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Link,
  Button,
  Box,
} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  DialogTitle,
  StyledTextField,
  StyledTypography,
  Customp,
  CustomHR1,
  CustomHR,
  ShowHideGrid,
  CustomTitleBox,
  CustomAsterik,
  CustomListSubheader,
  CustomMenuItem,
} from '../../Components/StyledComponents';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useIntl } from 'react-intl';
import { makeStyles } from '@mui/styles';

export interface FormData {
  accountName: string;
  accountID: number; // Changed to number type
  description: string;
  category: string;
  currency: string;
}

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
  currentTable: string;
  editEntry: FormData | null;
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
}));

const CustomDialog: React.FC<DialogProps> = ({
  open,
  onClose,
  onSubmit,
  currentTable,
  editEntry,
}) => {
  const classes = useStyles();
  const [accountName, setAccountName] = useState('');
  const [accountID, setAccountID] = useState<number | ''>('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [accountNameError, setAccountNameError] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [currency, setCurrency] = useState('USD');

  const currencyOptions = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD'];

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(event.target.checked);
  };

  useEffect(() => {
    if (editEntry) {
      setAccountName(editEntry.accountName);
      setAccountID(editEntry.accountID);
      setDescription(editEntry.description);
      setCategory(editEntry.category);
      setCurrency(editEntry.currency);
    } else {
      setAccountName('');
      setAccountID('');
      setDescription('');
      setCategory(currentTable);
      setCurrency('USD');
    }
  }, [open, currentTable, editEntry]);

  const handleAccountNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setAccountName(input);
    if (/[^a-zA-Z\s]/.test(input)) {
      setAccountNameError(
        'Account Name cannot contain numbers or special characters.'
      );
    } else {
      setAccountNameError('');
    }
  };

  const handleSubmit = () => {
    if (accountName.trim() === '') {
      setAccountNameError('Account Name cannot be empty.');
    } else {
      setAccountNameError('');
      onSubmit({
        accountName,
        accountID: accountID as number,
        description,
        category,
        currency,
      });
      onClose();
    }
  };

  const tabSelected = () => {
    const savedValue = localStorage.getItem('selectedTabIndex');
    return savedValue ?? '';
  };

  const handleCancel = () => {
    setAccountName('');
    setAccountID('');
    setDescription('');
    setCategory(currentTable);
    setCurrency('USD');
    setAccountNameError('');
    onClose();
  };

  const isEditMode = !!editEntry;

  const [showHiddenFields, setShowHiddenFields] = useState(false);

  const handleShowHiddenFields = () => {
    setShowHiddenFields((prevState) => !prevState);
  };
  const { messages } = useIntl();
  return (
    <Dialog open={open} onClose={handleCancel}>
      <CustomTitleBox>
        <DialogTitle>
          {editEntry ? (
            `${editEntry.accountName}`
          ) : (
            <IntlMessages id="COA.DialogTitle" />
          )}
        </DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleCancel}
          sx={{ mr: 6 }}
          className={classes.closeButton}
        >
          <CloseIcon />
        </IconButton>
      </CustomTitleBox>
      <CustomHR />
      <Box style={{ padding: '2%', marginRight: '10%' }}>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <StyledTypography
                variant="subtitle1"
                className={classes.smallLabel}
              >
                {messages['COA.DialogAT'] as string}
                <CustomAsterik>*</CustomAsterik>
              </StyledTypography>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth size="small">
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  // disabled={
                  //   isEditMode &&
                  //   (tabSelected() === '1' || tabSelected() === '2')
                  // }
                >
                  {/* {tabSelected() === '0' && [ */}
                  <CustomListSubheader key="income-header">
                    {messages['COA.IncomeTitle'] as string}
                  </CustomListSubheader>
                  ,
                  <CustomMenuItem key="income" value="income">
                    {messages['COA.IncomeTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem key="discount" value="discount">
                    {messages['COA.DiscountTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem key="other-income" value="otherIncome">
                    {messages['COA.OIETitle'] as string}
                  </CustomMenuItem>
                  ,{/* ]} */}
                  {/* {tabSelected() === '3' && [ */}
                  <CustomListSubheader key="income-header">
                    {messages['COA.IncomeTitle'] as string}
                  </CustomListSubheader>
                  ,
                  <CustomMenuItem key="income" value="income">
                    {messages['COA.IncomeTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem key="discount" value="discount">
                    {messages['COA.DiscountTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem key="other-income" value="otherIncome">
                    {messages['COA.OIETitle'] as string}
                  </CustomMenuItem>
                  ,{/* ]} */}
                  {/* {tabSelected() === '2' && [ */}
                  <CustomListSubheader key="liabilities&CC">
                    {messages['chartOfAccountApp.liabilities'] as string}
                  </CustomListSubheader>
                  ,
                  <CustomMenuItem key="credit-cards" value="creditCards">
                    {messages['COA.CreditCardTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="customer-pp"
                    value="customerPrePayments&CC"
                  >
                    {messages['COA.CPP&CCTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem key="due-payroll" value="dueForPayroll">
                    {messages['COA.DPRTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem key="due-to-yoBO" value="dueToYou&OtherBO">
                    {messages['COA.DY&OBOTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="expected-payments"
                    value="expectedPayments"
                  >
                    {messages['COA.ExpectedPaymentsTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="loan-and-line"
                    value="loanAndLineOfCredit"
                  >
                    {messages['COA.L&LCTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="other-ltLiability"
                    value="otherLongTermLiability"
                  >
                    {messages['COA.OLTLTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="other-stLiability"
                    value="otherShortTermLiability"
                  >
                    {messages['COA.OSTLTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem key="sales-taxes" value="salesTaxes">
                    {messages['COA.STTitle'] as string}
                  </CustomMenuItem>
                  ,{/* ]} */}
                  {tabSelected() === '4' && [
                    <CustomListSubheader key="expenses">
                      {messages['chartOfAccountApp.expenses'] as string}
                    </CustomListSubheader>,
                    <CustomMenuItem
                      key="operating-expenses"
                      value="operatingExpense"
                    >
                      {messages['COA.OETitle'] as string}
                    </CustomMenuItem>,
                    <CustomMenuItem
                      key="cost-of-goods-sold"
                      value="costofGoodsSold"
                    >
                      {messages['COA.COGSTitle'] as string}
                    </CustomMenuItem>,
                    <CustomMenuItem
                      key="payment-feeExpense"
                      value="paymentFeeExpense"
                    >
                      {messages['COA.PFETitle'] as string}
                    </CustomMenuItem>,
                    <CustomMenuItem
                      key="payroll-expense"
                      value="payrollExpense"
                    >
                      {messages['COA.PETitle'] as string}
                    </CustomMenuItem>,
                  ]}
                  {/* {tabSelected() === '5' && [ */}
                  <CustomListSubheader key="equity">
                    {messages['chartOfAccountApp.equity'] as string}
                  </CustomListSubheader>
                  ,
                  <CustomMenuItem key="bocd" value="businessOwnerCD">
                    {messages['COA.BOC&DTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="retained-earning"
                    value="retainedEarnings"
                  >
                    {messages['COA.RatainedEarningsTitle'] as string}
                  </CustomMenuItem>
                  ,{/* ]} */}
                  {/* {tabSelected() === '1' && [ */}
                  <CustomListSubheader key="assets">
                    {messages['chartOfAccountApp.assets'] as string}
                  </CustomListSubheader>
                  ,
                  <CustomMenuItem key="cash-and-bank" value="cashAndBank">
                    {messages['COA.CashAndBank'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem key="money-inTransit" value="moneyInTransit">
                    {messages['COA.MITTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="expected-paymentCustomers"
                    value="expectedPaymentsFromCustomers"
                  >
                    {messages['COA.ExpectedPaymentsTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="property-plantEquipment"
                    value="propertyPlantEquipment"
                  >
                    {messages['COA.PP&ETitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem key="inven" value="inventory">
                    {messages['COA.InventoryTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="depr-amortization"
                    value="depreciationAndAmortization"
                  >
                    {messages['COA.D&ATitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="other-ltLiability"
                    value="otherLongTermLiability"
                  >
                    {messages['COA.OLTTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="other-stLiability"
                    value="otherShortTermLiability"
                  >
                    {messages['COA.OSTTitle'] as string}
                  </CustomMenuItem>
                  ,
                  <CustomMenuItem
                    key="vendor-ppAndvc"
                    value="vendorPrepaymentAndVendorCredits"
                  >
                    {messages['COA.VPP&VCTitle'] as string}
                  </CustomMenuItem>
                  ,{/* ]} */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <StyledTypography
                variant="subtitle1"
                className={classes.smallLabel}
              >
                {messages['COA.DialogAN'] as string}
                <CustomAsterik>*</CustomAsterik>
              </StyledTypography>
            </Grid>
            <Grid item xs={8}>
              <StyledTextField
                value={accountName}
                onChange={handleAccountNameChange}
                fullWidth
                error={!!accountNameError}
                helperText={accountNameError}
                size="small"
              />
            </Grid>

            {/* {tabSelected() === '1' ||
            tabSelected() === '0' ||
            tabSelected() === '2' ||
            tabSelected() === '5' ? ( */}
            <>
              <Grid item xs={4}>
                <StyledTypography
                  variant="subtitle1"
                  className={classes.smallLabel}
                >
                  {messages['COA.DialogCurrency'] as string}
                </StyledTypography>
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth size="small">
                  <Select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    disabled={
                      isEditMode &&
                      (tabSelected() === '1' || tabSelected() === '5')
                    }
                  >
                    {currencyOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </>
            {/* ) : null} */}
            {/* Conditionally render the Account ID and Description fields */}
            {/* {!isEditMode && ( */}
            <>
              <Grid item xs={4}>
                <StyledTypography
                  variant="subtitle1"
                  className={classes.smallLabel}
                >
                  {messages['COA.DialogAI'] as string}
                </StyledTypography>
              </Grid>
              <Grid item xs={8}>
                <StyledTextField
                  value={accountID === '' ? '' : accountID.toString()}
                  onChange={(e) =>
                    setAccountID(
                      e.target.value === '' ? '' : Number(e.target.value)
                    )
                  }
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <StyledTypography
                  variant="subtitle1"
                  className={classes.smallLabel}
                >
                  {messages['COA.DialogAD'] as string}
                </StyledTypography>
              </Grid>
              <Grid item xs={8}>
                <StyledTextField
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  fullWidth
                  size="small"
                  multiline
                  rows={1}
                />
              </Grid>
            </>
            {/* )} */}
          </Grid>

          {/* Show button to display hidden fields in edit mode */}
          {/* {isEditMode && ( */}
          <ShowHideGrid item xs={2}>
            <Link
              sx={{ py: '3%', marginLeft: '5%' }}
              component="button"
              variant="body2"
              onClick={handleShowHiddenFields}
              underline="none"
              className={classes.smallLabel}
            >
              {showHiddenFields ? (
                <IntlMessages id="COA.DialogHide" />
              ) : (
                <IntlMessages id="COA.DialogEdit" />
              )}
            </Link>
          </ShowHideGrid>
          {/* )} */}

          {/* Conditionally render the hidden fields in edit mode */}
          {/* {isEditMode && showHiddenFields && ( */}
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <StyledTypography
                variant="subtitle1"
                className={classes.smallLabel}
              >
                {messages['COA.DialogAI'] as string}
              </StyledTypography>
            </Grid>
            <Grid item xs={8}>
              <StyledTextField
                value={accountID === '' ? '' : accountID.toString()}
                onChange={(e) =>
                  setAccountID(
                    e.target.value === '' ? '' : Number(e.target.value)
                  )
                }
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <StyledTypography
                variant="subtitle1"
                className={classes.smallLabel}
              >
                {messages['COA.DialogAD'] as string}
              </StyledTypography>
            </Grid>
            <Grid item xs={8}>
              <StyledTextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                size="small"
              />
            </Grid>
          </Grid>
          {/* )} */}
          {/* Show checkbox field in edit mode */}
          {/* {isEditMode && ( */}
          <Grid
            container
            spacing={2}
            style={{
              display: 'flex',
              paddingTop: '4%',
            }}
          >
            <Grid item xs={4}>
              <StyledTypography
                variant="body1"
                gutterBottom
                style={{ flex: 1 }}
                className={classes.smallLabel}
              >
                {messages['COA.DialogArchiveAccount'] as string}
              </StyledTypography>
            </Grid>
            <Grid item xs={8} sx={{ paddingLeft: '18px' }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkbox}
                      onChange={handleCheckboxChange}
                      color="primary"
                      sx={{
                        padding: '0',
                        marginRight: '0',
                        marginLeft: '0',
                      }}
                      className={classes.smallLabel}
                    />
                  }
                  style={{ alignItems: 'flex-start' }}
                  label={messages['COA.DialogPFUAccount'] as string}
                />
              </FormGroup>
              <Customp>{messages['COA.DialogArchiveCP'] as string}</Customp>
            </Grid>
          </Grid>
          {/* )} */}
        </DialogContent>
      </Box>
      <div style={{ padding: '4%' }}>
        <Grid item xs={12}>
          <CustomHR1 />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ pt: '4%', fontSize: '12px' }}
          >
            {messages['COA.NoTransactions'] as string}
          </Typography>
        </Grid>
      </div>

      <CustomHR />
      <DialogActions sx={{ padding: '2%' }}>
        <Button
          onClick={handleCancel}
          color="primary"
          variant="outlined"
          size="medium"
          sx={{ borderRadius: '8px' }}
        >
          {messages['COA.Cancel'] as string}
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          size="medium"
          sx={{ minWidth: '78px', borderRadius: '8px' }}
        >
          {editEntry ? (
            <IntlMessages id="COA.Save" />
          ) : (
            <IntlMessages id="COA.Save" />
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
