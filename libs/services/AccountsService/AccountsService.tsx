import ApiService from '../ApiService/ApiService';

const apiService = new ApiService();

export const getAllAccounts = async () => {
  try {
    const response = await apiService.get('Accounts/GetAllAccounts');
    return response;
  } catch (error) {
    throw error;
  }
};
export const getAllArchiveAccounts = async () => {
  try {
    const response = await apiService.get('Accounts/getAllArchive');
    return response;
  } catch (error) {
    throw error;
  }
};

export const addAccount = async (accountData: any) => {
  try {
    const response = await apiService.post('Accounts', accountData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const deleteAccount = async (accountId: string) => {
  try {
    const response = await apiService.delete(`Accounts?accountId=${accountId}`);
    console.log('Account deleted:', response);
    return response;
  } catch (error) {
    throw error;
  }
};
export const archiveAccount = async (accountId: string) => {
  try {
    const response = await apiService.postID('Accounts/ArchivedAccount', { accountId });
    console.log('Account archived:', response);
    return response;
  } catch (error) {
    throw error;
  }
};

