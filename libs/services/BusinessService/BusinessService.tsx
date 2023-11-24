import ApiService from '../ApiService/ApiService';
import {
  BusinessFields,
  EditBusinessFields,
} from '../../modules/src/lib/dashboards/Setting/Businesses/AddBusiness/AddBusinessInterface';

const apiService = new ApiService();

export const getAllBusinesses = async () => {
  try {
    const response = await apiService.get('Business');
    return response;
  } catch (error) {
    throw error;
  }
};

export const addBusiness = async (businessData: BusinessFields) => {
  try {
    const response = await apiService.post('Business', businessData);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const deleteBusiness = async (businessId: string) => {
  try {
    const response = await apiService.delete(`Business/${businessId}`);
    console.log('Business deleted:', response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getBusinessClass = async () => {
  try {
    const response = await apiService.get('BusinessClass');
    return response;
  } catch (error) {
    throw error;
  }
};
export const getBusinessType = async () => {
  try {
    const response = await apiService.get('BusinessType');
    return response;
  } catch (error) {
    throw error;
  }
};

export const getBusinessByID = async (businessId: string) => {
  try {
    const response = await apiService.get(`Business/${businessId}`);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateBusiness = async (
  businessId: string,
  businessData: EditBusinessFields
) => {
  try {
    const endpoint = 'Business';
    const response = await apiService.put(endpoint, {});
    return response;
  } catch (error) {
    throw error;
  }
};

// export const addBusiness = async (businessData: any) => {
//   try {
//     const response = await apiService.post('Business', businessData);
//     return response.data;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };
