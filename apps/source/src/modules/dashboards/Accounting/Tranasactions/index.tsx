import Box from '@mui/material/Box';
import AppAnimate from '@crema/components/AppAnimate';
import { AllTransactions } from '../../../../../../../libs/modules/src/lib/Accounting/Accounts/transactions';
import { Body } from 'libs/modules/src/lib/Accounting/Global/Styling';
const Transactions = () => {
  return (
    <Body>
      <AppAnimate animation="transition.slideRightIn" delay={300}>
        <Box className="account-tabs-content">
          <AllTransactions />
        </Box>
      </AppAnimate>
    </Body>
  );
};

export default Transactions;
