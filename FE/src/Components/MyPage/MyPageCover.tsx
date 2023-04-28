import React from 'react';
import MyPageSurveyCover from './MyPageSurveyCover';
import MyPageCouponCover from './MyPageCouponCover';
import { CoverData } from '../../types/myPageType';
import style from './MyPageCover.module.css';

interface CoverComponentProps {
  contentType: '설문' | '쿠폰';
  content: CoverData;
}

export default function MyPageCover({ contentType, content }: CoverComponentProps) {
  return (
    <section className={style.coverWrapper}>
      {contentType === '설문' ? (
        <MyPageSurveyCover quantity={content.quantity} infoType={content.infoType} data={content.data} />
      ) : (
        <MyPageCouponCover quantity={content.quantity} infoType={content.infoType} data={content.data} />
      )}
    </section>
  );
}
