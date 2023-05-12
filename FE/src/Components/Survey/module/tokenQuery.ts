import { QueryClient } from '@tanstack/react-query';

const tokenQuery = async (queryClient: QueryClient) => {
  const accessToken: string =
    queryClient.getQueryData(['accessToken']) ?? (await queryClient.fetchQuery(['accessToken'], async () => 'tmp'));
  return accessToken;
};

export default tokenQuery;
