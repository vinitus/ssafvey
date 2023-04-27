import React from 'react';
import { CoverData, isSurveyHistory } from './.myPageType';
import style from './MyPageSurveyCover.module.css';

export default function MyPageSurveyCover({ quantity, infoType, data }: CoverData) {
  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`${infoType} 설문`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.historyWrapper}>
        {isSurveyHistory(data) &&
          data.map((history, idx) => (
            <article className={idx + 1 < data.length ? style.historyBlockWithDay : ''} key={history.day}>
              <h2 className={style.historyDay}>{history.day}</h2>
              {history.history.map(({ title, author }) => (
                <article className={style.historyBlock} key={title + author}>
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
