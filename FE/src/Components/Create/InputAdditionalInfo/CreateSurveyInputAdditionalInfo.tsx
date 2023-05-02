import React from 'react';
import style from './CreateSurveyInputAdditionalInfo.module.css';
import SurveyBox from '../../../UI/Survey/SurveyBox';
import InputExpirationDate from './InputExpirationDate';
import RoundButton from '../../../UI/Button/RoundButton';

export default function CreateSurveyInputAdditionalInfo() {
  return (
    <section className={style.sections}>
      <SurveyBox>
        <p className="descFont text-right">* 추가 정보를 입력해주세요!</p>
        <form>
          <InputExpirationDate />
          {/* <InputTarget /> */}
          {/* <InputPeopleNumber /> */}
          {/* <InputPoint /> */}
        </form>
      </SurveyBox>
      <div>
        <RoundButton size="lg">설문 생성하기</RoundButton>
      </div>
    </section>
  );
}
