import React from 'react';
import style from './SurveyThumbnail.module.css';

interface Props {
  title: string;
  author: string;
}

export default function SurveyThumbnail({ title, author }: Props) {
  return (
    <div className={style.surveyThumbnailWrapper}>
      <div className={style.surveyThumbnailTitle}>{title}</div>
      <div className={style.surveyThumbnailAuthorWrapper}>
        <img src="/icons/home.svg" alt="home" />
        <div className={style.surveyThumbnailAuthorDiv}>{author}</div>
      </div>
    </div>
  );
}
