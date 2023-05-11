import React from 'react';
import { postRegis } from '@api/survey';
import {
  SurveyTitleState,
  SurveyDescState,
  surveyClientState,
  expirationDateTimeState,
  requiredPeopleNumberState,
  filteredJobsIdSelector,
  filteredAgesRangeSelector,
  surveyQuestionsSelector,
  targetGenderState,
} from '@store/Create/atom';
import { useRecoilValue } from 'recoil';
import { useQueryClient } from '@tanstack/react-query';
import RoundButton from '../../../UI/Button/RoundButton';
import parseDateToString from '@/Util/Date/parseDateToString';
import { useNavigate } from 'react-router-dom';

export default function SubmitButton() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const surveyTitle = useRecoilValue(SurveyTitleState);
  const surveyDesc = useRecoilValue(SurveyDescState);
  const surveyClient = useRecoilValue(surveyClientState);
  const expirationDateTime = useRecoilValue(expirationDateTimeState);
  const requiredPeopleNumber = useRecoilValue(requiredPeopleNumberState);
  const targetGender = useRecoilValue(targetGenderState);
  const filteredJobsId = useRecoilValue(filteredJobsIdSelector);
  const filteredAgesRange = useRecoilValue(filteredAgesRangeSelector);
  const surveyQuestions = useRecoilValue(surveyQuestionsSelector);

  const handleRouteOverviewSurvey = () => {
    const handleFormDataAndFetch = async () => {
      const data = {
      'title': surveyTitle,
      'description': surveyDesc,
      'organization': surveyClient,
      'endDate': parseDateToString(expirationDateTime),
      'targetSurveyParticipants': requiredPeopleNumber,
      'targetGender': targetGender,
      'targetJob': filteredJobsId,
      'targetAge': filteredAgesRange,
      'surveyQuestions': surveyQuestions,
      };

      const accessToken = queryClient.getQueryData(['accessToken']) as string;

      const res = await postRegis(data, accessToken);

      navigate(`/survey/${res.id}`);
    };
    handleFormDataAndFetch();
  };

  return (
    <div>
      <RoundButton color="blue" size="lg" onClick={handleRouteOverviewSurvey}>
        설문 생성하기
      </RoundButton>
    </div>
  );
}
