import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Articles, decodeArticles} from '_models/Articles/Articles';
import {baseQueryConfig} from '_rtkQuery/utils/rtkQuery.constants';
import {
  getMergeConfig,
  getSerializeQueryArgsConfig,
} from '_rtkQuery/utils/rtkQuery.helpers';
import {endpoints, BASE_URL} from '_utils/endpoints';

type TopHeadlinesResponse = {
  articles: Articles[];
  totalResults: number;
};

type PaginatedArticlesResponse = {
  data: Articles[];
  totalNbrOfResults: number;
};

export const topHeadNewsApi = createApi({
  reducerPath: 'topHeadNewsApi',
  baseQuery: fetchBaseQuery({
    ...baseQueryConfig,
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    fetchPosts: builder.query<
      PaginatedArticlesResponse,
      {
        page: number;
        pageSize: number;
        q?: string;
        sortBy?: string;
        language?: string;
      }
    >({
      query: ({page, pageSize, q, sortBy, language}) => {
        const params = {
          ...endpoints.DEFAULT_PARAMS,
          page,
          pageSize,
          ...(q && {q}),
          ...(sortBy && {sortBy}),
          ...(language && {language}),
        };

        return {
          url: endpoints.TOP_HEADLINES,
          params,
        };
      },
      transformResponse: (
        response: TopHeadlinesResponse,
      ): PaginatedArticlesResponse => {
        if (!response?.articles) {
          return {data: [], totalNbrOfResults: 0};
        }

        const decodedArticles = decodeArticles(response.articles);

        return {
          data: decodedArticles,
          totalNbrOfResults: response.totalResults || 0,
        };
      },
      merge: getMergeConfig('page'),
      serializeQueryArgs: getSerializeQueryArgsConfig,
      forceRefetch({currentArg, previousArg}) {
        return (
          currentArg?.page !== previousArg?.page ||
          currentArg?.language !== previousArg?.language
        );
      },
    }),
  }),
});

export const {useFetchPostsQuery, useLazyFetchPostsQuery} = topHeadNewsApi;
export default topHeadNewsApi;
