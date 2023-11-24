import ApiService from '../ApiService/ApiService';
import {BillsDataType} from '../../modules/interfaces/Bills/Bills';
const apiService = new ApiService();
export const getAllBills = async () => {
  try {
    const response = await apiService.get('Bills');
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteBills = async (billId: string) => {
  try {
    const response = await apiService.delete(`Bills/${billId}`);
    console.log('Bill deleted:', response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addBill = async (billsData: BillsDataType) => {
  try {
    const response = await apiService.post('Bills', billsData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
