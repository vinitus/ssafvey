import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import style from './CreateSurveyQuestion.module.css';
import SurveyBox from '../../../UI/Survey/SurveyBox';
import CreateSurveyForm from './CreateSurveyForm';
import CreateSurveyAnswerList from './CreateSurveyAnswerList';
import CreateSurveyAnswerForm from './CreateSurveyAnswerForm';
import CreateSurveyAddAnswerButton from './CreateSurveyAddAnswerButton';
import NavigationButtons from './NavigationButtons';
import getNthFromLocation from '@/Util/Location/getNthFromUrl';
import { refactoringQuestionsState } from '@/Store/Create/atom';

export default function CreateSurveyQuestion() {
  const location = useLocation();

  const questionsIdx = getNthFromLocation(location, 2) - 1;

  const [refactoringQuestions, setRefactoringQuestions] = useRecoilState(refactoringQuestionsState);

  const needNewQuestion = questionsIdx >= refactoringQuestions.length;

  useEffect(() => {
    if (needNewQuestion) {
      setRefactoringQuestions((prev) => {
        const newQuestions = [
          ...prev,
          {
            order: questionsIdx + 1,
            question: '',
            isMultipleChoice: true,
            choices: [],
          },
        ];
        return newQuestions;
      });
    }
  }, [questionsIdx, needNewQuestion, setRefactoringQuestions]);

  return (
    <div className={style.sections}>
      <SurveyBox>
        <p className="descFont text-right">* 문항 정보를 입력해주세요!</p>
        {!needNewQuestion && (
          <>
            <CreateSurveyForm idx={questionsIdx} />
            <CreateSurveyAnswerList idx={questionsIdx} />
            <CreateSurveyAnswerForm idx={questionsIdx} />
            <CreateSurveyAddAnswerButton idx={questionsIdx} key={`answer=${questionsIdx}`} />
          </>
        )}
      </SurveyBox>
      <NavigationButtons idx={questionsIdx} />
    </div>
  );
}
