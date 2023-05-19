import axiosInstance from './interceptor';

const baseURL = '/member';

// 직업 리스트
export async function getJobs() {
  try {
    const res = await axiosInstance.get(`${baseURL}/jobs`);
    return res.data;
  } catch (err) {
    return err;
  }
}

// 회원정보 수정
export async function putProfile(data: object, token: string) {
  try {
    const res = await axiosInstance.put(`${baseURL}/changeProfil`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 회원정보 수정 정보 가져오기
export async function getProfile(token: string) {
  try {
    const res = await axiosInstance.get(`${baseURL}/changeProfil`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 엑세스 토큰 재발급
export async function getRefresh(token: string | null): Promise<{ Authorization: string; refreshToken: string }> {
  const res = await axiosInstance.get(`${baseURL}/refresh`, { headers: { refreshToken: token } });
  return res.data;
}

// 회원 탈퇴
export async function deleteMember(token: string) {
  try {
    const res = await axiosInstance.delete(`${baseURL}/delete`, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 로그아웃
export async function getLogout(token: string) {
  try {
    const res = await axiosInstance.get(`${baseURL}/logout`, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 마이페이지 정보
export async function getMypage(token: string) {
  try {
    const res = await axiosInstance.get(`${baseURL}/mypage`, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 응답한 설문 리스트
export async function getSurveyResponse(token: string) {
  try {
    const res = await axiosInstance.get(`${baseURL}/mypage/surveyParticipated`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 만든 설문 리스트
export async function getSurvey(token: string) {
  try {
    const res = await axiosInstance.get(`${baseURL}/mypage/surveyCreated`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 기프티콘 조회
export async function getGift(token: string) {
  try {
    const res = await axiosInstance.get('/shop/order/list', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 기프티콘 사용
export async function putGift(id: number, token: string) {
  try {
    const res = await axiosInstance.put(`${baseURL}/mypage/${id}`, null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 로또 사용
export async function putLotto(token: string) {
  try {
    const res = await axiosInstance.put(`${baseURL}/mypage/lotto`, null , { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 포인트 내역 조회
export async function getPointlist(token: string) {
  try {
    const res = await axiosInstance.get(`${baseURL}/mypage/point`, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    return err;
  }
}

// 기프티콘 조회
export async function getorder(token: string) {
  try {
    const res = await axiosInstance.get('/shop/order/list', { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (err) {
    return err;
  }
}
