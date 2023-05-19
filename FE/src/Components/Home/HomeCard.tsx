import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './HomeCard.module.css';

interface Props {
  list: info;
}
interface info {
  id: number;
  title: string;
  organization: string;
  createDate: string;
  endDate: string;
  targetSurveyParticipants: number;
}

export default function HomeCardRight({ list }: Props) {
  const navigate = useNavigate();
  const { id } = list;
  function cardclick() {
    navigate(`/survey/${id}`);
  }

  return (
    <div className={style.card}>
      <div className={style.title}>{list?.title}</div>
      <div className={style.container}>
        <div className={style.subtitle}>
          <img src="/icons/house.svg" alt="house" className="mr-5" />
          <div className={style.subtitle_writer}>{list?.organization}</div>
        </div>

        <div className={style.subtitle}>
          <img src="/icons/people.svg" alt="people" className="mr-5" />
          <div className={style.subtitle_writer}>{list?.targetSurveyParticipants}</div>
        </div>

        <div className={style.subtitle}>
          <img src="/icons/clock.svg" alt="clock" className="mr-5" />
          <div className={style.subtitle_date}>
            <div>{list && list.createDate.split('T')[0]} -</div>
            <div>{list && list.endDate.split('T')[0]}</div>
          </div>
        </div>

        <div className={style.subtitle}>
          <img src="/icons/coin.svg" alt="people" className="mr-5" />
          <div className={style.subtitle_date}>로또 1개</div>
        </div>
      </div>

      <div className="flex justify-end">
        <button type="button" className={style.dosurvey} onClick={cardclick}>
          <div className={style.surveytitle}>참여하기</div>
          <img src="/icons/dosurvey.svg" alt="참여하기" />
        </button>
      </div>
    </div>
  );
}
