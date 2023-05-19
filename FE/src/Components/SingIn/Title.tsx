import React from 'react';
import style from './Title.module.css';

export default function Title() {
  const login = () => {
    window.Kakao.Auth.authorize({
      redirectUri: import.meta.env.VITE_REACT_APP_KAKAO_API,
    });
  };

  return (
    <article className={style.signin}>
      <div className={`${style.circle1} ${style.circle}`} />
      <div className={`${style.circle2} ${style.circleani}`} />
      <div className={`${style.circle3} ${style.circleani}`} />
      <div className={`${style.circle4} ${style.circle}`} />
      <div className={`${style.circle5} ${style.circle}`} />

      <header className={style.subtitle}>
        <div>
          쉽게 <span>참여</span>하는
        </div>
        <div>
          쉽게 <span>등록</span>하는
        </div>
        <div>
          쉽게 <span>확인</span>하는
        </div>
        <div>설문조사</div>
      </header>
      <main className={style.backgroundtitle}>
        <div className={style.btmrect}>
          <div className={style.solid} />
          <div className={style.rect} />
          <div className={style.dash} />
        </div>

        <div className={style.toprect}>
          <div className={style.dash} />
          <div className={style.rect} />
          <div className={style.solid} />
        </div>

        <div className={style.title}>SSAFVEY</div>
      </main>

      <button type="button" className={style.kakao} onClick={login}>
        <img src="/icons/kakao_login_medium_wide.png" alt="kakao" />
      </button>
    </article>
  );
}
