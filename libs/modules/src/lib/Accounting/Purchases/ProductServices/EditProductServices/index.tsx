import { Body } from '../../../Global/Styling';
import PageFooterWithButtons from '../../../Global/Components/PageFooterWithButtons';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';

const EditBills = () => {
  return (
    <Body>
      <PageHeaderWithBack
        title={'Edit Product & Services'}
        url="/purchases/productservices"
      />
      <PageFooterWithButtons url={'/purchases/productservices'} />
    </Body>
  );
};
export default EditBills;
