import { Body } from '../Customer/AddCustomer/Components/AddCustomerStyled';
import PageFooterWithButtons from '../../Global/Components/PageFooterWithButtons';
import PageHeaderWithBack from '../../Global/Components/PageHeaderWithBack';

const EditEstimate = () => {
  return (
    <Body>
      <PageHeaderWithBack
        title={'Edit Estimate'}
        url="/salespayment/quotations"
      />
      <PageFooterWithButtons url={'/salespayment/quotations'} />
    </Body>
  );
};
export default EditEstimate;
