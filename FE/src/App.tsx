import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import AppBar from './UI/AppBar';
import NavBar from './UI/NavBar';
import { useTokenQuery } from './hooks/useTokenQuery';

function App() {
  useTokenQuery();

  return (
    <>
      <div className={styles.overlay}>더 작은 화면에서 이용해주세요!</div>
      <AppBar />
      <div className={styles.divBgGradient}>
        <div className={styles.divBgBlur}>
          <Outlet />
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default App;
