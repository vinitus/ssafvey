import React from 'react';
import { targetGenderState } from '@store/Create/atom';
import { useRecoilState } from 'recoil';
import style from './InputTargetGender.module.css';

export default function InputTargetGender() {
  const [targetGender, setTargetGender] = useRecoilState(targetGenderState);

  const handleTargetGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetGender(e.target.value);
  };

  return (
    <label htmlFor="targetGender">
      <h3 className="titleFont my-5">성별</h3>
      <select value={targetGender} onChange={handleTargetGenderChange} id="targetGender" className={style.genderInput}>
        <option value="ALL">전체</option>
        <option value="MAN">남성</option>
        <option value="WOMAN">여성</option>
      </select>
    </label>
  );
}
