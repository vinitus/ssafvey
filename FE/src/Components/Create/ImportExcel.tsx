import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { SurveyTitleState, SurveyDescState, refactoringQuestionsState } from '@store/Create/atom';
import { useSetRecoilState } from 'recoil';
import style from './ImportExcel.module.css';
import SurveyBox from '../../UI/Survey/SurveyBox';
import { QuestionForMultiple } from '@/types/createSurveyType';

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

interface choice {
  order: number;
  choice: string;
}

export function ImportExcel() {
  const navigate = useNavigate();

  const fileRef = useRef<HTMLInputElement>(null);

  function createsurvey() {
    navigate(`basic`);
  }

  const clickplusbtn = () => {
    const filebtn = fileRef.current;
    filebtn?.click();
  };

  const setSurveyTitle = useSetRecoilState(SurveyTitleState);
  const setSurveyDesc = useSetRecoilState(SurveyDescState);
  const setRefactoringQuestions = useSetRecoilState(refactoringQuestionsState);

  const setJSON = (datas: MakeSurvey[]) => {
    const questions: QuestionForMultiple[] = [];

    for (let i = 0; i < datas.length; i += 1) {
      const data = datas[i];
      if (data.문항 === '') {
        break;
      } else if (i === 0) {
        setSurveyTitle(data.질문);
      } else if (i === 1) {
        setSurveyDesc(data.질문);
      } else if (i === 2) {
        /* empty */
      } else {
        const question: QuestionForMultiple = {
          order: 0,
          question: '',
          isMultipleChoice: true,
          choices: [],
        };
        question.order = Number(data['문항']);
        question.question = data['질문'];

        if (data['주관식/객관식'] === '주관식') {
          // 주관식일때
          question.isMultipleChoice = false;
        } else {
          // 객관식일때
          question.isMultipleChoice = true;

          let choices: choice[] = [];

          const tmplist = ['객관식 보기 1', '객관식 보기 2', '객관식 보기 3', '객관식 보기 4', '객관식 보기 5'];
          for (let j = 0; j < 5; j += 1) {
            const tmp = data[tmplist[j] as keyof MakeSurvey];
            if (tmp) {
              const choice: choice = {
                order: 0,
                choice: '',
              };
              choice.order = j + 1;
              choice.choice = tmp;
              choices = [...choices, choice];
            }
          }
          question.choices = choices;
        }

        questions.push(question);
      }
    }

    setRefactoringQuestions(questions);

    navigate('additional');
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
          <button type="button" onClick={clickplusbtn} className={style.plusBtn}>
            +
          </button>
        </div>
        <a href="/excel/template.xlsx" download>
          <button type="button" className={style.templateDownLoadButton}>
            엑셀 템플릿 다운로드
          </button>
        </a>
        <input type="file" ref={fileRef} className="hidden" onChange={readExcel} />
      </SurveyBox>
      <section className={style.buttons}>
        <button type="button" className={style.writeQuestionsButton} onClick={createsurvey}>
          직접 문항 작성하기
        </button>
      </section>
    </div>
  );
}
