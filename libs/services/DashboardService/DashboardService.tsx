import ApiService from '../ApiService/ApiService';

const apiService = new ApiService();
export const getTotalUsers = async () => {
  try {
    const response = await apiService.get('Dashboard/total-users');
    return response;
  } catch (error) {
    throw error;
  }
};
