import axiosInstance from "./interceptor"

const baseURL = "/auth/member"

// 회원정보 수정
export function putProfile(data : FormData) {
  axiosInstance.put(`${baseURL}/changeProfil`, data)
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err
    })
}

// 엑세스 토큰 재발급
export function getRefresh(){
  axiosInstance.get("/member/refresh")
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 회원 탈퇴
export function deleteMember(){
  axiosInstance.delete(`${baseURL}/delete`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 로그아웃
export function getLogout() {
  axiosInstance.get(`${baseURL}/logout`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 마이페이지 정보
export function getMypage(){
  axiosInstance.get(`${baseURL}/mypage`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 응답한 설문 리스트
export function getSurveyResponse(){
  axiosInstance.get(`${baseURL}/mypage/surveyResponse`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 만든 설문 리스트
export function getSurvey(){
  axiosInstance.get(`${baseURL}/mypage/survey`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}