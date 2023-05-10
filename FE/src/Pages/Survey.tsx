import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import SurveyHeader from '../Components/Survey/SurveyHeader';
import { getStart2 } from '../Api/survey';
import { SurveyCoverData } from '../types/surveyType';

export default function Survey() {
  const surveyCoverResData = useLoaderData() as SurveyCoverData;
  return (
    <article className="text-white">
      <SurveyHeader
        title={surveyCoverResData.title}
        creator={surveyCoverResData.creator}
        endDate={surveyCoverResData.endDate}
      />
      <main>
        <Outlet context={{ surveyCoverResData }} /> {/* 여기에 SurveyCover, SurveyQuestion가 들어감 */}
      </main>
    </article>
  );
}

export async function loader() {
  const data = await getStart2(1);
  return data;
}
