import ApiService from '../ApiService/ApiService';

const apiService = new ApiService();

export const getAllCountry = async () => {
  try {
    const response = await apiService.get('Country');
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllCurrency = async () => {
  try {
    const response = await apiService.get('Currency');
    return response;
  } catch (error) {
    throw error;
  }
};
export const getAllCity = async () => {
  try {
    const response = await apiService.get('City');
    return response;
  } catch (error) {
    throw error;
  }
};
