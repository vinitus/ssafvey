import React, {useState} from "react"
import Card from "./Card"
import style from "./Search.module.css"

export default function Search() {

  const [keyword, setKeyword] = useState("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }
  
  return (
    <div className={style.searchpage}>
      <input type="search" value={keyword} onChange={onChange} placeholder="검색어를 입력하세요.." className={style.inputform}/>
      <div className={style.cardpart}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}