import React, { useState } from 'react';
import MyPageCard from '../Components/MyPage/MyPageCard';
import MyPageCover from '../Components/MyPage/MyPageCover';
import styles from './MyPage.module.css';

export default function MyPage() {
  const activityData: string[] = ['설문 참여1', '설문 참여2', '설문 참여3'];
  const couponCnt = 10;

  const [openModalFlag, setOpenModalFlag] = useState<string | boolean>(false);

  return (
    <div className={styles.MyPageWrapper}>
      {openModalFlag ? (
        <button type="button" onClick={() => setOpenModalFlag(false)}>
          <div className={styles.nameIconWrapper}>
            <div className={styles.nameDiv}>강신욱님</div>
            <img src="./icons/settings.svg" alt="settings" />
          </div>
        </button>
      ) : (
        <div className={styles.nameIconWrapper}>
          <div className={styles.nameDiv}>강신욱님</div>
          <img src="./icons/settings.svg" alt="settings" />
        </div>
      )}
      {openModalFlag && (
        <MyPageCover
          quantity={10}
          infoType="응답한"
          historyObj={[
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
                  title: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
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
          ]}
        />
      )}
      <div className={styles.contentWrapper}>
        <div className={styles.cardWrapper}>
          <MyPageCard tag="포인트" quantity={500} />
          <MyPageCard tag="참여설문" quantity={10} modalOpenFunc={setOpenModalFlag} />
          <MyPageCard tag="제작설문" quantity={2} modalOpenFunc={setOpenModalFlag} />
        </div>
        <div className={styles.recentDiv}>
          <div className={styles.recentDivImgWrapper}>
            <div className={styles.recentTitle}>최근 활동</div>
            <img src="./icons/reverse_clock.svg" alt="reverse_clock" className={styles.recentImg} />
          </div>
          <div className={styles.recentActivityWrapper}>
            {activityData.map((activity) => (
              <div className={styles.recentActivityBg} key={activity}>
                {activity}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.couponBox}>
          <div className={styles.couponText}>보유한 쿠폰</div>
          <div className={styles.couponCntDiv}>{couponCnt}</div>
        </div>
      </div>
    </div>
  );
}
