export interface SurveyCoverData {
  isDone: boolean;
  title: string;
  description: string;
  organization: string;
  endDate: string;
  targetSurveyParticipants: number;
  surveyParticipants: number;
  lotto: number;
  id: number;
  isAuthor: boolean;
  haveDone: boolean;
}

export interface SurveyQuestionData {
  surveyQuestions: OrderObj[];
}

export interface OrderObj {
  order: number;
  question: string;
  isMultipleChoice: boolean;
  choices?: ChoicesObj[];
}

export interface ChoicesObj {
  order: number;
  choice: string;
}

export interface Answer {
  order: number;
  isMultipleChoice: boolean;
  answer?: string;
  chosenOrder?: number;
}

export interface SurveyPostRequestData {
  surveyId: number;
  answers: Answer[];
}

export interface SurveyListDataObj {
  id: string;
  title: string;
  organization: string;
  createDate: string;
  endDate: string;
}

export interface SurveyListDataObjArr {
  surveylist: SurveyListDataObj[];
}
