import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // Check the initial state from the body class
  const isNightMode = document.body.classList.contains('nightmode');
  const [isNightModeEnabled, setIsNightModeEnabled] = useState(isNightMode);

  // Toggle function to switch night mode
  const toggleNightMode = () => {
    setIsNightModeEnabled(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add('nightmode');
      } else {
        document.body.classList.remove('nightmode');
      }
      return newMode;
    });
  };

  // Synchronize state with local storage
  useEffect(() => {
    const savedMode = localStorage.getItem('nightmode') === 'true';
    setIsNightModeEnabled(savedMode);
    if (savedMode) {
      document.body.classList.add('nightmode');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('nightmode', isNightModeEnabled);
  }, [isNightModeEnabled]);

  return (
    <ThemeContext.Provider
      value={{
        isNightMode: isNightModeEnabled,
        toggleNightMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
