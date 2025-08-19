import type { AxiosInstance, AxiosResponse } from 'axios';
import axios, { AxiosError } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'API_BASE_URL',
});

axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., add auth headers)
    // Example: config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    return config;
  },
  (error: unknown): Promise<never> => {
    // Handle request error here
    if (error instanceof Error) {
      return Promise.reject(error);
    }

    return Promise.reject(new Error(typeof error === 'string' ? error : 'Unknown request error'));
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // Any status code within the range of 2xx will trigger this function
    return response;
  },
  (error: unknown): Promise<never> => {
    // Any status codes outside the range of 2xx will trigger this function
    // You can handle global errors here
    if (error instanceof AxiosError) {
      return Promise.reject(error);
    }

    if (error instanceof Error) {
      return Promise.reject(error);
    }

    return Promise.reject(new Error(typeof error === 'string' ? error : 'Unknown response error'));
  },
);

export default axiosInstance;
