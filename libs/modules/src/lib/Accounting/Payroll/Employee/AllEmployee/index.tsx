import { Body } from '../../../Global/Styling';
import PageHeader from '../../../Global/Components/MainPageHeader';
import DataTable from '../../../Global/Components/DataGrid';
import { useState, useEffect } from 'react';
import { getAllEmployee } from '../../../../../../../services/EmployeeService/EmpoyeeService';
const AllEmployee = () => {
  const columns = [
    'id',
    'name',
    'description',
    'email',
    'mobile',
    'type',
    'dateOfHire',
    'salary',
    'status',
    'actions',
  ];
  const menuItems = [{ name: '', link: '' }];
  const [employeeData, setEmployeeData] = useState([]);
  useEffect(() => {
    async function fetchEmployees() {
      try {
        const data = await getAllEmployee();
        console.log(data);
        const reversedData = data.reverse();
        setEmployeeData(reversedData);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    }

    fetchEmployees();
  }, []);
  return (
    <Body>
      <PageHeader
        title="common.Employee"
        linkTo="/hr/setup/employees/add"
        intlMessage="employee.addEmployee"
        menuItems={menuItems}
      />
      <DataTable
        columns={columns}
        jsonData={employeeData}
        link={'/payroll/employees'}
        name={'Employee'}
      />
    </Body>
  );
};
export default AllEmployee;
