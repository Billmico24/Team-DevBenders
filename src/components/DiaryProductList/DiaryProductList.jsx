import React from 'react';
import DiaryProductsListItem from '../DiaryProductListItem/DiaryProductListItem';
import { useDispatch, useSelector } from 'react-redux';
import { SelectDate, SelectStatus } from 'redux/diary/diarySelectors';
import { deleteProductOper, getInfoOper } from 'redux/diary/diaryOperation';
import s from 'components/DiaryProductList/DiaryProductList.module.scss';
import { Loader } from 'components/Loader/Loader';
export function DiaryProductsList() {
  const eatenProducts = useSelector(state => state.searchData.eatenProducts);
  const dayId = useSelector(state => state.searchData.dayId);
  const date = useSelector(SelectDate);
  const dispatch = useDispatch();
  const array = eatenProducts;
  const isLoading = useSelector(SelectStatus);

  const deleteProduct = e => {
    const dayIdObj = {
      dayId: dayId,
      eatenProductId: e.target.id,
    };
    dispatch(deleteProductOper(dayIdObj))
      .unwrap()
      .then(() => {
        dispatch(getInfoOper(date));
      });
  };
  return (
    <div className={s.listContainer}>
      <ul className={s.filteredList}>
        {isLoading === 'pending' ? (
          <Loader />
        ) : array?.length > 0 ? (
          array.map(item => (
            <DiaryProductsListItem
              key={item.id}
              id={item.id}
              weight={item.weight}
              kcal={item.kcal}
              title={item.title}
              eatenProductId={item.id}
              dayId={dayId}
              deleteProduct={deleteProduct}
            />
          ))
        ) : (
          <p className={s.notification}>
            You have no products yet. Please add something.
          </p>
        )}
      </ul>
    </div>
  );
}
