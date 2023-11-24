import { Body } from '../../../Global/Styling';
import PageHeader from '../../../Global/Components/MainPageHeader';
import DataGrid from '../../../Global/ImprovedComponents/DataGrid';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppLoader from '@crema/components/AppLoader';
import {
  getAllCustomer,
  deleteCustomer,
} from '../../../../../../../services/CustomerService/CustomerService';
import { useEffect, useState } from 'react';
const AllCustomers = () => {
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);
  const [clickedCellId, setClickedCellId] = useState<string>('');
  const storedPermissions = localStorage.getItem('userPermissions');
  const handleCellClick = (id: string) => {
    setClickedCellId(id);
  };
  const hasViewCustomerPermission = () => {
    return Boolean(storedPermissions && storedPermissions.includes('Customer.View'));
  };
  const hasCreateCustomerPermission = () => {
    return Boolean(storedPermissions && storedPermissions.includes('Customer.Create'));
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
  const actionItems = [{ name: 'Create Invoice'},{name:'Create Quotation'},{name:'Send Statement'}];
  const menuItems = [
    { name: 'Import Customer', link: '/salespayment/customer/importcustomer' },
  ];
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
        
          <DataGrid
            columns={columns}
            jsonData={customerData}
            link={'/salespayment/customer'}
            name={'Customer'}
            fetchData={setFetchData}
            deleteRecord={setDeleteRecord}
            onCellClick={handleCellClick}
            actionItems={actionItems}
            canDelete={true}
          />
      
        </Body>
      )}
    </>
  );
};
export default AllCustomers;
