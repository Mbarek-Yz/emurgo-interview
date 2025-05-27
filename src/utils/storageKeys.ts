export const storageKeys = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  ID_TOKEN: 'id_token',
};

export type StorageKeysType = keyof typeof storageKeys;
export type StorageKeysValues = (typeof storageKeys)[StorageKeysType];
