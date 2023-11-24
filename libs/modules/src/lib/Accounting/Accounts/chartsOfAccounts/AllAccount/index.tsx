import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Body } from '../../../Global/Styling';
import HeaderwithDialog from '../../../Global/Components/HeaderwithDialog';
import DataGrid from '../../../Global/ImprovedComponents/DataGrid';
import AppLoader from '@crema/components/AppLoader';
import { getAllAccounts,deleteAccount } from '../../../../../../../services/AccountsService/AccountsService';
const AllAccounts = () => {
  const [accountData, setAccountData] = useState([]);
  const intl = useIntl();
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState(false);
  const [deleteRecord, setDeleteRecord] = useState(false);
  const [clickedCellId, setClickedCellId] = useState<string>('');
  const handleCellClick = (id: string) => {
    setClickedCellId(id);
  };

  const columns = [
    'id',
    'accountTitle',
    'accountType',
    'currencyId',
    'balance',
    'actions',
  ];

  const menuItems = [
    {
      name: 'Import Account',
      link: '/accounting/chartofaccounts/importaccount',
    },
  ];

  async function fetchAccounts() {
    try {
      setLoading(true);
      const data = await getAllAccounts();
      console.log(data);
      const reversedData = data.reverse();
      setAccountData(reversedData);
      setFetchData(false);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching accounts:', error);
      setLoading(false);
      setFetchData(false);
    }
  }
  async function deletedAccounts(aId: string) {
    try {
      await deleteAccount(aId);
      console.log('Account deleted successfully');
      setDeleteRecord(false);
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  }
  useEffect(() => {
    if (fetchData) {
      fetchAccounts();
      setFetchData(false);
    }
    if (deleteRecord) {
      deletedAccounts(clickedCellId);
      setDeleteRecord(false);
    }
    fetchAccounts();
  }, [fetchData]);
  return (
    <>
     {loading ? (
        <AppLoader />
      ) : (
      <><HeaderwithDialog
        title="chartOfAccountApp.all"
        intlMessage="COA.addAccount"
        menuItems={menuItems}
        fetchData={setFetchData}
      />
      <DataGrid
        columns={columns}
        jsonData={accountData}
        link={'/accounting/chartofaccounts'}
        name={'All Account'}
        fetchData={setFetchData}
        deleteRecord={setDeleteRecord}
        onCellClick={handleCellClick}
        actionItems={[{name:"Run Report"},{name:"Archive Account"}]}
        canDelete={true}
      />
      </>
      )}
    </>
      
  );
};

export default AllAccounts;
