import { Body } from '../../../Global/Styling';
import PageFooterWithButtons from '../../../Global/Components/PageFooterWithButtons';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';

const ViewEmployee = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'View Employee'} url="/payroll/employees" />
      <PageFooterWithButtons url={'/payroll/employees'} />
    </Body>
  );
};
export default ViewEmployee;
