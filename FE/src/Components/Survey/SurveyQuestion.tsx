import React from 'react';
import style from './SurveyQuestion.module.css';
import SurveyProgressState from './SurveyProgressState';

const choices = [
  { order: 1, value: `This is choice 1` },
  { order: 2, value: `This is choice 2` },
  { order: 3, value: `This is choice 3` },
  { order: 4, value: `This is choice 4` },
  { order: 5, value: `This is choice 5` },
];

export default function SurveyQuestion() {
  return (
    <div className={style.sectionsWrapper}>
      <div className={style.upperSectionsWrapper}>
        <SurveyProgressState />
        <section className={style.question}>
          <form>
            <legend>
              <h2 className={style.title}>Question Title</h2>
            </legend>
            <fieldset className={style.choices}>
              {choices.map((choice) => {
                return (
                  <div key={choice.order} className={style.choice}>
                    <label htmlFor={`choice-${choice.order}`}>
                      <input type="radio" name="choices" id={`choice-${choice.order}`} />
                      {choice.value}
                    </label>
                  </div>
                );
              })}
            </fieldset>
          </form>
        </section>
      </div>
      <section className={style.buttons}>
        <button type="button">
          <img src="/icons/left-arrow-btn.svg" alt="left-arrow-btn" />
        </button>
        <button type="button">
          <img src="/icons/right-arrow-btn.svg" alt="right-arrow-btn" />
        </button>
      </section>
    </div>
  );
}
