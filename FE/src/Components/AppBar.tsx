import React from 'react';
import style from './AppBar.module.css';

export default function AppBar() {
  return (
    <div className={style.appBarLayout}>
      <button type="button" className={style.arrowBackButton}>
        <img src="/icons/arrow_back.svg" alt="arrow_back" />
      </button>
      <img src="/logo.svg" alt="logo" className={style.logoSize} />
    </div>
  );
}
