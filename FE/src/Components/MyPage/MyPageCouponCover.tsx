import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { CoverData, isCouponTitle } from '../../types/myPageType';
import GiftCard from '../Exchange/GiftCard';
import BuyGift from '../Modal/ShowGift';
import style from './MyPageCouponCover.module.css';

export interface ItemInfo {
  orderItemId: number;
  itemName: string;
  imageUrl: string;
  used : boolean;
}

export default function MyPageCouponCover({ quantity, infoType, renderingData }: CoverData) {
  const [modalOpenFlag, setModalOpenFlag] = useState<boolean | string>(false);
  const [clickedinfo, setClickedinfo] = useState<ItemInfo>({ orderItemId: 0, itemName: '', imageUrl: '', used : false});

  return (
    <>
      <header className={style.coverHeaderWrapper}>
        <h1 className={style.coverHeaderTitle}>{`보유한 ${infoType}`}</h1>
        <p className={style.coverHeaderQuantity}>{quantity}</p>
      </header>
      <section className={style.cardlist}>
        <div className={style.cardWrapper}>
          
          { isCouponTitle(renderingData) && renderingData.map(({orderItemId, itemName, imageUrl, used}) => (
              <button
                type="button"
                // idx가 변해도 상관 없음
                // eslint-disable-next-line react/no-array-index-key
                key={orderItemId}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setModalOpenFlag(true);
                  setClickedinfo({orderItemId, itemName, imageUrl, used});
                }}
              >
                <GiftCard productTitle={itemName} image={imageUrl} used={used}/>
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
        {modalOpenFlag && (
          <BuyGift info={clickedinfo} closemodal={() => setModalOpenFlag(false)} />
        )}
      </Modal>
    </>
  );
}
