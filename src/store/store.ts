import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import {rootReducer} from './rootReducer';
import {topHeadNewsApi} from '_rtkQuery/api/topHeadNewsApi';
import {authApi} from '_rtkQuery/api/authApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware, topHeadNewsApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
