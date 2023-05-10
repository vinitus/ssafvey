export interface SurveyCoverData {
  isDone: boolean;
  title: string;
  description: string;
  creator: string;
  endDate: string;
  targetSurveyParticipants: number;
  surveyParticipants: number;
  lotto: number;
}

export interface SurveyQuestionData {
  surveyQuestions: OrderObj[];
}

export interface OrderObj {
  order: string;
  question: string;
  isMultipleChoice: string;
  choices: ChoicesObj[];
}

export interface ChoicesObj {
  order: number;
  choice: string;
}
