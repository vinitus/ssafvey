import React, { useState } from 'react';
import { LoaderFunctionArgs, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import style from './SurveyQuestion.module.css';
import SurveyBox from '../../UI/Survey/SurveyBox';
import { getDetail } from '@/Api/survey';
import { SurveyQuestionData } from '@/types/surveyType';
import { useSurveyQuestionDataParser } from './hooks/useSurveyQuestionDataParser';
import RoundButton from '@/UI/Button/RoundButton';
import tokenQuery from './module/tokenQuery';
import Progress from './ProgressBar';

export default function SurveyQuestion() {
  const navigate = useNavigate();
  const surveyQuestionData = useLoaderData() as SurveyQuestionData;
  const { id } = useParams();
  const [answers, setAnswers, submitAnswer] = useSurveyQuestionDataParser(surveyQuestionData, Number(id));
  const queryClient = useQueryClient();
  const accessToken = queryClient.getQueryData(['accessToken']) as string;

  const [questionIdx, setQuestionIdx] = useState(0);
  const questionLength = surveyQuestionData.surveyQuestions.length;

  const questionClick: boolean[] = [];
  for (let i = 0; i < questionLength; i += 1) {
    questionClick.push(false);
  }

  const [questionclicklist, setQuestionclicklist] = useState(questionClick);

  return (
    <div className={style.sectionsWrapper}>
      <div className={style.upperSectionsWrapper}>
        <Progress>
          <Progress.Header questionIdx={questionIdx} questionLength={questionLength} />
          <Progress.ProgressBar questionIdx={questionIdx} questionLength={questionLength} />
        </Progress>

        {surveyQuestionData.surveyQuestions.map(({ question, order, isMultipleChoice, choices }) => (
          <SurveyBox key={order}>
            <SurveyBox.Question>{question}</SurveyBox.Question>
            <SurveyBox.Answer
              clickstate={(num: number, status: boolean) => {
                questionclicklist[num - 1] = status;
                setQuestionclicklist([...questionclicklist]);
                setQuestionIdx(questionclicklist.filter((item) => item).length);
              }}
              isMultipleChoice={isMultipleChoice}
              choices={choices}
              order={order}
              choiceObjState={answers}
              choiceStateDispatcher={setAnswers}
            />
          </SurveyBox>
        ))}
        <RoundButton
          color={questionIdx === questionLength ? 'blue' : 'gray'}
          size="lg"
          onClick={() => {
            if (questionIdx === questionLength) {
              submitAnswer(accessToken);
              navigate('/mypage');
            }
          }}
        >
          제출
        </RoundButton>
        <div style={{ marginBottom: '30px' }} />
      </div>
    </div>
  );
}

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const { id } = params;
    if (!id) return 0;
    const accessToken = await tokenQuery(queryClient);
    const data = await getDetail(id, accessToken);
    return data;
  };
