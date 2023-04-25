import React from 'react';
import style from './SurveyQuestion.module.css';

const choices = [
  { order: 1, value: `This is choice 1` },
  { order: 2, value: `This is choice 2` },
  { order: 3, value: `This is choice 3` },
  { order: 4, value: `This is choice 4` },
  { order: 5, value: `This is choice 5` },
];

const currentQuestion = 4;
const totalQuestion = 10;
const progressPercentage = (currentQuestion / totalQuestion) * 100;

export default function SurveyQuestion() {
  return (
    <div className={style.sectionsWrapper}>
      <div className={style.upperSectionsWrapper}>
        <section className={style.progress}>
          <div className="w-full">
            <label htmlFor="file">
              <div>Progress State:</div>
              <div className={style.progressContainer}>
                <div className={style.progressBar} style={{ width: `${progressPercentage}%` }}>
                  {progressPercentage}%
                </div>
              </div>
            </label>
          </div>
        </section>
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
