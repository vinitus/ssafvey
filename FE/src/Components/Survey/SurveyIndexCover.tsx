import React from 'react';
import { useNavigate } from 'react-router-dom';
import writeExcel, { dummyParams } from '@util/Xlsx/writeExcel';
import { SurveyCoverData } from '../../types/surveyType';
import style from './SurveyIndexComponent.module.css';

interface SurveyInfoInterface {
  key: string;
  value: string | number;
}

function SurveyIndexCover({ children }: { children: React.ReactNode }) {
  return <div className={style.sectionWrapper}>{children}</div>;
}

function Description({ children }: { children: string }) {
  return (
    <article className={style.descBox}>
      <img src="/icons/about-circle-outline.svg" alt="about-icon" />
      <p>{children}</p>
    </article>
  );
}

function SurveyInfoWrapper({ surveyInfoArr }: { surveyInfoArr: SurveyInfoInterface[] }) {
  console.log(surveyInfoArr);
  return (
    <section className={style.stateBox}>
      {surveyInfoArr.map((surveyInfo) => (
        <dl className={style.childInlineBlock} key={surveyInfo.key}>
          <dt className={style.descTitle}>{surveyInfo.key}</dt>
          <dd>{surveyInfo.value}</dd>
        </dl>
      ))}
    </section>
  );
}

function SurveyBtnWrapepr({
  kakaoshare,
  surveyCoverResData,
}: {
  kakaoshare: (a: SurveyCoverData) => void;
  surveyCoverResData: SurveyCoverData;
}) {
  const navigate = useNavigate();

  const getStats = () => {
    console.log('getStats');
    // dummyParams는 API에서 받아온 데이터를 넣어주면 됨
    writeExcel(dummyParams);
  };

  return (
    <section className={style.buttons}>
      <div style={{ width: '30px' }}>
        hello
        {/* TODO: 이 버튼은 내가 생성한 설문인 경우에만 보여야 함! */}
        <button type="button" onClick={getStats}>
          통계
        </button>
        {/* <div /> */}
      </div>
      {surveyCoverResData.isDone ? (
        <button type="button" className={style.startSurveyBtn}>
          종료
        </button>
      ) : (
        <button type="button" className={style.startSurveyBtn} onClick={() => navigate('doing')}>
          설문 시작
        </button>
      )}
      <button type="button" onClick={() => kakaoshare(surveyCoverResData)}>
        <img id="sharing-btn" src="/icons/share.svg" alt="share-icon" />
      </button>
    </section>
  );
}

SurveyIndexCover.Description = Description;
SurveyIndexCover.SurveyInfoWrapper = SurveyInfoWrapper;
SurveyIndexCover.SurveyBtnWrapepr = SurveyBtnWrapepr;

export default SurveyIndexCover;
