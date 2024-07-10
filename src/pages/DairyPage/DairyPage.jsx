import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DiaryProductsList } from 'components/DiaryProductList/DiaryProductList';
import { SelectDate } from 'redux/diary/diarySelectors';
import { useWindowSize } from 'react-use';
import { BsPlusLg } from 'react-icons/bs';
import DiaryDateCalendar from '../../components/DiaryDateCalendar/DiaryDateCalendar';
import { getInfoOper } from 'redux/diary/diaryOperation';
import scss from './DairyPage.module.scss';
import { Btn } from 'components/Btn/Btn';
import { ModalSearchForm } from 'components/ModalSearchForm/ModalSearchForm';
import UserInfo from 'components/UserInfo/UserInfo';

function DairyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const date = useSelector(SelectDate);
  const { width } = useWindowSize();

  const onModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const onModalClose = () => {
    document.body.style.overflow = 'unset';
    setIsModalOpen(false);
  };
  // const dispatch = useDispatch();
  // const date = useSelector(selectDate);

  // const handleChangeDate = value => {
  //   dispatch(setDate(moment(value.$d).format('YYYY-MM-DD')));
  //   dispatch(getUserInfo());
  // };
  useEffect(() => {
    dispatch(getInfoOper(date));
  }, [date, dispatch]);

  return (
    <>
      {width > 768 ? (
        <>
          <DiaryAddProductForm />
          <DiaryProductsList />
        </>
      ) : (
        <div>
          <div className={scss.userInfoContainer}>
            <UserInfo />
          </div>
          <div className={scss.container}>
            <DiaryDateCalendar className={scss.dateContainer} />
            <DiaryProductsList className={scss.dateContainerList} />
            <Btn type="button" variant="plus">
              <BsPlusLg className={scss.icon} onClick={onModalOpen} />
            </Btn>
            {isModalOpen && <ModalSearchForm onModalClose={onModalClose} />}
          </div>
        </div>
      )}
    </>
  );
}

export default DairyPage;
