import React from 'react';
import s from 'components/DiaryProductListItem/DiaryProductListItem.module.scss';

const DiaryProductListItem = ({
  dayId,
  title,
  kcal,
  weight,
  eatenProductId,
  deleteProduct,
  id,
}) => {



  return (
    <>
        <li className={s.Item}>
          <span className={s.Title}>{title}</span>
          <span className={s.Weight}>{weight} </span>
          <span className={s.Calories}>{Math.floor(kcal)}</span>
          <button
            className={s.Button}
            type="button"
            id={id}
            onClick={deleteProduct}
          >+</button>
        </li>
    </>
  );
};
export default DiaryProductListItem;
