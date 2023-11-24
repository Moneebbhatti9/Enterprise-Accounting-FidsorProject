import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, TextField, Grid, Button, IconButton } from '@mui/material';
import { Autocomplete } from '@mui/lab';
import IntlMessages from '@crema/helpers/IntlMessages';
import ItemDropdown from './SearchDropDown';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ProductModal from '../Modal/ProductModal';
import { textFieldStyles } from '../../../Accounting/Global/Styling';
const TAX_RATE = 0.07;
const options = ['Frozen yoghurt', 'Force', 'Ice cream sandwich', 'Eclair'];

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

// function priceRow(qty: number, unit: number) {
//   return qty * unit;
// }

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const initialRows = [
  createData(
    'Frozen yoghurt',
    'Delicious dessert',
    1,
    159,
    [0],
    [0, 5, 10, 15]
  ),
];

function createData(
  name: string,
  description: string,
  quantity: number,
  price: number,
  tax: number[],
  availableTaxes: number[]
) {
  const totalTaxRate = tax.reduce((acc, curr) => acc + curr / 100, 0);
  const amount = parseFloat((quantity * price * (1 + totalTaxRate)).toFixed(2));
  return { name, description, quantity, price, tax, amount, availableTaxes };
}

interface Row {
  price: number;
  amount: number;
}

const rows = [
  createData('', '', 0, 0, [], []),
  createData('', '', 0, 0, [], []),
  createData('', '', 0, 0, [], []),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  const [rows, setRows] = useState(initialRows);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isTaxModalOpen, setIsTaxModalOpen] = useState(false);
  const textFieldStyle = textFieldStyles();
  const addEmptyRow = () => {
    const emptyRow = createData('', '', 0, 0, [0], [0, 5, 10]);
    setRows([...rows, emptyRow]);
  };

  const handleDescriptionChange = (index: number, newValue: string) => {
    const updatedRows = [...rows];
    updatedRows[index].description = newValue;
    setRows(updatedRows);
  };

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedRows = [...rows];
    updatedRows[index].quantity = newQuantity;
    updatedRows[index].amount = parseFloat(
      (newQuantity * updatedRows[index].price).toFixed(2)
    );
    setRows(updatedRows);
  };

  const handlePriceChange = (index: number, newPrice: number) => {
    const updatedRows = [...rows];
    updatedRows[index].price = newPrice;
    updatedRows[index].amount = parseFloat(
      (updatedRows[index].quantity * newPrice).toFixed(2)
    );
    setRows(updatedRows);
  };

  const handleTaxChange = (index: number, newValue: number[]) => {
    const updatedRows = [...rows];
    updatedRows[index].tax = newValue;

    const totalTaxRate = newValue.reduce((acc, curr) => acc + curr / 100, 0);

    if (totalTaxRate === 0) {
      // If total tax rate is 0, apply tax directly to amount
      updatedRows[index].amount = parseFloat(
        (updatedRows[index].quantity * updatedRows[index].price).toFixed(2)
      );
    } else {
      // Calculate the amount with the correct tax calculation
      updatedRows[index].amount = parseFloat(
        (
          updatedRows[index].quantity *
          updatedRows[index].price *
          (1 + totalTaxRate)
        ).toFixed(2)
      );
    }

    setRows(updatedRows);
  };

  const handleOpenCustomerModal = () => {
    setIsProductModalOpen(true);
  };

  const handleCloseCustomerModal = () => {
    setIsProductModalOpen(false);
  };

  // const handleOpenTaxModal = () => {
  //   setIsTaxModalOpen(true);
  // };

  // const handleCloseTaxModal = () => {
  //   setIsTaxModalOpen(false);
  // };

  function handleItemChange(item: string): void {
    throw new Error('Function not implemented.');
  }

  const handleDeleteRow = (index: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={4}>
          <TableContainer component={Paper}>
            <Table aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h4" fontWeight="900">
                      <IntlMessages id="common.estimate.estimateItems" />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" fontWeight="bold">
                      <IntlMessages id="common.estimate.estimateDescription" />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" fontWeight="bold">
                      <IntlMessages id="common.estimate.estimateQuantity" />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" fontWeight="bold">
                      <IntlMessages id="common.estimate.estimatePrice" />
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" fontWeight="bold">
                      <IntlMessages id="common.estimate.estimateTax" />
                      (%)
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h4" fontWeight="bold" align="right">
                      <IntlMessages id="common.estimate.estimateAmount" />
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <ItemDropdown
                        options={options}
                        onSelectItem={handleItemChange}
                        onAddNewProduct={handleOpenCustomerModal}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={4}
                        value={row.description}
                        onChange={(event) =>
                          handleDescriptionChange(index, event.target.value)
                        }
                        InputProps={{
                          classes: {
                            root: textFieldStyle.customTextField,
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <TextField
                        type="number"
                        variant="outlined"
                        value={row.quantity}
                        onChange={(event) =>
                          handleQuantityChange(
                            index,
                            parseFloat(event.target.value)
                          )
                        }
                        InputProps={{
                          classes: {
                            root: textFieldStyle.customTextField,
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <TextField
                        type="number"
                        variant="outlined"
                        value={row.price}
                        onChange={(event) =>
                          handlePriceChange(
                            index,
                            parseFloat(event.target.value)
                          )
                        }
                        InputProps={{
                          classes: {
                            root: textFieldStyle.customTextField,
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Autocomplete
                        multiple
                        id={`tax-autocomplete-${index}`}
                        options={row.availableTaxes}
                        getOptionLabel={(option) => `${option}%`}
                        value={row.tax}
                        onChange={(event, newValue) => {
                          const newTaxStrings = (newValue as number[]).map(
                            String
                          );
                          const newTaxNumbers = newTaxStrings.map(Number);
                          handleTaxChange(index, newTaxNumbers);
                        }}
                        sx={{ width: '85%' }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={
                              <IntlMessages id="common.estimate.estimateTax" />
                            }
                            placeholder="Select Tax"
                            sx={{ width: '100%' }}
                            
                          />
                        )}
                      />
                    </TableCell>
                    <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteRow(index)}
                      >
                        <DeleteOutlineOutlinedIcon
                          style={{ color: '#0A8FDC' }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3} rowSpan={3} />
                  <TableCell colSpan={2}>
                    <IntlMessages id="common.estimate.estimateSubtotal" />
                  </TableCell>
                  <TableCell align="right">
                    {ccyFormat(invoiceSubtotal)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <IntlMessages id="common.estimate.estimateTax" />
                  </TableCell>
                  <TableCell align="right">{`${invoiceTaxes.toFixed(
                    0
                  )} %`}</TableCell>
                  <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <IntlMessages id="common.estimate.estimateTotal" />
                  </TableCell>
                  <TableCell align="right" sx={{ width: '10%' }}>
                    {ccyFormat(invoiceTotal)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button
              onClick={addEmptyRow}
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
              <Typography>Add a line</Typography>
            </Button>
          </TableContainer>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <ProductModal
        isOpen={isProductModalOpen}
        onClose={handleCloseCustomerModal}
      />
    </>
  );
}
