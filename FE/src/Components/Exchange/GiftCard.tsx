import React from 'react';
import style from './GiftCard.module.css';

interface GiftCardProps {
  productTitle: string;
  image: string;
  point?: number;
  used?: boolean;
}

GiftCard.defaultProps = {
  point: undefined,
  used: false,
};

export default function GiftCard({ productTitle, image, point, used }: GiftCardProps) {
  return (
    <div className={used ? 'grayscale' : ''}>
      <div className={point !== undefined ? style.giftcardWithPoint : style.giftcardWithoutPoint}>
        <div className={style.giftimg}>
          <img src={image} alt="giftimg" />
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
    </div>
  );
}
