import {
  deleteSensitiveInfoStorage,
  getSensitiveInfoStorage,
  setSensitiveInfoStorage,
} from './helpers/sensitiveInfoHelper';
import {storageKeys} from './storageKeys';

export const setAccessToken = async (token: string): Promise<void> => {
  await setSensitiveInfoStorage(storageKeys.ACCESS_TOKEN, token);
};

export const setRefreshToken = async (token: string): Promise<void> => {
  await setSensitiveInfoStorage(storageKeys.REFRESH_TOKEN, token);
};

export const getAccessToken = async (): Promise<string | null> => {
  return await getSensitiveInfoStorage(storageKeys.ACCESS_TOKEN);
};

export const getRefreshToken = async (): Promise<string | null> => {
  return await getSensitiveInfoStorage(storageKeys.ACCESS_TOKEN);
};

export const removeTokens = async (): Promise<void> => {
  await deleteSensitiveInfoStorage(storageKeys.ACCESS_TOKEN);
  await deleteSensitiveInfoStorage(storageKeys.REFRESH_TOKEN);
};
