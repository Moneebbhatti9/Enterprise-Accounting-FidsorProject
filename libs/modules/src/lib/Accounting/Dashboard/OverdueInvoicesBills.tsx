import { useIntl } from 'react-intl';
import AppCard from '@crema/components/AppCard';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import AppTableContainer from '@crema/components/AppTableContainer';
import AppScrollbar from '@crema/components/AppScrollbar';
import TableCell from '@mui/material/TableCell';
import { Typography } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';
import { Link } from 'react-router-dom';
type DealsTableDaumType = {
  id: number;
  name: string;
  amount: string;
};
const TableCellWrapper = styled(TableCell)(() => {
  return {
    fontSize: 14,
    padding: 8,
  };
});
const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: #0a8fdc; /* Default link color */

  &:hover {
    color: grey; /* Color on hover */
  }
`;
type Props = {
  dealsTableData: DealsTableDaumType[];
};
const OverdueInvoicesBills = ({ dealsTableData = [] }: Props) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              mr: { xs: 4, lg: 5 },
              fontWeight: Fonts.MEDIUM,
              fontSize: 16,
            }}
            variant="h3"
            component="h3"
          >
            {messages['dashboard.overdueInvoices'] as string}
          </Typography>
        </Box>
      }
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <AppTableContainer>
        <AppScrollbar style={{ maxHeight: 250 }}>
          <Table stickyHeader className="table">
            <TableBody>
              {dealsTableData.map((row) => (
                <TableRow key={row.name} className="item-hover">
                  <TableCellWrapper>
                    <Box
                      sx={{
                        display: 'flex',
                        paddingLeft: '16px',
                      }}
                    >
                      <StyledLink to="/purchases/bills">
                        <Typography variant="h5" component="h5">
                          {row.name}
                        </Typography>
                      </StyledLink>
                    </Box>
                  </TableCellWrapper>
                  <TableCellWrapper align="right">
                    <Box
                      component="span"
                      sx={{ fontWeight: Fonts.MEDIUM, paddingRight: '16px' }}
                    >
                      $ {row.amount}
                    </Box>
                  </TableCellWrapper>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AppScrollbar>
      </AppTableContainer>
    </AppCard>
  );
};
export default OverdueInvoicesBills;
