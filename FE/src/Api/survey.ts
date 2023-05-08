import axios from 'axios';
import axiosInstance from './interceptor';
import { surveyData } from '../types/surveyType';

const baseURL = '/auth/survey';

// 설문조사 작성
export function postRegis(data: FormData, token: string) {
  return axiosInstance
    .post(`${baseURL}/regist`, data, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 설문조사 시작 페이지
/** @param id 설문조사 id
 * @returns isDone, title, description, creator, endData, targetSurveyParticipants, lotto
 */
export function getStart<surveyData>(id: number) {
  return axiosInstance
    .get(`/survey/start/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 설문조사 시작 페이지 목서버
/** @param id 설문조사 id
 * @returns isDone, title, description, creator, endData, targetSurveyParticipants, lotto
 */
export function getStart2<surveyData>(id: number) {
  return axios
    .get(`https://f39cb0c6-0702-41ce-9de2-8704b59c51e8.mock.pstmn.io/survey/start/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 설문조사 디테일
export function getDetail(id: number, token: string) {
  return axiosInstance
    .get(`${baseURL}/detail/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 설문조사 응답제출
export function postAnswer(data: FormData, token: string) {
  return axiosInstance
    .post(`${baseURL}/answer`, data, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 설문조사 통계
export function getResult(id: number, token: string) {
  return axiosInstance
    .get(`${baseURL}/result/${id}`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 설문조사 목록
export function getList(search: string, filter: boolean) {
  return axiosInstance
    .get(`/survey/list?search=${search}&filter=${filter}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
