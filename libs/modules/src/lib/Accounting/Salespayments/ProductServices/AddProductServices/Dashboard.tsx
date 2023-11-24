import { Body, TopBar, UpdateReport } from './StyledComponents';
import Typography from '@mui/material/Typography';
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Checkbox,
  Select,
  MenuItem,
} from '@mui/material';
import { Field, Formik, Form, FormikHelpers } from 'formik';
import ListSubheader from '@mui/material/ListSubheader';
import React, { useState, ChangeEvent } from 'react';

export interface AddProductService {
  name: string;
  description: string;
  price: number | null;
  saleTax: number | null;
  currencyType: string;
}

const initialValues: AddProductService = {
  name: '',
  description: '',
  price: null,
  saleTax: null,
  currencyType: '',
};

const Dashboard = () => {
  const [showBuyDropdown, setShowBuyDropdown] = useState(false);
  const [showSellDropdown, setShowSellDropdown] = useState(false);

  const handleBuyCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowBuyDropdown(e.target.checked);
  };
  const handleSellCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowSellDropdown(e.target.checked);
  };
  const handleNumericInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    // Allow only numeric values and an empty string (allowing clear)
    const newValue = value.replace(/[^\d]/g, '');
    e.target.value = newValue;
  };

  const handleSubmit = (
    values: AddProductService,
    actions: FormikHelpers<AddProductService>
  ) => {
    // Handle form submission logic here
    console.log(values);
    actions.setSubmitting(false); // For example, to set submitting to false
  };

  return (
    <Body>
      <TopBar></TopBar>
      <Typography fontSize={'14px'}>
        Products and services that you buy from vendors are used as items on
        Bills to record those purchases, and the ones that you sell to customers
        are used as items on business to record those sales.
      </Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form style={{ width: '100%' }}>
            <UpdateReport spacing={4}>
              <Stack direction="row" spacing={2} alignItems={'center'}>
                <Box width={'12%'}>
                  <Typography fontSize={'12px'}>
                    Type<span style={{ color: 'red' }}>*</span>
                  </Typography>
                </Box>
                <FormControl component="fieldset">
                  <RadioGroup name="vendorType">
                    <FormControlLabel
                      value="product"
                      control={<Radio />}
                      label={<Typography fontSize={'12px'}>Product</Typography>}
                    />
                    <FormControlLabel
                      value="service"
                      control={<Radio />}
                      label={<Typography fontSize={'12px'}>Service</Typography>}
                    />
                  </RadioGroup>
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2} width={'60%'}>
                <Box width={'25%'}>
                  <Typography fontSize={'12px'}>
                    Name<span style={{ color: 'red' }}>*</span>
                  </Typography>
                </Box>
                <Field name="name">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      variant="outlined"
                    />
                  )}
                </Field>
              </Stack>
              <Stack direction="row" spacing={2} width={'60%'}>
                <Box width={'25%'}>
                  <Typography fontSize={'12px'}>Description</Typography>
                </Box>

                <Field name="description">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      fullWidth
                      size="small"
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  )}
                </Field>
              </Stack>
              <Stack direction="row" spacing={2} width={'60%'}>
                <Box width={'25%'}>
                  <Typography fontSize={'12px'}>
                    Price<span style={{ color: 'red' }}>*</span>
                  </Typography>
                </Box>

                <Field name="price">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      type="text"
                      fullWidth
                      size="small"
                      variant="outlined"
                      InputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        style: {
                          '-moz-appearance': 'textfield',
                          '-webkit-appearance': 'none',
                          appearance: 'none',
                        },
                        onChange:
                          handleNumericInput as React.ChangeEventHandler<HTMLInputElement>,
                      }}
                    />
                  )}
                </Field>
              </Stack>
              <Stack direction="row" width={'60%'} alignItems={'center'}>
                <Box width={'20%'}>
                  <Typography fontSize={'12px'}>Buy this</Typography>
                </Box>
                <Checkbox
                  checked={showBuyDropdown}
                  onChange={handleBuyCheckboxChange}
                  color="primary"
                />
                <Typography px={'6px'} fontSize={'12px'}>
                  Allow this product or service to be added to Bills.
                </Typography>
              </Stack>
              {showBuyDropdown && (
                <Stack direction="row" spacing={2} width={'60%'}>
                  <Box width={'25%'}>
                    <Typography fontSize={'12px'}>
                      Expense Category<span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Box>
                  <Field name="buyExpenseCategory">
                    {({ field }: { field: any }) => (
                      <Select {...field} fullWidth variant="outlined">
                        <ListSubheader>Expense</ListSubheader>
                        <MenuItem value={1}>Accounting Fees</MenuItem>
                        <MenuItem value={2}>Advertising & Promotion </MenuItem>
                        <MenuItem value={3}>Bank Service Charges</MenuItem>
                        <MenuItem value={4}>Computer - Hardware</MenuItem>
                        <MenuItem value={5}>Computer - Hosting</MenuItem>
                        <MenuItem value={6}>Computer - Internet</MenuItem>
                        <MenuItem value={7}>Computer - Software</MenuItem>
                        <MenuItem value={8}>Depreciation Expense</MenuItem>
                        <MenuItem value={9}>Insurance Vehicles</MenuItem>
                        <MenuItem value={10}>Interest Expense</MenuItem>
                        <MenuItem value={11}>Meals & Entertainment </MenuItem>
                        <MenuItem value={12}>Office Supplies</MenuItem>
                        <MenuItem value={13}>Payroll Employer Taxes </MenuItem>
                        <MenuItem value={14}>Payroll Gross Pay</MenuItem>
                        <MenuItem value={15}>
                          Payroll - Employee Benefits
                        </MenuItem>{' '}
                        <MenuItem value={16}>Payroll - Salary & Wages</MenuItem>
                        <MenuItem value={17}>Professional Fees</MenuItem>
                        <MenuItem value={18}>Rent Expense</MenuItem>
                        <MenuItem value={19}>Repairs & Maintenance </MenuItem>
                        <MenuItem value={20}>Taxes - Corporate Tax </MenuItem>
                        <MenuItem value={21}>Telephone - Land Line </MenuItem>
                        <MenuItem value={22}>Telephone - Wireless</MenuItem>
                        <MenuItem value={23}>Travel Expense</MenuItem>
                        <MenuItem value={24}>Utilities</MenuItem>
                        <MenuItem value={25}>Vehicle - Fuel</MenuItem>
                        <MenuItem value={26}>
                          Vehicle - Repairs & Maintenance
                        </MenuItem>
                        <ListSubheader>Equity</ListSubheader>
                        <MenuItem value={27}>Common Shares</MenuItem>
                        <ListSubheader>Liability</ListSubheader>
                        <MenuItem value={28}>Payroll Liabilities</MenuItem>
                        <MenuItem value={29}>Shareholder Loan</MenuItem>
                        <MenuItem value={30}>Taxes Payable</MenuItem>
                        <ListSubheader>Asset</ListSubheader>
                        <MenuItem value={31}>Taxes</MenuItem>
                        <MenuItem value={32}>Recoverable/Refundable </MenuItem>
                      </Select>
                    )}
                  </Field>
                </Stack>
              )}
              <Stack direction="row" width={'60%'} alignItems={'center'}>
                <Box width={'20%'}>
                  <Typography fontSize={'12px'}>Sell this</Typography>
                </Box>
                <Checkbox
                  checked={showSellDropdown}
                  onChange={handleSellCheckboxChange}
                  color="primary"
                />
                <Typography px={'6px'} fontSize={'12px'}>
                  Allow this product or service to be added to Invoices.
                </Typography>
              </Stack>
              {showSellDropdown && (
                <Stack direction="row" spacing={2} width={'60%'}>
                  <Box width={'25%'}>
                    <Typography fontSize={'12px'}>
                      Expense Category<span style={{ color: 'red' }}>*</span>
                    </Typography>
                  </Box>
                  <Field name="sellExpenseCategory">
                    {({ field }: { field: any }) => (
                      <Select {...field} fullWidth variant="outlined">
                        <ListSubheader>Expense</ListSubheader>
                        <MenuItem value={1}>Accounting Fees</MenuItem>
                        <MenuItem value={2}>Advertising & Promotion </MenuItem>
                        <MenuItem value={3}>Bank Service Charges</MenuItem>
                        <MenuItem value={4}>Computer - Hardware</MenuItem>
                        <MenuItem value={5}>Computer - Hosting</MenuItem>
                        <MenuItem value={6}>Computer - Internet</MenuItem>
                        <MenuItem value={7}>Computer - Software</MenuItem>
                        <MenuItem value={8}>Depreciation Expense</MenuItem>
                        <MenuItem value={9}>Insurance Vehicles</MenuItem>
                        <MenuItem value={10}>Interest Expense</MenuItem>
                        <MenuItem value={11}>Meals & Entertainment </MenuItem>
                        <MenuItem value={12}>Office Supplies</MenuItem>
                        <MenuItem value={13}>Payroll Employer Taxes </MenuItem>
                        <MenuItem value={14}>Payroll Gross Pay</MenuItem>
                        <MenuItem value={15}>
                          Payroll - Employee Benefits
                        </MenuItem>{' '}
                        <MenuItem value={16}>Payroll - Salary & Wages</MenuItem>
                        <MenuItem value={17}>Professional Fees</MenuItem>
                        <MenuItem value={18}>Rent Expense</MenuItem>
                        <MenuItem value={19}>Repairs & Maintenance </MenuItem>
                        <MenuItem value={20}>Taxes - Corporate Tax </MenuItem>
                        <MenuItem value={21}>Telephone - Land Line </MenuItem>
                        <MenuItem value={22}>Telephone - Wireless</MenuItem>
                        <MenuItem value={23}>Travel Expense</MenuItem>
                        <MenuItem value={24}>Utilities</MenuItem>
                        <MenuItem value={25}>Vehicle - Fuel</MenuItem>
                        <MenuItem value={26}>
                          Vehicle - Repairs & Maintenance
                        </MenuItem>
                        <ListSubheader>Equity</ListSubheader>
                        <MenuItem value={27}>Common Shares</MenuItem>
                        <ListSubheader>Liability</ListSubheader>
                        <MenuItem value={28}>Payroll Liabilities</MenuItem>
                        <MenuItem value={29}>Shareholder Loan</MenuItem>
                        <MenuItem value={30}>Taxes Payable</MenuItem>
                        <ListSubheader>Asset</ListSubheader>
                        <MenuItem value={31}>Taxes</MenuItem>
                        <MenuItem value={32}>Recoverable/Refundable </MenuItem>
                      </Select>
                    )}
                  </Field>
                </Stack>
              )}
              <Stack direction="row" spacing={2} width={'60%'}>
                <Box width={'25%'}>
                  <Typography fontSize={'12px'}>
                    Sales Tax<span style={{ color: 'red' }}>*</span>
                  </Typography>
                </Box>

                <Field name="salesTax">
                  {({ field }: { field: any }) => (
                    <TextField
                      {...field}
                      type="text"
                      fullWidth
                      size="small"
                      variant="outlined"
                      InputProps={{
                        inputMode: 'numeric',
                        pattern: '[0-9]*',
                        style: {
                          '-moz-appearance': 'textfield',
                          '-webkit-appearance': 'none',
                          appearance: 'none',
                        },
                        onChange:
                          handleNumericInput as React.ChangeEventHandler<HTMLInputElement>,
                      }}
                    />
                  )}
                </Field>
              </Stack>
            </UpdateReport>
            {/* Submit button or other actions */}
            {/* Example:
                <Button type="submit">Submit</Button>
            */}
          </Form>
        )}
      </Formik>
    </Body>
  );
};

