import React from 'react';
import MyPageSurveyCover from './MyPageSurveyCover';
import MyPageCouponCover from './MyPageCouponCover';
import MyPagePointCover from './MyPagePointCover';
import { CoverData } from '../../types/myPageType';
import style from './MyPageCover.module.css';

interface CoverComponentProps {
  contentType: '설문' | '쿠폰' | '포인트';
  content: CoverData;
}

export default function MyPageCover({ contentType, content }: CoverComponentProps) {
  return (
    <section className={style.coverWrapper}>
      {contentType === '설문' && (
        <MyPageSurveyCover
          quantity={content.quantity}
          infoType={content.infoType}
          renderingData={content.renderingData}
        />
      )}
      {contentType === '쿠폰' && (
        <MyPageCouponCover
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
