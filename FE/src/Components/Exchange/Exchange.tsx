import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import GiftCard from './GiftCard';
import BuyGift from '../Modal/BuyGift';
import style from './Exchange.module.css';
import { queryClient } from '../../router';
import { getItemlist, getPoint } from '../../Api/coupon';

export interface ItemInfo {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  point?: number;
}

export function Exchange() {
  const [giftmodal, setGiftmodal] = useState(false);

  const closemodal = () => {
    setGiftmodal(false);
  };

  const [itemlist, setItemlist] = useState<ItemInfo[]>([]);
  const [clickedinfo, setClickedinfo] = useState<ItemInfo>({ id: 0, name: '', imageUrl: '', price: 0 });
  const accessToken = queryClient.getQueryData(['accessToken']) as string;
  const [point, setPoint] = useState(-1);

  useEffect(() => {
    async function getitem() {
      const data = await getItemlist('');
      setItemlist(data);
    }

    getitem();

    async function getPointdata() {
      const data = await getPoint(accessToken);
      setPoint(data.point);
    }

    if (accessToken) {
      getPointdata();
    }
  }, [accessToken, giftmodal]);

  const openitem = (item: ItemInfo) => {
    setClickedinfo(item);
    setGiftmodal(true);
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
            {itemlist.map((item: ItemInfo) => (
              <button type="button" onClick={() => openitem(item)} key={item.id}>
                <GiftCard productTitle={item.name} image={item.imageUrl} point={item.price} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <Modal
        className={style.updatemodal}
        closeTimeoutMS={200}
        isOpen={giftmodal}
        onRequestClose={closemodal}
        style={{
          content: {
            width: '300px',
            height: '450px',
            backgroundColor: '#c2e9fb',
            margin: 'auto',
            borderRadius: '20px',
          },
        }}
      >
        <BuyGift info={clickedinfo} point={point} closemodal={closemodal} />
      </Modal>
    </>
  );
}
