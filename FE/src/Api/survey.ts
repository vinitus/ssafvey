import axiosInstance from './interceptor';
import { SurveyPostRequestData } from '@/types/surveyType';

const baseURL = '/survey';

// 설문조사 작성
export async function postRegis(data: FormData, token: string) {
  try {
    const res = await axiosInstance.post(`${baseURL}/regist`, data, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 설문조사 시작 페이지
export async function getStart(id: number | string, token: string) {
  try {
    const res = await axiosInstance.get(`/survey/start/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 설문조사 디테일
export async function getDetail(id: number | string, token: string) {
  try {
    const res = await axiosInstance.get(`${baseURL}/detail/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 설문조사 응답제출
export async function postAnswer(data: SurveyPostRequestData, token: string) {
  try {
    const res = await axiosInstance.post(`${baseURL}/answer`, data, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 설문조사 통계
export async function getResult(id: number, token: string) {
  try {
    const res = await axiosInstance.get(`${baseURL}/result/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 설문조사 목록
export async function getList(search: string, filter: boolean) {
  try {
    const res = await axiosInstance.get(`/survey/list?search=${search}&filter=${filter}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
