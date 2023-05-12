import React from 'react';
import { Location, useLocation } from 'react-router-dom';
import style from './CreateSurveyQuestion.module.css';
import SurveyBox from '../../../UI/Survey/SurveyBox';
import CreateSurveyForm from './CreateSurveyForm';
import CreateSurveyAnswerList from './CreateSurveyAnswerList';
import CreateSurveyAnswerForm from './CreateSurveyAnswerForm';
import CreateSurveyAddAnswerButton from './CreateSurveyAddAnswerButton';
import NavigationButtons from './NavigationButtons';

export default function CreateSurveyQuestion() {
  const location = useLocation();

  const questionsIdx = getCurrentNumber(location) - 1;

  return (
    <div className={style.sections}>
      <SurveyBox>
        <p className="descFont text-right">* 문항 정보를 입력해주세요!</p>
        <CreateSurveyForm />
        <CreateSurveyAnswerList />
        <CreateSurveyAnswerForm />
        <CreateSurveyAddAnswerButton />
      </SurveyBox>
      <NavigationButtons idx={questionsIdx} />
    </div>
  );
}

function getCurrentNumber(location: Location): number {
  const splitedURL = location.pathname.split('/');
  return Number(splitedURL[2]);
}
