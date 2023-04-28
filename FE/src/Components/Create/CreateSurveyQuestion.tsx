import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./CreateSurveyQuestion.module.css";
import SurveyBox from "../../UI/Survey/SurveyBox";
import RoundButton from "../../UI/Survey/RoundButton";
// import LeftArrowButton from "../../UI/Survey/LeftArrowButton";
// import RightArrowButton from "../../UI/Survey/RightArrowButton";
import PlusButton from "../../UI/Survey/PlusButton";

type QuestionType = "multiple" | "essay";

interface Answer {
  id: number;
  value: string;
}

const [START_NO, END_NO] = [1, 5];

// const CURRENT_NO = 1;


export default function CreateSurveyQuestion() {
  // Type : 객관식 주관식 선택
  const [type, setType] = useState<QuestionType>("multiple");
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as QuestionType);
  };

  // answers : 현재 작성된 답안들
  const [answers, setAnswers] = useState<Answer[]>([]);
  const handleDeleteBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const targetId = Number(target.parentElement?.dataset.id);
    setAnswers(prev => prev.filter(answer => answer.id !== targetId));
  };

  // inputOpen : 답안 작성 input이 열려있는지
  const [inputOpen, setInputOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useRef(START_NO); // key prop으로 사용할 id
  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue: string = e.currentTarget.answer.value;
    const answer = { id: id.current, value: inputValue };
    setAnswers(prev => [...prev, answer]);
    id.current += 1;
    setInputOpen(false);
    setPlusBtnOpen(true);
  };

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
  const CURRENT_NUMBER = parseInt(useLocation().pathname.split("/")[2], 10);
  console.log(CURRENT_NUMBER);
  return (
    <div className={style.sections}>
      <SurveyBox>
        <p className="descFont text-right">* 문항 정보를 입력해주세요!</p>
        <form>
          <label htmlFor="title">
            <h3 className="titleFont my-5">{CURRENT_NUMBER}번 문항</h3>
            <input type="text" id="title" className={style.titleInput} />
          </label>
          <label htmlFor="questionType">
            <h3 className="titleFont my-5">유형</h3>
            <select onChange={handleTypeChange} id="questionType" className={style.titleInput}>
              <option value="multiple">객관식</option>
              <option value="essay">주관식</option>
            </select>
          </label>
        </form>
        <section className="mt-5">
          {type === "multiple" && (
            <>
              <ol>
                {answers.map(answer => (
                  <li key={answer.id} data-id={answer.id} className={style.answer}>
                    <p className="descFont inline-block">{answer.value}</p>
                    <button type="button" onClick={handleDeleteBtnClick} className={style.deleteButton}>
                      X
                    </button>
                  </li>
                ))}
              </ol>
              {inputOpen && (
                <form onSubmit={handleAnswerSubmit}>
                  <label htmlFor="answer">
                    <input ref={inputRef} type="text" required id="answer" className={style.titleInput} style={{ width: 'calc(100% - 52px)' }} />
                    <button type="submit" className={style.addButton}>
                      추가
                    </button>
                  </label>
                </form>
              )}
              {plusBtnOpen && answers.length < END_NO && (
                <div className={style.buttonContainer}>
                  <PlusButton onClick={handlePlusButtonClick} size="sm" />
                </div>
              )}
            </>
          )}
        </section>
      </SurveyBox>
      <section className={style.buttons}>
        {/* {CURRENT_NUMBER === START_NO && <Link to={`/create/${CURRENT_NUMBER - 1}`}>
          <RoundButton>왼</RoundButton>
        </Link> }
        {CURRENT_NUMBER !== START_NO && <Link to={`/create/${CURRENT_NUMBER - 1}`}>
          <RoundButton>왼</RoundButton>
        </Link> }
        <button type="button" className={style.nextPhaseButton}>설문 등록</button>
        <Link to={`/create/${CURRENT_NUMBER + 1}`}>
          <RoundButton>우</RoundButton>
        </Link> */}
        {/* <RoundButton hidden>
          <Link to={`/create/${CURRENT_NUMBER - 1}`} hidden />
          왼
        </RoundButton>
        <RoundButton>
          <Link to={`/create/${CURRENT_NUMBER + 1}`} />
          우
        </RoundButton> */}
        {/* <Link to={`/create/${CURRENT_NUMBER - 1}`}>
          { CURRENT_NUMBER === START_NO && <RoundButton hidden /> }
          { CURRENT_NUMBER !== START_NO && <RoundButton /> }
        </Link>
        <Link to={`/create/${CURRENT_NUMBER + 1}`}>
          <RoundButton />
        </Link> */}
      </section>
    </div>
  );
}