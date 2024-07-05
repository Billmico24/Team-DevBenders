import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthApi, token, UserApi } from 'services/api';

export const registerNewUser = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      const result = await AuthApi.registerNewUser(credential);
      thunkAPI.dispatch(
        loginUser({ email: credential.email, password: credential.password })
      );
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const { sid, refreshToken } = thunkAPI.getState().userData;
      if (!sid) return thunkAPI.rejectWithValue('No sid');
      const result = await AuthApi.refreshUser(sid, refreshToken);
      token.set(result.newAccessToken);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const result = await AuthApi.loginUser(credential);
      token.set(result.accessToken);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const result = await AuthApi.logOutUser();
      token.unSet();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserInfo = createAsyncThunk(
  'auth/getinfo',
  async (_, thunkAPI) => {
    try {
      const result = await UserApi.getUserInfo();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
