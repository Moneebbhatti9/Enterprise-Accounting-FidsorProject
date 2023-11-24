import React, { useState, useEffect } from 'react';
import PageHeader from '../../../Accounting/Global/Components/MainPageHeader';
import DataGrid from '../../../Accounting/Global/ImprovedComponents/DataGrid';
import AppLoader from '@crema/components/AppLoader';
import {
  getAllBusinesses,
  deleteBusiness,
} from '../../../../../../services/BusinessService/BusinessService';
const Businesses = () => {
  const [businessData, setBusinessData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);
  const [clickedCellId, setClickedCellId] = useState<string>('');
  const handleCellClick = (id: string) => {
    setClickedCellId(id);
  };
  const menuItems = [
    {
      name: 'Import Businesses',
      link: '/salespayment/customer/importcustomer',
    },
  ];
  const columns = [
    'id',
    'name',
    'email',
    'phone',
    'currencyType',
    'balanceOverdue',
    'actions',
  ];
  async function fetchBusinesses() {
    try {
      setLoading(true);
      const data = await getAllBusinesses();
      console.log(data);
      const reversedData = data.reverse();
      setBusinessData(reversedData);
      setFetchData(false);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching business:', error);
      setLoading(false);
      setFetchData(false);
    }
  }
  async function deletedBusiness(bId: string) {
    try {
      await deleteBusiness(bId);
      console.log('Business deleted successfully');
      setDeleteRecord(false);
    } catch (error) {
      console.error('Error deleting business:', error);
    }
  }
  useEffect(() => {
    if (fetchData) {
      fetchBusinesses();
      setFetchData(false);
    }
    if (deleteRecord) {
      deletedBusiness(clickedCellId);
      setDeleteRecord(false);
    }
    fetchBusinesses();
  }, [fetchData]);

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <>
          <PageHeader
            title={'Businesses'}
            linkTo="/settings/businesses/add"
            intlMessage="common.addBusiness"
            menuItems={menuItems}
          />
          <DataGrid
            columns={columns}
            jsonData={businessData}
            link={'/settings/businesses'}
            name={'Businesses'}
            fetchData={setFetchData}
            deleteRecord={setDeleteRecord}
            onCellClick={handleCellClick}
            actionItems={[]}
            canDelete={true}
          />
        </>
      )}
    </>
  );
};

export default Businesses;
