import React from 'react';
import style from './MyPageCover.module.css';

type History = {
  title: string;
  author: string;
};

interface HistoryObj {
  day: string;
  history: History[];
}

interface Props {
  quantity: number;
  infoType: '응답한' | '제작한';
  historyObj: HistoryObj[];
}

export default function MyPageCover({ quantity, infoType, historyObj }: Props) {
  return (
    <div className={style.coverWrapper}>
      <div className={style.coverHeaderWrapper}>
        <div className={style.coverHeaderTitle}>{`${infoType} 설문`}</div>
        <div className={style.coverHeaderQuantity}>{quantity}</div>
      </div>
      <div className={style.historyWrapper}>
        {historyObj.map((history: HistoryObj, idx: number) =>
          idx + 1 < historyObj.length ? (
            <div className={style.historyBlockWithDay} key={history.day}>
              <div className={style.historyDay}>{history.day}</div>
              {history.history.map(({ title, author }) => (
                <div className={style.historyBlock} key={title + author}>
                  <div className={style.historyTitle}>{title}</div>
                  <div className={style.historyAuthorWrapper}>
                    <img src="/icons/home.svg" alt="home" />
                    <div className={style.historyAuthor}>{author}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div key={history.day}>
              <div className={style.historyDay}>{history.day}</div>
              {history.history.map(({ title, author }) => (
                <div className={style.historyBlock} key={title + author}>
                  <div className={style.historyTitle}>{title}</div>
                  <div className={style.historyAuthorWrapper}>
                    <img src="/icons/home.svg" alt="home" />
                    <div className={style.historyAuthor}>{author}</div>
                  </div>
                </div>
              ))}
            </div>
          ),
        )}
      </div>
    </div>
  );
}
