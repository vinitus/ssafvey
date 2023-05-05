import axiosInstance from "./interceptor"

// 로또 까기
export function postLotto() {
  return axiosInstance.post("/auth/member/lotto")
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 상품조회
export function getItemlist() {
  return axiosInstance.get("/shop/itemlist")
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}

// 상품구매
export function postItemlist(id : number) {
  return axiosInstance.post(`/auth/shop/item?item=${id}`)
  .then(res => {
    return res.data
  })
  .catch(err => {
    return err
  })
}