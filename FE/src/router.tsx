import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Exchange from './Pages/Exchange';
import MakeSurvey from './Pages/MakeSurvey';
import MyPage from './Pages/MyPage';
import Survey from './Pages/Survey';
/* global document */

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/survey', element: <Search /> },
      { path: '/makesurvey', element: <MakeSurvey /> },
      { path: '/exchange', element: <Exchange /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/survey/:id', element: <Survey /> },
    ],
  },
]);

export default router;
