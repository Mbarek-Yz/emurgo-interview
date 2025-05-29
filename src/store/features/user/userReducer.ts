import {PersistConfig, persistReducer} from 'redux-persist';
import userSlice, {UserState} from './userSlice';
import {Action} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistUserConfig: PersistConfig<UserState, Action> = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['isLoggedIn', 'isAuthenticationLoading', 'profile'],
};

export const persistedUserReducer = persistReducer(
  persistUserConfig,
  userSlice.reducer,
);
