import AppAnimate from '@crema/components/AppAnimate';
import { TabsWrapper } from '../../Accounting/Accounts/chartsOfAccounts';
import PageForm from './AddEstimateComponent/PageForm';
import { Body } from '../../Accounting/Accounts/chartsOfAccounts/AllAccount/GlobalStyling';

const CreateEstimatesPage = () => {
  return (
    <TabsWrapper key="2">
      <AppAnimate animation="transition.slideRightIn" delay={300}>
        <Body>
          <PageForm />
        </Body>
      </AppAnimate>
    </TabsWrapper>
  );
};

export default CreateEstimatesPage;
