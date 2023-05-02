import React from 'react';
import { useRecoilState } from 'recoil';
import { expirationDateTimeState } from '../../../Store/Create/atom';

export default function InputExpirationDate() {
  const [expirationDateTime, setExpirationDateTime] = useRecoilState(expirationDateTimeState);

  const timeForInputElement = getTimeForInputElement(expirationDateTime);

  const handleTimeInput = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDateTime(new Date(value));
  };

  return (
    <label htmlFor="datetime">
      <h3 className="titleFont">설문 종료일</h3>
      <input type="datetime-local" value={timeForInputElement} onChange={handleTimeInput} id="datetime" />
    </label>
  );
}

const getTimeForInputElement = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}T${hour < 10 ? `0${hour}` : hour}:${
    minute < 10 ? `0${minute}` : minute
  }`;
};
