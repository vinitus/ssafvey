import { atom } from 'recoil';

type QuestionType = 'multiple' | 'essay';

export const currentQuestionNumberState = atom({
  key: 'currentQuestionNumberState',
  default: 1,
});

export const currentQuestionTypeState = atom<QuestionType>({
  key: 'currentQuestionTypeState',
  default: 'multiple',
});
