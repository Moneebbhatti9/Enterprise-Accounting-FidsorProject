import { Body } from '.././../Accounting/Global/Styling';
import SimpleHeader from '.././../Accounting/Global/Components/SimplePageHeaderwithButton';
import DataTable from '.././../Accounting/Global/Components/DataGrid';
import jsonData from '.././../Accounting/Global/DummyData/Accountant.json';
const AllAccounts = () => {
  const columns = ['id', 'name', 'email', 'actions'];
  // const menuItems = [{ name: '', link: '' }];
  return (
    <Body>
      <SimpleHeader
        title={'Manage Accountant'}
        linkTo="/accounting/addaccountant"
        intlMessage="hire.invite"
      />
      <DataTable
        columns={columns}
        jsonData={jsonData}
        link={'/accounting/addaccountant'}
        name={'Manage Accountant'}
      />
    </Body>
  );
};

export default AllAccounts;
