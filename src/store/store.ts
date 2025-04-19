import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { authApi } from '_rtkQuery/api/authApi';
import { rootReducer } from './rootReducer';
import postsApi from '_rtkQuery/api/postsApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(authApi.middleware, postsApi.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
