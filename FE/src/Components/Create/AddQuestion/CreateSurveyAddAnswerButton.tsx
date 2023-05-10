import React from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import {
  plusButtonOpenState,
  currentQuestionTypeState,
  answersState,
  inputOpenState,
} from '../../../Store/Create/atom';
import style from './CreateSurveyAddAnswerButton.module.css';
import CircleButton from '../../../UI/Button/CircleButton';

const END_NO = 5;

export default function CreateSurveyAddAnswerButton() {
  const [plusBtnOpen, setPlusBtnOpen] = useRecoilState(plusButtonOpenState);

  const currentQuestionType = useRecoilValue(currentQuestionTypeState);

  const setInputOpen = useSetRecoilState(inputOpenState);

  const handlePlusButtonClick = () => {
    setPlusBtnOpen(false);
    setInputOpen(true);
  };

  const answers = useRecoilValue(answersState);

  return (
    <div>
      {currentQuestionType === 'multiple' && plusBtnOpen && answers.length < END_NO && (
        <div className={style.buttonContainer}>
          <CircleButton size="md" color="green" onClick={handlePlusButtonClick}>
            +
          </CircleButton>
        </div>
      )}
    </div>
  );
}
