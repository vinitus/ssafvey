import React from 'react';
import { useRecoilState } from 'recoil';
import { refactoringQuestionsState } from '../../../Store/Create/atom';
import style from './CreateSurveyAnswerList.module.css';

interface Props {
  idx: number;
}

export default function CreateSurveyAnswerList({ idx }: Props) {
  const [refactoringQuestions, setRefactoringQuestions] = useRecoilState(refactoringQuestionsState);

  const currentQuestionType = refactoringQuestions[idx].isMultipleChoice ? 'multiple' : 'essay';

  const answers = refactoringQuestions[idx].choices;

  const handleDeleteBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const targetId = Number(target.parentElement?.dataset.id);

    setRefactoringQuestions((prev) => {
      const newQuestions = [
        ...prev.slice(0, idx),
        {
          ...prev[idx],
          choices: prev[idx].choices.filter((answer) => answer.order !== targetId),
        },
        ...prev.slice(idx + 1),
      ];
      return newQuestions;
    });
  };

  return (
    <section className="mt-5">
      {currentQuestionType === 'multiple' && (
        <ol>
          {answers.map((answer) => (
            <li key={answer.order} data-id={answer.order} className={style.answer}>
              <p className="descFont inline-block">{answer.choice}</p>
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
