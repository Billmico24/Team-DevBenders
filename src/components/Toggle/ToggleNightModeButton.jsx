import React, { useContext } from 'react';
import { ThemeContext } from '../Context/Context'; // Adjust the path if necessary
import { ReactComponent as SunIcon } from '../../images/svg/sun.svg'; // Import Sun SVG
import { ReactComponent as MoonIcon } from '../../images/svg/moon.svg'; // Import Moon SVG
import styled from 'styled-components';

// Styled button for better customization
const ToggleButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  width: 40px; /* Adjust size as needed */
  height: 10px; /* Adjust size as needed */
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus,
  &:hover {
    outline: none;
    /* Add any hover/focus styles here */
  }
`;

const NightModeToggleButton = () => {
  const { isNightMode, toggleNightMode } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleNightMode}>
      {isNightMode ? <SunIcon /> : <MoonIcon />}
    </ToggleButton>
  );
};

export default NightModeToggleButton;
