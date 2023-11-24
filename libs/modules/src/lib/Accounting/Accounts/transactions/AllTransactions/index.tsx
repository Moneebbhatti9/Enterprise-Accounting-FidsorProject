import { useState } from 'react';
import { useIntl } from 'react-intl';
import {
  PageWrapper,
  HeaderWrapper,
  CustomerTitle,
  ContentWrapper,
} from '../../../Global/Styling';
import AppsContainer from '@crema/components/AppsContainer';
import DataTable from './DataTable';
import TransactionsOptions from './TranasactionsOptions/index';
import AccountDropdown from './AccountDropdown';

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const AllVendors = () => {
  const { messages } = useIntl();
  const options = [
    'Frozen yoghurt',
    'Force',
    '',
    'Ice cream sandwich',
    'Eclair',
  ];
  function handleItemChange(item: string): void {
    throw new Error('Function not implemented.');
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenCustomerModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseCustomerModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AppsContainer fullView title={undefined} sxStyle={{ padding: '0px' }}>
        <HeaderWrapper>
          <CustomerTitle>
            {messages['sidebar.accounting.transactions'] as string}
          </CustomerTitle>
          <TransactionsOptions />
        </HeaderWrapper>

        <ContentWrapper
          style={{
            paddingLeft: '20px',
            paddingRight: '10px',
            fontSize: '12px',
          }}
        >
          {/* <AccountDropdown

          /> */}
          <DataTable />
        </ContentWrapper>
      </AppsContainer>
    </>
  );
};

export default AllVendors;
