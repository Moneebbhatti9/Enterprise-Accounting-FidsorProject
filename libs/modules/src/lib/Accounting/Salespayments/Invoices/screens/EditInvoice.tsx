import { Body } from '../../../Global/Styling';
import PageFooterWithButtons from '../../../Global/Components/PageFooterWithButtons';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';

const EditInvoice = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'Edit Invoice'} url="/salespayment/invoices" />
      <PageFooterWithButtons url={'/salespayment/invoices'} />
    </Body>
  );
};
export default EditInvoice;
