import { Body } from '../../../Global/Styling';
import PageFooterWithButtons from '../../../Global/Components/PageFooterWithButtons';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';

const ViewBills = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'View Bills'} url="/purchases/bills" />
      <PageFooterWithButtons url={'/purchases/bills'} />
    </Body>
  );
};
export default ViewBills;
