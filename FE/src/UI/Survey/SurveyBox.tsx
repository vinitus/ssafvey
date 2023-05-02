import React from 'react';
import style from './SurveyBox.module.css';

interface Props {
  children: React.ReactNode;
}

export default function SurveyBox({ children }: Props) {
  return <section className={style.question}>{children}</section>;
}
