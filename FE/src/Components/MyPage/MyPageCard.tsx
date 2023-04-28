import React from 'react';
import styles from './MyPageCard.module.css';

interface Props {
  tag: '포인트' | '참여설문' | '제작설문';
  quantity: number;
  modalOpenFunc: React.Dispatch<React.SetStateAction<'응답한' | '제작한' | '쿠폰' | '포인트' | boolean>>;
}

interface MappingDataWithTag {
  포인트: [string, '포인트'];
  참여설문: [string, '응답한'];
  제작설문: [string, '제작한'];
}

type ContentType = '응답한' | '제작한' | '포인트';

export default function MyPageCard({ tag, quantity, modalOpenFunc }: Props) {
  const mappingDataWithTag: MappingDataWithTag = {
    포인트: ['point', '포인트'],
    참여설문: ['joinedSurvey', '응답한'],
    제작설문: ['madeSurvey', '제작한'],
  };

  const imgSrc = mappingDataWithTag[tag][0];
  const contentType: ContentType = mappingDataWithTag[tag][1];

  return (
    <button
      type="button"
      onClick={() => {
        if (modalOpenFunc && contentType) modalOpenFunc(contentType);
      }}
    >
      <article className={styles.cardBgColor}>
        <h1 className={styles.cardText}>{tag}</h1>
        <img src={`./icons/${imgSrc}.svg`} alt={tag} className={styles.img} />
        <h1 className={styles.cardQuantity}>{quantity}</h1>
      </article>
    </button>
  );
}
