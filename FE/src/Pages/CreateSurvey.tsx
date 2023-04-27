import React from 'react';
import { Outlet } from 'react-router-dom';
import SurveyHeader from '../Components/Survey/SurveyHeader';

const headline = '설문지 만들기';

export default function CreateSurvey() {
  return (
    <article className="text-white">
      <SurveyHeader title={headline} />
      <main className="px-20 py-15 h-[calc(100vh-224px)]">
        <Outlet />
      </main>
    </article>
  );
}
