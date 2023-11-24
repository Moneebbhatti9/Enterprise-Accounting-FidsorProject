import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import ProductModal from '../Modal/ProductModal';
// import TaxModal from '../Modal/TaxModal';
import Autocomplete from '@mui/material/Autocomplete';

const initialRows = [
  createData(
    'Frozen yoghurt',
    'Delicious dessert',
    1,
    159,
    [0],
    [0, 5, 10, 15]
  ),
  // ... other initial rows ...
];

function createData(
  name: string,
  description: string,
  quantity: number,
  price: number,
  tax: number[],
  availableTaxes: number[]
) {
  const amount = parseFloat(
    (
      quantity *
      price *
      (1 + tax.reduce((acc, curr) => acc + curr / 100, 0))
    ).toFixed(2)
  );
  return { name, description, quantity, price, tax, amount, availableTaxes };
}

interface Row {
  price: number;
  amount: number;
}

export default function SpanningTable() {
  const [rows, setRows] = useState(initialRows);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isTaxModalOpen, setIsTaxModalOpen] = useState(false);

  const addEmptyRow = () => {
    const emptyRow = createData('', '', 0, 0, [0], [0, 5, 10]);
    setRows([...rows, emptyRow]);
  };

  const handleOpenCustomerModal = () => {
    setIsProductModalOpen(true);
  };

  const handleCloseCustomerModal = () => {
    setIsProductModalOpen(false);
  };

  const handleOpenTaxModal = () => {
    setIsTaxModalOpen(true);
  };

  const handleCloseTaxModal = () => {
    setIsTaxModalOpen(false);
  };

  const handleItemChange = (index: number, newValue: string) => {
    const updatedRows = [...rows];
    updatedRows[index].name = newValue;
    setRows(updatedRows);
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
      (
        newQuantity *
        updatedRows[index].price *
        (1 + updatedRows[index].tax.reduce((acc, curr) => acc + curr / 100, 0))
      ).toFixed(2)
    );
    setRows(updatedRows);
  };

  const handlePriceChange = (index: number, newPrice: number) => {
    const updatedRows = [...rows];
    updatedRows[index].price = newPrice;
    updatedRows[index].amount = parseFloat(
      (
        updatedRows[index].quantity *
        newPrice *
        (1 + updatedRows[index].tax.reduce((acc, curr) => acc + curr / 100, 0))
      ).toFixed(2)
    );
    setRows(updatedRows);
  };

  const handleTaxChange = (index: number, newValue: number[]) => {
    const updatedRows = [...rows];
    updatedRows[index].tax = newValue;
    updatedRows[index].amount = parseFloat(
      (
        updatedRows[index].quantity *
        updatedRows[index].price *
        (1 + newValue.reduce((acc, curr) => acc + curr / 100, 0))
      ).toFixed(2)
    );
    setRows(updatedRows);
  };

  const handleDeleteRow = (index: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  function ccyFormat(num: number) {
    return `${num.toFixed(2)}`;
  }

  function subtotal(items: readonly Row[]) {
    return items
      .map((row) => row.amount)
      .reduce((sum, amount) => sum + amount, 0);
  }

  const invoiceSubtotal = subtotal(rows);
  const invoiceTotal = invoiceSubtotal;

  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          boxShadow: 'none',
        }}
      >
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h4" fontWeight="900">
                  Items
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4" fontWeight="bold">
                  Description
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4" fontWeight="bold">
                  Quantity
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4" fontWeight="bold">
                  Price
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4" fontWeight="bold">
                  Tax (%)
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4" fontWeight="bold">
                  Amount
                </Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Select
                    value={row.name}
                    onChange={(e) => handleItemChange(index, e.target.value)}
                    sx={{ width: '120px' }}
                  >
                    <MenuItem value="Frozen yoghurt">Frozen yoghurt</MenuItem>
                    <MenuItem value="Ice cream sandwich">
                      Ice cream sandwich
                    </MenuItem>
                    <MenuItem value="Eclair">Eclair</MenuItem>
                    <hr />
                    <Button
                      onClick={handleOpenCustomerModal}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                        marginTop: '5px',
                      }}
                    >
                      <AddCircleOutlineIcon fontSize="small" />
                      <Typography>Add new Product</Typography>
                    </Button>
                  </Select>
                </TableCell>
                <TableCell>
                  <TextField
                    multiline
                    value={row.description}
                    onChange={(e) =>
                      handleDescriptionChange(index, e.target.value)
                    }
                    sx={{ width: '120px' }}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    type="number"
                    value={row.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                    sx={{ width: '120px' }}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    type="number"
                    value={row.price}
                    onChange={(e) =>
                      handlePriceChange(index, parseFloat(e.target.value))
                    }
                    sx={{ width: '120px' }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Autocomplete
                    multiple
                    id={`tax-autocomplete-${index}`}
                    options={row.availableTaxes}
                    getOptionLabel={(option) => `${option}%`}
                    value={row.tax}
                    onChange={(event, newValue) =>
                      handleTaxChange(index, newValue)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Tax"
                        placeholder="Select Tax"
                        sx={{ width: '100%' }}
                      />
                    )}
                  />
                </TableCell>

                <TableCell align="right">
                  <strong>$</strong>
                  {row.amount}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDeleteRow(index)}
                  >
                    <DeleteOutlineOutlinedIcon style={{ color: '#0A8FDC' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={4} rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
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
      {/* <ProductModal
        isOpen={isProductModalOpen}
        onClose={handleCloseCustomerModal}
      />
      <TaxModal isOpen={isTaxModalOpen} onClose={handleCloseTaxModal} /> */}
    </div>
  );
}
