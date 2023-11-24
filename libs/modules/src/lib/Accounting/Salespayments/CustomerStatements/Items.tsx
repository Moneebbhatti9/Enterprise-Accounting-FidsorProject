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
  Date: string,
  Items: string,
  Quantity: number,
  Price: number,
  Amount: number,
  Balance: number
) {
  const price = priceRow(Quantity, Price);
  return { Date, Items, Quantity, Price, Amount, Balance };
}

interface Row {
  Date: string;
  Items: string;
  Quantity: number;
  Price: number;
  Amount: number;
  Balance: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ Price }) => Price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Oct 3, 2018', 'Invoice # 55', 100.44, 1.15, 1.15, 78.34),
  createRow('Oct 3, 2018', 'Invoice # 88', 10.67, 45.99, 45.99, 52.56),
  createRow('Oct 3, 2018', 'Invoice # 44', 22.13, 17.99, 17.99, 58.89),
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
            <TableCell sx={{ color: ' white' }}>Date</TableCell>
            <TableCell align="right" sx={{ color: ' white' }}>
              Item
            </TableCell>
            <TableCell align="right" sx={{ color: ' white' }}>
              Amount
            </TableCell>
            <TableCell align="right" sx={{ color: ' white' }}>
              Balance
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">
              {' '}
              <strong>Oct 1, 2018</strong>
            </TableCell>
            <TableCell align="right">
              {' '}
              <strong>Opening balance</strong>
            </TableCell>
            <TableCell align="right">
              {' '}
              <strong>$0.00 </strong>
            </TableCell>
            <TableCell align="right">
              {' '}
              <strong>$0.00 </strong>
            </TableCell>
          </TableRow>
          {rows.map((row) => (
            <TableRow key={row.Quantity}>
              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="right">{row.Items}</TableCell>
              <TableCell align="right">${ccyFormat(row.Amount)}</TableCell>
              <TableCell align="right">${row.Balance}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="left">
              {' '}
              <strong>Oct 12, 2023</strong>
            </TableCell>
            <TableCell align="right">
              {' '}
              <strong>Closing balance</strong>
            </TableCell>
            <TableCell align="right">
              {' '}
              <strong>$0.00</strong>{' '}
            </TableCell>
            <TableCell align="right">
              {' '}
              <strong>$0.00 </strong>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell colSpan={2}>
              Closing balance on Oct 12, 2023 (CAD)
            </TableCell>
            <TableCell align="right">$0.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvoiceItems;
