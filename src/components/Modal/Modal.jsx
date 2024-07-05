import scss from './Modal.module.scss';
import { Link } from 'react-router-dom';
import { Btn } from 'components/Btn/Btn';
import { createPortal } from 'react-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useEffect } from 'react';
import {
  selectError,
  selectLoader,
  selectUserInfo,
} from 'redux/dailyCalories/caloriesSelectors';
import { useSelector } from 'react-redux';
import { GrClose } from 'react-icons/gr';
import { useWindowSize } from 'react-use';
import { Loader } from 'components/Loader/Loader';


const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, isModalOpen }) => {
  const { width } = useWindowSize();
  const user = useSelector(selectUserInfo);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoader);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const onModalClose = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onModalClose);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onModalClose);
    };
  }, [onClose]);
  return createPortal(
    
    <>
      <div className={scss.overlay}     
      onClick={handleBackdropClick}>
        {error && <p> Oops, some error occured... Message: {error}</p>}
        {isLoading === 'pending' ? (
          <Loader />
        ) : (
          <div className={scss.modal}>
            {width < 768 ? (
              <div className={scss.btnContainer}>
                <BsArrowReturnLeft
                  className={scss.icon}
                  onClick={() => onClose()}
                />
              </div>
            ) : (
              <GrClose className={scss.closeIcon} onClick={() => onClose()} />
            )}
            <div className={scss.modalContainer}>
              <h2 className={scss.title}>Your recommended daily calories</h2>
              <div className={scss.caloriesContainer}>
                <span className={scss.calories}>
                  {user?.dailyRate && Math.floor(user.dailyRate)}
                  <span className={scss.caloriesText}> ккал</span>
                </span>
              </div>
              <h2 className={scss.secondaryTitle}>
              List of foods that are prohibited for you
              </h2>
              <ol className={scss.list}>
                {user?.notAllowedProducts.length > 0 &&
                  user.notAllowedProducts.slice(0, 4).map(item => (
                    <li className={scss.listItem} key={item}>
                      {item}
                    </li>
                  ))}
              </ol>
              <Link className={scss.btn} to="/register">
                <Btn type="button" variant="start">
                Start losing weight
                </Btn>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
