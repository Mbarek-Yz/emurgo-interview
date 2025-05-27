import {env} from '_env';

export const BASE_URL = env.SERVER_BASE_URL;

const apikey = 'defc7e520951a223f6cd87293aab60e2';
const category = 'general';

export const endpoints = {
  AUTH: '/auth/login',
  TOP_HEADLINES: `/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apikey}`,
};
