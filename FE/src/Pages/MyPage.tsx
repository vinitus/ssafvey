import React from 'react';
import MyPageCard from '../Components/MyPage/MyPageCard';
import styles from './MyPage.module.css';

export default function MyPage() {
  const activityData: string[] = ['설문 참여1', '설문 참여2', '설문 참여3'];
  const couponCnt = 10;

  return (
    <div className={styles.MyPageWrapper}>
      <div className={styles.nameIconWrapper}>
        <div className={styles.nameDiv}>강신욱님</div>
        <img src="./icons/settings.svg" alt="settings" />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.cardWrapper}>
          <MyPageCard tag="포인트" quantity={500} />
          <MyPageCard tag="참여설문" quantity={10} />
          <MyPageCard tag="제작설문" quantity={2} />
        </div>
        <div className={styles.recentDiv}>
          <div className={styles.recentDivImgWrapper}>
            <div className={styles.recentTitle}>최근 활동</div>
            <img src="./icons/reverse_clock.svg" alt="reverse_clock" className={styles.recentImg} />
          </div>
          <div className={styles.recentActivityWrapper}>
            {activityData.map((activity) => (
              <div className={styles.recentActivityBg}>{activity}</div>
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
