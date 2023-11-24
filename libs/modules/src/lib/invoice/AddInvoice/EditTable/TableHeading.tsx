import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/components/TableHeader';

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell>Pos</TableCell>
      <TableCell align="left">Product Name</TableCell>
      <TableCell align="center" colSpan={2}>
        Quantity
      </TableCell>
      <TableCell align="left">Price Per Unit</TableCell>
      <TableCell align="left">Sub Total </TableCell>
    </TableHeader>
  );
};

export default TableHeading;
