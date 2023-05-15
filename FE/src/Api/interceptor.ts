/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://k8a608.p.ssafy.io/api',
  // baseURL: "https://localhost:8080/api",
});

export default axiosInstance;
