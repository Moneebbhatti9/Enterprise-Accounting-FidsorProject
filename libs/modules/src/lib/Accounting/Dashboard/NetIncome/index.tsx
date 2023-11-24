import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function createData(fiscalYear: string, previous: string, current: string) {
  return { fiscalYear, previous, current };
}

const rows = [
  createData('Income', '$0.00', '$381.22'),
  createData('Expense', '$0.00', '$267.82'),
  createData('Net Income', '$0.00', '$113.38'),
];
const Dashboard = () => {
  return (
    <Table sx={{ minWidth: 650 }}>
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: 'bold' }}>Fiscal Year</TableCell>
          <TableCell align="right" style={{ fontWeight: 'bold' }}>
            Previous
          </TableCell>
          <TableCell align="right" style={{ fontWeight: 'bold' }}>
            Current
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.fiscalYear}>
            <TableCell component="th" scope="row">
              {row.fiscalYear}
            </TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold' }}>
              {row.previous}
            </TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold' }}>
              {row.current}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Dashboard;
