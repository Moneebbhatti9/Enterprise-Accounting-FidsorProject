import { Body } from '../Customer/AddCustomer/Components/AddCustomerStyled';
import PageFooterWithButtons from '../../Global/Components/PageFooterWithButtons';
import PageHeaderWithBack from '../../Global/Components/PageHeaderWithBack';

const SendStatement = () => {
  return (
    <Body>
      <PageHeaderWithBack
        title={'Send Statement'}
        url="/salespayment/customer"
      />
      <PageFooterWithButtons url={'/salespayment/customer'} />
    </Body>
  );
};
export default SendStatement;
