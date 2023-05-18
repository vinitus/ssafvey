import React, { useEffect, useRef } from 'react';
import MyPageSurveyCover from './MyPageSurveyCover';
import MyPageCouponCover from './MyPageCouponCover';
import MyPagePointCover from './MyPagePointCover';
import { CoverData } from '../../types/myPageType';
import style from './MyPageCover.module.css';

interface CoverComponentProps {
  closemodal: () => void;
  sending: boolean;
  contentType: '설문' | '쿠폰' | '포인트';
  content: CoverData;
}

const isMouseEvent = (e: any): e is MouseEvent =>
  e.type === 'mousedown' || e.type === 'mouseend' || e.type === 'mousemove';
const isTouchEvent = (e: any): e is TouchEvent =>
  e.type === 'touchstart' || e.type === 'touchend' || e.type === 'touchmove';

export default function MyPageCover({ closemodal, sending, contentType, content }: CoverComponentProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active: boolean | 'touch' | 'mouse' = false;
    let currentY: number;
    let initialY: number;
    let yOffset = 0;

    const close = () => {
      closemodal();
    };

    const setTranslate = (yPos: number, el: HTMLDivElement) => {
      const y = yPos;
      el.setAttribute('style', `transform : translatey(${y}px)`);
    };

    const dragStart = (e: MouseEvent | TouchEvent) => {
      if (isTouchEvent(e)) {
        initialY = e.touches[0].clientY - yOffset;
        active = 'touch';
      } else if (isMouseEvent(e)) {
        initialY = e.clientY - yOffset;
        active = 'mouse';
      } else throw Error('유효한 이벤트가 아닙니다.');
    };

    const dragEnd = () => {
      if (!sectionRef.current) return;

      if (currentY < 300) {
        setTranslate(0, sectionRef.current);
        yOffset = 0;
      } else if (Math.abs(currentY - initialY) >= 10) {
        close();
      }

      initialY = currentY;

      active = false;
    };

    const drag = (e: MouseEvent | TouchEvent) => {
      if (!sectionRef.current) return;

      if (active) {
        e.preventDefault();
        if (isTouchEvent(e) && active === 'touch') {
          currentY = e.touches[0].clientY - initialY;
          if (currentY < 0) {
            currentY = 0;
          }
        } else if (isMouseEvent(e) && active === 'mouse') {
          currentY = e.clientY - initialY;
          if (currentY < 0) {
            currentY = 0;
          }
        }

        yOffset = currentY;
        setTranslate(currentY, sectionRef.current);
      }
    };

    if (sectionRef.current) {
      // 이벤트가 추가되면서 기본적인 스크롤이 불가
      // 우선 제거해놓은 뒤에 추가기능으로 해보겠습니다
      // sectionRef.current.addEventListener('touchstart', dragStart);
      // sectionRef.current.addEventListener('touchend', dragEnd);
      // sectionRef.current.addEventListener('touchmove', drag);
      // sectionRef.current.addEventListener('mousedown', dragStart);
      // sectionRef.current.addEventListener('mouseup', dragEnd);
      // sectionRef.current.addEventListener('mousemove', drag);
    }
  }, [closemodal]);

  return (
    <section className={!sending ? style.coverWrapper : style.closeWrapper} ref={sectionRef}>
      {contentType === '설문' && (
        <MyPageSurveyCover
          quantity={content.quantity}
          infoType={content.infoType}
          renderingData={content.renderingData}
        />
      )}
      {contentType === '쿠폰' && (
        <MyPageCouponCover
          close={() => closemodal}
          quantity={content.quantity}
          infoType={content.infoType}
          renderingData={content.renderingData}
        />
      )}
      {contentType === '포인트' && (
        <MyPagePointCover
          quantity={content.quantity}
          infoType={content.infoType}
          renderingData={content.renderingData}
        />
      )}
    </section>
  );
}