export default Dashboard;

// import React, { useState } from 'react';
// import {
//   Body,
//   TopBar,
//   UpdateReport,
//   NameGrid,
//   DescMainGrid,
//   PriceMainGrid,
//   SellSubtitleGrid,
//   FormHelperTextTxt,
//   ShowDropdownMainGrid,
//   IncomeTitleGrid,
//   BuySubtitleGrid,
// } from './StyledComponents';
// import {
//   Grid,
//   Typography,
//   Select,
//   MenuItem,
//   Button,
//   Divider,
// } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import Checkbox from '@mui/material/Checkbox';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import IconButton from '@mui/material/IconButton';
// import AccountDialog from './IncomeDialogue';
// import { useNavigate } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { addProductServices } from '../../../../../../../services/PurchasesProductServices/ProductServices';
// import { SaveBtnGrid } from '../../../../Accounting/Salespayments/ProductServices/AddProductServices/StyledComponents';
// import ListSubheader from '@mui/material/ListSubheader';
// import FormControl from '@mui/material/FormControl';
// import * as Yup from 'yup';
// import CustomDialog from '../../../Global/Components/ConfirmationDialog';
// export interface FormValues {
//   name: string;
//   description: string;
//   price: number | null;
//   saleTax: number | null;
//   currencyType: string;
// }

