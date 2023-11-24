import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { summary } from '../../../../../../mockapi/src/fakedb/Reports/FinancialStatements/ProfitLossData/SummaryData';

const SummaryGrid = () => {
  summary[2].value = summary[0].value - summary[1].value;
  summary[4].value = summary[2].value - summary[3].value;

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
          {summary.map((summary, index) => (
            <TableRow
              key={index}
              className={
                summary.name === 'Net Profit'
                  ? 'net-profit-row'
                  : summary.name === 'Gross Profit'
                  ? 'gross-profit-row'
                  : ''
              }
            >
              <TableCell colSpan={3}>
                <Typography
                  fontSize={'12px'}
                  fontWeight={
                    summary.name === 'Net Profit' ||
                    summary.name === 'Gross Profit'
                      ? 'bold'
                      : 'normal'
                  }
                  lineHeight={'0.5'}
                >
                  {summary.name}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  fontSize={'12px'}
                  fontWeight={
                    summary.name === 'Net Profit' ||
                    summary.name === 'Gross Profit'
                      ? 'bold'
                      : 'normal'
                  }
                  lineHeight={'0.5'}
                >
                  ${summary.value.toFixed(2)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <style>
        {`
          .net-profit-row {
            background-color: #ECF0F3;
          }

          .gross-profit-row {
            background-color: #ECF0F3;
          }
        `}
      </style>
    </TableContainer>
  );
};

export default SummaryGrid;
