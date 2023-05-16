import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SurveyHeader from '../Components/Survey/SurveyHeader';
import { useTokenQuery } from '@/hooks/useTokenQuery';

const HEADLINE = '설문지 만들기';

export default function CreateSurvey() {
  const navigate = useNavigate();

  console.log(localStorage.getItem('refreshToken'));

  const tokenQuery = useTokenQuery({
    onError: () => {
      console.log('onError');
      localStorage.setItem('refreshToken', '');
      navigate('/sign-in');
    },
    onSuccess: (accessToken) => {
      console.log('onSuccess');
      console.log(accessToken);
    },
  });

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    console.log(tokenQuery);
    if (!refreshToken) {
      navigate('/sign-in');
    }
    console.log(refreshToken); // 리프레시
    console.log(tokenQuery.data); // 엑세스
  }, [navigate, tokenQuery]);

  return (
    <article className="text-white">
      <SurveyHeader title={HEADLINE} />
      <main className="px-20 py-15 h-[calc(100vh-224px)]">
        <Outlet />
      </main>
    </article>
  );
}
