import { Body } from '../../../../Global/Styling';
import Steps from '../../../../Global/Components/ImportSteps';
import PageHeaderWithBack from '../../../../Global/Components/PageHeaderWithBack';
export default function ImportCustomer() {
  return (
    <>
      <Body>
        <PageHeaderWithBack
          title={'Import Accounts'}
          url="/accounting/chartofaccounts"
        />
        <Steps
        head = {[
            'Name',
            'Account Type',
            'Detailed Type',
            'Balance',
            "Bank Balance",
          ]}
          link="/accounting/chartofaccounts"
          importCustomer="Import Accounts"
          mainHeading="First time importing your Chart of Accounts? "
        />
      </Body>
    </>
  );
}
