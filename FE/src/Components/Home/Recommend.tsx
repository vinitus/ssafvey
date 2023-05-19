import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper';
import { getList, getUserList } from '../../Api/survey';
import style from './Recommend.module.css';
import HomeCard from './HomeCard';
import { useTokenQuery } from '@/hooks/useTokenQuery';
import { go, take } from '@/module/fx';

interface survey {
  id: number;
  title: string;
  organization: string;
  createDate: string;
  endDate: string;
  targetSurveyParticipants: number;
}

export default function Recommend() {
  const [surveylist, setSurveylist] = useState<survey[]>([]);
  const [requestCnt, setRequestCnt] = useState(0);

  const token = useTokenQuery({
    onSuccess: (accessToken) => {
      getRecommend(accessToken);
    },
  });

  async function getRecommend(accessToken: string | false) {
    let data;
    if (accessToken) data = await getUserList(accessToken);
    else data = await getList();

    setSurveylist(go(data.surveylist, take(5)));
  }

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (requestCnt === 0) {
      setRequestCnt((prev) => prev + 1);
      if (surveylist.length) {
        /* empty */
      } else if (refreshToken) token.refetch();
      else getRecommend(false);
    }
  }, [requestCnt, surveylist.length, token]);

  return (
    <div className={style.recommend}>
      <div className="relative">
        <div className={style.reco}>
          <div className={style.rocotitle}>추천 설문</div>
          <img src="./icons/twinkle.svg" alt="참여하기" />
        </div>
      </div>
      <div className={style.swiper}>
        {surveylist.length > 0 && (
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
            {surveylist.map((list) => (
              <SwiperSlide key={list.id}>
                <HomeCard list={list} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {surveylist.length === 0 && <div>설문조사가 없어요 ㅠㅠ</div>}
      </div>
    </div>
  );
}
