import { Body } from '../../../Global/Styling';
import PageFooterWithButtons from '../../../Global/Components/PageFooterWithButtons';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';

const EditEmployee = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'Edit Employee'} url="/payroll/employees" />
      <PageFooterWithButtons url={'/payroll/employees'} />
    </Body>
  );
};
export default EditEmployee;
