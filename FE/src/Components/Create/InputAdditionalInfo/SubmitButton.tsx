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

export default function SubmitButton() {
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
    // Todo: 설문 생성하기 버튼 클릭 시,
    const handleFormDataAndFetch = async () => {
      const formData = new FormData();
      formData.append('title', surveyTitle);
      formData.append('description', surveyDesc);
      formData.append('organization', surveyClient);
      formData.append('endDate', parseDateToString(expirationDateTime));
      formData.append('targetSurveyParticipants', String(requiredPeopleNumber));
      formData.append('targetGender', targetGender); // Todo: 성별 선택 기능 추가
      formData.append('targetJob', JSON.stringify(filteredJobsId));
      formData.append('targetAge', JSON.stringify(filteredAgesRange));
      formData.append('surveyQuestions', JSON.stringify(surveyQuestions));

      for (const entry of formData.entries()) {
        console.log(entry);
      }

      // 1. POST 요청 보내기
      const accessToken = queryClient.getQueryData(['accessToken']) as string;
      const res = await postRegis(formData, accessToken);
      console.log(res);

      // 2. reponse로 받은 pk를 이용하여 설문 커버 페이지로 라우팅
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
