import React from "react";
import GiftCard from "./GiftCard";
import style from "./Exchange.module.css";

export default function Exchange() {
  return (
    <div>
      <div className={style.title}>
        포인트 교환
        <img src="./icons/ticket.svg" alt="ticket"/>
      </div>

      <div className={style.card}>
        <GiftCard/>
        <GiftCard/>
        <GiftCard/>
        <GiftCard/>
      </div>

    </div>
  )
}