// const validationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   price: Yup.number()
//     .min(0, 'Price must be a positive number')
//     .required('Price is required'),
//   saleTax: Yup.number()
//     .min(0, 'Tax must be a positive number')
//     .required('Tax is required'),
// });

// const Dashboard = () => {
//   const [buyThis, setBuyThis] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showBuyDropdown, setShowBuyDropdown] = useState(false);
//   const [showDialog, setShowDialog] = useState(false);
//   const [dropdownValues, setDropdownValues] = useState<string[]>([]);
//   const [selectedTab, setSelectedTab] = useState(2);
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isDialogOpen, setIsDialogOpen] = React.useState(false);
//   const tab0Options = ['Option 1', 'Option 2', 'Option 3'];
//   const tab1Options = ['Option A', 'Option B', 'Option C'];
//   const tab2Options = ['Option A3', 'Option B3', 'Option C3'];
//   const tab3Options = ['Option A4', 'Option B4', 'Option C4'];
//   const tab4Options = ['Option A5', 'Option B5', 'Option C5'];
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const handleTabChange = (event: any, newValue: any) => {
//     setSelectedTab(newValue);
//   };

//   const handleSellThisChange = (event: any) => {
//     const sellThisValue = event.target.checked;
//     setShowDropdown(sellThisValue);
//   };

//   const handleBuyThisChange = (event: any) => {
//     const buyThisValue = event.target.checked;
//     setBuyThis(buyThisValue);
//     setShowBuyDropdown(buyThisValue);
//   };

//   const handleOpenSellDialog = () => {
//     setShowDialog(true);
//     setSelectedOption(null);
//   };

//   const handleCloseDialog = () => {
//     setShowDialog(false);
//     setSelectedOption(null);
//     setSearchQuery('');
//   };

//   const handleSaveValue = (value: string) => {
//     if (value.trim() !== '') {
//       setDropdownValues([...dropdownValues, value]);
//       setSelectedOption(value);
//     }
//     handleCloseDialog();
//   };

//   const handleSubmitForm = async (values: FormValues) => {
//     if (!values.name || !values.price || !values.saleTax) {
//       console.error('Please fill in all required fields');
//       return;
//     }

//     const providedData: FormValues = {
//       name: values.name,
//       description: values.description,
//       price: values.price,
//       currencyType: values.currencyType,
//       saleTax: values.saleTax,
//     };

//     try {
//       const response = await addProductServices(providedData);
//       console.log('Product Service added successfully:', response);
//       {
//         if (!isDialogOpen) {
//           setIsDialogOpen(true);
//         }
//         handleClose();
//       }
//     } catch (error) {
//       console.error('Error adding Product Service:', error);
//     }
//   };

//   const navigate = useNavigate();

//   return (
//     <>
//       <Formik
//         initialValues={{
//           name: '',
//           description: '',
//           price: null,
//           saleTax: null,
//           currencyType: 'USD',
//         }}
//         onSubmit={(values) => handleSubmitForm(values)}
//         validationSchema={validationSchema}
//       >
//         {({ values, errors, touched }) => (
//           <Form>
//             <Body>
//               <TopBar></TopBar>
//               <p>
//                 Products and services that you buy from vendors are used as
//                 items on Bills to record those purchases, and the ones that you
//                 sell to customers are used as items on business to record those
//                 sales.
//               </p>
//               <UpdateReport>
//                 <Grid container>
//                   <Grid
//                     container
//                     spacing={2}
//                     alignItems="center"
//                     sx={{ mt: '2px' }}
//                   >
//                     <NameGrid item xs={2} lg={2}>
//                       <Typography variant="subtitle1">
//                         Name
//                         <span style={{ color: 'red' }}>*</span>
//                       </Typography>
//                     </NameGrid>
//                     <Grid item xs={8} lg={4} sm={4}>
//                       <Field
//                         type="text"
//                         name="name"
//                         as={TextField}
//                         fullWidth
//                         size="small"
//                         error={Boolean(errors.name && touched.name)}
//                         helperText={errors.name}
//                       />
//                     </Grid>
//                   </Grid>
//                   <DescMainGrid container spacing={2} sx={{ mt: '2px' }}>
//                     <NameGrid item xs={2} lg={2}>
//                       <Typography variant="subtitle1">Description</Typography>
//                     </NameGrid>
//                     <Grid item xs={10} lg={6} sm={6}>
//                       <Field
//                         type="text"
//                         name="description"
//                         as={TextField}
//                         fullWidth
//                         multiline
//                         rows={4}
//                         size="small"
//                       />
//                       <ErrorMessage name="description" component="div" />
//                     </Grid>
//                   </DescMainGrid>
//                   <PriceMainGrid container spacing={2} sx={{ mt: '2px' }}>
//                     <NameGrid item xs={2} lg={2}>
//                       <Typography variant="subtitle1">
//                         Price<span style={{ color: 'red' }}>*</span>
//                       </Typography>
//                     </NameGrid>
//                     <Grid item xs={8} lg={4} sm={4}>
//                       <Field
//                         type="number"
//                         name="price"
//                         as={TextField}
//                         fullWidth
//                         placeholder="0.00"
//                         size="small"
//                         error={Boolean(errors.price && touched.price)}
//                         helperText={errors.price}
//                       />
//                     </Grid>
//                   </PriceMainGrid>
//                   <PriceMainGrid container spacing={2} sx={{ mt: '2px' }}>
//                     <NameGrid item xs={2} lg={2}>
//                       <Typography variant="subtitle1">Sell this</Typography>
//                     </NameGrid>
//                     <Grid item xs={8} lg={4}>
//                       {/* <Checkbox
//           checked={sellThis}
//           onChange={handleSellThisChange}
//           inputProps={{ 'aria-label': 'controlled' }}
//         /> */}
//                       <Field
//                         type="checkbox"
//                         // name="sellThis"
//                         onChange={handleSellThisChange}
//                         as={Checkbox}
//                         inputProps={{ 'aria-label': 'controlled' }}
//                       />
//                     </Grid>
//                   </PriceMainGrid>

//                   <SellSubtitleGrid container lg={12} sm={12}>
//                     <Grid item xs={8} sm={8} lg={8} justifyContent="center">
//                       <FormHelperTextTxt>
//                         Allow this product or service to be added to Invoices.
//                       </FormHelperTextTxt>
//                     </Grid>
//                   </SellSubtitleGrid>

//                   {showDropdown && (
//                     <ShowDropdownMainGrid container spacing={2}>
//                       <IncomeTitleGrid item xs={2} lg={2} md={2}>
//                         <Typography variant="subtitle1">
//                           Income account
//                         </Typography>
//                       </IncomeTitleGrid>
//                       <Grid item xs={8} lg={4} sm={4}>
//                         <Field
//                           as={Select}
//                           // name="incomeAccount"
//                           fullWidth
//                           size="small"
//                         >
//                           {dropdownValues.map((value, index) => (
//                             <MenuItem key={index} value={value}>
//                               {value}
//                             </MenuItem>
//                           ))}
//                         </Field>
//                       </Grid>

//                       <Grid item xs={2} lg={2} md={2} sm={2}>
//                         <IconButton
//                           color="primary"
//                           onClick={handleOpenSellDialog}
//                           size="small"
//                         >
//                           <AddCircleOutlineIcon />
//                         </IconButton>
//                       </Grid>
//                     </ShowDropdownMainGrid>
//                   )}
//                   {showDialog && (
//                     <AccountDialog
//                       showDialog={showDialog}
//                       handleCloseDialog={handleCloseDialog}
//                       selectedTab={selectedTab}
//                       handleTabChange={handleTabChange}
//                       searchQuery={searchQuery}
//                       setSearchQuery={setSearchQuery}
//                       tab0Options={tab0Options}
//                       tab1Options={tab1Options}
//                       tab2Options={tab2Options}
//                       tab3Options={tab3Options}
//                       tab4Options={tab4Options}
//                       handleSaveValue={handleSaveValue}
//                       selectedOption={selectedOption}
//                     />
//                   )}
//                   <PriceMainGrid container spacing={2} sx={{ mt: '2px' }}>
//                     <NameGrid item xs={2} lg={2}>
//                       <Typography variant="subtitle1">Buy this</Typography>
//                     </NameGrid>
//                     <Grid item xs={8} lg={4}>
//                       <Field
//                         type="checkbox"
//                         // name="buyThis"
//                         onChange={handleBuyThisChange}
//                         checked={buyThis}
//                         as={Checkbox}
//                         inputProps={{ 'aria-label': 'controlled' }}
//                       />
//                     </Grid>
//                   </PriceMainGrid>
//                   <BuySubtitleGrid container lg={12} sm={12}>
//                     <Grid item xs={8} sm={8} lg={8} justifyContent="center">
//                       <FormHelperTextTxt>
//                         Allow this product or service to be added to Bills.
//                       </FormHelperTextTxt>
//                     </Grid>
//                   </BuySubtitleGrid>
//                   {showBuyDropdown && (
//                     <ShowDropdownMainGrid container spacing={2}>
//                       <IncomeTitleGrid item xs={2} lg={2} md={2}>
//                         <Typography variant="subtitle1">
//                           Expense account
//                         </Typography>
//                       </IncomeTitleGrid>
//                       <Grid item xs={8} lg={4} md={4} sm={4}>
//                         <FormControl fullWidth>
//                           <Select defaultValue="" id="grouped-select">
//                             <ListSubheader>Expense</ListSubheader>
//                             <MenuItem value={1}>Accounting Fees</MenuItem>
//                             <MenuItem value={2}>
//                               Advertising & Promotion
//                             </MenuItem>
//                             <MenuItem value={3}>Bank Service Charges</MenuItem>
//                             <MenuItem value={4}>Computer - Hardware</MenuItem>
//                             <MenuItem value={5}>Computer - Hosting</MenuItem>
//                             <MenuItem value={6}>Computer - Internet</MenuItem>
//                             <MenuItem value={7}>Computer - Software</MenuItem>
//                             <MenuItem value={8}>Depreciation Expense</MenuItem>
//                             <MenuItem value={9}>Insurance Vehicles</MenuItem>
//                             <MenuItem value={10}>Interest Expense</MenuItem>
//                             <MenuItem value={11}>
//                               Meals & Entertainment
//                             </MenuItem>
//                             <MenuItem value={12}>Office Supplies</MenuItem>
//                             <MenuItem value={13}>
//                               Payroll Employer Taxes
//                             </MenuItem>
//                             <MenuItem value={14}>Payroll Gross Pay</MenuItem>
//                             <MenuItem value={15}>
//                               Payroll - Employee Benefits
//                             </MenuItem>
//                             <MenuItem value={16}>
//                               Payroll - Salary & Wages
//                             </MenuItem>
//                             <MenuItem value={17}>Professional Fees</MenuItem>
//                             <MenuItem value={18}>Rent Expense</MenuItem>
//                             <MenuItem value={19}>
//                               Repairs & Maintenance
//                             </MenuItem>
//                             <MenuItem value={20}>
//                               Taxes - Corporate Tax
//                             </MenuItem>
//                             <MenuItem value={21}>
//                               Telephone - Land Line
//                             </MenuItem>
//                             <MenuItem value={22}>Telephone - Wireless</MenuItem>
//                             <MenuItem value={23}>Travel Expense</MenuItem>
//                             <MenuItem value={24}>Utilities</MenuItem>
//                             <MenuItem value={25}>Vehicle - Fuel</MenuItem>
//                             <MenuItem value={26}>
//                               Vehicle - Repairs & Maintenance
//                             </MenuItem>
//                             <ListSubheader>Equity</ListSubheader>
//                             <MenuItem value={27}>Common Shares</MenuItem>
//                             <ListSubheader>Liability</ListSubheader>
//                             <MenuItem value={28}>Payroll Liabilities</MenuItem>
//                             <MenuItem value={29}>Shareholder Loan</MenuItem>
//                             <MenuItem value={30}>Taxes Payable</MenuItem>
//                             <ListSubheader>Asset</ListSubheader>
//                             <MenuItem value={31}>Taxes</MenuItem>
//                             <MenuItem value={32}>
//                               Recoverable/Refundable
//                             </MenuItem>
//                           </Select>
//                         </FormControl>
//                       </Grid>
//                     </ShowDropdownMainGrid>
//                   )}
//                   <PriceMainGrid container spacing={2} sx={{ mt: '2px' }}>
//                     <NameGrid item xs={2} lg={2}>
//                       <Typography variant="subtitle1">
//                         Sales tax<span style={{ color: 'red' }}>*</span>
//                       </Typography>
//                     </NameGrid>
//                     <Grid item xs={8} lg={4} sm={4}>
//                       <Field
//                         type="number"
//                         name="saleTax"
//                         as={TextField}
//                         fullWidth
//                         size="small"
//                         error={Boolean(errors.saleTax && touched.saleTax)}
//                         helperText={errors.saleTax}
//                       />
//                     </Grid>
//                   </PriceMainGrid>
//                   {/* <SaveBtnGrid container spacing={2}>
//         <SaveBtn
//           // onClick={handleSubmit}
//           variant="contained"
//           size="medium"
//         >
//           Save
//         </SaveBtn>
//       </SaveBtnGrid> */}
//                 </Grid>
//               </UpdateReport>
//             </Body>
//             <Divider />
//             <SaveBtnGrid container spacing={2}>
//               <Button type="submit" variant="contained" size="medium">
//                 Save
//               </Button>
//             </SaveBtnGrid>
//             {/* <PageFooterWithButtons onSaveClick={() => navigate(-1)} /> */}
//           </Form>
//         )}
//       </Formik>
//       <CustomDialog
//         open={isDialogOpen}
//         onClose={() => setIsDialogOpen(false)}
//         title={'Product & Services Added'}
//         titleBackground={'#4BB543'}
//         footerBg={'white'}
//         text={'Product & Services record added sucessfully.'}
//         link={'/purchases/productservices'}
//       />
//     </>
//   );
// };

// export default Dashboard;
