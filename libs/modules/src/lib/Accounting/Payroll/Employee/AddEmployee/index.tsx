import { Body } from '../../../Global/Styling';
import PageHeaderWithBack from '../../../Global/Components/PageHeaderWithBack';
import AddEmployeeFields from './Components/AddEmployeeFields';

const AddEmployee = () => {
  return (
    <Body>
      <PageHeaderWithBack
        title={'Add Employee'}
        url="/hr/setup/employees/add"
      />
      <AddEmployeeFields />
    </Body>
  );
};
export default AddEmployee;
