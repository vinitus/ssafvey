import React from 'react';
import { CoverData, isSurveyHistory } from '../../types/myPageType';
import style from './MyPageSurveyCover.module.css';

export default function MyPageSurveyCover({ quantity, infoType, renderingData }: CoverData) {
  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`${infoType} 설문`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.historyWrapper}>
        {isSurveyHistory(renderingData) &&
          renderingData.map((history, idx) => (
            <article className={idx + 1 < renderingData.length ? style.historyBlockWithDay : ''} key={history.day}>
              <h2 className={style.historyDay}>{history.day}</h2>
              {history.history.map(({ title, author }, idx) => (
                // 단순한 배열 순회만 이뤄지기에 배열이 변경될 일은 없습니다.
                // eslint-disable-next-line react/no-array-index-key
                <article className={style.historyBlock} key={idx}>
                  <h3 className={style.historyTitle}>{title}</h3>
                  <div className={style.historyAuthorWrapper}>
                    <img src="/icons/home.svg" alt="home" />
                    <p className={style.historyAuthor}>{author}</p>
                  </div>
                </article>
              ))}
            </article>
          ))}
      </section>
    </>
  );
}
