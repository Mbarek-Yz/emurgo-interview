import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryConfigLocal} from '_rtkQuery/utils/rtkQuery.constants';
import {endpoints} from '_utils/endpoints';
import {HttpMethodEnum} from '_utils/enums';

export const authApi = createApi({
  reducerPath: 'authPath',
  baseQuery: baseQueryConfigLocal,
  endpoints: builder => ({
    login: builder.mutation({
      query: credentiels => ({
        url: endpoints.AUTH,
        method: HttpMethodEnum.Post,
        body: credentiels,
      }),
    }),
  }),
});

export const {useLoginMutation} = authApi;
