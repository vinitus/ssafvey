import React, { useState } from 'react';
import Modal from 'react-modal';
import GiftCard from './GiftCard';
import Lotto from '../Modal/Lotto';
import style from './Exchange.module.css';

export default function Exchange() {
  const [giftmodal, setGiftmodal] = useState(false);
  const closemodal = () => {
    setGiftmodal(false);
  };
  return (
    <>
      <div>
        <div className={style.title}>
          포인트 교환
          <img src="./icons/ticket.svg" alt="ticket" />
        </div>

        <div className={style.cardlist}>
          <div className={style.card}>
            <button
              type="button"
              onClick={() => {
                setGiftmodal(true);
              }}
            >
              <GiftCard productTitle="상품명" point={100} />
            </button>
            <button
              type="button"
              onClick={() => {
                setGiftmodal(true);
              }}
            >
              <GiftCard productTitle="상품명" point={100} />
            </button>
            <button
              type="button"
              onClick={() => {
                setGiftmodal(true);
              }}
            >
              <GiftCard productTitle="상품명" point={100} />
            </button>
            <button
              type="button"
              onClick={() => {
                setGiftmodal(true);
              }}
            >
              <GiftCard productTitle="상품명" point={100} />
            </button>
          </div>
        </div>
      </div>

      <Modal
        className={style.updatemodal}
        closeTimeoutMS={200}
        isOpen={giftmodal !== false}
        onRequestClose={closemodal}
        style={{
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
