import TableCell from '@mui/material/TableCell';
import TableHeader from '@crema/components/TableHeader';

const TableHeading = () => {
  return (
    <TableHeader>
      <TableCell align="left">ID</TableCell>
      <TableCell align="left">City Name</TableCell>
      <TableCell align="left">Country Name</TableCell>
    </TableHeader>
  );
};

export default TableHeading;
