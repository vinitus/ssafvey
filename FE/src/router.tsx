import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';
import App from './App';
import NotFound from './Pages/NotFound';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Exchange from './Pages/Exchange';
import CreateSurvey from './Pages/CreateSurvey';
import ImportExcel from './Components/Create/ImportExcel';
import CreateSurveyInput1 from './Components/Create/AddQuestion/CreateSurveyInput1';
import CreateSurveyQuestion from './Components/Create/AddQuestion/CreateSurveyQuestion';
import MyPage from './Pages/MyPage';
import Survey from './Pages/Survey';
import SurveyCover from './Components/Survey/SurveyCover';
import SurveyQuestion from './Components/Survey/SurveyQuestion';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: 'survey', element: <Search /> },
      {
        path: 'create',
        element: <CreateSurvey />,
        children: [
          { element: <ImportExcel />, index: true },
          { path: 'input1', element: <CreateSurveyInput1 /> },
          { path: ':questionId', element: <CreateSurveyQuestion /> },
        ],
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
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path : 'sign-in',
        element : <SignIn />
      }
    ],
  },
]);

export default router;

Modal.setAppElement('#root');
