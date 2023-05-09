import React from 'react';
import style from './SurveyHeader.module.css';

interface Props {
  title: string;
  creator?: string;
  dueDate?: string;
}

export default function SurveyHeader({ title, creator, dueDate }: Props) {
  return (
    <header className={`${creator && dueDate ? style.header : style.just}`}>
      <h1 className={style.title}>{title}</h1>
      {creator && dueDate && (
        <div className={style.mainDesc}>
          <span className={style.childInlineBlock}>
            <img src="/icons/house.svg" alt="house-icon" className="px-5" />
            <h2 className="text-[10px]">{creator}</h2>
          </span>
          <span className={style.childInlineBlock}>
            <img src="/icons/clock.svg" alt="clock-icon" className="px-5" />
            <h2 className="text-[10px]">{dueDate}</h2>
          </span>
        </div>
      )}
    </header>
  );
}

SurveyHeader.defaultProps = {
  creator: '',
  dueDate: '',
};
