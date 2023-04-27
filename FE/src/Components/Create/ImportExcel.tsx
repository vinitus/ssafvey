import React, {useRef, useState} from "react";
import * as XLSX from 'xlsx';
import style from "./ImportExcel.module.css";
import SurveyBox from "../../UI/Survey/SurveyBox";
import PlusButton from "../../UI/Survey/PlusButton";

interface MakeSurvey { 
  "문항" : string,
  "질문" : string | null,
  "주관식/객관식" : string | null,
  "객관식 보기 1" : string | null,
  "객관식 보기 2" : string | null,
  "객관식 보기 3" : string | null,
  "객관식 보기 4" : string | null,
  "객관식 보기 5" : string | null,
}

export default function ImportExcel() {
  const fileRef = useRef<HTMLInputElement>(null)
  // let surveylist = useState([])
  
  const clickplusbtn = () => {
    const filebtn = fileRef.current;
    filebtn?.click()
  }

  const setJSON = (data : MakeSurvey[] ) => {
    console.log(data)

    
  }

  const readExcel = (e:React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const reader = new FileReader();

    reader.onload = () => {
      const fileData = reader.result;
      const wb = XLSX.read(fileData, { type: 'binary' });
      const row : MakeSurvey[] = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      setJSON(row)
    }
    if(reader && input.files){
      reader.readAsBinaryString(input.files[0])
    }
  }

  return (
    <div className={style.sections}>
      <SurveyBox>
        <h2 className={style.title}>엑셀 파일을 업로드하세요!</h2>
        <p className={style.desc}>설문지를 바로 생성할 수 있어요</p>
        <div className={style.buttonContainer}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <span onClick={clickplusbtn}>
            <PlusButton size="lg"/> 
          </span>
        </div>
        <button type="button" className={style.templateDownLoadButton}>
          엑셀 템플릿 다운로드
        </button>
        <input type="file" ref={fileRef} className="hidden" onChange={readExcel}/>
      </SurveyBox>
      <section className={style.buttons}>
        <button type="button" className={style.writeQuestionsButton}>직접 문항 작성하기</button>
      </section>
    </div>
  );
}