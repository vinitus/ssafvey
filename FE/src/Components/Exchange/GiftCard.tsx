import React, {useEffect, useState} from 'react';
import style from './GiftCard.module.css';
import BuyGift from '../Modal/BuyGift';

// 지금 tmp 때문에 tmp를 받기도 합니다. 나중에 수정 필요해요.
interface GiftCardProps {
  productTitle: string;
  image : string;
  point?: number;
}

export default function GiftCard({ productTitle, image, point }: GiftCardProps) {
  // 나중에 통일성을 위해 수정이 필요해요.
  // const mappingImgSrc = {
  //   상품명: './tmpFile/tmp.jpg',
  //   커피: '/reward/coffee.svg',
  //   아이스티: '/reward/iceTea.svg',
  // };

  // const imgSrc = mappingImgSrc[productTitle];

  return (
    <div className={point !== undefined ? style.giftcardWithPoint : style.giftcardWithoutPoint}>
      <div className={style.giftimg}>
        <img src={image} alt="tmp" />
      </div>

      <div className={style.gifttitle}>{productTitle}</div>

      {point && (
        <div className={style.coin}>
          <div className={style.coin_content}>
            <img src="./icons/coin_color.svg" alt="coin" className="-ml-8" />
            <div className="ml-5">{point}</div>
          </div>
        </div>
      )}
    </div>

  );
}

GiftCard.defaultProps = {
  point: undefined,
};
