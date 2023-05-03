/* eslint-disable no-param-reassign */
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://example.com/api",
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // You can modify the request config here
    config.params = {
      ...config.params,
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can modify the response here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
