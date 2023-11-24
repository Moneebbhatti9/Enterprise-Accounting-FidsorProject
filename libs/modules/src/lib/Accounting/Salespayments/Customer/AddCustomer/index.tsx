import InputFields from './Components/InputField';
import { Body } from './Components/AddCustomerStyled';
import PageHeaderWithBack from '../../../../../../../../libs/modules/src/lib/Accounting/Global/Components/PageHeaderWithBack';

const AddCustomer = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'Add Customer'} url="/salespayment/customer" />
      <InputFields />
    </Body>
  );
};

export default AddCustomer;
