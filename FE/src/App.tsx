import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';
import './Components/AppBar';
import AppBar from './Components/AppBar';


function App() {

  return (
    <>
      <AppBar/>
      <Outlet/>
    </>
  );
}

export default App;
