import React from 'react';
import style from './CreateSurveyQuestion.module.css';
import SurveyBox from '../../UI/Survey/SurveyBox';
import CreateSurveyForm from './CreateSurveyForm';
import CreateSurveyAnswerList from './CreateSurveyAnswerList';
import CreateSurveyAnswerForm from './CreateSurveyAnswerForm';
import CreateSurveyAddAnswerButton from './CreateSurveyAddAnswerButton';
import CreateSurveyNavigationButtons from './CreateSurveyNavigationButtons';

export default function CreateSurveyQuestion() {
  return (
    <div className={style.sections}>
      <SurveyBox>
        <p className="descFont text-right">* 문항 정보를 입력해주세요!</p>
        <CreateSurveyForm />
        <CreateSurveyAnswerList />
        <CreateSurveyAnswerForm />
        <CreateSurveyAddAnswerButton />
      </SurveyBox>
      <CreateSurveyNavigationButtons />
    </div>
  );
}
