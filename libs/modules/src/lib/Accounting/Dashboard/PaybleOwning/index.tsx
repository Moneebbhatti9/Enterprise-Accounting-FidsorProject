import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(coming: string, payment: string) {
  return { coming, payment };
}
const invoiceRows = [
  createData('1-30 days overdue', '$0.00'),
  createData('31-60 days overdue', '$0.00'),
  createData('61-90 days overdue', '$0.00'),
  createData('> 90 days overdue', '$0.00'),
];
const billsRows = [
  createData('1-30 days overdue', '$158.92'),
  createData('31-60 days overdue', '$0.00'),
  createData('61-90 days overdue', '$0.00'),
  createData('> 90 days overdue', '$0.00'),
];
const Dashboard = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>
                    Invoices payable to you
                  </TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell
                  style={{ fontWeight: 'bold', color: 'rgb(10, 143, 220)' }}
                >
                  Coming Due
                </TableCell>
                <TableCell align="right">$0.00</TableCell>
                {invoiceRows.map((row) => (
                  <TableRow key={row.coming}>
                    <TableCell component="th" scope="row">
                      {row.coming}
                    </TableCell>
                    <TableCell align="right">{row.payment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>
                    Bills you owe
                  </TableCell>
                  <TableCell style={{ fontWeight: 'bold' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell
                  style={{ fontWeight: 'bold', color: 'rgb(10, 143, 220)' }}
                >
                  Coming Due
                </TableCell>
                <TableCell align="right">$0.00</TableCell>
                {billsRows.map((row) => (
                  <TableRow key={row.coming}>
                    <TableCell component="th" scope="row">
                      {row.coming}
                    </TableCell>
                    <TableCell align="right">{row.payment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
