import {combineReducers} from 'redux';
import loaderSlice from './features/loader/loaderSlice';
import popupSlice from './features/popup/popupSlice';
import {persistedUserReducer} from './features/user/userReducer';
import {authApi} from '_rtkQuery/api/authApi';
import {topHeadNewsApi} from '_rtkQuery/api/topHeadNewsApi';
import {persistedLocalLanguageReducer} from './features/localeLanguage/localLanguageReducer';

export const rootReducer = combineReducers({
  user: persistedUserReducer,
  popup: popupSlice.reducer,
  loader: loaderSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [topHeadNewsApi.reducerPath]: topHeadNewsApi.reducer,
  localLanguage: persistedLocalLanguageReducer,
});
