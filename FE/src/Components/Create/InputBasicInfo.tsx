import React from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { SurveyTitleState, SurveyDescState } from '../../Store/Create/atom';
import style from './InputBasicInfo.module.css';
import SurveyBox from '../../UI/Survey/SurveyBox';

export default function InputBasicInfo() {
  const navigate = useNavigate();

  const [surveyTitle, setSurveyTitle] = useRecoilState(SurveyTitleState);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurveyTitle(e.target.value);
  };

  const [surveyDesc, setSurveyDesc] = useRecoilState(SurveyDescState);

  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSurveyDesc(e.target.value);
  };

  function makesurvey() {
    navigate(`/create/1`);
  }

  return (
    <div className={style.sections}>
      <SurveyBox>
        <p className="descFont text-right">* 설문 정보를 입력해주세요!</p>
        <div role="form">
          <label htmlFor="title">
            <h3 className="titleFont my-5">설문 제목</h3>
            <input
              type="text"
              id="title"
              value={surveyTitle}
              onChange={handleTitleChange}
              className={style.titleInput}
            />
          </label>
          <label htmlFor="desc">
            <h3 className="titleFont my-5">설문 설명</h3>
            <textarea id="desc" value={surveyDesc} onChange={handleDescChange} className={style.descTextArea} />
          </label>
        </div>
      </SurveyBox>
      <section>
        <button type="button" className={style.writeQuestionsButton} onClick={makesurvey}>
          문항 작성하기
        </button>
      </section>
    </div>
  );
}
