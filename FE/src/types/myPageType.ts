/* eslint-disable @typescript-eslint/no-explicit-any */
// 이 파일에서 any는 사용자 타입 가드를 위한 것이에요

export interface SurveyHistory {
  id: number;
  title: string;
  name: string;
  endDate: string;
}

export interface SurveyHistoryObj {
  [day: string]: SurveyHistory[];
}

export interface CoverData {
  quantity: number;
  infoType: '응답한' | '제작한' | '쿠폰' | '포인트';
  renderingData: SurveyHistoryObj | CouponTitle[] | PointHistoryObj;
}

export type CouponTitle = '아이스티' | '커피';

export interface PointHistory {
  point: number;
  pointUsageHistory: string;
  plusMinus: boolean;
  date: string;
}

export interface PointHistoryObj {
  [day: string]: PointHistory[];
}

export function isSurveyHistory(arr: any): arr is SurveyHistoryObj[] {
  return arr[0] !== undefined;
}

export function isCouponTitle(arr: any): arr is CouponTitle[] {
  return arr[0] === '아이스티' || arr[0] === '커피';
}

export function isPointHistory(arr: any): arr is PointHistoryObj[] {
  return arr[0] !== undefined;
}
