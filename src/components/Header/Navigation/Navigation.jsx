import React, { useContext } from 'react';
import { Nav, StyledLink } from './Navigation.styled';
import { ThemeContext } from 'components/Context/Context'; // Import the ThemeContext
import NightModeToggleButton from 'components/Toggle/ToggleNightModeButton'; // Import the night mode toggle button component

export const Menu = ({ setOpenNavigation }) => {
  const handleClick = () => {
    setOpenNavigation(false);
  };

  const { isNightMode } = useContext(ThemeContext); // Access night mode state

  return (
    <Nav className={isNightMode ? 'nightmode' : ''}>
      <StyledLink to="calculator" onClick={handleClick}>
        Calculator
      </StyledLink>
      <StyledLink to="diary" onClick={handleClick}>
        Diary
      </StyledLink>
      {/* <StyledLink to="desktop" onClick={handleClick}>
        Desktop App
      </StyledLink> */}
      <div>
        <NightModeToggleButton /> {/* Add the night mode toggle button */}
      </div>
    </Nav>
  );
};
