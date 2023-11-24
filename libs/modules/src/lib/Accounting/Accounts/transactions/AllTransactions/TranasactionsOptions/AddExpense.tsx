// IconLabelButtons.tsx
import React, { useState } from 'react';
// import {
//   StyledStack,
//   StyledButton,
// } from '../../../../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';
import { StyledStack, StyledButton } from '../../../../Global/Styling';
import PaymentIcon from '@mui/icons-material/Payment';
import IntlMessages from '@crema/helpers/IntlMessages';
import AddExpenseDialog from './AddExpenseDialog';

export default function AddExpense() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <StyledStack direction="row" spacing={2}>
      <StyledButton
        variant="outlined"
        startIcon={<PaymentIcon />}
        onClick={handleOpenDialog}
      >
        <IntlMessages id="common.addExpense" />
      </StyledButton>
      <AddExpenseDialog open={isDialogOpen} onClose={handleCloseDialog} />
    </StyledStack>
  );
}
