import Box from '@mui/material/Box';
import AppAnimate from '@crema/components/AppAnimate';
import { TabsWrapper } from '../../../../../../../libs/modules/src/lib/Accounting/Accounts/chartsOfAccounts';
import { AllPurchases } from '../../../../../../../libs/modules/src/lib/productservicespurchases';

const Productservicespurchases = () => {
  return (
    <TabsWrapper key="2">
      <AppAnimate animation="transition.slideRightIn" delay={300}>
        <Box className="account-tabs-content">
          <AllPurchases />
        </Box>
      </AppAnimate>
    </TabsWrapper>
  );
};

export default Productservicespurchases;
