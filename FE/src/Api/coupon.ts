import axiosInstance from "./interceptor"

// 로또 까기
export async function postLotto(token : string) {
  try {
    const res = await axiosInstance.post("/member/lotto", { headers: { Authorization: `Bearer ${token}` } })
    return res.data
  } catch (err) {
    return err
  }
}

// 상품조회
export async function getItemlist(id : number | '') {
  try {
    const res = await axiosInstance.get(`/shop/items/${id}`)
    return res.data
  } catch (err) {
    return err
  }
}

// 상품구매
export async function postItemlist(id : number, token :string) {
  const data = { itemId : id }
  try {
    const res = await axiosInstance.post(`/shop/order/new`, data, { headers: { Authorization: `Bearer ${token}` } })
    return res.data
  } catch (err) {
    return err
  }
}

// 포인트조회
export async function getPoint(token : string) {
  try {
    const res = await axiosInstance.get("/member/point",{headers : {Authorization: `Bearer ${token}`}})
    return res.data
  }
  catch (err) {
    return err
  }
}