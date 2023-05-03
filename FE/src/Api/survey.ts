import axiosInstance from "./interceptor"

const baseURL = "/auth/survey"

// 설문조사 작성
export function postRegis(data : FormData) {
  axiosInstance.post(`${baseURL}/regist`, data)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 설문조사 시작 페이지
export function getStart(id : number) {
  axiosInstance.get(`/survey/start/${id}`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 설문조사 디테일
export function getDetail(id : number) {
  axiosInstance.get(`${baseURL}/detail/${id}`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 설문조사 응답제출
export function postAnswer(data : FormData) {
  axiosInstance.post(`${baseURL}/answer`, data)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 설문조사 통계
export function getResult(id : number) {
  axiosInstance.get(`${baseURL}/result/${id}`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 설문조사 목록
export function getList(search : string, filter : boolean) {
  axiosInstance.get(`survey/list?search=${search}&filter=${filter}`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}
