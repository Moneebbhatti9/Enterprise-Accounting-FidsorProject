import ApiService from '../ApiService/ApiService';

const apiService = new ApiService();

export const getAllNotifications = async () => {
  try {
    const response = await apiService.get('Alerts');
    return response;
  } catch (error) {
    throw error;
  }
};
