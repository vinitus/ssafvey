import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import AppBar from './Components/AppBar';

function App() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default App;
