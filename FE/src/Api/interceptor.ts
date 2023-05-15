/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://k8a608.p.ssafy.io/api',
});

export default axiosInstance;
