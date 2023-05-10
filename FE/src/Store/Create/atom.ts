import { atom, selector } from 'recoil';
import { getJobs } from '@/Api/member';
import { Question, QuestionType, Answer, Job, selectedJob } from '@/types/createSurveyType'

export const SurveyTitleState = atom({
  key: 'SurveyTitleState',
  default: '',
});

export const SurveyDescState = atom({
  key: 'SurveyDescState',
  default: '',
});

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

export const currentQuestionTypeState = atom<QuestionType>({
  key: 'currentQuestionTypeState',
  default: 'multiple',
});

export const answersState = atom<Answer[]>({
  key: 'answersState',
  default: [],
});

export const surveyQuestionsSelector = selector({
  key: 'surveyQuestionsSelector',
  get: ({ get }) => {
    const questions = get(questionsState);
    const reformQuestions = questions.map((question) => {
      const isMultipleChoice = question.type === 'multiple' ? true : false;
      if (isMultipleChoice) {
        return {
          order: question.id,
          question: question.title,
          isMultipleChoice: isMultipleChoice,
          choices: question.answers.map((answer) => {
            return {
              order: answer.id,
              choice: answer.value,
            };
          }),
        };
      }
      return {
        order: question.id,
        question: question.title,
        isMultipleChoice: isMultipleChoice,
      };
    });
    return reformQuestions;
  },
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

export const surveyClientState = atom({
  key: 'surveyClientState',
  default: '',
});

export const expirationDateTimeState = atom({
  key: 'expirationDateTimeState',
  default: new Date(),
});


export const jobOptionsSelector = selector<Job[]>({
  key: 'jobOptionsSelector/get',
  get: async () => {
    const { jobs } = await getJobs();
    return jobs;
  },
});

export const selectedJobsState = atom<selectedJob[]>({
  key: 'selectedJobsState',
  default: [],
});

export const filteredJobsIdSelector = selector<number[]>({
  key: 'filteredJobsIdSelector',
  get: ({ get }) => {
    const selectedJobs = get(selectedJobsState);
    return selectedJobs.filter((job) => job.checked).map((job) => job.id);
  },
});

const AGES_SELECTION = ['전체', '10대', '20대', '30대', '40대', '50대', '60대'];

export const agesSelectionState = atom({
  key: 'agesSelectionState',
  default: Array.from({ length: AGES_SELECTION.length }, (_, i) => {
    return { id: i, name: AGES_SELECTION[i], checked: false };
  }),
});

export const filteredAgesRangeSelector = selector({
  key: 'filteredAgesRangeSelector',
  get: ({ get }) => {
    const selectedAges = get(agesSelectionState);
    const selectedAgesId = selectedAges.filter((age) => age.checked).map((age) => age.id);
    if (selectedAgesId.includes(0)) {
      return [{ min: 10, max: 69 }];
    }
    const range = selectedAgesId.map((ageId) => {
      return { min: ageId * 10, max: ageId * 10 + 9 };
    });
    return range;
  },
});

export const targetGenderState = atom({
  key: 'targetGenderState',
  default: 'ALL',
});

export const requiredPeopleNumberState = atom({
  key: 'requiredPeopleNumberState',
  default: 1,
});

export const amountOfPointState = atom({
  key: 'amountOfPointState',
  default: 500,
});
