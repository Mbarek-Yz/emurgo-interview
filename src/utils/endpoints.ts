import {env} from '_env';

export const BASE_URL = env.SERVER_BASE_URL;

const apiKey = 'ab1ac7f703c14d6e8584d146a43dba60';

export const endpoints = {
  AUTH: '/auth/login',
  TOP_HEADLINES: '/everything',
  DEFAULT_PARAMS: {
    q: 'tesla',
    from: '2025-04-27',
    sortBy: 'publishedAt',
    apiKey: apiKey,
  },
};
