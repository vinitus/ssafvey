import React from "react";
import style from "./ImportExcel.module.css";
import SurveyBox from "../../UI/Survey/SurveyBox";
import PlusButton from "../../UI/Survey/PlusButton";

export default function ImportExcel() {
  return (
    <div className={style.sections}>
      <SurveyBox>
        <h2 className={style.title}>엑셀 파일을 업로드하세요!</h2>
        <p className={style.desc}>설문지를 바로 생성할 수 있어요</p>
        <div className={style.buttonContainer}>
          <PlusButton size="lg" /> 
        </div>
        <button type="button" className={style.templateDownLoadButton}>
          엑셀 템플릿 다운로드
        </button>
      </SurveyBox>
      <section className={style.buttons}>
        <button type="button" className={style.writeQuestionsButton}>직접 문항 작성하기</button>
      </section>
    </div>
  );
}