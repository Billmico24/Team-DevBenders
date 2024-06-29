const getCurrentDate = state => state.diary.date;
const getIsLoading = state => state.diary.isLoading;
const getIsAddProductLoading = state => state.diary.isAddProductLoading;
const getIsDeleteProductLoading = state => state.diary.isDeleteProductLoading;

const getIsSuccess = state => state.diary.isSuccess;
const getIsError = state => state.diary.isError;
const getDiaryProducts = state => state.diary.products;
const getDiaryMessage = state => state.diary.message;

export const diarySelectors = {
  getIsDeleteProductLoading,
  getIsAddProductLoading,
  getCurrentDate,
  getIsLoading,
  getIsSuccess,
  getIsError,
  getDiaryProducts,
  getDiaryMessage,
};