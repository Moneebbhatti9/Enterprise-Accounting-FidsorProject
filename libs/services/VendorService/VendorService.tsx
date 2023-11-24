import { useState } from 'react';
import ApiService from '../ApiService/ApiService';
import { VendorDataType } from 'libs/modules/interfaces/Vendors/Vendor';
const apiService = new ApiService();

let loading = false;
export const getAllVendors = async () => {
  try {
    loading = true;
    const response = await apiService.get('Vendor');
    console.log(response);
    loading = false;
    return response;
  } catch (error) {
    loading = false;
    throw error;
  }
};
export { loading };
export const addVendor = async (vendorData: VendorDataType) => {
  const response = await apiService.post('Vendor', vendorData);
  if (response) {
    return response.data;
  }
};
export const deleteVendor = async (vendorId: string) => {
  try {
    const response = await apiService.delete(`Vendor/${vendorId}`);
    console.log('Vendor deleted:', response);
    return response;
  } catch (error) {
    throw error;
  }
};
export const updateVendors = async (id: string) => {
  try {
    const endpoint = 'Vendor';
    const response = await apiService.put(endpoint, {});
    return response;
  } catch (error) {
    throw error;
  }
};

export const getVendorByID = async (vendorId: string) => {
  try {
    const response = await apiService.get(`Vendor/${vendorId}`);
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
