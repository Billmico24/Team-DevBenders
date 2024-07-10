import React, { useState } from 'react';
import { ReactComponent as BurgerIcon } from 'images/burger/burger.svg';
import { ReactComponent as CloseIcon } from 'images/close/close.svg';
import Modal from 'components/ModalMobMenu/ModalMobMenu';
import s from '../Burger/Burger.module.scss';

export default function Burger() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onToggle = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <>
      <button onClick={onToggle} className={s.btn}>
        {!isModalOpen ? (
          <BurgerIcon className={s.burger} />
        ) : (
          <CloseIcon className={s.close} />
        )}
      </button>
      <Modal isModalOpen={isModalOpen} onClose={handleModalClose} />
    </>
  );
}
