import { Body } from '../../../Salespayments/Customer/AddCustomer/Components/AddCustomerStyled';
import SimpleHeader from '../../../Global/Components/SimpleHeader';
import ReportsScreen from './Components/ReportsScreen';

const ReportsSetup = () => {
  return (
    <Body>
      <SimpleHeader title="sidebar.reports" />
      <ReportsScreen />
    </Body>
  );
};

export default ReportsSetup;
