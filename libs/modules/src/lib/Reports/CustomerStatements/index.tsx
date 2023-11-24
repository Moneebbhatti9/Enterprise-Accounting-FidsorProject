import { Body } from '../../Accounting/Global/Styling';
import SimpleHeader from '../../Accounting/Global/Components/SimpleHeader';
import Filter from './Filter';
const CustomerStatement = () => {
  return (
    <Body>
      <SimpleHeader title={'Customer Statements'} />
      <Filter />
    </Body>
  );
};
export default CustomerStatement;
