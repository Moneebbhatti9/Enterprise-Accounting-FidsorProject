import ApiService from '../ApiService/ApiService';

const apiService = new ApiService();

export const getAllEmployee = async () => {
  try {
    const response = await apiService.get('Employees');
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};