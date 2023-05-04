import { atom } from 'recoil';

interface Question {
  id: number;
  title: string;
  type: QuestionType;
  answers: Answer[];
}

export const questionsState = atom<Question[]>({
  key: 'questionsState',
  default: [],
});

export const currentQuestionNumberState = atom({
  key: 'currentQuestionNumberState',
  default: 1,
});

export const currentQuestionTitleState = atom({
  key: 'currentQuestionTitleState',
  default: '',
});

type QuestionType = 'multiple' | 'essay';

export const currentQuestionTypeState = atom<QuestionType>({
  key: 'currentQuestionTypeState',
  default: 'multiple',
});

interface Answer {
  id: number;
  value: string;
}

export const answersState = atom<Answer[]>({
  key: 'answersState',
  default: [],
});

export const inputOpenState = atom({
  key: 'inputOpenState',
  default: false,
});

export const plusButtonOpenState = atom({
  key: 'plusButtonOpenState',
  default: true,
});

export const inputRefState = atom({
  key: 'inputRefState',
  default: null,
});
