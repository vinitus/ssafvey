import React, { useState } from 'react';
import Modal from 'react-modal';
import GiftCard from './GiftCard';
import style from './Exchange.module.css';
import Lotto from '../Modal/Lotto';

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
        <button type='button' onClick={openmodal}>
          <GiftCard/>
        </button>
        <button type='button' onClick={openmodal}>
          <GiftCard/>
        </button>
        <button type='button' onClick={openmodal}>
          <GiftCard/>
        </button>

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
            height: '350px',
            backgroundColor: '#c2e9fb',
            margin: 'auto -10px',
            borderRadius : '20px',
          },
        }}
      >
        <Lotto />
        {/* <Lotto closemodal={() => setGiftmodal(false)}/> */}
      </Modal>
    </div>
  );
}
