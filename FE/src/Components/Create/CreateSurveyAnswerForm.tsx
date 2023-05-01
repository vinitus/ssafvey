import React, { useRef } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { inputOpenState, answersState, plusButtonOpenState } from '../../Store/Create/atom';
import style from './CreateSurveyAnswerForm.module.css';

const START_NO = 1;

export default function CreateSurveyAnswerForm() {
  const [inputOpen, setInputOpen] = useRecoilState(inputOpenState);
  const setAnswers = useSetRecoilState(answersState);
  const setPlusButtonOpen = useSetRecoilState(plusButtonOpenState);
  const id = useRef(START_NO); // key prop으로 사용할 id

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue: string = e.currentTarget.answer.value;
    const answer = { id: id.current, value: inputValue };
    setAnswers((prev) => [...prev, answer]);
    id.current += 1;
    setInputOpen(false);
    setPlusButtonOpen(true);
  };

  return (
    <div>
      {inputOpen && (
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
