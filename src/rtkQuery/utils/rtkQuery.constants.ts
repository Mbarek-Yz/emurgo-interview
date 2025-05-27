import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {env} from '_config/env';
import {getAccessToken} from '_utils/storageUser';

export const AUTHORIZATION = 'Authorization';
export const BEARER_TOKEN = 'Bearer';

export const baseQueryConfig = fetchBaseQuery({
  baseUrl: env.SERVER_BASE_URL,
  /* prepareHeaders: async headers => {
    const token = await getAccessToken();
    if (token) {
      headers.set(AUTHORIZATION, `${BEARER_TOKEN}${token}`);
    }
    return headers;
  }, */
});
