import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import SurveyHeader from '../Components/Survey/SurveyHeader';
import { useTokenQuery } from '@/hooks/useTokenQuery';

const HEADLINE = '설문지 만들기';

export default function CreateSurvey() {
  const navigate = useNavigate();

  const tokenQuery = useTokenQuery({
    onError: () => {
      localStorage.setItem('refreshToken', '');
      navigate('/sign-in');
    },
  });

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken || !tokenQuery.data) {
      navigate('/sign-in');
    }
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
