import React, { useRef, useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { inputOpenState, plusButtonOpenState, refactoringQuestionsState } from '../../../Store/Create/atom';
import style from './CreateSurveyAnswerForm.module.css';

const START_NO = 1;

interface Props {
  idx: number;
}

export default function CreateSurveyAnswerForm({ idx }: Props) {
  const [refactoringQuestions, setRefactoringQuestions] = useRecoilState(refactoringQuestionsState);

  const currentQuestionType = refactoringQuestions[idx].isMultipleChoice ? 'multiple' : 'essay';

  const [inputOpen, setInputOpen] = useRecoilState(inputOpenState);

  const setPlusButtonOpen = useSetRecoilState(plusButtonOpenState);

  const id = useRef(START_NO); // key prop으로 사용할 id

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputOpen) {
      inputRef.current?.focus();
    }
  }, [inputOpen]);

  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue: string = e.currentTarget.answer.value;
    const choice = { order: id.current, choice: inputValue };

    setRefactoringQuestions((prev) => {
      const newQuestions = [
        ...prev.slice(0, idx),
        { ...prev[idx], choices: [...prev[idx].choices, choice] },
        ...prev.slice(idx + 1),
      ];
      return newQuestions;
    });

    id.current += 1;
    setInputOpen(false);
    setPlusButtonOpen(true);
  };

  return (
    <div>
      {currentQuestionType === 'multiple' && inputOpen && (
        <form onSubmit={handleAnswerSubmit}>
          <label htmlFor="answer">
            <input
              ref={inputRef}
              type="text"
              required
              id="answer"
              className={style.titleInput}
              style={{ width: 'calc(100% - 52px)' }}
            />
            <button type="submit" className={style.addButton}>
              추가
            </button>
          </label>
        </form>
      )}
    </div>
  );
}
