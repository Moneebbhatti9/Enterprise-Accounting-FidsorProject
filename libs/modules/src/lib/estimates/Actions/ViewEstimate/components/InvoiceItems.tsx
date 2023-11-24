import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(Quantity: number, Price: number) {
  return Quantity * Price;
}

function createRow(
  Items: string,
  Quantity: number,
  Price: number,
  Amount: number
) {
  const price = priceRow(Quantity, Price);
  return { Items, Quantity, Price, Amount };
}

interface Row {
  Items: string;
  Quantity: number;
  Price: number;
  Amount: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ Price }) => Price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15, 1.15),
  createRow('Paper (Case)', 10, 45.99, 45.99),
  createRow('Waste Basket', 2, 17.99, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const InvoiceItems = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="spanning table">
        <TableHead sx={{ backgroundColor: '#444444' }}>
          <TableRow>
            <TableCell sx={{ color: ' white' }}>Items</TableCell>
            <TableCell align="right" sx={{ color: ' white' }}>
              Quantity
            </TableCell>
            <TableCell align="right" sx={{ color: ' white' }}>
              Price
            </TableCell>
            <TableCell align="right" sx={{ color: ' white' }}>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Quantity}>
              <TableCell>{row.Quantity}</TableCell>
              <TableCell align="right">{row.Quantity}</TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{ccyFormat(row.Amount)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Grand Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceItems;
