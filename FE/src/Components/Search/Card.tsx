import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Card.module.css';
import { SurveyListDataObj, SurveyListDataObjArr } from '@/types/surveyType';

interface CardProps {
  surveyListDataObjArr: SurveyListDataObjArr;
}

interface ChildrenText {
  children: string;
}

export default function Card({ surveyListDataObjArr }: CardProps) {
  return (
    <div className={style.cardpart}>
      {surveyListDataObjArr.surveylist.length === 0 && <NotFound />}
      {surveyListDataObjArr.surveylist.map(({ id, title, organization, createDate, endDate }) => (
        <CardDetail
          id={id}
          title={title}
          organization={organization}
          createDate={createDate}
          endDate={endDate}
          key={id}
        />
      ))}
    </div>
  );
}

function CardDetail({ id, title, organization, createDate, endDate }: SurveyListDataObj) {
  const [createDate2] = createDate.split('T');
  const [endDate2] = endDate.split('T');
  const navigate = useNavigate();
  function cardclick() {
    navigate(`${id}`);
  }
  return (
    <button type="button" onClick={cardclick} className="w-full">
      <div className={style.card2}>
        <div className={style.background2} />
        <div className={style.content2}>
          <Title>{title}</Title>
          <Organization>{organization}</Organization>
          <Date>{`${createDate2} ~ ${endDate2}`}</Date>
          <Lotto />
        </div>
      </div>
    </button>
  );
}

function Title({ children }: ChildrenText) {
  return <h1 className={style.title}>{children}</h1>;
}

function Organization({ children }: ChildrenText) {
  return (
    <div className={style.subtitle}>
      <img src="./icons/house.svg" alt="house" className="mr-5" />
      <div className={style.subtitle_writer}>{children}</div>
    </div>
  );
}

function Date({ children }: ChildrenText) {
  return (
    <div className="flex items-start">
      <div className={style.subtitle}>
        <img src="./icons/clock.svg" alt="clock" className="mr-5" />
        <div className={style.subtitle_date}>{children}</div>
      </div>
    </div>
  );
}

function Lotto() {
  return (
    <div className={style.coin}>
      <div className={style.coin_content}>
        <img src="./icons/coin_color.svg" alt="coin" className="-ml-8" />
        <div className="ml-5">로또 1개</div>
      </div>
    </div>
  );
}

function NotFound() {
  return <div>설문이 존재하지 않습니다.</div>;
}
