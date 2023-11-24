import ApiService from '../ApiService/ApiService';

const apiService = new ApiService();

export const getAllMessages = async () => {
  try {
    const response = await apiService.get('Message');
    return response;
  } catch (error) {
    throw error;
  }
};
