import React, { useState } from 'react';
import { getList } from '@/Api/survey';
import { SurveyListDataObjArr } from '@/types/surveyType';

export function useSearchDataControl(
  data: SurveyListDataObjArr,
): [
  string,
  SurveyListDataObjArr,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.ChangeEventHandler<HTMLInputElement>,
  (e: React.KeyboardEvent<HTMLInputElement>) => void,
] {
  const [keyword, setKeyword] = useState('');
  const [dataArr, setDataArr] = useState(data);

  const keywordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const searchAPICall = async () => {
    const res = (await getList(keyword)) as SurveyListDataObjArr;
    setDataArr(res);
  };

  const onKeyUpSearchAPICall = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    if (key === 'Enter') {
      const target = e.target as HTMLInputElement;
      target.blur();
    }
  };

  const onBlurSearchAPICall: React.ChangeEventHandler<HTMLInputElement> = () => {
    searchAPICall();
  };

  return [keyword, dataArr, keywordChangeHandler, onBlurSearchAPICall, onKeyUpSearchAPICall];
}
