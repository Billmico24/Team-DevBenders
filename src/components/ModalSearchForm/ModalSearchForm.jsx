import { DiaryAddProductForm } from 'components/DiaryAddProductForm/DiaryAddProductForm';
import UserInfo from 'components/UserInfo/UserInfo';
import { createPortal } from 'react-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';
import scss from './ModalSearchForm.module.scss';

const modalRoot = document.querySelector('#modal-root');

export const ModalSearchForm = ({ onModalClose }) => {
  return createPortal(
    <div className={scss.overlayMod}>
      <div className={scss.modal}>
        <div className={scss.container}>
          <BsArrowReturnLeft
            className={scss.icon}
            onClick={() => onModalClose()}
          />
          <UserInfo />
        </div>
        <div className={scss.form}>
          <DiaryAddProductForm />
        </div>
      </div>
    </div>,
    modalRoot
  );
};
