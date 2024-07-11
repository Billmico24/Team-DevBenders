import axios from 'axios';
import { omit } from 'lodash';
// import { useSelector } from 'react-redux';
// import { selectUserId } from 'redux/authorization/authSelectors';

//  const userId = useSelector(selectUserId);
// axios.defaults.baseURL = 'http://localhost/3000';
// axios.defaults.baseURL = 'https://slimmom-backend.goit.global';
// axios.defaults.baseURL ='https://team-devbenders-backend.onrender.com/';

/*
List of endpoints use by Front End found in --> /src/services/api.js
1. await axios.post('/auth/register', userData);
2. await axios.post('/auth/logout');
3. await axios.post('/auth/logout');
4. await axios({
      data: { sid },
      headers: { Authorization: refreshToken },
      method: 'post',
      url: `/auth/refresh`
5. await axios.post('/daily-rate', userInfo);
6. axios.post(
      `/daily-rate/${userInfo.userId}`,
      omit(userInfo, ['userId'])
7. await axios.get('/product/', { params: { search } });
8. await axios.post('/day', productInfo);
9. await axios.delete('/day', {data:productData});
10. await axios.post('/day/info', {date});
11. await axios.get('/user');
*/

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
export const AuthApi = {
  // registering user
  async registerNewUser(userData) {
    const { data } = await axios.post('/auth/register', userData);
    return data;
  },

  async loginUser(signedUserData) {
    // logging in user
    const { data } = await axios.post('/auth/login', signedUserData);
    return data;
  },

  async logOutUser() {
    // user logout
    const { data } = await axios.post('/auth/logout');
    return data;
  },

  async refreshUser(sid, refreshToken) {
    // refresh user
    const { data } = await axios({
      data: { sid },
      headers: { Authorization: refreshToken },
      method: 'post',
      url: `/auth/refresh`,
    });
    return data;
  },
};

export const UserApi = {
  async getUserInfo() {
    const { data } = await axios.get('/users/current', {
      headers: { Authorization: axios.defaults.headers.common.Authorization }
    });
    return data;
  },
};


export const DailyApi = {
  // info about unregistered user
  async getDailyRateInfo(userInfo) {
    const { data } = await axios.post('/daily-rate', userInfo);
    return data;
  },

  async getDailyRateInfoBasedOnId(userInfo) {
    const { data } = await axios.post(
      `/daily-rate/${userInfo.userId}`,
      omit(userInfo, ['userId'])
    );
    return data;
  },
};

export const ProductApi = {
  async productSearch(search) {
    const { data } = await axios.get('/product/', { params: { search } });
    return data;
  },
};

// export const DayApi = {
//   async productSearch(productInfo) {
//     const { data } = await axios.get('/day', productInfo);
//     return data;
//   },

//   async deleteProduct(productInfo) {
//     const { data } = await axios.delete('/day', productInfo);
//     return data;
//   },

//   async getDayInfo(dateInfo) {
//     const { data } = await axios.post('/day/info', dateInfo);
//     return data;
//   },
// };

// Search and get a list of products by query
export async function productSearch(search) {
  const { data } = await axios.get('/product/', { params: { search } });
  return data;
}
// Post an eaten product
export async function addProduct(productInfo) {
  const { data } = await axios.post('/day', productInfo);
  return data;
}
// Delete eaten product
export async function deleteProduct(productData) {
  const { data } = await axios.delete('/day', {data:productData});
  return data;
}
// Get info for day
export async function getDayInfo(date) {
  const { data } = await axios.post('/day/info', {date});
  return data;
}



export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return token;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};
