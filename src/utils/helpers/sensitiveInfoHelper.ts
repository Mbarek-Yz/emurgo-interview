import {SHARED_PREFERENCES_NAME} from '_utils/constants';
import RNInfo from 'react-native-sensitive-info';

export const setSensitiveInfoStorage = async <T extends string>(
  key: string,
  token: string,
): Promise<void> => {
  try {
    const storedValue =
      typeof token === 'string' ? token : JSON.stringify(token);
    await RNInfo.setItem(key, storedValue, {
      sharedPreferencesName: SHARED_PREFERENCES_NAME,
    });
  } catch (error) {
    console.log(error, ' error');
  }
};

export const getSensitiveInfoStorage = async (
  key: string,
): Promise<string | null> => {
  try {
    return await RNInfo.getItem(key, {
      sharedPreferencesName: SHARED_PREFERENCES_NAME,
    });
  } catch (error) {
    return null;
  }
};

export const deleteSensitiveInfoStorage = async (
  key: string,
): Promise<void> => {
  await RNInfo.deleteItem(key, {
    sharedPreferencesName: SHARED_PREFERENCES_NAME,
  });
};
