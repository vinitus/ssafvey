import React from 'react';
import style from './HomeCard.module.css';

export default function HomeCardRight() {
  return (
    <div className={style.card}>
      <div className={style.title}>IT 플랫폼 사용 실태 조사</div>
      <div className={style.container}>
        <div className={style.subtitle}>
          <img src="/icons/house.svg" alt="house" className="mr-5" />
          <div className={style.subtitle_writer}>기관명</div>
        </div>

        <div className={style.subtitle}>
          <img src="/icons/people.svg" alt="people" className="mr-5" />
          <div className={style.subtitle_writer}>100</div>
        </div>

        <div className={style.subtitle}>
          <img src="/icons/clock.svg" alt="clock" className="mr-5" />
          <div className={style.subtitle_date}>
            <div>2023.04.10 -</div>
            <div>2023.04.13</div>
          </div>
        </div>

        <div className={style.subtitle}>
          <img src="/icons/coin.svg" alt="people" className="mr-5" />
          <div className={style.subtitle_date}>100</div>
        </div>
      </div>

      <div className="flex justify-end">
        <div className={style.dosurvey}>
          <div className={style.surveytitle}>참여하기</div>
          <img src="/icons/dosurvey.svg" alt="참여하기" />
        </div>
      </div>
    </div>
  );
}
