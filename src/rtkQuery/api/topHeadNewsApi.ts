import {createApi} from '@reduxjs/toolkit/query/react';
import {Articles, decodeArticles} from '_models/Articles/Articles';
import {baseQueryConfig} from '_rtkQuery/utils/rtkQuery.constants';
import {endpoints} from '_utils/endpoints';
import {HttpMethodEnum} from '_utils/enums';

type TopHeadlinesResponse = {
  articles: Articles[];
};

export const topHeadNewsApi = createApi({
  reducerPath: 'topHeadPath',
  baseQuery: baseQueryConfig,
  endpoints: builder => ({
    getTopHeadlines: builder.query<ReturnType<typeof decodeArticles>, void>({
      query: () => ({
        url: endpoints.TOP_HEADLINES,
        method: HttpMethodEnum.Get,
      }),
      transformResponse: (response: TopHeadlinesResponse) => {
        return decodeArticles(response.articles);
      },
    }),
  }),
});

export const {useGetTopHeadlinesQuery, useLazyGetTopHeadlinesQuery} =
  topHeadNewsApi;
export default topHeadNewsApi;
