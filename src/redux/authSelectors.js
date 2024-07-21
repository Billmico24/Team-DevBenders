export const getIsLoggedIn = state => state.auth.isLoggedIn;  // Corrected property name
export const getUserName = state => state.auth.user.name;
export const getToken = state => state.auth.token;
export const getUserInfo = state => state.auth.userInfo;
