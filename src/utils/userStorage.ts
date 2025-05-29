import {storageKeys} from '_utils/userStorageKeys';
import {
  getSecureStorage,
  setSecureStorage,
  deleteSecureStorage,
} from './helpers/keychainHelper';

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
  return await getSecureStorage(storageKeys.REFRESH_TOKEN);
};

export const removeAccessToken = async (): Promise<void> => {
  await deleteSecureStorage(storageKeys.ACCESS_TOKEN);
};

export const getAccessTokenExpirationDate = async (): Promise<
  string | null
> => {
  return await getSecureStorage(storageKeys.ACCESS_TOKEN_EXPIRATION_DATE);
};
