import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import MyPageCard from '../Components/MyPage/MyPageCard';
import MyPageCover from '../Components/MyPage/MyPageCover';
import { accessTokenState } from '../Store/Member/atom';
import { getMypage, getSurveyResponse, getSurvey } from '../Api/member';
import styles from './MyPage.module.css';

interface survey {
  title: string;
  author: string;
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
  const activityData: survey[] = [{title : '설문조사1', author : '작성자1'}]; 
  const couponCnt = 5;

  let info: myinfo;

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [openModalFlag, setOpenModalFlag] = useState<'응답한' | '제작한' | '쿠폰' | '포인트' | boolean>(false);
  const [send, setSend] = useState(false);

  useEffect(() => {
    async function getmypageinfo() {
      let data;
      try {
        data = await getMypage(accessToken);
        console.log(data)

        // info.name = data.name;
        // info.point = data.point;
        // info.dosurvey = data.dosurvey;
        // info.makesurvey = data.makesurvey;
        // info.recent = data.recentActivity;
        // info.coupon = data.coupon;
      } catch (err) {
        data = await getMypage(accessToken)
        console.log(data)
        console.error(err);
      }
    }

    async function getdosurveylist() {
      try {
        const data = getSurveyResponse(accessToken);
      } catch (err) {
        console.log(err);
      }
    }

    async function getmakesurveylist() {
      try {
        const data = getSurvey(accessToken);
      } catch (err) {
        console.log(err);
      }
    }

    getmypageinfo();
    // getdosurveylist();
    // getmakesurveylist();
  }, [accessToken]);

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
            <h1 className={styles.nameDiv}>강신욱님</h1>
            <img src="./icons/settings.svg" alt="settings" />
          </article>
        </button>
      ) : (
        <article className={styles.nameIconWrapper}>
          <h1 className={styles.nameDiv}>강신욱님</h1>
          <img src="./icons/settings.svg" alt="settings" />
        </article>
      )}

      {typeof openModalFlag === 'string' && (openModalFlag === '응답한' || openModalFlag === '제작한') && (
        <MyPageCover
          closemodal={() => {
            setOpenModalFlag(false);
          }}
          sending={send}
          contentType="설문"
          content={{
            quantity: 10,
            infoType: openModalFlag,
            renderingData: [
              {
                day: '2023.04.12',
                history: [
                  {
                    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    author: 'SSAFY',
                  },
                ],
              },
              {
                day: '2023.04.10',
                history: [
                  {
                    title: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                    author: '강신욱',
                  },
                  {
                    title:
                      'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                    author: 'vinitus',
                  },
                  {
                    title: 'It has survived not only five centuries',
                    author: 'benkim07',
                  },
                ],
              },
              {
                day: '2023.04.07',
                history: [
                  {
                    title: 'Why do we use it?',
                    author: '뭘봐',
                  },
                  {
                    title: 'Where can I get some?',
                    author: '팍시',
                  },
                ],
              },
            ],
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
          <MyPageCard tag="포인트" quantity={500} modalOpenFunc={setOpenModalFlag} />
          <MyPageCard tag="참여설문" quantity={10} modalOpenFunc={setOpenModalFlag} />
          <MyPageCard tag="제작설문" quantity={2} modalOpenFunc={setOpenModalFlag} />
        </article>
        <article className={styles.recentDiv}>
          <div className={styles.recentDivImgWrapper}>
            <h3 className={styles.recentTitle}>최근 활동</h3>
            <img src="./icons/reverse_clock.svg" alt="reverse_clock" className={styles.recentImg} />
          </div>
          <div className={styles.recentActivityWrapper}>
            {activityData.map((activity) => (
              <div key={activity.title} className={styles.recentActivityBg} >
                <div className={styles.title}>
                  {activity.title}
                </div>
                <div className={styles.author}>{activity.author}</div>
              </div>
            ))}
          </div>
        </article>
        <button type="button" onClick={() => setOpenModalFlag('쿠폰')}>
          <article className={styles.couponBox}>
            <h3 className={styles.couponText}>보유한 쿠폰</h3>
            <p className={styles.couponCntDiv}>{couponCnt}</p>
          </article>
        </button>
      </div>
    </section>
  );
}
