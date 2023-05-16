import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { queryClient } from '../../router';
import { getlist } from '../../Api/survey'

import style from './Recommend.module.css';
import HomeCard from './HomeCard';

interface survey{
  id : number;
  title : string;
  organization : string;
  createDate : string;
  endDate : string;
  targetSurveyParticipants : number;
}

export default function Recommend() {
  const [surveylist, setSurveylist] = useState<survey[]>([])

  useEffect(() => {
    const accessToken = queryClient.getQueryData(['accessToken']) as string;
    async function getRecommend(accessToken?:string){
      try{
        let data;
        if(accessToken){
          data = await getlist(accessToken)
        }
        else{
          data = await getlist()
        }
        console.log(data.surveylist)
        setSurveylist(data.surveylist)
      }
      catch(err){
        console.log(err)
      }
    }
    getRecommend()
  },[])
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
          { surveylist && surveylist.map((list) => (
              <SwiperSlide key={list.id}>
                <HomeCard list={list}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
}
