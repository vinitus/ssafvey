import React from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { currentQuestionTypeState, answersState } from '../../Store/Create/atom';
import style from './CreateSurveyAnswerList.module.css';

export default function CreateSurveyAnswerList() {
  const currentQuestionType = useRecoilValue(currentQuestionTypeState);

  const [answers, setAnswers] = useRecoilState(answersState);

  const handleDeleteBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const targetId = Number(target.parentElement?.dataset.id);
    setAnswers((prev) => prev.filter((answer) => answer.id !== targetId));
  };

  return (
    <section className="mt-5">
      {currentQuestionType === 'multiple' && (
        <ol>
            {answers.map((answer) => (
              <li key={answer.id} data-id={answer.id} className={style.answer}>
                <p className="descFont inline-block">{answer.value}</p>
                <button type="button" onClick={handleDeleteBtnClick} className={style.deleteButton}>
                  X
                </button>
              </li>
            ))}
          </ol>
      )}
    </section>
  );
}
