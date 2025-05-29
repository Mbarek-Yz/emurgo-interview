import {storageKeys} from '_utils/userStorageKeys';
import {
  getSensitiveInfoStorage,
  deleteSensitiveInfoStorage,
  setSensitiveInfoStorage,
} from './helpers/sensitiveInfoHelper';

/**
 * Set access token value (saved in secure storage)
 * @param token - Access token to store in sensitive info
 */
export const setAccessToken = async (token: string): Promise<void> => {
  await setSensitiveInfoStorage(storageKeys.ACCESS_TOKEN, token);
};

/**
 * Set refresh token value (saved in secure storage)
 * @param token - Refresh token to store in sensitive info
 */
export const setRefreshToken = async (token: string): Promise<void> => {
  await setSensitiveInfoStorage(storageKeys.REFRESH_TOKEN, token);
};

/**
 * Get access token from secure storage
 * @returns {Promise<string | null>} - Access token returned from sensitive info
 */
export const getAccessToken = async (): Promise<string | null> => {
  return await getSensitiveInfoStorage(storageKeys.ACCESS_TOKEN);
};

/**
 * Get refresh token from secure storage
 * @returns {Promise<string | null>} - Refresh token returned from sensitive info
 */
export const getRefreshToken = async (): Promise<string | null> => {
  return await getSensitiveInfoStorage(storageKeys.REFRESH_TOKEN);
};

/**
 * Remove access token from secure storage
 */
export const removeAccessToken = async (): Promise<void> => {
  await deleteSensitiveInfoStorage(storageKeys.ACCESS_TOKEN);
};

/**
 * get access token expiration date
 */
export const getAccessTokenExpirationDate = async (): Promise<
  string | null
> => {
  return await getSensitiveInfoStorage(
    storageKeys.ACCESS_TOKEN_EXPIRATION_DATE,
  );
};
