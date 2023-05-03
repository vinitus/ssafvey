import React, { useState } from 'react';
import Modal from 'react-modal';
import { CoverData, isCouponTitle } from '../../types/myPageType';
import GiftCard from '../Exchange/GiftCard';
import BuyGift from '../Modal/BuyGift';
import style from './MyPageCouponCover.module.css';

export default function MyPageCouponCover({ quantity, infoType, renderingData }: CoverData) {
  const [modalOpenFlag, setModalOpenFlag] = useState<boolean | string>(false);
  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`보유한 ${infoType}`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.cardlist}>
        <div className={style.cardWrapper}>
          {isCouponTitle(renderingData) &&
            renderingData.map((title, idx) => (
              // idx를 쓰지만, title을 통해서 고유값을 지정했기에 idx를 사용해도 괜찮습니다.
              // eslint-disable-next-line react/no-array-index-key
              <button type="button" key={idx} onClick={(e:React.MouseEvent) => {e.stopPropagation(); setModalOpenFlag(title)}}>
                <GiftCard productTitle={title} />
              </button>
            ))}
        </div>
      </section>
      <Modal
        className={style.updatemodal}
        closeTimeoutMS={200}
        isOpen={modalOpenFlag !== false}
        onRequestClose={() => setModalOpenFlag(false)}
        style={{
          overlay: {},
          content: {
            width: '300px',
            height: '450px',
            backgroundColor: '#ffffff',
            margin: 'auto',
            borderRadius: '20px',
          },
        }}
      >
        {typeof modalOpenFlag === 'string' && (
          <BuyGift title={modalOpenFlag} closemodal={() => setModalOpenFlag(false)} />
        )}
      </Modal>
    </>
  );
}
