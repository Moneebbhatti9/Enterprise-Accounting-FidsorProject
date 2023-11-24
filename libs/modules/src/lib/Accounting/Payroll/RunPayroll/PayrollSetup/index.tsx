import { Body } from '../../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import RunPayrollScreen from './Components/RunPayrollScreen';
import SimpleHeader from '../../../../Accounting/Global/Components/SimpleHeader';

const PayrollSetup = () => {
  return (
    <Body>
      <SimpleHeader title="sidebar.payroll" />
      <RunPayrollScreen />
    </Body>
  );
};

export default PayrollSetup;
