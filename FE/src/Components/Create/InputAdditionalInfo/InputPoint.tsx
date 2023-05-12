import React from 'react';
import { useRecoilState } from 'recoil';
import { amountOfPointState } from '../../../Store/Create/atom';
import style from './InputPoint.module.css';

export default function InputPoint() {
  const [amountOfPoint, setAmountOfPoint] = useRecoilState(amountOfPointState);

  const handlePointInputChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    if (value) setAmountOfPoint(Number(value));
    else setAmountOfPoint(0);
  };

  return (
    <label htmlFor="point">
      <h3 className="titleFont">포인트</h3>
      <div className={style.inputContainer}>
        <input
          type="number"
          value={amountOfPoint === 0 ? '' : amountOfPoint}
          step={500}
          onChange={handlePointInputChange}
          min={MIN_POINT}
          max={MAX_POINT}
          pattern="\d*"
          id="point"
          className={style.input}
        />
        <span className="descFont">(현재 포인트 : </span>
        <span className="font-bold">{CURRENT_POINT}</span>
        <span className="descFont">)</span>
      </div>
    </label>
  );
}

const MIN_POINT = 500;

const MAX_POINT = 1_000_000;

const CURRENT_POINT = 5500;
