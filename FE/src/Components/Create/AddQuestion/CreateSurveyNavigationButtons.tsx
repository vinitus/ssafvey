import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  currentQuestionNumberState,
  endQuestionNumberState,
  currentQuestionTitleState,
  currentQuestionTypeState,
  questionsState,
  answersState,
} from '../../../Store/Create/atom';
import style from './CreateSurveyNavigationButtons.module.css';
import CircleButton from '../../../UI/Button/CircleButton';
import RoundButton from '../../../UI/Button/RoundButton';

const START_NO = 1;

export default function CreateSurveyNavigationButtons() {
  const navigate = useNavigate();

  const [currentNumber, setCurrentNumber] = useRecoilState(currentQuestionNumberState);

  const [endNumber, setEndNumber] = useRecoilState(endQuestionNumberState);

  const handlePrevButtonClick = () => {
    if (currentNumber === START_NO) {
      navigate('/create/basic');
      return;
    }
    setCurrentQuestionTitle(questions[currentNumber - 2].title);
    setCurrentQuestionType(questions[currentNumber - 2].type);
    setAnswers(questions[currentNumber - 2].answers);

    setCurrentNumber(currentNumber - 1);
    navigate(`/create/${currentNumber - 1}`);
  };

  const [questions, setQuestions] = useRecoilState(questionsState);

  const [currentQuestionTitle, setCurrentQuestionTitle] = useRecoilState(currentQuestionTitleState);

  const [currentQuestionType, setCurrentQuestionType] = useRecoilState(currentQuestionTypeState);

  const [answers, setAnswers] = useRecoilState(answersState);

  const handleNextButtonClick = () => {
    if (currentNumber === endNumber) {
      // 현재 위치가 endNumber이면 추가하기
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

      setEndNumber((prev) => prev + 1);
    } else {
      // 현재 위치가 endNumber가 아니면 수정하기
      setQuestions((prev) => {
        return [
          ...prev.slice(0, currentNumber - 1),
          {
            id: currentNumber,
            title: currentQuestionTitle,
            type: currentQuestionType,
            answers,
          },
          ...prev.slice(currentNumber),
        ];
      });
    }

    if (currentNumber < questions.length) {
      // 이미 존재하는 값이면 가져오기
      setCurrentQuestionTitle(questions[currentNumber].title);
      setCurrentQuestionType(questions[currentNumber].type);
      setAnswers(questions[currentNumber - 1].answers);
    } else {
      // 없는 값이면 기본값으로
      setCurrentQuestionTitle('');
      setCurrentQuestionType('multiple');
      setAnswers([]);
    }
    setCurrentNumber(currentNumber + 1);
    navigate(`/create/${currentNumber + 1}`);
  };

  const handleRouteAdditional = () => {
    navigate('/create/additional');
  };

  return (
    <section className={style.buttons}>
      <CircleButton color="green" size="lg" onClick={handlePrevButtonClick}>
        &lt;
      </CircleButton>
      <RoundButton color="blue" size="lg" onClick={handleRouteAdditional}>
        추가 정보 입력하기
      </RoundButton>
      <CircleButton color="green" size="lg" onClick={handleNextButtonClick}>
        &gt;
      </CircleButton>
    </section>
  );
}
