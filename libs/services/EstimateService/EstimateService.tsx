import ApiService from '../ApiService/ApiService';
import { Estimates } from '../../modules/interfaces/Estimates/Estimates';
const apiService = new ApiService();
export const getAllEstimates = async () => {
  try {
    const response = await apiService.get('Estimates');
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteEstimates = async (estimateId: string) => {
  try {
    const response = await apiService.delete(`Estimates/${estimateId}`);
    console.log('Estimate deleted:', response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addEstimates = async (estimatesData: Estimates) => {

    const response = await apiService.post('Estimates', estimatesData);
    if (response) {
      return response.data;      
    }
};
