import React from 'react';
import style from './Survey.module.css';

const descArr = [
  { key: '조사 기관', value: `${'SSAFY'}` },
  { key: '설문 기간', value: `${'2023.04.10'} ~ ${'2023.04.13'}` },
  { key: '참여 인원', value: `${100}명` },
  { key: '포인트', value: `${200}` },
];

const stateMap = {
  '설문 제목': 'Survey Title',
  '설문 설명': `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure molestias reprehenderit omnis
  quod ipsa inventore quisquam iusto sunt unde? Voluptatibus labore quas a hic quibusdam molestiae
  molestias laudantium sit.`,
  '조사 기관': 'SSAFY',
  '설문 기간': '2023.04.10 ~ 2023.04.13',
  '참여 인원': '100명',
  포인트: '200',
};

export default function Survey() {
  return (
    <article className="text-white">
      <header className={style.header}>
        <h1 className={style.title}>{stateMap['설문 제목']}</h1>
        <div className={style.mainDesc}>
          <span className={style.childInlineBlock}>
            <img src="/icons/house.svg" alt="house-icon" className="px-5" />
            <h2 className="text-[10px]">{stateMap['조사 기관']}</h2>
          </span>
          <span className={style.childInlineBlock}>
            <img src="/icons/clock.svg" alt="clock-icon" className="px-5" />
            <h2 className="text-[10px]">{stateMap['설문 기간']}</h2>
          </span>
        </div>
      </header>
      <main className={style.coverBackgroundImg}>
        <div className={style.coverBackgroundFilter}>
          <div className={style.sectionWrapper}>
            <section className={style.descBox}>
              <img src="/icons/about-circle-outline.svg" alt="about-icon" />
              <p>{stateMap['설문 설명']}</p>
            </section>
            <div />
            <section className={style.stateBox}>
              {descArr.map((desc) => (
                <dl className={style.childInlineBlock} key={desc.key}>
                  <dt className={style.descTitle}>{desc.key}</dt>
                  <dd>{desc.value}</dd>
                </dl>
              ))}
            </section>
            <section className={style.buttons}>
              <button type="button">미참여</button>
              <button type="button" className={style.startSurveyBtn}>
                설문 참여
              </button>
              <button type="button">
                <img src="/icons/share.svg" alt="share-icon" />
              </button>
            </section>
          </div>
        </div>
      </main>
    </article>
  );
}
