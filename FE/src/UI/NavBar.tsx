import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NavBar.module.css';
import { queryClient } from '../router';

export default function NavBar() {
  const iconSVGArr = ['home', 'search', 'make', 'change', 'mypage'];
  const iconNameArr = ['홈', '설문하기', '설문만들기', '교환하기', '마이페이지'];
  const iconURLArr = ['/', '/survey', '/create', '/exchange', '/mypage'];
  const navigate = useNavigate();
  const accessToken = queryClient.getQueryData(['accessToken']);

  function navbarClickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    const { id } = event.currentTarget;
    if (id === '4' && !accessToken) {
      navigate('/sign-in');
    } else {
      navigate(`${iconURLArr[Number(id)]}`, { state: Date.now() });
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        {iconSVGArr.map((iconSrc, navbarIdx) => (
          <button
            type="button"
            id={`${navbarIdx}`}
            className={styles.navbarIconWrapper}
            key={iconSrc}
            onClick={navbarClickHandler}
          >
            <img src={`/navbar/${iconSrc}.svg`} alt={iconSrc} className={styles.navbarImg} />
            {navbarIdx === 4 && !accessToken ? (
              <div className={styles.navbarDiv}>로그인</div>
            ) : (
              <div className={styles.navbarDiv}>{iconNameArr[navbarIdx]}</div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
