import React from 'react';
import { useRecoilState } from 'recoil';
import parseDateToString from '@util/Date/parseDateToString';
import { expirationDateTimeState } from '../../../Store/Create/atom';

export default function InputExpirationDate() {
  const [expirationDateTime, setExpirationDateTime] = useRecoilState(expirationDateTimeState);

  const inputValue = parseDateToString(expirationDateTime);

  const handleTimeInput = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDateTime(new Date(value));
  };

  return (
    <label htmlFor="datetime">
      <h3 className="titleFont">설문 종료일</h3>
      <input type="datetime-local" value={inputValue} onChange={handleTimeInput} id="datetime" />
    </label>
  );
}
