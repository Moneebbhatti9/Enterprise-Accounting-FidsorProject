import { Body } from '../../../../Global/Styling';
import PageHeaderWithBack from '../../../../Global/Components/PageHeaderWithBack';
import PayrollScheduleFields from './PayrollScheduleComponents/PayrollSchedule';

const PayrollSchedule = () => {
  return (
    <Body>
      <PageHeaderWithBack title={'Pay Schedule'} url="/payroll/employees" />
      <PayrollScheduleFields />
    </Body>
  );
};

export default PayrollSchedule;
