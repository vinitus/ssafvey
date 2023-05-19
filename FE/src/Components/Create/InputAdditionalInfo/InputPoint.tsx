import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { requiredPeopleNumberState } from '@store/Create/atom';
import { getPoint } from '@api/coupon';
import { useQueryClient } from '@tanstack/react-query';
import style from './InputPoint.module.css';

const CostPerPerson = 500;

export default function InputPoint() {
  const queryClient = useQueryClient();

  const requiredPeopleNumber = useRecoilValue(requiredPeopleNumberState);

  const requiredPoint = requiredPeopleNumber * CostPerPerson;

  const [point, setPoint] = useState(0);

  useEffect(() => {
    async function getPointdata(accessToken: string) {
      const data = await getPoint(accessToken);
      setPoint(data.point);
    }

    const accessToken = queryClient.getQueryData(['accessToken']) as string;

    getPointdata(accessToken);
  }, [queryClient]);

  return (
    <label htmlFor="point">
      <div>
        <h3 className="titleFont inline">소모 포인트</h3>
        <p className="descFont inline">(1인당 500포인트가 소모됩니다.)</p>
      </div>
      <div className={style.inputContainer}>
        <input
          type="number"
          value={requiredPoint === 0 ? '' : requiredPoint}
          disabled
          step={500}
          min={MIN_POINT}
          max={MAX_POINT}
          pattern="\d*"
          id="point"
          className={style.input}
        />
        <span className="descFont">(현재 포인트 : </span>
        <span className="font-bold">{point}</span>
        <span className="descFont">)</span>
      </div>
    </label>
  );
}

const MIN_POINT = 500;

const MAX_POINT = 1_000_000;
