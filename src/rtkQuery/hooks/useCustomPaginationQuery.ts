import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';

import deepEqual from 'fast-deep-equal';

import {QueryStatus} from '@reduxjs/toolkit/query';
import {
  type TypedUseLazyQuery,
  type TypedUseQueryStateResult,
} from '@reduxjs/toolkit/query/react';
import type {TypedUseLazyQueryStateResult} from '@reduxjs/toolkit/query/react';
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_ROWS_PER_PAGE,
  INITIAL_PAGE_NUMBER,
} from '_rtkQuery/utils/rtkQuery.constants';
import {handleError} from '_rtkQuery/utils/rtkQuery.helpers';
import {ToastType} from '_utils/customToastConfig/toastConfig';

interface List<T> {
  data: T[];
  totalNbrOfResults: number;
}

const useCustomPaginationQuery = <T, D = void>(
  useLazyQueryResult: ReturnType<TypedUseLazyQuery<List<T>, any, any>>,
  params?: Partial<D>,
  pageArgName = 'page',
  rowsPerPageArgName = 'pageSize',
) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NUMBER);
  const [oldArgs, setOldArgs] = useState<any>();
  const [fetch, stateResult] = useLazyQueryResult;

  const {
    data: dataObject,
    error,
    isFetching,
    isLoading: isDefaultLoading,
    status,
    originalArgs,
  } = stateResult as TypedUseLazyQueryStateResult<T, any, any>;
  const pageArg: number = originalArgs?.[pageArgName];
  const filteredOriginalArgs =
    originalArgs &&
    Object.fromEntries(
      Object.entries(originalArgs as Record<string, any>).filter(
        ([key]) => key !== pageArgName && key !== rowsPerPageArgName,
      ),
    );

  const newDataObject = dataObject as
    | {
        data: T[];
        totalNbrOfResults: number;
      }
    | undefined;
  const data: T[] | undefined = newDataObject?.data;
  const totalNbrOfResults: number | undefined =
    newDataObject?.totalNbrOfResults;

  const isLoading: boolean =
    (data === undefined && isDefaultLoading) ||
    (isFetching && data?.length === 0) ||
    (!deepEqual(oldArgs, filteredOriginalArgs) &&
      isFetching &&
      pageArg === DEFAULT_PAGE_NUMBER);

  const failedError: string | undefined =
    (data === undefined || data.length === 0) && error
      ? handleError(error)
      : undefined;

  const isRefreshing: boolean =
    data !== undefined &&
    data.length > 0 &&
    pageArg === DEFAULT_PAGE_NUMBER &&
    deepEqual(oldArgs, filteredOriginalArgs) &&
    isFetching;
  const refreshError: string | undefined =
    data !== undefined &&
    data.length > 0 &&
    pageArg === DEFAULT_PAGE_NUMBER &&
    error
      ? handleError(error)
      : undefined;

  const isLoadingMore: boolean =
    data !== undefined &&
    data.length > 0 &&
    pageArg > DEFAULT_PAGE_NUMBER &&
    isFetching;
  const loadingMoreError: string | undefined =
    data !== undefined &&
    data.length > 0 &&
    error &&
    pageArg > DEFAULT_PAGE_NUMBER
      ? handleError(error)
      : undefined;

  const nbrOfResults = data !== undefined ? data.length : undefined;
  const isAllDataLoaded =
    (nbrOfResults !== undefined &&
      totalNbrOfResults !== undefined &&
      nbrOfResults === totalNbrOfResults) ||
    (data !== undefined && data.length % currentPage !== 0);

  const getFirstPage = (shouldUseCachedData: boolean) => {
    void fetch(
      {
        [pageArgName]: DEFAULT_PAGE_NUMBER,
        [rowsPerPageArgName]: DEFAULT_ROWS_PER_PAGE,
        ...params,
      },
      shouldUseCachedData,
    );
  };

  const getNextPage = () => {
    void fetch({
      [pageArgName]: currentPage + DEFAULT_PAGE_NUMBER,
      [rowsPerPageArgName]: DEFAULT_ROWS_PER_PAGE,
      ...params,
    });
  };

  const getDataOnMount = () => {
    getFirstPage(true);
  };
  const getRefreshedData = () => {
    getFirstPage(false);
  };

  const getMoreData = () => {
    !isRefreshing &&
      !isLoading &&
      !isLoadingMore &&
      data !== undefined &&
      data.length > 0 &&
      !isAllDataLoaded &&
      !loadingMoreError &&
      getNextPage();
  };

  useEffect(() => {
    getDataOnMount();
  }, []);

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      originalArgs?.[pageArgName] > DEFAULT_PAGE_NUMBER
        ? setCurrentPage(prevPage => prevPage + DEFAULT_PAGE_NUMBER)
        : setCurrentPage(DEFAULT_PAGE_NUMBER);
    }
  }, [status]);

  useEffect(() => {
    if (status === QueryStatus.fulfilled || status === QueryStatus.rejected) {
      setOldArgs(filteredOriginalArgs);
    }
  }, [status]);

  useEffect(() => {
    refreshError &&
      Toast.show({
        type: ToastType.Error,
        text1: refreshError,
      });
  }, [error]);

  return {
    data: data ?? [],
    failedError,
    isRefreshing,
    refreshError,
    isLoading,
    isLoadingMore,
    loadingMoreError,
    getDataOnMount,
    getRefreshedData,
    getMoreData,
    nbrOfResults,
    getNextPage,
  };
};

export default useCustomPaginationQuery;
