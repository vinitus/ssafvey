/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API,
});

export default axiosInstance;
