/* eslint-disable react/no-array-index-key */
// 이 컴포넌트의 map은 단순한 조회이기에 key를 idx로 한다고 해서 문제가 될 이유는 없습니다.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CoverData, isSurveyHistory, SurveyHistory } from '../../types/myPageType';
import style from './MyPageSurveyCover.module.css';

export default function MyPageSurveyCover({ quantity, infoType, renderingData }: CoverData) {
  const navigate = useNavigate();

  const objectentri = Object.entries(renderingData);

  const gotoSurvey = (id: number) => {
    navigate(`/survey/${id}`);
  };

  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`${infoType} 설문`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.historyWrapper}>
        {isSurveyHistory(objectentri) &&
          objectentri.map(([day, history], idx) => (
            <article className={idx + 1 < objectentri.length ? style.historyBlockWithDay : ''} key={idx}>
              <h2 className={style.historyDay}>{day}</h2>
              {history.map(({ id, title, name }: SurveyHistory) => (
                <button type="button" className={style.historybutton} onClick={() => gotoSurvey(id)} key={id}>
                  <article className={style.historyBlock}>
                    <h3 className={style.historyTitle}>{title}</h3>
                    <div className={style.historyAuthorWrapper}>
                      <img src="/icons/home.svg" alt="home" />
                      <p className={style.historyAuthor}>{name}</p>
                    </div>
                  </article>
                </button>
              ))}
            </article>
          ))}
      </section>
    </>
  );
}
