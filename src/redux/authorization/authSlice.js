import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  logoutUser,
  registerNewUser,
  refreshUser,
  getUserInfo,
} from './authOperations';

const initialState = {
  isLoggedIn: false,
  status: 'idle', // 'idle' | 'pending' | 'resolved' | 'rejected'
  error: null,
  userName: '',
  userEmail: '',
  token: null,
  userId: null,
  refreshToken: null,
  sid: null,
  isRefresh: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: builder => {
    builder
      // ----- SignUp -----
      .addCase(registerNewUser.pending, pendingHandler)
      .addCase(registerNewUser.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.userName = action.payload.username;
        state.userEmail = action.payload.email;
        state.userId = action.payload.user.id;
      })
      .addCase(registerNewUser.rejected, rejectHandler)
      // ----- LogIn -----
      .addCase(loginUser.pending, pendingHandler)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.userName = action.payload.user.username;
        state.userEmail = action.payload.user.email;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.userId = action.payload.user.id;
      })
      .addCase(loginUser.rejected, rejectHandler)
      // ----- Refresh -----
      .addCase(refreshUser.pending, pendingHandler)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = true;
        state.isRefresh = true;
        state.token = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.sid;
      })
      .addCase(refreshUser.rejected, rejectHandler)
      // ----- Logout -----
      .addCase(logoutUser.pending, pendingHandler)
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.isLoggedIn = false;
        state.userName = '';
        state.userEmail = '';
        state.token = null;
        state.refreshToken = null;
        state.sid = null;
        state.isRefresh = false;
      })
      .addCase(logoutUser.rejected, rejectHandler)
      // ----- GetUserInfo -----
      .addCase(getUserInfo.pending, pendingHandler)
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.userName = action.payload.username;
        state.userEmail = action.payload.email;
        state.userId = action.payload.id;
      })
      .addCase(getUserInfo.rejected, rejectHandler);
  },
});

function pendingHandler(state) {
  state.error = null;
  state.status = 'pending';
}
function rejectHandler(state, action) {
  state.status = 'rejected';
  state.error = action.payload;
}

export const authReducer = authSlice.reducer;
