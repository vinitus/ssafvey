import React from 'react';
import style from './SurveyCover.module.css';

// TODO: 상태관리 해줘야함.
const descArr = [
  { key: '조사 기관', value: `${'SSAFY'}` },
  { key: '설문 기간', value: `${'2023.04.10'} ~ ${'2023.04.13'}` },
  { key: '참여 인원', value: `${100}명` },
  { key: '포인트', value: `${200}` },
];

const surveyState = {
  title: 'Survey Title',
  desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure molestias reprehenderit omnis
    quod ipsa inventore quisquam iusto sunt unde? Voluptatibus labore quas a hic quibusdam molestiae
    molestias laudantium sit.`,
  creator: 'SSAFY',
  dueDate: '2023.04.10 ~ 2023.04.13',
  headCount: '100명',
  point: '200',
};

declare global {
  interface Window {
    Kakao : any;
  }
}

export default function SurveyCover() { 

  const kakaoshare = () => {
    // window.Kakao.Share.sendDefault({
    //   objectType: 'text',
    //   text:
    //     '설문조사에 참여하고 포인트를 모아보세요!',
    //   link: {
    //     mobileWebUrl: 'http://localhost:5173/survey/1',
    //     webUrl: 'http://localhost:5173/survey/1',
    //   },
    // });

    window.Kakao.Share.sendDefault({
      objectType : 'feed',
      content : {
        title : surveyState.title,
        description : surveyState.desc,
        imageUrl : 'http://k.kakaocdn.net/dn/rDzHQ/btsdi3qPQnW/nPUA8K0ihLCCakUjLcQEu0/kakaolink40_original.png',
        link : {
          mobileWebUrl: 'http://localhost:5173/survey/1',
          webUrl: 'http://localhost:5173/survey/1',
        },
      },
      buttons : [
        {
          title : '설문조사 바로가기',
          link : {
            mobileWebUrl: 'http://localhost:5173/survey/1',
            webUrl: 'http://localhost:5173/survey/1',
          },
        }
      ]
    })
  }

  return (
    <div className={style.coverBackgroundImg}>
      <div className={style.coverBackgroundFilter}>
        <div className={style.sectionWrapper}>
          <div>
            <section className={style.descBox}>
              <img src="/icons/about-circle-outline.svg" alt="about-icon" />
              <p>{surveyState.desc}</p>
            </section>
            <section className={style.stateBox}>
              {descArr.map((desc) => (
                <dl className={style.childInlineBlock} key={desc.key}>
                  <dt className={style.descTitle}>{desc.key}</dt>
                  <dd>{desc.value}</dd>
                </dl>
              ))}
            </section>
          </div>
          <div>
            <section className={style.buttons}>
              <button type="button">미참여</button>
              <button type="button" className={style.startSurveyBtn}>
                설문 참여
              </button>
              <button type="button" onClick={kakaoshare}>
                <img id="sharing-btn" src="/icons/share.svg" alt="share-icon" />
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
