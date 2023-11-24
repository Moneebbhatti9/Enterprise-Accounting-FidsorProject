import { useIntl } from 'react-intl';
import { Body } from '../../../Global/Styling';
import SimpleHeader from '../../../Global/Components/SimpleHeader';
import DataTable from '../../../Global/Components/DataGrid';
import { getAllArchiveAccounts } from '../../../../../../../services/AccountsService/AccountsService';
import { useEffect, useState } from 'react';
const AllAccounts = () => {
  const [accountData, setAccountData] = useState([]);
  const intl = useIntl();
  const columns = [
    'id',
    'accountTitle',
    'accountType',
    'currencyId',
    'balance',
    'actions',
  ];
  useEffect(() => {
    async function fetchAccounts() {
      try {
        const data = await getAllArchiveAccounts();
        console.log(data);
        const reversedData = data.reverse();
        setAccountData(reversedData);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    }

    fetchAccounts();
  }, []);
  return (
    <>
      <SimpleHeader title="chartOfAccountApp.archiveAccount" />
      <DataTable
        columns={columns}
        jsonData={accountData}
        link={'/accounting/chartofaccounts'}
        name={'Archive Account'}
      />
    </>
  );
};
export default AllAccounts;
