import React from "react";
import style from "./Recommend.module.css"
import HomeCard from "./HomeCard"

export default function Recommend(){
  return (
    <div className={style.recommend}>
      <div className="relative">
        <div className={style.reco}>
          <div className={style.rocotitle}>
            추천 설문
          </div>
          <img src="./public/icons/twinkle.svg" alt="참여하기"/>
        </div>
      </div>
      <div className="pt-40">
        <HomeCard />
      </div>
    </div>
  )
}