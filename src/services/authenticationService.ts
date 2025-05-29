import {type UserSliceDispatch} from '_models/Authentication';
import {
  logoutUser,
  setIsAuthenticationLoading,
  setUser,
} from '_store/features/user/userSlice';
import {type AuthResult} from '_utils/types';
import {
  removeAccessToken,
  setAccessToken,
  setRefreshToken,
} from '_utils/userStorage';

/**
 * Authenticate user and store tokens
 * @param credentials - User credentials containing username and password
 * @param dispatch - Redux dispatch function
 * @param result - The result containing access tokens
 * @returns {Promise<void>}
 */
export const userAuthenticate = async (
  dispatch: UserSliceDispatch,
  result: AuthResult,
): Promise<void> => {
  try {
    dispatch(setIsAuthenticationLoading(true));

    const accessToken = result.tokens?.access?.token;
    const refreshToken = result.tokens?.refresh?.token;

    if (!accessToken) throw new Error('Error: Missing accessToken');

    await setAccessToken(accessToken);
    await setRefreshToken(refreshToken);

    dispatch(
      setUser({
        email: result.user.email,
        name: result.user.name,
      }),
    );
  } catch (e) {
    console.error('Authentication error:', e);
  } finally {
    dispatch(setIsAuthenticationLoading(false));
  }
};

/**
 * Logout user and clear tokens
 * @param dispatch - Redux dispatch function
 * @returns {Promise<void>}
 */
export const userLogout = async (
  dispatch: UserSliceDispatch,
): Promise<void> => {
  try {
    dispatch(setIsAuthenticationLoading(true));
    await removeAccessToken();
    dispatch(logoutUser());
  } catch (e) {
    console.error('Logout error:', e);
  } finally {
    dispatch(setIsAuthenticationLoading(false));
  }
};
