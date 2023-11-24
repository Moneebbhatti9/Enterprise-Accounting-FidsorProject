import ApiService from "../ApiService/ApiService";
import { AxiosResponse } from "axios";

import {FormikValues} from "formik";

const apiService = new ApiService();

export const updateUserProfile = async (data: FormikValues): Promise<AxiosResponse> => {
  try {
    const response = await apiService.formPut('User/account', data);
    return response;
  } catch (error) {
    // Handle the error here
    throw error;
  }
};

export const getUserProfile = async (): Promise<AxiosResponse> => {
  try {
    const response = await apiService.get('User/account');
    return response;
  } catch (error) {
    // Handle the error here
    throw error;
  }
};
