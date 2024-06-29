import { refreshToken } from 'redux/app/auth';
import { getNewTokens } from './axios.config';
import axiosInstance from './api';
import tokenService from './token.service';

const setup = store => {
  const { dispatch } = store;

  axiosInstance.interceptors.request.use(
    config => {
      const token = tokenService.getLocalAccessToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    res => {
      return res;
    },

    async err => {
      const originalConfig = err.config;

      if (originalConfig.url !== '/users/login' && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            const token = tokenService.getLocalRefreshToken();

            const rs = await getNewTokens({
              refreshToken: token,
            });

            const { tokens } = await rs.data.data;
            dispatch(refreshToken(tokens));
            tokenService.setLocalTokens(tokens);
            axiosInstance.defaults.headers[
              'Authorization'
            ] = `Bearer ${tokens.accessToken}`;

            return axiosInstance(originalConfig);
          } catch (_error) {
            if (_error.response && _error.response.data) {
              return Promise.reject(_error.response.data);
            }
            return Promise.reject(_error);
          }
        }
      }
      return Promise.reject(err);
    },
  );
};

export default setup;
