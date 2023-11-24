import ApiService from '../ApiService/ApiService';
const apiService = new ApiService();
import { AddUser } from 'libs/modules/interfaces/AddUser/AddUser';
export const getAllRoles = async () => {
    try {
      const response = await apiService.get('Role');
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  };
  

  export const addUser = async (userData: AddUser) => {
    try {
      const response = await apiService.post('User', userData);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };