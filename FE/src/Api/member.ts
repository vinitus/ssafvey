import axiosInstance from './interceptor';

const baseURL = '/member';

// 직업 리스트
export function getJobs() {
  return axiosInstance
    .get(`${baseURL}/jobs`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 회원정보 수정
export function putProfile(data: object, token : string) {
  return axiosInstance
    .put(`${baseURL}/changeProfil`, data, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 엑세스 토큰 재발급
export function getRefresh(token : string | null) {
  return axiosInstance
    .get(`${baseURL}/refresh`, { headers : {refreshToken : token}})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 회원 탈퇴
export function deleteMember(token : string) {
  return axiosInstance
    .delete(`${baseURL}/delete`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 로그아웃
export function getLogout(token : string) {
  return axiosInstance
    .get(`${baseURL}/logout`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 마이페이지 정보
export function getMypage(token : string) {
  return axiosInstance
    .get(`${baseURL}/mypage`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 응답한 설문 리스트
export function getSurveyResponse( token : string) {
  return axiosInstance
    .get(`${baseURL}/mypage/surveyResponse`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

// 만든 설문 리스트
export function getSurvey( token : string) {
  return axiosInstance
    .get(`${baseURL}/mypage/survey`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
