import React from 'react';
import style from './ProgressBar.module.css';

interface Props {
  progressPercentage: number;
}

export default function ProgressBar({ progressPercentage }: Props) {
  return (
    <div className={style.progressContainer}>
      <div className={style.progressBar} style={{ width: `${progressPercentage}%` }}>
        {progressPercentage}%
      </div>
    </div>
  );
}
