import React from 'react';
import { useRecoilState } from 'recoil';
import { requiredPeopleNumberState } from '../../../Store/Create/atom';
import style from './InputPeopleNumber.module.css';

export default function InputPeopleNumber() {
  const [requiredPeopleNumber, setRequiredPeopleNumber] = useRecoilState(requiredPeopleNumberState);

  const handlePeopleInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    if (value) setRequiredPeopleNumber(Number(value));
    else setRequiredPeopleNumber(0);
  };

  return (
    <label htmlFor="peopleNumber">
      <h3 className="titleFont">인원</h3>
      <input
        type="number"
        value={requiredPeopleNumber === 0 ? '' : requiredPeopleNumber}
        onChange={handlePeopleInputChange}
        min={MIN_PEOPLE}
        max={MAX_PEOPLE}
        pattern="\d*"
        id="peopleNumber"
        className={style.input}
      />
      <span>명</span>
    </label>
  );
}

const MIN_PEOPLE = 1;
const MAX_PEOPLE = 50;
