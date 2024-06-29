const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getUserAvatar = state => state.auth.user.avatarURL;
const getIsFetchingUser = state => state.auth.isFetchingUser;
const getMessage = state => state.auth.message;
const getIsError = state => state.auth.isError;
const getIsSuccess = state => state.auth.isSuccess;
const getIsLoading = state => state.auth.isLoading;
const getTokens = state => state.auth.tokens;
const getUserInfo = state => state.auth.user.userInfo;
const getUserAdviceCalorie = state => state.auth.user.userDailyCalorieIntake;
const getUserNotRecommendProd = state =>
  state.auth.user.userNotRecommendedProducts;

const gesIsErrorData = state => {
  const message = getMessage(state);
  const isError = getIsError(state);
  return [message, isError];
};

const getOperationStatus = state => {
  const isError = getIsError(state);
  const isSuccess = getIsSuccess(state);
  const isLoading = getIsLoading(state);

  return { isSuccess, isLoading, isError };
};

export const authSelectors = {
  getOperationStatus,
  getIsLoggedIn,
  getUserName,
  getUserAvatar,
  getIsSuccess,
  getIsLoading,
  getIsFetchingUser,
  getMessage,
  getIsError,
  gesIsErrorData,
  getUserInfo,
  getUserAdviceCalorie,
  getUserNotRecommendProd,
  getTokens,
};