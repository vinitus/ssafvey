import React, {useEffect, useState} from 'react';
import Modal from 'react-modal'
import style from './GiftCard.module.css';
import Lotto from '../Modal/Lotto';

// 지금 tmp 때문에 tmp를 받기도 합니다. 나중에 수정 필요해요.
interface GiftCardProps {
  productTitle: '상품명' | '커피' | '아이스티';
  point?: number;
}

export default function GiftCard({ productTitle, point }: GiftCardProps) {
  // 나중에 통일성을 위해 수정이 필요해요.
  const mappingImgSrc = {
    상품명: './tmpFile/tmp.jpg',
    커피: '/reward/coffee.svg',
    아이스티: '/reward/iceTea.svg',
  };

  const imgSrc = mappingImgSrc[productTitle];

  const [giftmodal, setGiftmodal] = useState(false);

  const closemodal = () => {
    setGiftmodal(false)
  }


  return (
    <>
      <button type='button' onClick={() => setGiftmodal(true)}>
        <div className={point !== undefined ? style.giftcardWithPoint : style.giftcardWithoutPoint}>
          <div className={style.giftimg}>
            <img src={imgSrc} alt="tmp" />
          </div>

          <div className={style.gifttitle}>{productTitle}</div>

          {point && (
            <div className={style.coin}>
              <div className={style.coin_content}>
                <img src="./icons/coin_color.svg" alt="coin" className="-ml-8" />
                <div className="ml-5">{point}</div>
              </div>
            </div>
          )}
        </div>

      </button>
      <Modal
        className={style.updatemodal}
        closeTimeoutMS={200}
        isOpen={giftmodal}
        onRequestClose={closemodal}
        style={{
          overlay: {},
          content: {
            width: '300px',
            height: '350px',
            backgroundColor: '#c2e9fb',
            margin: 'auto',
            borderRadius: '20px',
          },
        }}
      >
        <Lotto closemodal={closemodal} />
      </Modal>
    </>
  );
}

GiftCard.defaultProps = {
  point: undefined,
};
