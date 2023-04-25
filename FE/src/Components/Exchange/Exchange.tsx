import React, { useState } from 'react';
import Modal from 'react-modal';
import GiftCard from './GiftCard';
import style from './Exchange.module.css';
import BuyGift from '../Modal/BuyGift';

export default function Exchange() {
  const [giftmodal, setGiftmodal] = useState(false);
  const openmodal = () => {
    setGiftmodal(true);
  };

  return (
    <div>
      <div className={style.title}>
        포인트 교환
        <img src="./icons/ticket.svg" alt="ticket" />
      </div>

      <div className={style.card}>
        <button type='button' onClick={openmodal}>
          <GiftCard/>
        </button>
        <GiftCard />
        <GiftCard />
        <GiftCard />
      </div>

      <Modal
        className={style.updatemodal}
        closeTimeoutMS={200}
        isOpen={giftmodal}
        onRequestClose={() => setGiftmodal(false)}
        style={{
          overlay: {},
          content: {
            width: '300px',
            height: '450px',
            backgroundColor: '#ffffff',
            margin: 'auto -10px',
            borderRadius : '20px',
          },
        }}
      >
        <BuyGift closemodal={() => setGiftmodal(false)}/>
      </Modal>
    </div>
  );
}
