import React from 'react';
import { useIntl } from 'react-intl';
import {
  PageWrapper,
  HeaderWrapper,
  CustomerTitle,
  ContentWrapper,
} from '../../../../src/lib/chartsOfAccounts/AllAccount//GlobalStyling';
import AppsContainer from '@crema/components/AppsContainer';
import DataTable from './DataTable';
import CreateAccountOptions from '../Options';

const AllBills = () => {
  const { messages } = useIntl();

  return (
    <AppsContainer fullView title={undefined} sxStyle={{ padding: '0px' }}>
      <HeaderWrapper>
        <CustomerTitle>
          {messages['common.purchases.bills'] as string}
        </CustomerTitle>
        <CreateAccountOptions />
      </HeaderWrapper>

      <ContentWrapper sx={{ px: '60px' }}>
        <DataTable />
      </ContentWrapper>
    </AppsContainer>
  );
};

export default AllBills;
