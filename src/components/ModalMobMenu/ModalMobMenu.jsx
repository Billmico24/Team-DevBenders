import { NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import s from './ModalMobMenu.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, isModalOpen }) => {
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
      <div onClick={handleBackdropClick}>
        <div className={isModalOpen ? s.modal : s.transition}>
          <div className={s.list}>
            <NavLink
              to="/diary"
              className={({ isActive }) => (isActive ? s.active : s.default)}
              onClick={handleBackdropClick}
            >
              Diary
            </NavLink>
            <NavLink
              to="/calculator"
              className={({ isActive }) => (isActive ? s.active : s.default)}
              onClick={handleBackdropClick}
            >
              Calculator
            </NavLink>
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
