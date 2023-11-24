import { MessageCount } from 'libs/components/src/lib/AppMessages/AppMessageContent';
import ApiService from '../ApiService/ApiService';

const apiService = new ApiService();

export const getAllUnreadMessages = async () => {
  try {
    const response = (await apiService.get(
      'Message?Status=NEW'
    )) as MessageCount;
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateMessageStatus = async (id: string) => {
  try {
    const endpoint = `Message/ReadMessage?id=${id}`;
    const response = await apiService.put(endpoint, {});

    return response;
  } catch (error) {
    throw error;
  }
};
