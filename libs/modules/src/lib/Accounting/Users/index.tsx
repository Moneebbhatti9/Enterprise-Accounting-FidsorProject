import { Body } from '../Global/Styling';
import PageHeader from '../Global/Components/MainPageHeader';
import DataTable from '../Global/Components/DataGrid';
import jsonData from '../Global/DummyData/User.json';
const AllCustomers = () => {
  const columns = [
    'id',
    'name',
    'email',
    'type',
    'tax',
    'directDeposit',
    'actions',
  ];
  return (
    <Body>
      <PageHeader
        title="sidebar.settings.users"
        linkTo="/users/user/add"
        intlMessage="sidebar.user.addUser"
        menuItems={[]}
      />
      <DataTable
        columns={columns}
        jsonData={jsonData}
        link={'/users/user/add'}
        name={'Users'}
      />
    </Body>
  );
};
export default AllCustomers;
