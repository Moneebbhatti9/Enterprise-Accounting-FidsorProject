import ApiService from '../ApiService/ApiService';
import { FormValues } from '../../modules/src/lib/Accounting/Salespayments/Customer/AddCustomer/Components/AddCustomerInterface';

const apiService = new ApiService();

export const getAllCustomer = async () => {
  try {
    const response = await apiService.get('Customer');
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addCustomer = async (formData: FormValues) => {
  try {
    // Assuming you have a specific endpoint for adding employees, update the path accordingly
    const response = await apiService.post('Customer', formData);
    return response; // Return the response data if needed
  } catch (error) {
    throw error; // Rethrow the error to handle it in your component
  }
};

export const getCustomerByID = async (customerId: string) => {
  try {
    const response = await apiService.get(`Customer/${customerId}`);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteCustomer = async (billId: string) => {
  try {
    const response = await apiService.delete(`Customer/${billId}`);
    console.log('Bill deleted:', response);
    return response;
  } catch (error) {
    throw error;
  }
};
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};

export const updateCustomer = async (
  customerId: string,
  formData: FormValues
) => {
  try {
    const response = await apiService.put(`Customer/${customerId}`, formData, {
      headers,
    });
    return response; // Return the response data if needed
  } catch (error) {
    console.error('Error updating customer:', error);
    throw error; // Rethrow the error to handle it in your component
  }
};

// export const updateCustomer = async (
//   customerId: string,
//   formData: FormValues
// ) => {
//   try {
//     // Assuming the endpoint for updating a customer is /Customer/{customerId}
//     const response = await apiService.put(`Customer/${customerId}`, formData);
//     return response; // Return the response data if needed
//   } catch (error) {
//     throw error; // Rethrow the error to handle it in your component
//   }
// };
