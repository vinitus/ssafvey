import React from 'react';
import { useRecoilState } from 'recoil';
import { refactoringQuestionsState } from '../../../Store/Create/atom';
import style from './CreateSurveyForm.module.css';

interface Props {
  idx: number;
}

export default function CreateSurveyForm({ idx }: Props) {
  const [refactoringQuestions, setRefactoringQuestions] = useRecoilState(refactoringQuestionsState);

  const title = refactoringQuestions[idx].question;

  const type = refactoringQuestions[idx].isMultipleChoice ? 'multiple' : 'essay';

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRefactoringQuestions((prev) => {
      const newQuestions = [...prev.slice(0, idx), { ...prev[idx], question: e.target.value }, ...prev.slice(idx + 1)];
      return newQuestions;
    });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRefactoringQuestions((prev) => {
      const tempChoices = e.target.value === 'multiple' ? refactoringQuestions[idx].choices : [];
      const newQuestions = [
        ...prev.slice(0, idx),
        { ...prev[idx], isMultipleChoice: e.target.value === 'multiple', choices: tempChoices },
        ...prev.slice(idx + 1),
      ];

      return newQuestions;
    });
  };

  return (
    <div role="form">
      <label htmlFor="title">
        <h3 className="titleFont my-5">{idx + 1}번 문항</h3>
        <input type="text" value={title} onChange={handleTitleChange} id="title" className={style.titleInput} />
      </label>
      <label htmlFor="questionType">
        <h3 className="titleFont my-5">유형</h3>
        <select value={type} onChange={handleTypeChange} id="questionType" className={style.titleInput}>
          <option value="multiple">객관식</option>
          <option value="essay">주관식</option>
        </select>
      </label>
    </div>
  );
}
