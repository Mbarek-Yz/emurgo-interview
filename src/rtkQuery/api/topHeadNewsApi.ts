import {createApi} from '@reduxjs/toolkit/query/react';
import {decodeArticles} from '_models/Articles/Articles';
import {baseQueryConfig} from '_rtkQuery/utils/rtkQuery.constants';
import {endpoints} from '_utils/endpoints';
import {HttpMethodEnum} from '_utils/enums';

export const topHeadNewsApi = createApi({
  reducerPath: 'topHeadPath',
  baseQuery: baseQueryConfig,
  endpoints: builder => ({
    getTopHeadlines: builder.query({
      query: () => ({
        url: endpoints.TOP_HEADLINES,
        method: HttpMethodEnum.Get,
      }),
      transformResponse: response => {
        return decodeArticles(response.articles);
      },
    }),
  }),
});

export const {useGetTopHeadlinesQuery} = topHeadNewsApi;
