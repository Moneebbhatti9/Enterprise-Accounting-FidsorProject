import { Body } from '../../Customer/AddCustomer/Components/AddCustomerStyled';
import PageFooterWithButtons from '../../../Global/Components/PageFooterWithButtons';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';

const EditEstimate = () => {
  return (
    <Body>
      <PageHeaderWithBack
        title={'Edit Product & Services'}
        url="/salespayment/productservices"
      />
      <PageFooterWithButtons url={'/salespayment/productservices'} />
    </Body>
  );
};
export default EditEstimate;
