import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import AppBar from './Components/AppBar';
import NavBar from './UI/NavBar';

function App() {
  return (
    <>
      <AppBar />
      <Outlet />
      <NavBar />
    </>
  );
}

export default App;
