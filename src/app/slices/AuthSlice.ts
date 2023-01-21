import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_TOKEN} from '../../constants';
import deviceStorage from '@app/services/deviceStorage';
import axiosInstance from '../axios';

type userType = {id: string; email: string; name: string};

export type AuthState = {
  token: string | null;
  viewedOnBoarding: boolean;
  user: userType | null;
};

const initialState: AuthState = {
  token: null,
  viewedOnBoarding: true,
  user: null,
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
      state.token = action.payload.token;
      state.user = action.payload.user;
    });

    builder.addCase(userLogout.fulfilled, () => {
      return initialState;
    });
  },
});

type postDataLogin = {
  email: string;
  password: string;
};
type responseDataLogin = {
  token: string;
  user: userType;
};

export const userLogin = createAsyncThunk<
  responseDataLogin,
  {data: postDataLogin}
>('user/login', async ({data}) => {
  const response = (await axiosInstance
    .post('v1/auth/sign-in', data)
    .then(async res => res?.data?.data)) as responseDataLogin;

  await deviceStorage.setJWT(response.token);

  return response;
});

export const userLogout = createAsyncThunk('user/logout', async () => {
  await AsyncStorage.removeItem(KEY_TOKEN);
  return true;
});

export const {setToken, resetToken, setViewedOnBoarding} = authSlice.actions;

export default authSlice.reducer;
