import {
  deleteSecureStorage,
  getSecureStorage,
  setSecureStorage,
} from './helpers/keychainHelper';
import {storageKeys} from './storageKeys';

export const setAccessToken = async (token: string): Promise<void> => {
  await setSecureStorage(storageKeys.ACCESS_TOKEN, token);
};

export const setRefreshToken = async (token: string): Promise<void> => {
  await setSecureStorage(storageKeys.REFRESH_TOKEN, token);
};

export const getAccessToken = async (): Promise<string | null> => {
  return await getSecureStorage(storageKeys.ACCESS_TOKEN);
};

export const getRefreshToken = async (): Promise<string | null> => {
  return await getSecureStorage(storageKeys.ACCESS_TOKEN);
};

export const removeTokens = async (): Promise<void> => {
  await deleteSecureStorage(storageKeys.ACCESS_TOKEN);
  await deleteSecureStorage(storageKeys.REFRESH_TOKEN);
};
