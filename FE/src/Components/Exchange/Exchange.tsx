import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import GiftCard from './GiftCard';
import BuyGift from '../Modal/BuyGift';
import style from './Exchange.module.css';
import {getItemlist} from '../../Api/coupon'

export interface ItemInfo {
  id : number;
  name : string;
  image : string;
  price : number;
  stockQuantity : number;
}

export default function Exchange() {
  const [giftmodal, setGiftmodal] = useState(false);
  const closemodal = () => {
    setGiftmodal(false);
  };

  const [ itemlist, setItemlist ] = useState<ItemInfo[]>([]);
  const [clickedinfo, setClickedinfo] = useState<ItemInfo>({id:0, name:"", image:"",price:0,stockQuantity:0});

  useEffect(() => {
    async function getitem(){
      try{
        const data = await getItemlist('')
        setItemlist(data)
      }
      catch(err){
        console.error(err)
      }
    }
    getitem()
  }, [])

  useEffect(() => {
    // console.log(itemlist)
  }, [itemlist])

  return (
    <>
      <div>
        <div className={style.title}>
          포인트 교환
          <img src="./icons/ticket.svg" alt="ticket" />
        </div>

        <div className={style.cardlist}>
          <div className={style.card}>
            { itemlist.map((item : ItemInfo) => (
              <button type='button' onClick={() => {setClickedinfo(item); setGiftmodal(true)}} key={item.id}>
                <GiftCard productTitle={item.name} image={item.image} point={item.price}/>
              </button>
            ))}
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
            height: '450px',
            backgroundColor: '#c2e9fb',
            margin: 'auto',
            borderRadius: '20px',
          },
        }}
      >
        <BuyGift title={clickedinfo.name} id={clickedinfo.id} price={clickedinfo.price} closemodal={closemodal} />
      </Modal>
    </>
  );
}
