import { Body } from '../../../Global/Styling';
import Steps from '../../../Global/Components/ImportSteps';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';
export default function ImportCustomer() {
  return (
    <Body>
      <PageHeaderWithBack title={'Import Vendor'} url="/purchases/vendors" />
      <Steps
        head={['Name', 'Email', 'Type', 'Direct Deposit', 'TAX/VAT']}
        link="/purchases/vendors"
        importCustomer="Import Vendor"
        mainHeading="A CSV or Excel is a spread sheet that is used by Enterprise Connect to import Vendor information into your bussiness account."
      />
    </Body>
  );
}
