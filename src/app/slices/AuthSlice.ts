import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_TOKEN} from '../../constants';

export interface AuthState {
  token: string | null;
  viewedOnBoarding: boolean;
}

const initialState: AuthState = {
  token: null,
  viewedOnBoarding: true,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    resetToken: state => {
      state.token = null;
    },
    setViewedOnBoarding: (state, action: PayloadAction<boolean>) => {
      state.viewedOnBoarding = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });

    builder.addCase(userLogout.fulfilled, () => {
      return initialState;
    });
  },
});

export const userLogin = createAsyncThunk('user/login', async () => {
  const token = Math.random().toString();
  await AsyncStorage.setItem(KEY_TOKEN, token);
  return token;
});

export const userLogout = createAsyncThunk('user/logout', async () => {
  await AsyncStorage.removeItem(KEY_TOKEN);
  return true;
});

export const {setToken, resetToken, setViewedOnBoarding} = authSlice.actions;

export default authSlice.reducer;
