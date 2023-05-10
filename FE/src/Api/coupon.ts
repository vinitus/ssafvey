import axiosInstance from "./interceptor"

// 로또 까기
export async function postLotto(token : string) {
  try {
    const res = await axiosInstance.post("/auth/member/lotto", { headers: { Authorization: `Bearer ${token}` } })
    return res.data
  } catch (err) {
    return err
  }
}

// 상품조회
export async function getItemlist(token : string) {
  try {
    const res = await axiosInstance.get("/shop/itemlist", { headers: { Authorization: `Bearer ${token}` } })
    return res.data
  } catch (err) {
    return err
  }
}

// 상품구매
export async function postItemlist(id : number, token :string) {
  try {
    const res = await axiosInstance.post(`/auth/shop/item?item=${id}`, { headers: { Authorization: `Bearer ${token}` } })
    return res.data
  } catch (err) {
    return err
  }
}