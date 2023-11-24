import { Body } from '../../../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import InputFieldsVendors from './Components/InputFieldsVendors';
import PageHeaderWithBack from '../../../../Global/Components/PageHeaderWithBack';

const AddVendor = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'Add Vendor'} url="/purchases/vendors" />
      <InputFieldsVendors />
    </Body>
  );
};

export default AddVendor;
