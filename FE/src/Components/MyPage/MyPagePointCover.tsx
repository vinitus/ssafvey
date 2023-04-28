import React from 'react';
import { CoverData, isPointHistory } from '../../types/myPageType';
import style from './MyPagePointCover.module.css';

export default function MyPageSurveyCover({ quantity, infoType, renderingData }: CoverData) {
  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`${infoType}`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.historyWrapper}>
        {isPointHistory(renderingData) &&
          renderingData.map((history, idx) => (
            <article className={idx + 1 < renderingData.length ? style.historyBlockWithDay : ''} key={history.day}>
              <h2 className={style.historyDay}>{history.day}</h2>
              {history.history.map(({ pointHistoryType, pointUsed }, idx) => (
                // 배열의 UPDATE나 순서가 변경될 일은 없습니다.
                // eslint-disable-next-line react/no-array-index-key
                <article className={style.historyBlock} key={`${idx}`}>
                  <h3 className={style.historyTitle}>{pointHistoryType}</h3>
                  <p className={style.historyAuthor}>{pointUsed}</p>
                </article>
              ))}
            </article>
          ))}
      </section>
    </>
  );
}
