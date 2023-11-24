import { useIntl } from 'react-intl';
import {
  HeaderWrapper,
  CustomerTitle,
  ContentWrapper,
} from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import AppsContainer from '@crema/components/AppsContainer';
import DataTable from './DataTable';
import CreateAccountOptions from '../Options';

const AllPurchases = () => {
  const { messages } = useIntl();

  return (
    <AppsContainer fullView title={undefined} sxStyle={{ padding: '0px' }}>
      <HeaderWrapper>
        <CustomerTitle>
          {messages['common.productservices.purchase'] as string}
        </CustomerTitle>
        <CreateAccountOptions />
      </HeaderWrapper>

      <ContentWrapper sx={{ px: '60px' }}>
        <DataTable />
      </ContentWrapper>
    </AppsContainer>
  );
};

export default AllPurchases;
