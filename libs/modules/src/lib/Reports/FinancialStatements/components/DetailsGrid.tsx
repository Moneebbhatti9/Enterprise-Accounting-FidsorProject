import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { details } from '../../../../../../mockapi/src/fakedb/Reports/FinancialStatements/ProfitLossData/DetailsData';

const DetailsGrid = () => {
  details[2].value = details[0].value - details[1].value;
  details[4].value = details[2].value - details[3].value;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>
              <Typography
                fontSize={'13px'}
                fontWeight={'bold'}
                lineHeight={'0.5'}
              >
                Accounts
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                fontSize={'13px'}
                fontWeight={'bold'}
                lineHeight={'0.5'}
              >
                Jan 01, 2023
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {details.map((details, index) => (
            <TableRow key={index} style={{ backgroundColor: '#ECF0F3' }}>
              <TableCell colSpan={3}>
                <Typography
                  fontSize={'12px'}
                  fontWeight={'bold'}
                  lineHeight={'0.5'}
                >
                  {details.name}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  fontSize={'12px'}
                  fontWeight={'bold'}
                  lineHeight={'0.5'}
                >
                  ${details.value.toFixed(2)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailsGrid;
