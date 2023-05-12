import React from 'react';
import { surveyClientState } from '@store/Create/atom';
import { useRecoilState } from 'recoil';
import style from './InputSurveyClient.module.css';

export default function InputSurveyClient() {
  const [surveyClient, setSurveyClient] = useRecoilState(surveyClientState);

  const handleSurveyClientChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSurveyClient(value);
  };

  return (
    <label htmlFor="surveyClient">
      <h3 className="titleFont">설문 의뢰자</h3>
      <input
        type="text"
        value={surveyClient}
        onChange={handleSurveyClientChange}
        id="surveyClient"
        className={style.input}
      />
    </label>
  );
}
