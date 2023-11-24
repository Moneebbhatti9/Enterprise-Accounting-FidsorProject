import axios, { AxiosRequestConfig } from 'axios';
const baseUrl = process.env.NX_BASE_URL;
import FormDataConverter from "./FormDataConverter";

class ApiService {
  BASE_URL = baseUrl;
  requestHeaders: AxiosRequestConfig['headers'] = {
    'Content-Type': 'application/json; charset=utf-8',
  };

  constructor() {
    this.updateHeaders(); // Initialize headers
  }

  updateHeaders() {
    const selectedBusiness = JSON.parse(
      localStorage.getItem('selectedBusiness') || '{}'
    );
    const businessId = selectedBusiness ? selectedBusiness.id : null;
    const token = localStorage.getItem('token');

    const customHeaders: AxiosRequestConfig['headers'] = {};

    if (businessId) {
      customHeaders['x-businessId'] = businessId;
    }

    if (token) {
      customHeaders['Authorization'] = `Bearer ${token}`;
    }

    // Merge common headers with custom headers
    this.requestHeaders = {
      ...this.requestHeaders,
      ...customHeaders,
    };
  }

  async post(path: string, param: any, config = {}) {
    try {
      this.updateHeaders(); // Update headers before making the request
      const response = await axios.post(`${this.BASE_URL}${path}`, param, {
        headers: this.requestHeaders,
        ...config,
      });
      return response.data;
    } catch (error) {
      return this.handleErrors(error, config);
    }
  }

  async get(path: string, param = {}) {
    try {
      this.updateHeaders(); // Update headers before making the request
      const response = await axios.get(`${this.BASE_URL}${path}`, {
        headers: this.requestHeaders,
        params: param,
      });
      return response.data;
    } catch (error) {
      return this.handleErrors(error);
    }
  }
  async postID(path: string, params: any) {
    try {
      const response = await axios.post(`${this.BASE_URL}${path}`, null, {
        headers: this.requestHeaders,
        params: params,
      });
      return response.data;
    } catch (error) {
      return this.handleErrors(error);
    }
  }

  async postT(path: any, param: any, config = {}) {
    try {
      const response = await axios.post(`${this.BASE_URL}${path}`, param, {
        headers: this.requestHeaders,
        ...config,
      });
      return response.data;
    } catch (error) {
      return this.handleErrors(error, config);
    }
  }

  async getT(path: any, param = {}) {
    try {
      const response = await axios.get(`${this.BASE_URL}${path}`, {
        headers: this.requestHeaders,
        params: param,
      });
      return response.data;
    } catch (error) {
      return this.handleErrors(error);
    }
  }

  async delete(path: any, param = {}) {
    try {
      const response = await axios.delete(`${this.BASE_URL}${path}`, {
        headers: this.requestHeaders,
        params: param,
      });
      return response.data;
    } catch (error) {
      return this.handleErrors(error);
    }
  }

  async put(path: any, param: any, config = {}) {
    try {
      const response = await axios.put(`${this.BASE_URL}${path}`, param, {
        headers: this.requestHeaders,
        ...config,
      });
      return response.data;
    } catch (error) {
      return this.handleErrors(error);
    }
  }

  async formPut(path: string, param: Record<string, any>) {
    try {
      this.updateHeaders();
      const formDataConverter = new FormDataConverter();
      const formData = formDataConverter.convertObjectToFormData(param);
      const response = await axios.put(`${this.BASE_URL}${path}`, formData, {
        headers: {
          ...this.requestHeaders,  // Include your headers here
          'Content-Type': 'multipart/form-data',  // Set the content type to FormData
        },
      });
      return response.data;
    } catch (error) {
      return this.handleErrors(error);
    }
  }

  handleErrors(error: any, config = {}) {
    if (error.response) {
      const status = error.response.status;
      if (status >= 500) {
        console.error('Something went wrong. Please try again');
        // window.alert('Something went wrong. Please try again');
      } else if (status >= 400 && status <= 499) {
        console.error('Error:', error.response.data.message);
        // window.alert('Error: ' + error.response.data.message);
      }
    } else if (error.request) {
      console.error('No response received. Please try again.', error.request);
      // window.alert('No response received. Please try again. ' + error.request);
    } else {
      console.error('Error:', error.message);
      // window.alert('Error: ' + error.message);
    }
  }
}

export default ApiService;

// import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// class ApiService {
//   private axiosInstance: AxiosInstance;

//   constructor() {
//     this.axiosInstance = axios.create({
//       baseURL: 'https://admin.accountsdash.com/api/',
//       headers: {
//         'Content-Type': 'application/json; charset=utf-8',
//         'x-businessId': '3ebe1454-c690-488d-6119-08dbb381a9c6',
//       },
//     });

//     this.setupInterceptors();
//   }

//   private setupInterceptors() {
//     this.axiosInstance.interceptors.request.use(
//       (config: AxiosRequestConfig) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//           config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//       },
//       (error) => {
//         return Promise.reject(error);
//       }
//     );
//   }

//
// }

// export default new ApiService();
