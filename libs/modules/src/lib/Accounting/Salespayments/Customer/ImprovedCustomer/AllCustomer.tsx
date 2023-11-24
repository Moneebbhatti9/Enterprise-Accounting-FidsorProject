import { Body } from '../../../Global/Styling';
import PageHeader from '../../../Global/Components/MainPageHeader';
import DataTable from './DataGrid';
import { useEffect, useState } from 'react';
import AppLoader from '@crema/components/AppLoader';
import { getAllCustomer,deleteCustomer } from 'libs/services/CustomerService/CustomerService';
const AllCustomer = () => {
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);
  const [clickedCellId, setClickedCellId] = useState<string>('');
  const handleCellClick = (id: string) => {
    setClickedCellId(id);
  };
  const columns = [
    'id',
    'customerName',
    'email',
    'phone',
    'balanceOverdue',
    'currencyType',
    'actions',
  ];
  const menuItems = [
    { name: 'Import Customer', link: '/salespayment/customer/importcustomer' },
  ];
  const actionItems = [{ name: 'Duplicate' }];
  const [customerData, setCustomerData] = useState([]);
  async function fetchCustomer() {
    try {
      setLoading(true);
      const data = await getAllCustomer();
      console.log(data);
      const reversedData = data.reverse();
      setCustomerData(reversedData);
      setFetchData(false);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching estimates:', error);
      setLoading(false);
      setFetchData(false);
    }
  }
  async function deletedCustomer(cId: string) {
    try {
      await deleteCustomer(cId);
      console.log('Bill deleted successfully');
      setDeleteRecord(false);
    } catch (error) {
      console.error('Error deleting bill:', error);
    }
  }
  useEffect(() => {
    if (fetchData) {
      fetchCustomer();
      setFetchData(false);
    }
    if (deleteRecord) {
      deletedCustomer(clickedCellId);
      setDeleteRecord(false);
    }
    fetchCustomer();
  }, [fetchData]);
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <Body>
          <PageHeader
            title="common.customer"
            linkTo="/salespayment/customer/addcustomer"
            intlMessage="customer.addCustomer"
            menuItems={menuItems}
          />
          <DataTable
            columns={columns}
            jsonData={customerData}
            link={'/salespayment/customer'}
            name={'Customer'}
            fetchData={setFetchData}
            deleteRecord={setDeleteRecord}
            onCellClick={handleCellClick}
            actionItems={actionItems}
          />
        </Body>
      )}
    </>
  );
};
export default AllCustomer;
