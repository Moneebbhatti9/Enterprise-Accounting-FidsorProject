import { Body } from '../../../../Global/Styling';
import AddBusinessFields from './AddBusinessComponents/AddBusinessFields';
import PageHeaderWithBack from '../../../../Global/Components/PageHeaderWithBack';

const AddBusinessDetails = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'Payroll Setup'} url="/payroll/runpayroll" />
      <AddBusinessFields />
    </Body>
  );
};

export default AddBusinessDetails;
