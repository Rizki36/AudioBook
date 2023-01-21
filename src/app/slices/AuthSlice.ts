import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEY_TOKEN} from '../../constants';
import deviceStorage from '@app/services/deviceStorage';
import AuthService from '@app/services/AuthService';

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

type UserLoginPayload = {
  data: {email: string; password: string};
};
export const userLogin = createAsyncThunk(
  'user/login',
  async ({data}: UserLoginPayload) => {
    const response = await AuthService.postLogin({
      data,
    }).then(res => res.data.data);

    await deviceStorage.setJWT(response.token);

    return response;
  },
);

export const userLogout = createAsyncThunk('user/logout', async () => {
  await AsyncStorage.removeItem(KEY_TOKEN);
  return true;
});

export const {setToken, resetToken, setViewedOnBoarding} = authSlice.actions;

export default authSlice.reducer;
