import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '@/Components/Search/Card';
import style from './Search.module.css';
import { getList } from '@/Api/survey';
import { SurveyListDataObjArr } from '@/types/surveyType';
import { useSearchDataControl } from '@/Components/Search/hooks/useSearchDataControl';

export function Search() {
  const data = useLoaderData() as SurveyListDataObjArr;
  const [keyword, dataArr, keywordChangeHandler, onBlurSearchAPICall, onKeyUpSearchAPICall] =
    useSearchDataControl(data);

  return (
    <div className={style.searchpage}>
      <input
        type="search"
        value={keyword}
        onChange={keywordChangeHandler}
        onBlur={onBlurSearchAPICall}
        onKeyUp={onKeyUpSearchAPICall}
        placeholder="검색어를 입력하세요.."
        className={style.inputform}
      />
      <Card surveyListDataObjArr={dataArr} />
    </div>
  );
}

export const loader = async () => {
  const data = await getList();
  return data;
};
