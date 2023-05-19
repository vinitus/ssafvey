import React, { useEffect, useRef, useState } from 'react';
import style from './Lotto.module.css';
import { queryClient } from '../../router';
import { putLotto } from '../../Api/member';

interface Props {
  closemodal: () => void;
}

export default function Lotto({ closemodal }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const WIDTH = 190;
  const HEIGHT = 90;
  const ERASE_RADIUS = 5;

  const [point, setPoint] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const button = buttonRef.current;

    async function Lotto() {
      const accessToken = queryClient.getQueryData(['accessToken']) as string;
      const data = await putLotto(accessToken);
      setPoint(data);
    }

    Lotto();

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

      let isDrawing = false;

      const handleDrawingStart = () => {
        if (!isDrawing) {
          isDrawing = true;
        }
      };

      const handleDrawing = (e: MouseEvent) => {
        if (isDrawing) {
          const { offsetX, offsetY } = e;
          context.save();
          context.globalCompositeOperation = 'destination-out';
          context.beginPath();
          context.arc(offsetX, offsetY, ERASE_RADIUS, 0, 2 * Math.PI, false);
          context.fill();
          context.closePath();
          context.restore();
        }
      };

      const handleDrawingEnd = () => {
        if (isDrawing) {
          isDrawing = false;
        }
      };

      const handleTouchStart = (e: TouchEvent) => {
        if (!isDrawing) {
          e.preventDefault();
          isDrawing = true;

          const touch = e.touches[0];
          const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY,
          });
          canvas.dispatchEvent(mouseEvent);
        }
      };

      const handleTouch = (e: TouchEvent) => {
        if (isDrawing) {
          e.preventDefault();

          const touch = e.touches[0];
          const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY,
          });
          canvas.dispatchEvent(mouseEvent);
        }
      };

      const handleTouchEnd = (e: TouchEvent) => {
        if (isDrawing) {
          isDrawing = false;

          e.preventDefault();
          const mouseEvent = new MouseEvent('mouseup', {});
          canvas.dispatchEvent(mouseEvent);
        }
      };

      const openonce = () => {
        context.clearRect(0, 0, WIDTH, HEIGHT);
      };

      canvas.addEventListener('mousedown', handleDrawingStart);
      canvas.addEventListener('mousemove', handleDrawing);
      canvas.addEventListener('mouseup', handleDrawingEnd);

      canvas.addEventListener('touchstart', handleTouchStart);
      canvas.addEventListener('touchmove', handleTouch);
      canvas.addEventListener('touchend', handleTouchEnd);

      button.addEventListener('click', openonce);
    }
  }, []);

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
        <div className={style.result}>
          <div className={style.resulttitle}>{point}원</div>
          <div className={style.resultsub}>당첨 축하합니다</div>
        </div>
        <canvas ref={canvasRef} className={style.canvas} id="canvas" />
      </div>
      <div className={style.subtitle}>위 쿠폰을 긁어주세요.</div>
      <div className="flex justify-center">
        <button type="button" className={style.openbtn} ref={buttonRef}>
          바로 열기
        </button>
      </div>
    </div>
  );
}
