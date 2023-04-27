import React from "react";
import style from "./ImportExcel.module.css";
import SurveyBox from "../../UI/Survey/SurveyBox";
import PlusButton from "../../UI/Survey/PlusButton";

export default function ImportExcel() {
  return (
    <div className={style.sectionsWrapper}>
      <SurveyBox>
        <div className="flex flex-col gap-50">
          <div>
            <h2 className="text-black text-20 font-bold">엑셀 파일을 업로드하세요!</h2>
            <p className="text-gray-600">설문지를 바로 생성할 수 있어요</p>
          </div>
          <div className="flex flex-col items-center">
            <PlusButton size="lg" />
          </div>
          <div className="text-center">
            <button type="button" className="rounded-full text-white bg-gray-400 border-none py-10 px-15">
              엑셀 템플릿 다운로드
            </button>
          </div>
        </div>
      </SurveyBox>
      <section className={style.buttons}>
        <button type="button" className="rounded-20 text-white bg-darkBlue border-none py-15 px-25 text-20 w-full">직접 문항 작성하기</button>
      </section>
    </div>
  );
}