import { useState } from 'react';
import ApiService from '../ApiService/ApiService';
import { FormData } from '../../modules/src/lib/Accounting/Accounts/chartsOfAccounts/Components/Dialog';
const apiService = new ApiService();

export const addAccount = async (accountData: any) => {
  const response = await apiService.post('Accounts', accountData);
  if (response) {
    return response.data;
  }
};
