import {type SerializedError} from '@reduxjs/toolkit';
import {
  type EndpointDefinition,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {showPopup} from '_utils/helpers/helpers';

import {
  DEFAULT_PAGE_NUMBER,
  ERROR_TITLE,
  NETWORK_ERROR_MESSAGE,
  RTK_QUERY_NETWORK_ERROR_MESSAGE,
  SERVER_ERROR_MESSAGE,
} from './rtkQuery.constants';
import {type HandleErrorPopUpParams} from './rtkQuery.type';

export const handleError = (error: any): string => {
  if (isFetchBaseQueryError(error)) {
    if (isNetworkError(error)) {
      return NETWORK_ERROR_MESSAGE;
    }
    return SERVER_ERROR_MESSAGE;
  }
  return SERVER_ERROR_MESSAGE;
};

export const isFetchBaseQueryError = (
  error: any,
): error is FetchBaseQueryError => {
  return typeof error === 'object' && error != null && 'status' in error;
};

const isNetworkError = (error: any): boolean => {
  return (
    'error' in error &&
    error?.error?.toString() === RTK_QUERY_NETWORK_ERROR_MESSAGE
  );
};

export const handleErrorPopUp = ({
  error,
  cancelCallback,
  cancelText,
  confirmCallback,
  confirmText,
}: HandleErrorPopUpParams): void => {
  let popUpTitle: string;
  let popUpMessage: string;
  if (isFetchBaseQueryError(error)) {
    if (isNetworkError(error)) {
      popUpTitle = NETWORK_ERROR_MESSAGE;
      popUpMessage = SERVER_ERROR_MESSAGE;
    } else {
      popUpTitle = ERROR_TITLE;
      popUpMessage = SERVER_ERROR_MESSAGE;
    }
  } else {
    popUpTitle = ERROR_TITLE;
    popUpMessage = SERVER_ERROR_MESSAGE;
  }
  showPopup({
    title: popUpTitle,
    message: popUpMessage,
    confirmCallback,
    cancelCallback,
    confirmText,
    cancelText,
  });
};

export const getUseQueryStateResult = <T>({
  data,
  error,
  isFetching,
  isLoading,
}: {
  data: T | undefined;
  error: SerializedError | FetchBaseQueryError | undefined;
  isLoading: boolean;
  isFetching: boolean;
}) => {
  const failedError: string | undefined =
    data === undefined && error ? handleError(error) : undefined;

  const isRefreshing: boolean = data !== undefined && isFetching;
  const refreshError: string | undefined =
    data !== undefined && error ? handleError(error) : undefined;

  const isLoadingLocal: boolean = isLoading || isFetching;

  return {
    isLoading: isLoadingLocal,
    isRefreshing,
    refreshError,
    failedError,
    data,
    error,
  };
};

export const getSerializeQueryArgsConfig = (args: {
  queryArgs: any;
  endpointDefinition: EndpointDefinition<any, any, any, any>;
  endpointName: string;
}) => {
  return args.endpointName;
};

// note that the  page number argument name by default is 'page'

export const getMergeConfig =
  (pageArgName = 'page') =>
  <T = any>(
    currentCacheData: {
      data: T[];
    },
    responseData: {
      data: T[];
    },
    otherArgs: {
      arg: Record<string, any>;
      [key: string]: any;
    },
  ) => {
    const {arg} = otherArgs;
    if ((arg[pageArgName] as number) > DEFAULT_PAGE_NUMBER) {
      currentCacheData.data.push(...responseData.data);
    } else {
      currentCacheData.data = responseData.data;
    }
  };
