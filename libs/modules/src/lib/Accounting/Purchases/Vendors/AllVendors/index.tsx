import { Body } from '../../../Global/Styling';
import PageHeader from '../../../Global/ImprovedComponents/MainPageHeader';
import DataGrid from '../../../Global/ImprovedComponents/DataGrid';
import { useState, useEffect } from 'react';
import AppLoader from '@crema/components/AppLoader';
import { getAllVendors,deleteVendor, } from '../../../../../../../services/VendorService/VendorService';

const AllVendors = () => {
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);
  const [clickedCellId, setClickedCellId] = useState<string>('');
  const storedPermissions = localStorage.getItem('userPermissions');
  console.log(storedPermissions);
  const handleCellClick = (id: string) => {
    setClickedCellId(id);
  };
  const hasCreateVendorPermission = () => {
    return Boolean(storedPermissions && storedPermissions.includes('Vendor.Create'));
  };
  const hasEditVendorPermission = () => {
    return Boolean(storedPermissions && storedPermissions.includes('Vendor.Edit'));
  };
  const hasDeleteVendorPermission = () => {
    return Boolean(storedPermissions && storedPermissions.includes('Vendor.Delete'));
  };
  const hasViewVendorPermission = () => {
    return Boolean(storedPermissions && storedPermissions.includes('Vendor.View'));
  };
  console.log("Permissions: of vendor ");
  console.log(hasCreateVendorPermission());
  const columns = [
    'id',
    'vendorName',
    'email',
    'type',
    'tax',
    'directDeposit',
    'currencyType',
    'actions',
  ];
  const actionItems = [{ name: 'Create Bill' }];
  const menuItems = [
    { name: 'Import from CSV', link: '/purchases/vendors/csv' },
  ];
  const [vendorData, setVendorData] = useState([]);
  async function fetchVendor() {
    try {
      setLoading(true);
      const data = await getAllVendors();
      console.log(data);
      const reversedData = data.reverse();
      setVendorData(reversedData);
      setFetchData(false);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching vendor:', error);
      setLoading(false);
      setFetchData(false);
    }
  }
  async function deletedVendor(cId: string) {
    try {
      await deleteVendor(cId);
      console.log('Vendor deleted successfully');
      setDeleteRecord(false);
    } catch (error) {
      console.error('Error deleting vendor:', error);
    }
  }
  useEffect(() => {
    if (fetchData) {
      fetchVendor();
      setFetchData(false);
    }
    if (deleteRecord) {
      deletedVendor(clickedCellId);
      setDeleteRecord(false);
    }
    fetchVendor();
  }, [fetchData]);
  return (
    <>
       {loading ? (
        <AppLoader />
      ) : (
      <Body>
        <PageHeader
          title={'Vendor'}
          linkTo="/purchases/vendors/add"
          intlMessage="vendor.addVendor"
          menuItems={menuItems}
          showCreate={true}
        />
      
         <DataGrid
            columns={columns}
            jsonData={vendorData}
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
export default AllVendors;
