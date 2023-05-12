import React from 'react';
import { CoverData, isPointHistory, PointHistory } from '../../types/myPageType';
import style from './MyPagePointCover.module.css';

export default function MyPageSurveyCover({ quantity, infoType, renderingData }: CoverData) {
  
  const objectentri = Object.entries(renderingData)
  
  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`${infoType}`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.historyWrapper}>
        {isPointHistory(objectentri) &&
          objectentri.map(([day, history], idx) => (
            <article className={idx + 1 < objectentri.length ? style.historyBlockWithDay : ''} key={day}>
              <h2 className={style.historyDay}>{day}</h2>
              {history.map(({ point, pointUsageHistory, plusMinus } : PointHistory) => (
                <article
                  className={style.historyBlock}
                  style={!plusMinus ? { backgroundColor: '#FEC1FF' } : { backgroundColor: '' }}
                  // 배열의 UPDATE나 순서가 변경될 일은 없습니다.
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${idx}`}
                >
                  <h3 className={style.historyTitle}>{pointUsageHistory}</h3>
                  {plusMinus ?
                    <p className={style.historyPoint}>+{point}</p>
                    :
                    <p className={style.historyPoint}>-{point}</p>
                  }
                </article>
              ))}
            </article>
          ))}
      </section>
    </>
  );
}
