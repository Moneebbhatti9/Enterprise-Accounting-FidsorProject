import { Body } from '../AddCustomer/Components/AddCustomerStyled';
import Steps from '../../../Global/Components/ImportSteps';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';
export default function ImportCustomer() {
  return (
    <Body>
      <PageHeaderWithBack
        title={'Import Customer'}
        url="/salespayment/customer"
      />
      <Steps
        head={['Name', 'Email', 'Phone', 'Currency Type', 'Balance | Overdue']}
        link="/salespayment/customer"
        importCustomer="Import Customer"
        mainHeading="A CSV or Excel is a spread sheet that is used by Enterprise Connect to import Customer information into your bussiness account."
      />
    </Body>
  );
}
