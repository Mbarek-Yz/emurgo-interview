import {type PersistPartial} from 'redux-persist/es/persistReducer';

import {
  type UnknownAction,
  type ThunkDispatch,
  type Dispatch,
} from '@reduxjs/toolkit';

import {type UserState} from '_store/features/user/userSlice';

export type UserSliceDispatch = ThunkDispatch<
  {
    user: UserState & PersistPartial;
  },
  undefined,
  UnknownAction
> &
  Dispatch<UnknownAction>;
