import React from 'react';
import { jobsSelectionStateQuery } from '@store/Create/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import style from './CreateSurveyInputAdditionalInfo.module.css';
import SurveyBox from '../../../UI/Survey/SurveyBox';
import InputExpirationDate from './InputExpirationDate';
import InputTargetJobs from './InputTargetJobs';
import InputTargetAges from './InputTargetAges';
import InputPeopleNumber from './InputPeopleNumber';
import InputPoint from './InputPoint';
import RoundButton from '../../../UI/Button/RoundButton';

export default function CreateSurveyInputAdditionalInfo() {
  const handleRouteOverviewSurvey = () => {
    // Todo: 설문 생성하기 버튼 클릭 시,
    // 1. POST 요청 보내기
    // 2. reponse로 받은 pk를 이용하여 설문 커버 페이지로 라우팅
  };

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
      <div>
        <RoundButton color="blue" size="lg" onClick={handleRouteOverviewSurvey}>
          설문 생성하기
        </RoundButton>
      </div>
    </section>
  );
}
