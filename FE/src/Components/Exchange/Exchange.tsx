import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import GiftCard from './GiftCard';
import BuyGift from '../Modal/BuyGift';
import Lotto from '../Modal/BuyLotto';
import style from './Exchange.module.css';
import { getItemlist } from '../../Api/coupon';

export interface ItemInfo {
  id: number;
  name: string;
  image: string;
  price: number;
  stockQuantity: number;
}

export default function Exchange() {
  const [giftmodal, setGiftmodal] = useState(false);
  const [lottomodal, setLottomodal] = useState(false);

  const closemodal = () => {
    setGiftmodal(false);
  };
  const closelottomodal = () => {
    setLottomodal(false);
  };

  const [itemlist, setItemlist] = useState<ItemInfo[]>([]);
  const [clickedinfo, setClickedinfo] = useState<ItemInfo>({ id: 0, name: '', image: '', price: 0, stockQuantity: 0 });

  useEffect(() => {
    async function getitem() {
      try {
        const data = await getItemlist('');
        setItemlist(data);
      } catch (err) {
        console.error(err);
      }
    }
    getitem();
  }, []);

  useEffect(() => {
    // console.log(itemlist)
  }, [itemlist]);

  const openitem = (item: ItemInfo) => {
    setClickedinfo(item);
    if (item.name === '행운복권') {
      setLottomodal(true);
    } else {
      setGiftmodal(true);
    }
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
                <GiftCard productTitle={item.name} image={item.image} point={item.price} />
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
        <BuyGift title={clickedinfo.name} id={clickedinfo.id} price={clickedinfo.price} closemodal={closemodal} />
      </Modal>

      <Modal
        className={style.updatemodal}
        closeTimeoutMS={200}
        isOpen={lottomodal}
        onRequestClose={closelottomodal}
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
        <Lotto id={clickedinfo.id} closemodal={closelottomodal} />
      </Modal>
    </>
  );
}
