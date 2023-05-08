import React from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { questionsState } from '../Store/Create/atom';
import SurveyHeader from '../Components/Survey/SurveyHeader';

const HEADLINE = '설문지 만들기';

export default function CreateSurvey() {
  const questions = useRecoilValue(questionsState);

  return (
    <article className="text-white">
      <SurveyHeader title={HEADLINE} />
      <main className="px-20 py-15 h-[calc(100vh-224px)]">
        <Outlet />
      </main>
    </article>
  );
}
