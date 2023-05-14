import React from 'react';
import style from './SurveyHeader.module.css';

interface Props {
  title: string;
  organization?: string;
  endDate?: string;
}

export default function SurveyHeader({ title, organization, endDate }: Props) {
  return (
    <header className={`${organization && endDate ? style.header : style.just}`}>
      <h1 className={style.title}>{title}</h1>
      {organization && endDate && <SurveyHeaderDetail organization={organization} endDate={endDate} />}
    </header>
  );
}

SurveyHeader.defaultProps = {
  organization: '',
  endDate: '',
};

function SurveyHeaderDetail({ organization, endDate }: { organization: string; endDate: string }) {
  return (
    <div className={style.mainDesc}>
      <span className={style.childInlineBlock}>
        <img src="/icons/house.svg" alt="house-icon" className="px-5" />
        <h2 className="text-[10px]">{organization}</h2>
      </span>
      <span className={style.childInlineBlock}>
        <img src="/icons/clock.svg" alt="clock-icon" className="px-5" />
        <h2 className="text-[10px]">{endDate}</h2>
      </span>
    </div>
  );
}
