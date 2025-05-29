import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '_store/store';
import {Profiler} from 'react';

type UserProfileData = {
  name: string;
  email: string;
};

export type UserState = {
  isLoggedIn: boolean;
  isAuthenticationLoading: boolean;
  profile: UserProfileData | null;
};

const initialState: UserState = {
  isLoggedIn: false,
  isAuthenticationLoading: false,
  profile: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: state => {
      state.isLoggedIn = false;
      state.isAuthenticationLoading = false;
      state.profile = null;
    },
    setUser: (state, action: PayloadAction<UserProfileData>) => {
      state.isLoggedIn = true;
      state.isAuthenticationLoading = true;
      state.profile = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<UserProfileData>>) => {
      if (state.profile) {
        state.profile = {...state.profile, ...action.payload};
      }
    },
    setIsAuthenticationLoading: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticationLoading = action.payload;
    },
  },
});

export const {logoutUser, setIsAuthenticationLoading, setUser, updateUser} =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice;
