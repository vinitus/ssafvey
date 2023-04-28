import React, { useState } from 'react';
import MyPageCard from '../Components/MyPage/MyPageCard';
import MyPageCover from '../Components/MyPage/MyPageCover';
import styles from './MyPage.module.css';

export default function MyPage() {
  const activityData: string[] = ['설문 참여1', '설문 참여2', '설문 참여3'];
  const couponCnt = 10;

  const [openModalFlag, setOpenModalFlag] = useState<'응답한' | '제작한' | '쿠폰' | boolean>(false);

  const [send, setSend] = useState(false)

  return (
    <section className={styles.MyPageWrapper}>
      {openModalFlag ? (
        <button type="button" onClick={() => {setSend(true); setTimeout(() => {setSend(false); setOpenModalFlag(false); }, 1000)}}>
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

      {typeof openModalFlag === 'string' && openModalFlag !== '쿠폰' && (
        <MyPageCover
          closemodal ={() => {setOpenModalFlag(false)}}
          sending = {send}
          contentType="설문"
          content={{
            quantity: 10,
            infoType: openModalFlag,
            data: [
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
          closemodal ={() => setOpenModalFlag(false)}
          sending = {send}
          contentType="쿠폰"
          content={{
            quantity: 10,
            infoType: openModalFlag,
            data: ['아이스티', '커피', '커피', '아이스티', '아이스티'],
          }}
        />
      )}

      <div className={styles.contentWrapper}>
        <article className={styles.cardWrapper}>
          <MyPageCard tag="포인트" quantity={500} />
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
              <p className={styles.recentActivityBg} key={activity}>
                {activity}
              </p>
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
