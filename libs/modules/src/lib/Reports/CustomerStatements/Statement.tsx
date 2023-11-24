import { Box } from '@mui/material';
import DataGrid from '../../Accounting/Global/Components/DataGrid';
import billsData from '../../Accounting/Global/DummyData/Bills.json';
const Statement = () => {
  const columns = ['id', 'date', 'item', 'amount', 'balance'];
  return (
    <>
      <Box style={{ padding: '40px', float: 'right', textAlign: 'end' }}>
        <h1>Statement of Account</h1>
        <h3>Account Activity</h3>
      </Box>
      <Box>
        <Box style={{ padding: '50px', float: 'left' }}>
          <h4>Bill to</h4>
          <h3>shinza</h3>
          <p>kinza gul</p>
          <p>Misrial Road Rawalpindi</p>
          <p>Rawalpindi 46000</p>
        </Box>
        <Box style={{ padding: '50px', float: 'right' }}>
          <p>Oct 3, 2018</p>
          <p>Oct 3, 2018</p>
          <p>$0.00</p>
          <p>$0.00</p>
          <p>$0.00</p>
          <p>$0.00</p>
        </Box>
        <Box style={{ padding: '50px', float: 'right' }}>
          <p>From</p>
          <p>To</p>
          <p>Opening balance on Oct 3, 2018 (CAD) </p>
          <p>Invoiced</p>
          <p>Paid </p>
          <p>Refunded</p>
        </Box>
      </Box>
      <DataGrid
        columns={columns}
        jsonData={billsData}
        link={'/purchases/bills'}
        name={'Bills'}
      />
    </>
  );
};

export default Statement;
