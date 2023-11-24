import { Body } from '../../../Global/Styling';
import PageHeader from '../../../Global/Components/MainPageHeader';
import DataGrid from '../../../Global/ImprovedComponents/DataGrid';
import {
  getAllBills,
  deleteBills,
} from '../../../../../../../services/BillsService/BillService';
import { useEffect, useState } from 'react';
import AppLoader from '@crema/components/AppLoader';
const AllBills = () => {
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);
  const [clickedCellId, setClickedCellId] = useState<string>('');
  const handleCellClick = (id: string) => {
    setClickedCellId(id);
  };
  
  const columns = [
    'id',
    'name',
    'status',
    'number',
    'date',
    'dueDate',
    'amountDue',
    'currencyType',
    'actions',
  ];
  const actionItems = [{ name: 'Create Bill' }];
  const menuItems = [
    { name: 'Import Customer', link: '/salespayment/customer/importcustomer' },
  ];
  const [billsData, setBillsData] = useState([]);
  async function fetchBills() {
    try {
      setLoading(true);
      const data = await getAllBills();
      console.log(data);
      const reversedData = data.reverse();
      setBillsData(reversedData);
      setFetchData(false);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching vendor:', error);
      setLoading(false);
      setFetchData(false);
    }
  }
  async function deletedBills(bId: string) {
    try {
      await deleteBills(bId);
      console.log('Bills deleted successfully');
      setDeleteRecord(false);
    } catch (error) {
      console.error('Error deleting bills:', error);
    }
  }
  useEffect(() => {
    if (fetchData) {
      fetchBills();
      setFetchData(false);
    }
    if (deleteRecord) {
      deletedBills(clickedCellId);
      setDeleteRecord(false);
    }
    fetchBills();
  }, [fetchData]);
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <Body>
          <PageHeader
            title="sidebar.purchases.bills"
            linkTo="/purchases/bills/add"
            intlMessage="common.createBill"
            menuItems={menuItems}
          />
          <DataGrid
            columns={columns}
            jsonData={billsData}
            link={'/purchases/bills'}
            name={'Bills'}
            fetchData={setFetchData}
            deleteRecord={setDeleteRecord}
            onCellClick={handleCellClick}
            actionItems={[]}
            canDelete={true}
          />
        </Body>
      )}
    </>
  );
};
export default AllBills;
