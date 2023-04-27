import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Modal from "react-modal"
import App from './App';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Exchange from './Pages/Exchange';
import CreateSurvey from './Pages/CreateSurvey';
import ImportExcel from './Components/Create/ImportExcel';
import CreateSurveyInput1 from './Components/Create/CreateSurveyInput1';
import MyPage from './Pages/MyPage';
import Survey from './Pages/Survey';
import SurveyCover from './Components/Survey/SurveyCover';
import SurveyQuestion from './Components/Survey/SurveyQuestion';
/* global document */

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: 'survey', element: <Search /> },
      { path: 'create', 
        element: <CreateSurvey />, 
        children: [
          { element: <ImportExcel />, index: true },
          { path: 'input1', element: <CreateSurveyInput1 /> }
        ]
      },
      { path: 'exchange', element: <Exchange /> },
      { path: 'mypage', element: <MyPage /> },
      {
        path: 'survey/:id',
        element: <Survey />,
        children: [
          { element: <SurveyCover />, index: true },
          { path: ':questionId', element: <SurveyQuestion /> },
        ],
      },
    ],
  },
]);

export default router;

Modal.setAppElement("#root")