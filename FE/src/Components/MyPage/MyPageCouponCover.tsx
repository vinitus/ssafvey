import React from 'react';
import { CoverData, isCouponTitle } from '../../types/myPageType';
import GiftCard from '../Exchange/GiftCard';
import style from './MyPageCouponCover.module.css';

export default function MyPageCouponCover({ quantity, infoType, data }: CoverData) {
  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`보유한 ${infoType}`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.cardWrapper}>
        {isCouponTitle(data) &&
          data.map((title, idx) => (
            // idx를 쓰지만, title을 통해서 고유값을 지정했기에 idx를 사용해도 괜찮습니다.
            // eslint-disable-next-line react/no-array-index-key
            <GiftCard key={`${title}-${idx}`} productTitle={title} />
          ))}
      </section>
    </>
  );
}
