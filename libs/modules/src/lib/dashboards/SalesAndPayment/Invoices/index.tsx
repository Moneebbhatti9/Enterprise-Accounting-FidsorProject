import React from 'react';
import { useIntl } from 'react-intl';
import Details from './components/details';
import {
  CustomerTitle,
  ContentWrapper,
} from '../../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import AppsContainer from '@crema/components/AppsContainer';
import UnstyledTabsIntroduction from '../../SalesAndPayment/Invoices/components/Tabs';
import InvoicesInstructions from './components/invoicesInstructions';
import { Wrapper, Heading, StyledButton } from './styles/GridStyling';
const AllInvoices = () => {
  const { messages } = useIntl();

  return (
    <AppsContainer fullView title={undefined} sxStyle={{ padding: '0px' }}>
      {/* <HeaderWrapper>
        <CustomerTitle>
          {messages['common.invoices_sp'] as string}
        </CustomerTitle>
         <Link to='/invoice/list/add'><ButtonInvoiceStyling variant="outlined" > {messages['common.invoices_create'] as string}</ButtonInvoiceStyling> </Link>

      </HeaderWrapper> */}
      <Wrapper>
        <Heading>
          {' '}
          <CustomerTitle>
            {messages['common.invoices_sp'] as string}
          </CustomerTitle>
        </Heading>
        <StyledButton variant="contained" color="primary">
          {messages['common.invoices_create'] as string}
        </StyledButton>
      </Wrapper>

      <ContentWrapper sx={{ px: '60px' }}>
        <Details />
        <UnstyledTabsIntroduction />
        <InvoicesInstructions />
      </ContentWrapper>
    </AppsContainer>
  );
};

export default AllInvoices;
