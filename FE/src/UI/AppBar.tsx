import React from 'react';
import style from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={style.appBarLayout}>
      <div className={style.appBarWrapper}>
        <button type="button" className={style.backButton}>
          <img src="/icons/arrow_back.svg" alt="arrow_back" />
        </button>
        <img src="/logo.svg" alt="logo" className={style.logoSize} />
      </div>
    </header>
  );
}
