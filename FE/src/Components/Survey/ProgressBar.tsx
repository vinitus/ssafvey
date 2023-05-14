import React from 'react';
import style from './ProgressBar.module.css';

interface Props {
  questionIdx: number;
  questionLength: number;
}

export default function Progress({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

function Header({ questionIdx, questionLength }: Props) {
  return (
    <div className="text-20 text-black">
      진행도 : {questionIdx} / {questionLength}
    </div>
  );
}

function ProgressBar({ questionIdx, questionLength }: Props) {
  const progressPercentage = Math.floor((questionIdx / questionLength) * 100);

  return (
    <div className={style.progressContainer}>
      <div className={style.progressBar} style={{ width: `${progressPercentage}%` }}>
        {progressPercentage}%
      </div>
    </div>
  );
}

Progress.Header = Header;
Progress.ProgressBar = ProgressBar;
