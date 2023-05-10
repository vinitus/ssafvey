import React from 'react';
import style from './SurveyHeader.module.css';

interface Props {
  title: string;
  creator: string;
  endDate: string;
}

export default function SurveyHeader({ title, creator, endDate }: Props) {
  return (
    <header className={`${creator && endDate ? style.header : style.just}`}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.mainDesc}>
        <span className={style.childInlineBlock}>
          <img src="/icons/house.svg" alt="house-icon" className="px-5" />
          <h2 className="text-[10px]">{creator}</h2>
        </span>
        <span className={style.childInlineBlock}>
          <img src="/icons/clock.svg" alt="clock-icon" className="px-5" />
          <h2 className="text-[10px]">{endDate}</h2>
        </span>
      </div>
    </header>
  );
}
