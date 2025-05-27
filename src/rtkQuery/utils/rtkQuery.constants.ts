import {fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {env} from '_config/env';
import {translate} from '_i18n';

export const DEFAULT_PAGE_NUMBER = 1;

export const DEFAULT_ROWS_PER_PAGE = 10;

export const INITIAL_PAGE_NUMBER = 0;

export const ERROR_TITLE = translate('error.error');
export const SERVER_ERROR_MESSAGE = translate('error.server');
export const NETWORK_ERROR_MESSAGE = translate('error.network');

export const REQUEST_TIMEOUT = 20000;

export const RTK_QUERY_NETWORK_ERROR_MESSAGE =
  'TypeError: Network request failed';

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
