import React from 'react';
import style from './CreateSurveyInputAdditionalInfo.module.css';
import SurveyBox from '../../../UI/Survey/SurveyBox';
import InputExpirationDate from './InputExpirationDate';
import InputTargetJobs from './InputTargetJobs';
import InputTargetAges from './InputTargetAges';
import InputPeopleNumber from './InputPeopleNumber';
import InputPoint from './InputPoint';
import SubmitButton from './SubmitButton';

export default function CreateSurveyInputAdditionalInfo() {
  return (
    <section className={style.sections}>
      <SurveyBox>
        <p className="descFont text-right">* 추가 정보를 입력해주세요!</p>
        <div role="form">
          <InputExpirationDate />
          <InputTargetJobs />
          <InputTargetAges />
          <InputPeopleNumber />
          <InputPoint />
        </div>
      </SurveyBox>
      <SubmitButton />
    </section>
  );
}
