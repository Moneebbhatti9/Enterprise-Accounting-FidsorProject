import Box from '@mui/material/Box';
import AppAnimate from '@crema/components/AppAnimate';
import { TabsWrapper } from '../../Accounting/Accounts/chartsOfAccounts';
import PageTop from './AddBillComponent/BillForm';

const CreateBillPage = () => {
  return (
    <TabsWrapper key="2">
      <AppAnimate animation="transition.slideRightIn" delay={300}>
        <Box className="account-tabs-content">
          <PageTop />
        </Box>
      </AppAnimate>
    </TabsWrapper>
  );
};

export default CreateBillPage;
