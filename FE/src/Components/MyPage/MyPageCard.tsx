import React from 'react';
import styles from './MyPageCard.module.css';

interface Props {
  tag: '포인트' | '참여설문' | '제작설문';
  quantity: number;
}

// export default function MyPageCard(props: Props) {
//   const { tag, quantity } = props;
export default function MyPageCard({ tag, quantity }: Props) {
  let imgSrc = 'madeSurvey';
  if (tag === '포인트') imgSrc = 'point';
  else if (tag === '참여설문') imgSrc = 'joinedSurvey';
  return (
    <div className={styles.cardBgColor}>
      <div className={styles.cardText}>{tag}</div>
      <img src={`./icons/${imgSrc}.svg`} alt={tag} className={styles.img} />
      <div className={styles.cardQuantity}>{quantity}</div>
    </div>
  );
}
