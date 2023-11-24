import { Body } from '../../../Global/Styling';
import PageFooterWithButtons from '../../../Global/Components/PageFooterWithButtons';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';

const EditBills = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'Edit Bill'} url="/purchases/bills" />
      <PageFooterWithButtons url={'/purchases/bills'} />
    </Body>
  );
};
export default EditBills;
