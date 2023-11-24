import axios from '@crema/services/axios';
import type { AxiosResponse } from 'axios';
const baseUrl = process.env.NX_BASE_URL;

const jwtAxios = axios.create({
  baseURL: baseUrl, 
  headers: {
    'Content-Type': 'application/json',
  },
});
jwtAxios.interceptors.response.use(
  (res: AxiosResponse<any, any>) => res,
  (err: any) => {
    if (err.response && err.response.data.msg === 'Token is not valid') {
      console.log('Need to logout user');
    }
    return Promise.reject(err);
  }
);
export const setAuthToken = (token?: string) => {
  if (token) {
    jwtAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete jwtAxios.defaults.headers.common.Authorization;
    localStorage.removeItem('token');
  }
};
export default jwtAxios;
