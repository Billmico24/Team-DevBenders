import { ThemeContext } from 'components/Context/Context';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogOutUserMutation } from 'redux/auth';
import { logOut } from 'redux/authSlice';
import { Exit, Name, Section } from './UserInfo.styled';
import { ExitModal } from 'components/ExitModal/ExitModal';

export const BottomSection = ({ name }) => {
  const { toggleNightMode } = useContext(ThemeContext);

  const body = document.querySelector('body');

  const [isModalOpened, setIsModalOpened] = useState(false);

  const onModalClose = () => {
    setIsModalOpened(!isModalOpened);
    body.style.overflow = 'auto';
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logOutUser] = useLogOutUserMutation();

  const handleLogout = () => {
    logOutUser();
    dispatch(logOut());
    navigate('/');
    const body = document.querySelector('body');
    body.classList.remove('NightMode');
    toggleNightMode(false);
  };

  return (
    <Section>
      {isModalOpened && <ExitModal onClose={onModalClose} handleLogout={handleLogout} />}
      <Name>{name}</Name>
      <Exit onClick={() => setIsModalOpened(!isModalOpened)}>Exit</Exit>
    </Section>
  );
};
