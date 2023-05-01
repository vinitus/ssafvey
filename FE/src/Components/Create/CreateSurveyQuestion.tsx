import React, { useState, useRef, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import { currentQuestionTypeState } from '../../Store/Create/atom';
import style from './CreateSurveyQuestion.module.css';
import SurveyBox from '../../UI/Survey/SurveyBox';
import CreateSurveyForm from './CreateSurveyForm';
import RoundButton from '../../UI/Survey/RoundButton';
import PlusButton from '../../UI/Survey/PlusButton';
import CreateSurveyAnswerList from './CreateSurveyAnswerList';
import CreateSurveyAnswerForm from './CreateSurveyAnswerForm';

interface Answer {
  id: number;
  value: string;
}

const END_NO = 5;

// const CURRENT_NO = 1;

export default function CreateSurveyQuestion() {
  const navigate = useNavigate();

  const currentQuestionType = useRecoilValue(currentQuestionTypeState);

  const 

  // inputOpen : 답안 작성 input이 열려있는지
  // const [inputOpen, setInputOpen] = useState(false);
  // const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const inputValue: string = e.currentTarget.answer.value;
  //   const answer = { id: id.current, value: inputValue };
  //   setAnswers((prev) => [...prev, answer]);
  //   id.current += 1;
  //   setInputOpen(false);
  //   setPlusBtnOpen(true);
  // };

  const [plusBtnOpen, setPlusBtnOpen] = useState(true);
  const handlePlusButtonClick = () => {
    setPlusBtnOpen(false);
    setInputOpen(true);
  };
  useEffect(() => {
    if (inputOpen) {
      inputRef.current?.focus();
    }
  }, [inputOpen]);

  //
  const CURRENT_NUMBER = parseInt(useLocation().pathname.split('/')[2], 10);

  const handlePrevButtonClick = () => {
    navigate(`/create/${CURRENT_NUMBER - 1}`);

    // getInputValues from recoil
  };

  const handleNextButtonClick = () => {
    navigate(`/create/${CURRENT_NUMBER + 1}`);
  };

  return (
    <div className={style.sections}>
      <SurveyBox>
        <p className="descFont text-right">* 문항 정보를 입력해주세요!</p>
        <CreateSurveyForm />
        <CreateSurveyAnswerList />
        <CreateSurveyAnswerForm />
        {plusBtnOpen && answers.length < END_NO && (
          <div className={style.buttonContainer}>
            <PlusButton onClick={handlePlusButtonClick} size="sm" />
          </div>
        )}
      </SurveyBox>
      <section className={style.buttons}>
        {CURRENT_NUMBER === START_NO && <RoundButton hidden>&lt;</RoundButton>}
        {CURRENT_NUMBER !== START_NO && <RoundButton onClick={handlePrevButtonClick}>&lt;</RoundButton>}
        <button type="button" className={style.nextPhaseButton}>
          설문 등록
        </button>
        <RoundButton onClick={handleNextButtonClick}>&gt;</RoundButton>
      </section>
    </div>
  );
}
