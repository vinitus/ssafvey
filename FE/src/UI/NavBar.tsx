import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar() {
  const iconSVGArr = ['home', 'search', 'make', 'change', 'mypage'];
  const iconNameArr = ['홈', '설문하기', '설문만들기', '교환하기', '마이페이지'];
  const iconURLArr = ['/', '/survey', '/makesurvey', '/exchange', '/mypage'];
  const navigate = useNavigate();

  function navbarClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const { id } = event.currentTarget;
    navigate(`${iconURLArr[Number(id)]}`);
  }

  return (
    <div className={styles.navbarWrapper}>
      {iconSVGArr.map((iconSrc, navbarIdx) => (
        <button
          type="button"
          id={`${navbarIdx}`}
          className={styles.navbarIconWrapper}
          key={iconSrc}
          onClick={navbarClickHandler}
        >
          <img src={`./navbar/${iconSrc}.svg`} alt={iconSrc} className={styles.navbarImg} />
          <div className={styles.navbarDiv}>{iconNameArr[navbarIdx]}</div>
        </button>
      ))}
    </div>
  );
}
