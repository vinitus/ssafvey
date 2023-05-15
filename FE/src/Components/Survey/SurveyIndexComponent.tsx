import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useSurveyCoverData } from './hooks/useSurveyCoverData';
import style from './SurveyIndexComponent.module.css';
import { SurveyCoverData } from '../../types/surveyType';
import SurveyIndexCover from './SurveyIndexCover';

interface RouterProps {
  surveyCoverResData: SurveyCoverData;
}

export default function SurveyCover() {
  const { surveyCoverResData } = useOutletContext<RouterProps>();
  const [surveyInfoArr, kakaoshare] = useSurveyCoverData(surveyCoverResData);

  return (
    <div className={style.coverBackgroundImg}>
      <div className={style.coverBackgroundFilter}>
        <SurveyIndexCover>
          <div>
            <SurveyIndexCover.Description>{surveyCoverResData.description}</SurveyIndexCover.Description>
            <SurveyIndexCover.SurveyInfoWrapper surveyInfoArr={surveyInfoArr} />
          </div>
          <SurveyIndexCover.SurveyBtnWrapepr kakaoshare={kakaoshare} surveyCoverResData={surveyCoverResData} />
        </SurveyIndexCover>
      </div>
    </div>
  );
}
