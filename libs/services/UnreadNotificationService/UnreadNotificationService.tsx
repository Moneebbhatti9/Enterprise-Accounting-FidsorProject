import { NotificationCount } from 'libs/components/src/lib/AppNotifications/AppNotificationContent';
import ApiService from '../ApiService/ApiService';

const apiService = new ApiService();

export const getAllUnreadNotifications = async () => {
  try {
    const response = (await apiService.get(
      'Alerts?Status=NEW'
    )) as NotificationCount;
    return response;
  } catch (error) {
    throw error;
  }
};
export const updateNotificationStatus = async (id: string) => {
  try {
    const endpoint = `Alerts/ReadAlert?id=${id}`;

    const response = await apiService.put(endpoint, {});

    return response;
  } catch (error) {
    throw error;
  }
};
