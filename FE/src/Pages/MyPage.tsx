import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'
import MyPageCard from '../Components/MyPage/MyPageCard';
import MyPageCover from '../Components/MyPage/MyPageCover';
import Lotto from '../Components/Modal/Lotto'
import { getMypage, getSurveyResponse, getSurvey, getLogout, getGift } from '../Api/member';
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
  numOrder : number;
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
    numOrder : 0,
  });

  const [dosurvey, setDosurvey] = useState<SurveyHistoryObj>({});
  const [makesurvey, setMakesurvey] = useState<SurveyHistoryObj>({});

  const [openModalFlag, setOpenModalFlag] = useState<'응답한' | '제작한' | '쿠폰' | '포인트' | boolean>(false);
  const [send, setSend] = useState(false);
  const [activityData, setActivityData] = useState<survey[]>([]);

  const [lottomodal, setLottomodal] = useState(false)

  useEffect(() => {
    //
  }, [dosurvey, makesurvey]);

  useEffect(() => {
    async function getmypageinfo() {
      try {
        const accessToken = queryClient.getQueryData(['accessToken']) as string;
        const data = await getMypage(accessToken);
        console.log(data)
        setInfo({
          name: data.name,
          point: data.point,
          dosurvey: data.numSurveyParticipated,
          makesurvey: data.numSurveyCreated,
          recent: data.recentActivity,
          coupon: data.couponCount,
          numOrder : data.numOrder
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
        setMakesurvey(data);
      } catch (err) {
        console.log(err);
      }
    }

    async function getGiftcon(){
      try {
        const accessToken = queryClient.getQueryData(['accessToken']) as string;
        const data = await getGift(accessToken);
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    }

    getmypageinfo();
    getGiftcon()
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
            quantity: info.coupon,
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
            quantity: info.point,
            infoType: openModalFlag,
            renderingData: 
            {
              "2023.05.12": [
                  {
                      "point": 30,
                      "pointUsageHistory": "로또 뜯기",
                      "plusMinus": true,
                      "date": "2023.05.12"
                  },
                  {
                      "point": 10,
                      "pointUsageHistory": "로또 뜯기",
                      "plusMinus": false,
                      "date": "2023.05.12"
                  }
              ],
              "2023.05.11": [
                  {
                      "point": 10,
                      "pointUsageHistory": "로또 뜯기",
                      "plusMinus": true,
                      "date": "2023.05.11"
                  }
              ]
          }
            
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
            <p className={styles.couponCntDiv}>{info.numOrder}</p>
          </article>
        </button>
        {info.coupon > 0 ?
        <button type="button" onClick={() => setLottomodal(true)}>
          <article className={styles.couponBox}>
            <h3 className={styles.couponText}>보유한 로또</h3>
            <p className={styles.couponCntDiv}>{info.coupon}</p>
          </article>
        </button>
        :
        <button type="button">
          <article className={styles.couponBox}>
            <h3 className={styles.couponText}>보유한 로또</h3>
            <p className={styles.couponCntDiv}>{info.coupon}</p>
          </article>
        </button>
      }

        <Modal
            // className={style.updatemodal}
            closeTimeoutMS={200}
            isOpen={lottomodal}
            onRequestClose={() => setLottomodal(false)}
            style={{
              content: {
                width: '300px',
                height: '350px',
                backgroundColor: '#c2e9fb',
                margin: 'auto',
                borderRadius: '20px',
              },
            }}
          >
            <Lotto closemodal={() => setLottomodal(false)} />
          </Modal>
      </div>
    </section>
  );
}
