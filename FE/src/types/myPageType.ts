export interface SurveyHistory {
  title: string;
  author: string;
}

export interface SurveyHistoryObj {
  day: string;
  history: SurveyHistory[];
}

export interface CoverData {
  quantity: number;
  infoType: '응답한' | '제작한' | '쿠폰' | '포인트';
  renderingData: SurveyHistoryObj[] | CouponTitle[] | PointHistoryObj[];
}

export type CouponTitle = '아이스티' | '커피';

export interface PointHistory {
  pointHistoryType: string;
  pointUsed: number;
}

export interface PointHistoryObj {
  day: string;
  history: PointHistory[];
}

export function isSurveyHistory(arr: any): arr is SurveyHistoryObj[] {
  return arr[0].day !== undefined;
}

export function isCouponTitle(arr: any): arr is CouponTitle[] {
  return arr[0] === '아이스티' || arr[0] === '커피';
}

export function isPointHistory(arr: any): arr is PointHistoryObj[] {
  return arr[0].day !== undefined;
}
