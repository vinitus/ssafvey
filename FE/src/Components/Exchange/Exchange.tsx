import React, { useState } from 'react';
import GiftCard from './GiftCard';
import style from './Exchange.module.css';

export default function Exchange() {

  return (
    <div>
      <div className={style.title}>
        포인트 교환
        <img src="./icons/ticket.svg" alt="ticket" />
      </div>

      <div className={style.cardlist}>
        <div className={style.card}>
          <GiftCard productTitle="상품명" point={100} />
          <GiftCard productTitle="상품명" point={100} />
          <GiftCard productTitle="상품명" point={100} />
          <GiftCard productTitle="상품명" point={100} />
        </div>
      </div>

    </div>
  );
}
