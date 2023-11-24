import Box from '@mui/material/Box';
import AppAnimate from '@crema/components/AppAnimate';
import TabsWrapper from '../../../../Accounts/chartsOfAccounts/TabsWrapper';
import { Container } from '@mui/material';
import Header from './components/Header';
import InvoiceDetails from './components/InvoiceDetails';

const ViewEstimatePage = () => {
  return (
    <TabsWrapper key="2">
      <AppAnimate animation="transition.slideRightIn" delay={300}>
        <Box className="account-tabs-content">
          <Container>
            <Header />
            <InvoiceDetails />
          </Container>
        </Box>
      </AppAnimate>
    </TabsWrapper>
  );
};

export default ViewEstimatePage;
