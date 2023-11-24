import React from 'react';
import { useIntl } from 'react-intl';
import {
  PageWrapper,
  HeaderWrapper,
  Title,
  ContentWrapper,
} from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import AppsContainer from '@crema/components/AppsContainer';
import DataTable from './DataTable';
import CreateAccountOptions from '../Options';

const AllPurchases = () => {
  const { messages } = useIntl();

  return (
    <PageWrapper>
      <HeaderWrapper>
        <Title>{messages['common.productServicesPurchase'] as string}</Title>
        <CreateAccountOptions />
      </HeaderWrapper>
      <AppsContainer
        fullView
        title={undefined}
        sxStyle={{ paddingLeft: '148px', paddingRight: '187px' }}
      >
        <ContentWrapper sxStyle={{ paddingLeft: '45px', paddingRight: '28px' }}>
          <DataTable />
        </ContentWrapper>
      </AppsContainer>
    </PageWrapper>
  );
};

export default AllPurchases;
