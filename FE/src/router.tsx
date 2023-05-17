import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Modal from 'react-modal';
import { QueryClient } from '@tanstack/react-query';
import App from './App';
import NotFound from './Pages/NotFound';
import CreateSurvey from './Pages/CreateSurvey';
import InputBasicInfo from './Components/Create/InputBasicInfo';
import CreateSurveyQuestion from './Components/Create/AddQuestion/CreateSurveyQuestion';
import MyPage from './Pages/MyPage';
import Survey, { loader as surveyCoverLoader } from './Pages/Survey';
import SurveyCover from './Components/Survey/SurveyIndexComponent';
import SurveyQuestion, { loader as surveyQuestionLoader } from './Components/Survey/SurveyQuestion';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import OnlyLogin from './Components/SingIn/OnlyLogin';
import CreateSurveyInputAdditionalInfo from './Components/Create/InputAdditionalInfo/CreateSurveyInputAdditionalInfo';

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        async lazy() {
          const { Home } = await import('@/Pages/Home');
          return { Component: Home };
        },
      },
      {
        path: 'survey',
        async lazy() {
          const { Search, loader } = await import('@/Pages/Search');
          return { Component: Search, loader };
        },
      },
      {
        path: 'create',
        element: <CreateSurvey />,
        children: [
          {
            index: true,
            async lazy() {
              const { ImportExcel } = await import('@/Components/Create/ImportExcel');
              return { Component: ImportExcel };
            },
          },
          { path: 'basic', element: <InputBasicInfo /> },
          { path: ':questionId', element: <CreateSurveyQuestion /> },
          { path: 'additional', element: <CreateSurveyInputAdditionalInfo /> },
        ],
      },
      {
        path: 'exchange',
        async lazy() {
          const { Exchange } = await import('@/Components/Exchange/Exchange');
          return { Component: Exchange };
        },
      },
      { path: 'mypage', element: <MyPage /> },
      {
        path: 'survey/:id',
        element: <Survey />,
        loader: surveyCoverLoader(queryClient),
        children: [
          { element: <SurveyCover />, index: true },
          { path: 'doing', element: <SurveyQuestion />, loader: surveyQuestionLoader(queryClient) },
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
