import React, { useState } from 'react';
import style from './GiftCard.module.css';

interface Props {
  handleOpenModal: () => void;
}

export default function GiftCard() {
  // const [giftmodal, setGiftmodal] = useState(false);
  // const openmodal = () => {
  //   setGiftmodal(true);
  // };

  // const onClick = () => {
  //   setGiftmodal(true)
  // }

  return (
    <div className={style.giftcard}>
      <div className={style.giftimg}>
        <img src="./tmpFile/tmp.jpg" alt="tmp" />
      </div>

      <div className={style.gifttitle}>상품명</div>

      <div className={style.coin}>
        <div className={style.coin_content}>
          <img src="./icons/coin_color.svg" alt="coin" className="-ml-8" />
          <div className="ml-5">100</div>
        </div>
      </div>
    </div>
  );
}
