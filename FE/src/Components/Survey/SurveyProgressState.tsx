import React from 'react';
import style from './SurveyProgressState.module.css';

const currentQuestion = 7;
const totalQuestion = 10;
const progressPercentage = Math.floor((currentQuestion / totalQuestion) * 100);

export default function SurveyProgressState() {
  return (
    <section>
      <label htmlFor="file">
        Progress State:
        <div className={style.progressContainer}>
          <div className={style.progressBar} style={{ width: `${progressPercentage}%` }}>
            {progressPercentage}%
          </div>
        </div>
      </label>
    </section>
  );
}
