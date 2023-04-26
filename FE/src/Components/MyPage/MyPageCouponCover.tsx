import React from 'react';
import { CoverData, isCouponTitle } from './.myPageType';
import style from './MyPageCouponCover.module.css';

export default function MyPageCouponCover({ quantity, infoType, data }: CoverData) {
  const mappingTitle = {
    아이스티: 'iceTea',
    커피: 'coffee',
  };

  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`보유한 ${infoType}`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.cardWrapper}>
        {isCouponTitle(data) &&
          data.map((title, idx) => (
            // idx를 사용하지 않는 것을 권하지만, title과 함께 엮었기에 key가 중복될 일은 없습니다.
            // eslint-disable-next-line react/no-array-index-key
            <article key={`${title}+${idx}`} className={style.cardContentWrapper}>
              <img src={`/reward/${mappingTitle[title]}.svg`} alt="" className={style.cardImg} />
              <h2 className={style.cardTitle}>{title}</h2>
            </article>
          ))}
      </section>
    </>
  );
}
