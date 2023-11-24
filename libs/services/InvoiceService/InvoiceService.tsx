import ApiService from '../ApiService/ApiService';
import { CustomerType } from '../../modules/src/lib/Accounting/Salespayments/Invoices/db/data';

const apiService = new ApiService();

export const getAllInvoice = async () => {
  try {
    const response = await apiService.get('Invoices');
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteInvoices = async (invoiceId: string) => {
  try {
    const response = await apiService.delete(`Invoices/${invoiceId}`);
    console.log('Invoice deleted:', response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addInvoice = async (invoiceData: CustomerType) => {
  const response = await apiService.post('Invoices', invoiceData);
  if (response) {
    return response.data;
  }
};
