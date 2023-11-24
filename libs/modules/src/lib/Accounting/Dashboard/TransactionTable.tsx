import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import AppTableContainer from '@crema/components/AppTableContainer';
import { TransactionDaumType } from '@crema/models/dashboards/Analytics';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
type Props = {
  transactionData: TransactionDaumType[];
};
const TransactionTable = ({ transactionData = [] }: Props) => {
  return (
    <AppTableContainer>
      <Table stickyHeader className="table">
        <TableHead>
          <TableHeading />
        </TableHead>
        <TableBody>
          {transactionData.map((data) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default TransactionTable;
