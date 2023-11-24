import ApiService from '../ApiService/ApiService';
import { AddProductService } from '../../modules/src/lib/Accounting/Salespayments/ProductServices/AddProductServices/Dashboard';

const apiService = new ApiService();

export const getAllPurchasesProductServices = async () => {
  try {
    const response = await apiService.get('ProductService');
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteProductServices = async (productId: string) => {
  try {
    const response = await apiService.delete(`ProductService/${productId}`);
    console.log('Product & Services deleted:', response);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addProductServices = async (
  productServicesData: AddProductService
) => {
  const response = await apiService.post('ProductService', productServicesData);
  if (response) {
    return response.data;
  }
};
