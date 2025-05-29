/**
 * Define Async Storage keys
 */
export const storageKeys = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  TOKEN_ID: 'token_id',
  ACCESS_TOKEN_EXPIRATION_DATE: 'token_expiration_date'
};

export type StorageKeysType = keyof typeof storageKeys;

export type StorageValuesType = (typeof storageKeys)[StorageKeysType];
