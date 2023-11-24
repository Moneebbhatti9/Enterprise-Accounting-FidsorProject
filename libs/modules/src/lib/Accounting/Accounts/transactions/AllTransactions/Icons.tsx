import { useState } from 'react';
import { useIntl } from 'react-intl';
import {
  PageWrapper,
  HeaderWrapper,
  CustomerTitle,
  ContentWrapper,
} from '../../../../src/lib/chartsOfAccounts/AllAccount//GlobalStyling';
import AppsContainer from '@crema/components/AppsContainer';
import DataTable from './DataTable';
import TransactionsOptions from './TranasactionsOptions/index';
import AccountDropdown from './AccountDropdown';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { StyledAutoComlete } from '../tranactionsStyling';
import { Box, TextField } from '@mui/material';
const Icons = () => {
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
  const amountOptions = [
    { value: 'Cash', label: 'Cash 1' },
    { value: 'Card', label: 'Card 1' },
    { value: 'Expense', label: 'Expense 1' },
    { value: 'Bank', label: 'Bank 1' },
    {
      value: 'Credit Card',
      label: 'Credit 1',
    },
  ];
  return (
    <>
     
                <DeleteIcon
                  style={{
                    color: 'gray',
                    fontSize: '25px',
                    border: 'solid 1px gray',
                    borderRadius: '50%',
                    padding: '4px',
                    cursor: 'pointer',
                  }}
                />
              
    </>
  );
};

export default Icons;
