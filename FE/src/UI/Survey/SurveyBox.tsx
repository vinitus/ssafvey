import React from 'react';
import style from './SurveyBox.module.css';
import { ChoicesObj } from '@/types/surveyType';
import { AnswerObj } from '@/Components/Survey/hooks/useSurveyQuestionDataParser';
import { go, map, curry } from '@/module/fx';

interface Props {
  children: React.ReactNode;
}

interface AnswerProps {
  isMultipleChoice: boolean;
  choices: ChoicesObj[] | undefined;
  order: number;
  choiceObjState: string | number;
  choiceStateDispatcher: React.Dispatch<React.SetStateAction<AnswerObj>>;
}

function SurveyBox({ children }: Props) {
  return <section className={style.question}>{children}</section>;
}

function isNumber(a: string) {
  return Number.isNaN(Number(a)) ? a : Number(a);
}

function Question({ children }) {
  return <h2 className={style.title}>{children}</h2>;
}

function Answer({ isMultipleChoice, choices, order, choiceObjState, choiceStateDispatcher }: AnswerProps) {
  let renderComponent = <SingleAnswer order={order} />;
  if (isMultipleChoice && choices && typeof choiceObjState === 'number')
    renderComponent = <MultipleAnswer choices={choices} order={order} />;

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const [choiceType, questionOrder, answerOrder] = go(id.split('-'), map(isNumber));

    if (choiceType === 'choices')
      choiceStateDispatcher((prev) => {
        prev[questionOrder] = answerOrder;
        return prev;
      });
    else
      choiceStateDispatcher((prev) => {
        prev[questionOrder] = value;
        return prev;
      });
  };

  const fieldChangeHandler = (e: React.ChangeEvent<HTMLFieldSetElement>) => {
    if (e.target.tagName === 'INPUT') {
      inputChangeHandler(e as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <fieldset className={style.choices} onChange={fieldChangeHandler}>
      {renderComponent}
    </fieldset>
  );
}

function MultipleAnswer({ order, choices, answer }: { order: number; choices: ChoicesObj[]; answer: number }) {
  return (
    <>
      {choices.map((choice) => {
        return (
          <label key={choice.order} htmlFor={`choices-${order}-${choice.order}`} className={style.choice}>
            <input type="radio" name="choices" id={`choices-${order}-${choice.order}`} className="invisible" />
            {choice.choice}
          </label>
        );
      })}
    </>
  );
}

function SingleAnswer({ order, answer }: { order: number; answer: string }) {
  return <input type="text" name="choices" id={`choice-${order}-0`} className={style.choice} />;
}

SurveyBox.Question = Question;
SurveyBox.Answer = Answer;

export default SurveyBox;
