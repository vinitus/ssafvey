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
import CreateSurveyInput1 from './Components/Create/CreateSurveyInput1';
import CreateSurveyQuestion from './Components/Create/AddQuestion/CreateSurveyQuestion';
import MyPage from './Pages/MyPage';
import Survey, { loader as surveyCoverLoader } from './Pages/Survey';
import SurveyCover from './Components/Survey/SurveyIndexComponent';
import SurveyQuestion from './Components/Survey/SurveyQuestion';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import OnlyLogin from './Components/SingIn/OnlyLogin';
import CreateSurveyInputAdditionalInfo from './Components/Create/InputAdditionalInfo/CreateSurveyInputAdditionalInfo';

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
          { path: 'additional', element: <CreateSurveyInputAdditionalInfo /> },
        ],
      },
      { path: 'exchange', element: <Exchange /> },
      { path: 'mypage', element: <MyPage /> },
      {
        path: 'survey/:id',
        element: <Survey />,
        loader: surveyCoverLoader,
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
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'onlylogin',
        element: <OnlyLogin />,
      },
    ],
  },
]);

export default router;

Modal.setAppElement('#root');
