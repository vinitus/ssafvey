import React from 'react';
import style from './SurveyQuestion.module.css';
import ProgressBar from './ProgressBar';
import SurveyBox from '../../UI/Survey/SurveyBox';
import CircleButton from '../../UI/Button/CircleButton';

const currentQuestion = 7;
const totalQuestion = 10;
const progressPercentage = Math.floor((currentQuestion / totalQuestion) * 100);

const title = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.`;

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
        <section>
          <div className="text-20 text-black">
            Progress State: {currentQuestion} / {totalQuestion}
          </div>
          <ProgressBar progressPercentage={progressPercentage} />
        </section>
        <SurveyBox>
          <form>
            <legend>
              <h2 className={style.title}>{title}</h2>
            </legend>
            <fieldset className={style.choices}>
              {choices.map((choice) => {
                return (
                  <label key={choice.order} htmlFor={`choice-${choice.order}`} className={style.choice}>
                    <input type="radio" name="choices" id={`choice-${choice.order}`} className="invisible" />
                    {choice.value}
                  </label>
                );
              })}
            </fieldset>
          </form>
        </SurveyBox>
      </div>
      <section className={style.buttons}>
        <CircleButton>&lt;</CircleButton>
        <CircleButton>&gt;</CircleButton>
      </section>
    </div>
  );
}
