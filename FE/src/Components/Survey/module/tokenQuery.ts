import { QueryClient } from '@tanstack/react-query';

const tokenQuery = async (queryClient: QueryClient) => {
  let accessToken: string =
    queryClient.getQueryData(['accessToken']) ?? (await queryClient.fetchQuery(['accessToken'], async () => 'tmp'));
  if (accessToken == null) accessToken = 'tmp';

  return accessToken;
};

export default tokenQuery;
