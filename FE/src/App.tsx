import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styles from './App.module.css';
import AppBar from './UI/AppBar';
import NavBar from './UI/NavBar';
import { getRefresh } from './Api/member';

function App() {
  // jwt 토큰을 캐싱하기 위해서 만드는 쿼리일 뿐!
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tokenQuery = useQuery(['accessToken'], {
    queryFn: async () => {
      const oldRefreshToken = localStorage.getItem('refreshToken');
      const data = await getRefresh(oldRefreshToken);
      const { Authorization, refreshToken } = data;

      localStorage.setItem('refreshToken', refreshToken);

      return Authorization;
    },
    staleTime: 1500000,
    cacheTime: Infinity,
  });

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
