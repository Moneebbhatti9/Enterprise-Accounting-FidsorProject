import { Body } from '../Customer/AddCustomer/Components/AddCustomerStyled';
import PageHeaderWithBack from '../../../Accounting/Global/Components/PageHeaderWithBack';
import EditCustomerFields from './EditCustomer/EditCustomerFields';
import { useParams } from 'react-router-dom';

const EditCustomer = () => {
  const { id } = useParams<{ id?: string }>();
  const customerId = id || '';
  return (
    <Body>
      <PageHeaderWithBack
        title={'Edit Customer'}
        url="/salespayment/customer"
      />
        <EditCustomerFields id={customerId } />
    
    </Body>
  );
};
export default EditCustomer;
