import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import style from './Recommend.module.css';
import HomeCard from './HomeCard';

export default function Recommend() {
  return (
    <div className={style.recommend}>
      <div className="relative">
        <div className={style.reco}>
          <div className={style.rocotitle}>추천 설문</div>
          <img src="./icons/twinkle.svg" alt="참여하기" />
        </div>
      </div>
      <div className={style.swiper}>
        <Swiper
          style={{
            height: '340px',
          }}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <HomeCard />
          </SwiperSlide>
          <SwiperSlide>
            <HomeCard />
          </SwiperSlide>
          <SwiperSlide>
            <HomeCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
