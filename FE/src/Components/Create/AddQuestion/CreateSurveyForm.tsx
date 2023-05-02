import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  currentQuestionTitleState,
  currentQuestionNumberState,
  currentQuestionTypeState,
} from '../../../Store/Create/atom';
import style from './CreateSurveyForm.module.css';

type QuestionType = 'multiple' | 'essay';

export default function CreateSurveyForm() {
  const [currentQuestionTitle, setCurrentQuestionTitle] = useRecoilState(currentQuestionTitleState);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuestionTitle(e.target.value);
  };

  const currentNumber = useRecoilValue(currentQuestionNumberState);

  const [type, setType] = useRecoilState(currentQuestionTypeState);
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as QuestionType);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="title">
        <h3 className="titleFont my-5">{currentNumber}번 문항</h3>
        <input
          type="text"
          value={currentQuestionTitle}
          onChange={handleTitleChange}
          id="title"
          className={style.titleInput}
        />
      </label>
      <label htmlFor="questionType">
        <h3 className="titleFont my-5">유형</h3>
        <select value={type} onChange={handleTypeChange} id="questionType" className={style.titleInput}>
          <option value="multiple">객관식</option>
          <option value="essay">주관식</option>
        </select>
      </label>
    </form>
  );
}
