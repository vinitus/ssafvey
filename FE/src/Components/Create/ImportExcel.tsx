import React, { useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import style from './ImportExcel.module.css';
import SurveyBox from '../../UI/Survey/SurveyBox';
import PlusButton from '../../UI/Survey/PlusButton';

interface MakeSurvey {
  문항: string;
  질문: string;
  '주관식/객관식': string | null;
  '객관식 보기 1': string | null;
  '객관식 보기 2': string | null;
  '객관식 보기 3': string | null;
  '객관식 보기 4': string | null;
  '객관식 보기 5': string | null;
}

interface Survey {
  title : string;
  description : string;
  survey_question : surveytype[];
}

interface choice {
  order : number;
  choice : string;
}

interface surveytype {
  order : number | string;
  question : string;
  is_multiple_choice : boolean;
  choices : choice[] | null;
}

export default function ImportExcel() {
  const fileRef = useRef<HTMLInputElement>(null);
  // let surveylist = useState([])

  const clickplusbtn = () => {
    const filebtn = fileRef.current;
    filebtn?.click();
  };

  const setJSON = (datas: MakeSurvey[]) => {
    const survey = new FormData();
    const questions : surveytype[] = [];

    for (let i = 0; i < datas.length; i += 1) {
      const data = datas[i];
      if (data.문항 === '') {
        break;
      } else if (i === 0) {
        survey.append('title', data.질문)
      } else if (i === 1) {
        survey.append('description', data.질문)
      } else if (i === 2) {
        /* empty */
      } else {
        const question : surveytype = {
          order : 0,
          question : '',
          is_multiple_choice : true,
          choices : []
        };
        question.order = data['문항']
        question.question = data['질문']

        if(data['주관식/객관식'] === '주관식'){
          // 주관식일때
          question.is_multiple_choice = true
        }
        else {
          // 객관식일때
          question.is_multiple_choice = false

          let choices : choice[] = [];

          const tmplist = ['객관식 보기 1', '객관식 보기 2', '객관식 보기 3', '객관식 보기 4', '객관식 보기 5']
          for (let j = 0 ; j<5; j += 1){
            const tmp = data[tmplist[j] as keyof MakeSurvey]
            if(tmp){
              const choice : choice = {
                order: 0,
                choice: ''
              };
              choice.order = j+1; 
              choice.choice = tmp
              choices = [...choices, choice]
            }
          }
          question.choices = choices
        }

        questions.push(question)
      }
  
    }
    survey.append('survey_questions', JSON.stringify(questions));
  };

  const readExcel = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const reader = new FileReader();

    reader.onload = () => {
      const fileData = reader.result;
      const wb = XLSX.read(fileData, { type: 'binary' });
      const row: MakeSurvey[] = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      setJSON(row);
    };
    if (reader && input.files) {
      reader.readAsBinaryString(input.files[0]);
    }
  };

  return (
    <div className={style.sections}>
      <SurveyBox>
        <h2 className={style.title}>엑셀 파일을 업로드하세요!</h2>
        <p className={style.desc}>설문지를 바로 생성할 수 있어요</p>
        <div className={style.buttonContainer}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <span onClick={clickplusbtn}>
            <PlusButton size="lg" />
          </span>
        </div>
        <button type="button" className={style.templateDownLoadButton}>
          엑셀 템플릿 다운로드
        </button>
        <input type="file" ref={fileRef} className="hidden" onChange={readExcel} />
      </SurveyBox>
      <section className={style.buttons}>
        <button type="button" className={style.writeQuestionsButton}>
          직접 문항 작성하기
        </button>
      </section>
    </div>
  );
  
}
