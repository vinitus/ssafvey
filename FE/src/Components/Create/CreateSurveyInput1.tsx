import React from "react";
import { useNavigate } from 'react-router-dom';
import style from "./CreateSurveyInput1.module.css";
import SurveyBox from "../../UI/Survey/SurveyBox";

export default function CreateSurveyInput1() {
  const navigate = useNavigate();
  function makesurvey(){
    navigate(`/create/1`)
  }

  return (
    <div className={style.sections}>
      <SurveyBox>
        <p className="descFont text-right">* 설문 정보를 입력해주세요!</p>
        <form>
          <label htmlFor="title">
            <h3 className="titleFont my-5">설문 제목</h3>
            <input type="text" id="title" className={style.titleInput} />
          </label>
          <label htmlFor="desc">
            <h3 className="titleFont my-5">설문 설명</h3>
            <textarea id="desc" className={style.descTextArea} />
          </label>
        </form>
      </SurveyBox>
      <section>
        <button type="button" className={style.writeQuestionsButton} onClick={makesurvey}>문항 작성하기</button>
      </section>
    </div>
  );
}