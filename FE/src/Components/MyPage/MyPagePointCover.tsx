/* eslint-disable react/no-array-index-key */
// 배열의 UPDATE나 순서가 변경될 일은 없습니다.
import React from 'react';
import { CoverData, isPointHistory, PointHistory } from '../../types/myPageType';
import style from './MyPagePointCover.module.css';

type RenderingDataEle = [string, PointHistory[]];

export default function MyPageSurveyCover({ quantity, infoType, renderingData }: CoverData) {
  const objectentri = Object.entries(renderingData) as RenderingDataEle[];

  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`${infoType}`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.historyWrapper}>
        {isPointHistory(objectentri) &&
          objectentri.map(([day, history], idx) => (
            <article className={idx + 1 < objectentri.length ? style.historyBlockWithDay : ''} key={idx}>
              <h2 className={style.historyDay}>{day}</h2>
              {history.map(({ point, pointUsageHistory, plusMinus }: PointHistory, idx) => (
                <article
                  className={style.historyBlock}
                  style={!plusMinus ? { backgroundColor: '#FEC1FF' } : { backgroundColor: '' }}
                  key={idx}
                >
                  <h3 className={style.historyTitle}>{pointUsageHistory}</h3>
                  {plusMinus ? (
                    <p className={style.historyPoint}>+{point}</p>
                  ) : (
                    <p className={style.historyPoint}>-{point}</p>
                  )}
                </article>
              ))}
            </article>
          ))}
      </section>
    </>
  );
}
