import { useQuery } from '@tanstack/react-query';
import { getRefresh } from '@/Api/member';

interface Options {
  onError?: () => void;
  onSuccess?: (accessToken: string | false) => void;
}

export const useTokenQuery = (options?: Options) => {
  const tokenQuery = useQuery(['accessToken'], {
    queryFn: async () => {
      const oldRefreshToken = localStorage.getItem('refreshToken');
      if (!oldRefreshToken) return false;
      const data = await getRefresh(oldRefreshToken);
      const { Authorization, refreshToken } = data;

      localStorage.setItem('refreshToken', refreshToken);

      return Authorization;
    },
    staleTime: 1500000,
    cacheTime: Infinity,
    retry: false,
    onError: () => (options && options.onError ? options.onError() : {}),
    onSuccess: (accessToken) => (options && options.onSuccess ? options.onSuccess(accessToken) : {}),
  });
  return tokenQuery;
};
