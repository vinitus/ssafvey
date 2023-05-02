import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  currentQuestionNumberState,
  currentQuestionTitleState,
  currentQuestionTypeState,
  questionsState,
  answersState,
} from '../../../Store/Create/atom';
import style from './CreateSurveyNavigationButtons.module.css';
import RoundButton from '../../../UI/Survey/RoundButton';

const START_NO = 1;

export default function CreateSurveyNavigationButtons() {
  const navigate = useNavigate();

  const [currentNumber, setCurrentNumber] = useRecoilState(currentQuestionNumberState);

  const handlePrevButtonClick = () => {
    setCurrentNumber(currentNumber - 1);
  };

  const setQuestions = useSetRecoilState(questionsState);

  const [currentQuestionTitle, setCurrentQuestionTitle] = useRecoilState(currentQuestionTitleState);

  const [currentQuestionType, setCurrentQuestionType] = useRecoilState(currentQuestionTypeState);

  const [answers, setAnswers] = useRecoilState(answersState);

  const handleNextButtonClick = () => {
    setQuestions((prev) => {
      return [
        ...prev,
        {
          id: currentNumber,
          title: currentQuestionTitle,
          type: currentQuestionType,
          answers,
        },
      ];
    });
    setCurrentNumber(currentNumber + 1);
    setCurrentQuestionTitle('');
    setCurrentQuestionType('multiple');
    setAnswers([]);
  };

  useEffect(() => {
    navigate(`/create/${currentNumber}`);
  }, [navigate, currentNumber]);

  return (
    <section className={style.buttons}>
      {currentNumber === START_NO && <RoundButton hidden>&lt;</RoundButton>}
      {currentNumber !== START_NO && <RoundButton onClick={handlePrevButtonClick}>&lt;</RoundButton>}
      <button type="button" className={style.nextPhaseButton}>
        설문 등록
      </button>
      <RoundButton onClick={handleNextButtonClick}>&gt;</RoundButton>
    </section>
  );
}
