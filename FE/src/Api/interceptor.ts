/* eslint-disable no-param-reassign */
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { useRecoilState } from "recoil";
import { accessTokenState } from '../Store/Member/atom'

const axiosInstance: AxiosInstance = axios.create({
  // baseURL: "http://k8a608.p.ssafy.io:8081/api",
  baseURL: "http://localhost:8081/api",
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const [accessToken, setAccessToken ] = useRecoilState(accessTokenState)
    // You can modify the request config here
    // const token = accessToken // 토큰
    // config.headers.Authorization = `Bearer ${token}`
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
