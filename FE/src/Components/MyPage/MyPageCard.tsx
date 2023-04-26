import React from 'react';
import styles from './MyPageCard.module.css';

interface Props {
  tag: '포인트' | '참여설문' | '제작설문';
  quantity: number;
  modalOpenFunc?: React.Dispatch<React.SetStateAction<string | boolean>>;
}

export default function MyPageCard({ tag, quantity, modalOpenFunc }: Props) {
  const tagToImgSrc = {
    포인트: 'point',
    참여설문: 'joinedSurvey',
    제작설문: 'madeSurvey',
  };

  const imgSrc = tagToImgSrc[tag];

  return (
    <button
      type="button"
      disabled={tag === '포인트'}
      onClick={() => {
        if (modalOpenFunc) modalOpenFunc(tag);
      }}
    >
      <div className={styles.cardBgColor}>
        <div className={styles.cardText}>{tag}</div>
        <img src={`./icons/${imgSrc}.svg`} alt={tag} className={styles.img} />
        <div className={styles.cardQuantity}>{quantity}</div>
      </div>
    </button>
  );
}

MyPageCard.defaultProps = {
  modalOpenFunc: undefined,
};
