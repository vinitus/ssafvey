import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import AppBar from './UI/AppBar';
import NavBar from './UI/NavBar';

function App() {
  return (
    <>
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
