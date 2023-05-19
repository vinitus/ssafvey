import React from 'react';
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';
import { plusButtonOpenState, inputOpenState, refactoringQuestionsState } from '../../../Store/Create/atom';
import style from './CreateSurveyAddAnswerButton.module.css';
import CircleButton from '../../../UI/Button/CircleButton';

const END_NO = 5;

interface Props {
  idx: number;
}

export default function CreateSurveyAddAnswerButton({ idx }: Props) {
  const refactoringQuestions = useRecoilValue(refactoringQuestionsState);

  const [plusBtnOpen, setPlusBtnOpen] = useRecoilState(plusButtonOpenState);

  const currentQuestionType = refactoringQuestions[idx].isMultipleChoice ? 'multiple' : 'essay';

  const setInputOpen = useSetRecoilState(inputOpenState);

  const handlePlusButtonClick = () => {
    setPlusBtnOpen(false);
    setInputOpen(true);
  };

  const answersCount = refactoringQuestions[idx].choices.length;

  return (
    <div>
      {currentQuestionType === 'multiple' && plusBtnOpen && answersCount < END_NO && (
        <div className={style.buttonContainer}>
          <CircleButton size="md" color="green" onClick={handlePlusButtonClick}>
            +
          </CircleButton>
        </div>
      )}
    </div>
  );
}
