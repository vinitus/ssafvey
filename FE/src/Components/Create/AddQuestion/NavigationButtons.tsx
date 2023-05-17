import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './NavigationButtons.module.css';
import CircleButton from '../../../UI/Button/CircleButton';
import RoundButton from '../../../UI/Button/RoundButton';

interface Props {
  idx: number;
}

const StartIndexNumber = 0;

export default function NavigationButtons({ idx }: Props) {
  const navigate = useNavigate();

  const pageNumber = idx + 1;

  const handlePrevButtonClick = () => {
    if (idx === StartIndexNumber) {
      navigate('/create/basic');
      return;
    }

    navigate(`/create/${pageNumber - 1}`);
  };

  const handleNextButtonClick = () => {
    navigate(`/create/${pageNumber + 1}`);
  };

  const handleRouteAdditional = () => {
    navigate('/create/additional');
  };

  return (
    <section className={style.buttons}>
      <CircleButton color="green" size="lg" onClick={handlePrevButtonClick}>
        &lt;
      </CircleButton>
      <RoundButton color="blue" size="lg" onClick={handleRouteAdditional}>
        추가 정보 입력하기
      </RoundButton>
      <CircleButton color="green" size="lg" onClick={handleNextButtonClick}>
        &gt;
      </CircleButton>
    </section>
  );
}
