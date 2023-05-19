/* eslint-disable no-param-reassign */
import React, { createRef } from 'react';
import style from './SurveyBox.module.css';
import { ChoicesObj } from '@/types/surveyType';
import { AnswerObj } from '@/Components/Survey/hooks/useSurveyQuestionDataParser';
import { go, map } from '@/module/fx';

interface Props {
  children: React.ReactNode;
}

interface AnswerProps {
  clickstate: (num: number, status: boolean) => void;
  isMultipleChoice: boolean;
  choices: ChoicesObj[] | undefined;
  order: number;
  choiceObjState: AnswerObj;
  choiceStateDispatcher: React.Dispatch<React.SetStateAction<AnswerObj>>;
}

function SurveyBox({ children }: Props) {
  return <section className={style.question}>{children}</section>;
}

function isNumber(a: string) {
  return Number.isNaN(Number(a)) ? a : Number(a);
}

function Question({ children }: { children: string }) {
  return <h2 className={style.title}>{children}</h2>;
}

const orderSort = (arr: ChoicesObj[]) => {
  const newArr = [...arr];
  newArr.sort((a, b) => a.order - b.order);
  return newArr;
};

function Answer({ clickstate, isMultipleChoice, choices, order, choiceObjState, choiceStateDispatcher }: AnswerProps) {
  if (choices) choices = orderSort(choices);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const [choiceType, questionOrder, answerOrder] = go(id.split('-'), map(isNumber));

    if (choiceType === 'choices')
      choiceStateDispatcher((prev) => {
        prev[questionOrder] = answerOrder;
        if (value.length <= 0) clickstate(order, false);
        else clickstate(order, true);
        return prev;
      });
    else
      choiceStateDispatcher((prev) => {
        prev[questionOrder] = value;
        if (value.length <= 0) clickstate(order, false);
        else clickstate(order, true);
        return prev;
      });
  };

  const fieldChangeHandler = (e: React.ChangeEvent<HTMLFieldSetElement>) => {
    if (e.target.tagName === 'INPUT') {
      inputChangeHandler(e as unknown as React.ChangeEvent<HTMLInputElement>);
    }
  };

  if (isMultipleChoice && choices)
    return (
      <MultipleAnswer
        click={() => {
          clickstate(order, true);
        }}
        choices={choices}
        order={order}
        answer={choiceObjState}
        dispatcher={choiceStateDispatcher}
      />
    );

  return (
    <fieldset className={style.choices} onChange={fieldChangeHandler}>
      <SingleAnswer order={order} />
    </fieldset>
  );
}

function MultipleAnswer({
  click,
  order,
  choices,
  answer,
  dispatcher,
}: {
  click: () => void;
  order: number;
  choices: ChoicesObj[];
  answer: AnswerObj;
  dispatcher: React.Dispatch<React.SetStateAction<AnswerObj>>;
}) {
  const refArr: React.RefObject<HTMLLabelElement>[] = [];
  for (let i = 0; i < choices.length; i += 1) {
    refArr.push(createRef());
  }

  const multiChoiceHadler = (e: React.MouseEvent<HTMLFieldSetElement>) => {
    if (e.target instanceof Element) {
      const { target } = e;
      const { id } = target;
      const [, questionOrder, answerOrder] = id.split('-');
      const preAnswer = answer[order] as number;
      dispatcher((prev) => {
        prev[Number(questionOrder)] = Number(answerOrder);
        return prev;
      });
      if (preAnswer) {
        const preRef = refArr[preAnswer - 1];
        if (preRef.current) preRef.current.className = style.choice;
      }
      const answerRef = refArr[Number(answerOrder) - 1];
      if (answerRef.current) {
        answerRef.current.className = style.choiceClick;
        click();
      }
    }
  };

  return (
    // 안에 인풋 잇음!
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <fieldset className={style.choices} onClick={multiChoiceHadler}>
      {choices.map((choice, idx) => {
        return (
          <label
            key={`${order}-${choice.order}`}
            htmlFor={`choices-${order}-${choice.order}`}
            className={style.choice}
            ref={refArr[idx]}
            id={`choices-${order}-${choice.order}`}
          >
            <input type="radio" name="choices" id={`choices-${order}-${choice.order}`} className="invisible" />
            {choice.choice}
          </label>
        );
      })}
    </fieldset>
  );
}

function SingleAnswer({ order }: { order: number }) {
  return <input type="text" name="choices" id={`choice-${order}-0`} className={style.choice} />;
}

SurveyBox.Question = Question;
SurveyBox.Answer = Answer;

export default SurveyBox;
