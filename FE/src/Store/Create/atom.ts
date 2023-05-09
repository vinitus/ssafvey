import { atom, selector } from 'recoil';
import { getJobs } from '@/Api/member';

export const SurveyTitleState = atom({
  key: 'SurveyTitleState',
  default: '',
});

export const SurveyDescState = atom({
  key: 'SurveyDescState',
  default: '',
});

export interface Question {
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

export const endQuestionNumberState = atom({
  key: 'endQuestionNumberState',
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

export const expirationDateTimeState = atom({
  key: 'expirationDateTimeState',
  default: new Date(),
});

interface Job {
  id: number;
  name: string;
}

export const jobOptionsSelector = selector<Job[]>({
  key: 'jobOptionsSelector/get',
  get: async () => {
    const { jobs } = await getJobs();
    return jobs;
  },
});

interface selectedJob extends Job {
  checked: boolean;
}

export const selectedJobsState = atom<selectedJob[]>({
  key: 'selectedJobsState',
  default: [],
});

const AGES_SELECTION = ['전체', '10대', '20대', '30대', '40대', '50대', '60대'];

export const agesSelectionState = atom({
  key: 'agesSelectionState',
  default: Array.from({ length: AGES_SELECTION.length }, (_, i) => {
    return { id: i, name: AGES_SELECTION[i], checked: false };
  }),
});

export const requiredPeopleNumberState = atom({
  key: 'requiredPeopleNumberState',
  default: 1,
});

export const amountOfPointState = atom({
  key: 'amountOfPointState',
  default: 500,
});
