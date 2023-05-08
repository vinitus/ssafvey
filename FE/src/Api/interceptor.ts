/* eslint-disable no-param-reassign */
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { useRecoilState } from 'recoil';
import { accessTokenState } from "../Store/Member/atom";
import { getRefresh } from "./member";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://k8a608.p.ssafy.io:8081/api",
  // baseURL: "http://localhost:8081/api",
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // You can modify the request config here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const resettoken = () => {
  try {
    const data = getRefresh(localStorage.getItem("refreshToken"))  
    return data
  }
  catch(err) {
    console.error(err)
    return false;
  }
}

axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    // You can modify the response here
    console.log(response.status)
    if (response.status === 401) {
      const token = await resettoken()

      const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
      setAccessToken(token?.Authorization)
      localStorage.setItem("refreshToken", token?.refreshToken)
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
