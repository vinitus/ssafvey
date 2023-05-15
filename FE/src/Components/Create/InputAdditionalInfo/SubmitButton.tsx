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
  targetGenderState,
  refactoringQuestionsState,
} from '@store/Create/atom';
import { useRecoilValue } from 'recoil';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import RoundButton from '../../../UI/Button/RoundButton';
import parseDateToString from '@/Util/Date/parseDateToString';
import { SurveyPost, QuestionForMultiple, QuestionForEssay } from '@/types/createSurveyType';

export default function SubmitButton() {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const refactoringQuestions = useRecoilValue(refactoringQuestionsState);

  const reformQuestions: (QuestionForMultiple | QuestionForEssay)[] = refactoringQuestions.map((question) => {
    if (!question.isMultipleChoice) {
      return {
        order: question.order,
        question: question.question,
        isMultipleChoice: question.isMultipleChoice,
      };
    }
    return {
      ...question,
      choices: question.choices.map((choice, index) => {
        return {
          ...choice,
          order: index + 1,
        };
      }),
    };
  });

  const surveyTitle = useRecoilValue(SurveyTitleState);
  const surveyDesc = useRecoilValue(SurveyDescState);
  const surveyClient = useRecoilValue(surveyClientState);
  const expirationDateTime = useRecoilValue(expirationDateTimeState);
  const requiredPeopleNumber = useRecoilValue(requiredPeopleNumberState);
  const targetGender = useRecoilValue(targetGenderState);
  const filteredJobsId = useRecoilValue(filteredJobsIdSelector);
  const filteredAgesRange = useRecoilValue(filteredAgesRangeSelector);

  const handleRouteOverviewSurvey = () => {
    const handleFormDataAndFetch = async () => {
      const data: SurveyPost = {
        title: surveyTitle,
        description: surveyDesc,
        organization: surveyClient,
        endDate: parseDateToString(expirationDateTime),
        targetSurveyParticipants: requiredPeopleNumber,
        targetGender,
        targetJob: filteredJobsId,
        targetAge: filteredAgesRange,
        surveyQuestions: reformQuestions,
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
