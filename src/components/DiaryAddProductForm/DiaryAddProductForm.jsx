import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductOper,
  getInfoOper,
  productSearchOper,
} from 'redux/diary/diaryOperation';

import { useWindowSize } from 'react-use';
import DiaryDateCalendar from '../DiaryDateCalendar/DiaryDateCalendar';
import s from './DiaryAddProductForm.module.scss';
import { BsPlusLg } from 'react-icons/bs';
import { Btn } from 'components/Btn/Btn';
import { SelectDate, SelectProductsData } from 'redux/diary/diarySelectors';

export const DiaryAddProductForm = props => {
  const productsList = useSelector(SelectProductsData);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const date = useSelector(SelectDate);
  const [weight, setWeight] = useState('');
  const { width } = useWindowSize();

  // useEffect(() => {
  //   isRefresh && dispatch(getInfoOper(date));
  // }, [dispatch, date, isRefresh]);

  useEffect(() => {
    dispatch(getInfoOper(date));
  }, [dispatch, date]);

  // const handleChangeDate = value => {
  //   dispatch(setDate(moment(value.$d).format('YYYY-MM-DD')));
  //   dispatch(getUserInfo());
  // };

  const handleAddProduct = event => {
    event.preventDefault();
    const productId = productsList.find(item => item.title.ua === title)._id;

    const data = {
      date,
      productId,
      weight,
    };
    dispatch(addProductOper(data));
    resetForm();
  };

  // const debounceDispatch = useCallback(
  //   debounce((title)=>{if(!title) return;
  //    dispatch(productSearchOper(title))}, 500),
  //    [],
  //  )

  //    const inputChange = e => {
  //      setTitle(e.currentTarget.value);
  //      debounceDispatch(title);
  //    };

  // useEffect(() => {
  //     dispatch(productSearchOper(title));
  // }, [dispatch, title]);

  const inputChange = e => {
    setTitle(e.currentTarget.value);
    dispatch(productSearchOper(title));
  };

  const resetForm = () => {
    // setDate(moment(new Date()).format('YYYY-MM-DD'));
    setTitle('');
    setWeight('');
  };

  return (
    <>
      <form className={s.Form} onSubmit={handleAddProduct}>
        {width > 768 ? <DiaryDateCalendar className={s.Calendar} /> : ''}
        <div className={s.fieldRow}>
          <div className={s.FieldProduct}>
            <input 
              placeholder="  Enter product name"
              list="productsList"
              className={s.Input}
              type="text"
              value={title}
              onChange={inputChange}
              name="title"
              required
            />
            <datalist id="productsList">
              {productsList?.length > 0 &&
                productsList.map(item => (
                  <option key={item._id} value={item.title.ua} id={item._id} />
                ))}
            </datalist>
          </div>

          <div className={s.FieldWeight}>
            <input 
              placeholder="Grams"
              className={s.Input}
              id="weight"
              type="number"
              value={weight}
              onChange={e => setWeight(Number(e.currentTarget.value))}
              name="weight"
              pattern="^[0-9]*$"
              required
            />
          </div>
            <div className={s.btn}>
            {width > 768 ? (
              <Btn className={s.btn} type="submit" variant="plus">
                <BsPlusLg className={s.icon} />
              </Btn>
            ) : (
              <Btn className={s.btn} type="submit" variant="login">
                Add product
              </Btn>
            )}
          </div>
        </div>
      </form>
    </>
  );
};
