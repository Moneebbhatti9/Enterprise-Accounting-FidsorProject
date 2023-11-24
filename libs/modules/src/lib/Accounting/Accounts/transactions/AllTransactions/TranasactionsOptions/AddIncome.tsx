import React, { useState } from 'react';
import { StyledStack, StyledButton } from '../../../../Global/Styling';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import IntlMessages from '@crema/helpers/IntlMessages';
import AddIncomeDialog from './AddIncomeDialog';

export default function AddIncome() {
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
        startIcon={<AttachMoneyIcon />}
        onClick={handleOpenDialog}
      >
        <IntlMessages id="transactions.addIncome" />
      </StyledButton>
      <AddIncomeDialog open={isDialogOpen} onClose={handleCloseDialog} />
    </StyledStack>
  );
}
