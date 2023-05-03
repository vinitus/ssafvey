import React from 'react';
import style from './CreateSurveyInputAdditionalInfo.module.css';
import SurveyBox from '../../../UI/Survey/SurveyBox';
import InputExpirationDate from './InputExpirationDate';
import InputTarget from './InputTarget';
import InputPeopleNumber from './InputPeopleNumber';
import InputPoint from './InputPoint';
import RoundButton from '../../../UI/Button/RoundButton';

export default function CreateSurveyInputAdditionalInfo() {
  return (
    <section className={style.sections}>
      <SurveyBox>
        <p className="descFont text-right">* 추가 정보를 입력해주세요!</p>
        <div role="form">
          <InputExpirationDate />
          <InputTarget />
          <InputPeopleNumber />
          <InputPoint />
        </div>
      </SurveyBox>
      <div>
        <RoundButton size="lg">설문 생성하기</RoundButton>
      </div>
    </section>
  );
}
