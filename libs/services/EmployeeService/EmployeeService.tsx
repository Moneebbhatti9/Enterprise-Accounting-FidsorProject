import ApiService from '../ApiService/ApiService'; // Import your ApiService class
import EmployeeFields from '../../modules/src/lib/Accounting/Payroll/Employee/AddEmployee/Components/EmployeeInterface';

const apiService = new ApiService();

export const getAllEmployees = async () => {
  try {
    const response = await apiService.get('Employees');
    return response;
  } catch (error) {
    throw error;
  }
};

export const addEmployee = async (formData: any) => {
  try {
    // Assuming you have a specific endpoint for adding employees, update the path accordingly
    const response = await apiService.post('Employees', formData);
    return response; // Return the response data if needed
  } catch (error) {
    throw error; // Rethrow the error to handle it in your component
  }
};


export const deleteEmployee = async (employeeId: string) => {
  try {
    const response = await apiService.delete(`Employees/${employeeId}`);
    console.log('Employee deleted:', response);
    return response;
  } catch (error) {
    throw error;
  }
};