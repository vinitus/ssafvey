import React, { useEffect, useRef } from 'react';
import style from './Lotto.module.css';
import { postItemlist } from '../../Api/coupon';
import { queryClient } from '@/router';

interface Props {
  closemodal: () => void;
  id: number;
}

export default function Lotto({ closemodal, id }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const WIDTH = 190;
  const HEIGHT = 90;

  useEffect(() => {
    const token = queryClient.getQueryData(['accessToken']) as string;

    const canvas = canvasRef.current;
    const button = buttonRef.current;

    if (canvas && button) {
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      const initCanvas = () => {
        const image = new Image();
        image.src = './icons/ziggle2.gif';
        image.onload = () => {
          context.drawImage(image, 0, 0);
        };
        context.beginPath();
        context.roundRect(0, 0, WIDTH, HEIGHT, 8);
        context.stroke();
        context.fill();
      };

      initCanvas();

      const buylotto = () => {
        async function ordernew() {
          await postItemlist(id, token);
        }
        ordernew();
      };
      if (token) {
        button.addEventListener('click', buylotto);
      }
    }
  }, [id]);

  return (
    <div>
      <div className={style.exitbtn}>
        <button type="button" className="flex" onClick={() => closemodal()}>
          X
        </button>
      </div>
      <div className={style.chancetitle}>CHANCE</div>
      <div className={style.ticket}>
        <img src="./icons/lotto.svg" alt="lotto" className={style.ticketimg} />
        <canvas ref={canvasRef} className={style.canvas} id="canvas" />
      </div>
      <div className={style.subtitle}>구매한 상품은 마이페이지에서 확인하세요</div>
      <div className="flex justify-center">
        <button type="button" className={style.openbtn} ref={buttonRef}>
          구매하기
        </button>
      </div>
    </div>
  );
}
