export interface Question {
  id: number;
  title: string;
  type: QuestionType;
  answers: Answer[];
}

export type QuestionType = 'multiple' | 'essay';

export interface Answer {
  id: number;
  value: string;
}

export interface Job {
  id: number;
  name: string;
}

export interface selectedJob extends Job {
  checked: boolean;
}

export interface MakeSurvey {
  문항: string;
  질문: string;
  '주관식/객관식': string | null;
  '객관식 보기 1': string | null;
  '객관식 보기 2': string | null;
  '객관식 보기 3': string | null;
  '객관식 보기 4': string | null;
  '객관식 보기 5': string | null;
}
