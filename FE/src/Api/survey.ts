import axiosInstance from "./interceptor"

const baseURL = "/auth/survey"

// 설문조사 작성
export function postRegis(data : FormData, token : string) {
  return axiosInstance.post(`${baseURL}/regist`, data, { headers: { Authorization: `Bearer ${token}` } })
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 설문조사 시작 페이지
export function getStart(id : number) {
  return axiosInstance.get(`/survey/start/${id}`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 설문조사 디테일
export function getDetail(id : number, token : string) {
  return axiosInstance.get(`${baseURL}/detail/${id}`, { headers: { Authorization: `Bearer ${token}` } })
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 설문조사 응답제출
export function postAnswer(data : FormData, token : string) {
  return axiosInstance.post(`${baseURL}/answer`, data, { headers: { Authorization: `Bearer ${token}` } })
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 설문조사 통계
export function getResult(id : number, token : string) {
  return axiosInstance.get(`${baseURL}/result/${id}`, { headers: { Authorization: `Bearer ${token}` } })
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 설문조사 목록
export function getList(search : string, filter : boolean) {
  return axiosInstance.get(`/survey/list?search=${search}&filter=${filter}`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}
