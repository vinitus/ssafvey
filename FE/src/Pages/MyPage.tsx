import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyPageCard from '../Components/MyPage/MyPageCard';
import MyPageCover from '../Components/MyPage/MyPageCover';
import { getMypage, getSurveyResponse, getSurvey, getLogout } from '../Api/member';
import styles from './MyPage.module.css';
import { queryClient } from '../router';
import { SurveyHistoryObj } from '../types/myPageType';

interface survey {
  title: string;
  name: string;
}

interface myinfo {
  name: string;
  point: number;
  dosurvey: number;
  makesurvey: number;
  recent: survey[];
  coupon: number;
}

export default function MyPage() {
  const navigate = useNavigate();

  const [info, setInfo] = useState<myinfo>({
    name: '',
    point: 0,
    dosurvey: 0,
    makesurvey: 0,
    recent: [],
    coupon: 0,
  });

  const [dosurvey, setDosurvey] = useState<SurveyHistoryObj>({});
  const [makesurvey, setMakesurvey] = useState<SurveyHistoryObj>({});

  const [openModalFlag, setOpenModalFlag] = useState<'응답한' | '제작한' | '쿠폰' | '포인트' | boolean>(false);
  const [send, setSend] = useState(false);
  const [activityData, setActivityData] = useState<survey[]>([]);

  useEffect(() => {
    //
  }, [dosurvey, makesurvey]);

  useEffect(() => {
    async function getmypageinfo() {
      try {
        const accessToken = queryClient.getQueryData(['accessToken']) as string;
        const data = await getMypage(accessToken);
        console.log('data 1:', data);

        setInfo({
          name: data.name,
          point: data.point,
          dosurvey: data.numSurveyParticipated,
          makesurvey: data.numSurveyCreated,
          recent: data.recentActivity,
          coupon: data.couponCount,
        });

        setActivityData(data.recentActivity);

        getdosurveylist();
      } catch (err) {
        console.error(err);
      }
    }

    async function getdosurveylist() {
      try {
        const accessToken = queryClient.getQueryData(['accessToken']) as string;
        const data = await getSurveyResponse(accessToken);
        console.log('data 2 : ', data);
        setDosurvey(data);
        getmakesurveylist();
      } catch (err) {
        console.log(err);
      }
    }

    async function getmakesurveylist() {
      try {
        const accessToken = queryClient.getQueryData(['accessToken']) as string;
        const data = await getSurvey(accessToken);
        console.log('data3 : ', data);
        setMakesurvey(data);
      } catch (err) {
        console.log(err);
      }
    }

    getmypageinfo();
  }, []);

  async function logout() {
    try {
      const accessToken = queryClient.getQueryData(['accessToken']) as string;
      await getLogout(accessToken);
      localStorage.setItem('refreshToken', '');
      queryClient.setQueryData(['accessToken'], null);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className={styles.MyPageWrapper}>
      {openModalFlag ? (
        <button
          type="button"
          onClick={() => {
            setSend(true);
            setTimeout(() => {
              setSend(false);
              setOpenModalFlag(false);
            }, 1000);
          }}
        >
          <article className={styles.nameIconWrapper}>
            <h1 className={styles.nameDiv}>{info?.name}님</h1>
            <img src="./icons/settings.svg" alt="settings" />
          </article>
        </button>
      ) : (
        <article className={styles.nameIconWrapper}>
          <h1 className={styles.nameDiv}>{info?.name}님</h1>
          <img src="./icons/settings.svg" alt="settings" />
          <div className={styles.hoverbtn}>
            <button type="button" className={styles.logout} onClick={logout}>
              로그아웃
            </button>
            <button type="button" className={styles.modify}>
              회원정보수정
            </button>
          </div>
        </article>
      )}

      {typeof openModalFlag === 'string' && openModalFlag === '제작한' && (
        <MyPageCover
          closemodal={() => {
            setOpenModalFlag(false);
          }}
          sending={send}
          contentType="설문"
          content={{
            quantity: info.makesurvey,
            infoType: openModalFlag,
            renderingData: makesurvey,
          }}
        />
      )}

      {typeof openModalFlag === 'string' && openModalFlag === '응답한' && (
        <MyPageCover
          closemodal={() => {
            setOpenModalFlag(false);
          }}
          sending={send}
          contentType="설문"
          content={{
            quantity: info.dosurvey,
            infoType: openModalFlag,
            renderingData: dosurvey,
          }}
        />
      )}

      {typeof openModalFlag === 'string' && openModalFlag === '쿠폰' && (
        <MyPageCover
          closemodal={() => setOpenModalFlag(false)}
          sending={send}
          contentType="쿠폰"
          content={{
            quantity: 5,
            infoType: openModalFlag,
            renderingData: ['아이스티', '커피', '커피', '아이스티', '아이스티'],
          }}
        />
      )}
      {typeof openModalFlag === 'string' && openModalFlag === '포인트' && (
        <MyPageCover
          closemodal={() => setOpenModalFlag(false)}
          sending={send}
          contentType="포인트"
          content={{
            quantity: 4500,
            infoType: openModalFlag,
            renderingData: [
              {
                day: '2023.04.11',
                history: [
                  {
                    pointHistoryType: '설문 참여',
                    pointUsed: 300,
                  },
                  {
                    pointHistoryType: '설문 제작',
                    pointUsed: -200,
                  },
                ],
              },
              {
                day: '3325.12.10',
                history: [
                  {
                    pointHistoryType: '쿠폰 교환',
                    pointUsed: -100,
                  },
                  {
                    pointHistoryType: '설문 참여',
                    pointUsed: 300,
                  },
                  {
                    pointHistoryType: '복권 교환',
                    pointUsed: -100,
                  },
                  {
                    pointHistoryType: '설문 참여',
                    pointUsed: 300,
                  },
                ],
              },
            ],
          }}
        />
      )}

      <div className={styles.contentWrapper}>
        <article className={styles.cardWrapper}>
          <MyPageCard tag="포인트" quantity={info.point} modalOpenFunc={setOpenModalFlag} />
          <MyPageCard tag="참여설문" quantity={info.dosurvey} modalOpenFunc={setOpenModalFlag} />
          <MyPageCard tag="제작설문" quantity={info.makesurvey} modalOpenFunc={setOpenModalFlag} />
        </article>
        <article className={styles.recentDiv}>
          <div className={styles.recentDivImgWrapper}>
            <h3 className={styles.recentTitle}>최근 활동</h3>
            <img src="./icons/reverse_clock.svg" alt="reverse_clock" className={styles.recentImg} />
          </div>
          <div className={styles.recentActivityWrapper}>
            {activityData?.map((activity) => (
              <div key={activity.title} className={styles.recentActivityBg}>
                <div className={styles.title}>{activity.title}</div>
                <div className={styles.author}>{activity.name}</div>
              </div>
            ))}
          </div>
        </article>
        <button type="button" onClick={() => setOpenModalFlag('쿠폰')}>
          <article className={styles.couponBox}>
            <h3 className={styles.couponText}>보유한 쿠폰</h3>
            <p className={styles.couponCntDiv}>{info.coupon}</p>
          </article>
        </button>
      </div>
    </section>
  );
}
