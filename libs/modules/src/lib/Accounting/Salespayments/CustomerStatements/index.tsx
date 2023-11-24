import { Body } from '../../../Accounting/Global/Styling';
import SimpleHeader from '../../Global/Components/SimpleHeader';
import Filter from './Filter';
const CustomerStatement = () => {
  return (
    <Body>
      <SimpleHeader title="sidebar.salespayment.customerstatements" />
      <Filter />
    </Body>
  );
};

export default CustomerStatement;
