import React from 'react';
import style from './SurveyThumbnail.module.css';

interface Props {
  title: string;
  madeBy: string;
}

export default function SurveyThumbnail({ title, madeBy }: Props) {
  return (
    <div className={style.surveyThumbnailWrapper}>
      <div className={style.surveyThumbnailTitle}>{title}</div>
      <div className={style.surveyThumbnailMadeByWrapper}>
        <img src="/icons/home.svg" alt="home" />
        <div className={style.surveyThumbnailMadeByDiv}>{madeBy}</div>
      </div>
    </div>
  );
}
