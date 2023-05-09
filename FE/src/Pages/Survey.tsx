import React from 'react';
import { Outlet } from 'react-router-dom';
import SurveyHeader from '../Components/Survey/SurveyHeader';

const surveyState = {
  title: 'Survey Title',
  desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure molestias reprehenderit omnis
  quod ipsa inventore quisquam iusto sunt unde? Voluptatibus labore quas a hic quibusdam molestiae
  molestias laudantium sit.`,
  creator: 'SSAFY',
  dueDate: '2023.04.10 ~ 2023.04.13',
  headCount: '100명',
  point: '200',
};

export default function Survey() {
  return (
    <article className="text-white">
      <SurveyHeader title={surveyState.title} creator={surveyState.creator} dueDate={surveyState.dueDate} />
      <main>
        <Outlet /> {/* 여기에 SurveyCover, SurveyQuestion가 들어감 */}
      </main>
    </article>
  );
}
