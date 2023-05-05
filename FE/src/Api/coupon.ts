import axiosInstance from "./interceptor"

// 로또 까기
export function postLotto(token : string) {
  return axiosInstance.post("/auth/member/lotto", { headers: { Authorization: `Bearer ${token}` } })
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 상품조회
export function getItemlist(token : string) {
  return axiosInstance.get("/shop/itemlist", { headers: { Authorization: `Bearer ${token}` } })
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 상품구매
export function postItemlist(id : number, token :string) {
  return axiosInstance.post(`/auth/shop/item?item=${id}`, { headers: { Authorization: `Bearer ${token}` } })
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}