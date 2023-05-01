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
