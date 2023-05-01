import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { currentQuestionNumberState } from '../../Store/Create/atom';
import style from './CreateSurveyNavigationButtons.module.css';
import RoundButton from '../../UI/Survey/RoundButton';

const START_NO = 1;

export default function CreateSurveyNavigationButtons() {
  const navigate = useNavigate();

  const [currentNumber, setCurrentNumber] = useRecoilState(currentQuestionNumberState);

  console.log('currentNumber', currentNumber);

  const handlePrevButtonClick = () => {
    setCurrentNumber(currentNumber - 1);
  };

  const handleNextButtonClick = () => {
    setCurrentNumber(currentNumber + 1);
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
