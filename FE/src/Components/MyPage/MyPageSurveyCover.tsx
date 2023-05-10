import React from 'react';
import { CoverData, isSurveyHistory, SurveyHistory } from '../../types/myPageType';
import style from './MyPageSurveyCover.module.css';

export default function MyPageSurveyCover({ quantity, infoType, renderingData }: CoverData) {

  const objectentri = Object.entries(renderingData)
  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`${infoType} 설문`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.historyWrapper}>
        { isSurveyHistory(objectentri) && objectentri.map(([day, history], idx) => (
          <article className={idx+1 < objectentri.length ? style.historyBlockWithDay : ''}>
            <h2 className={style.historyDay}>{day}</h2>
            { history.map(({id, title, name} : SurveyHistory) => (
              // 단순한 배열 순회만 이뤄지기에 배열이 변경될 일은 없습니다.
                 // eslint-disable-next-line react/no-array-index-key
              <article className={style.historyBlock} key={id}>
                <h3 className={style.historyTitle}>{title}</h3>
                <div className={style.historyAuthorWrapper}>
                  <img src="/icons/home.svg" alt="home" />
                  <p className={style.historyAuthor}>{name}</p>
                </div>
              </article>
            ))}
          </article>
        ))}
      </section>
    </>
  );
}
