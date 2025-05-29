import * as Keychain from 'react-native-keychain';

/**
 * Store a sensitive value securely using react-native-keychain.
 * @param key Unique identifier for the credential
 * @param value The value (token) to be stored
 */
export const setSecureStorage = async (
  key: string,
  value: string,
): Promise<void> => {
  try {
    await Keychain.setGenericPassword('token', value, {
      service: key, // Use the key as the "service" name to namespace entries
    });
  } catch (error) {
    console.error(`Failed to save value for ${key}`, error);
  }
};

/**
 * Retrieve a sensitive value securely.
 * @param key Unique identifier for the credential
 * @returns The stored token or null
 */
export const getSecureStorage = async (key: string): Promise<string | null> => {
  try {
    const credentials = await Keychain.getGenericPassword({service: key});
    return credentials ? credentials.password : null;
  } catch (error) {
    console.error(`Failed to retrieve value for ${key}`, error);
    return null;
  }
};

/**
 * Delete a sensitive value securely.
 * @param key Unique identifier for the credential
 */
export const deleteSecureStorage = async (key: string): Promise<void> => {
  try {
    await Keychain.resetGenericPassword({service: key});
  } catch (error) {
    console.error(`Failed to delete value for ${key}`, error);
  }
};
