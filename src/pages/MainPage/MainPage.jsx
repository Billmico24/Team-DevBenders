import Modal from 'components/Modal/Modal';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
// import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import styles from './MainPage.module.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authorization/authSelectors';
import { Navigate } from 'react-router-dom';

// import { selectUser } from 'redux/dailyCalories/caloriesSelectors';

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!isLoggedIn && (
        <div className={styles.homePage}>
          <DailyCaloriesForm handleModalOpen={handleModalOpen} />
          {isModalOpen && <Modal onClose={onClose} isModalOpen={isModalOpen}/>}
        </div>
      )}
      {isLoggedIn && <Navigate to="/diary" />}
    </>
  );
}
export default HomePage;
