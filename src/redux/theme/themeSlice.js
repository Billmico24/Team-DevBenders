import { createSlice } from '@reduxjs/toolkit';
import { storageThemeKeyName } from '../../theme/themeSwitch.js';
import { ThemeNames } from '../../types/themeNames.js';

const initialState = {
    currentTheme:
        localStorage.getItem(storageThemeKeyName) === ThemeNames.darkTheme
            ? ThemeNames.darkTheme
            : ThemeNames.lightTheme,
};

const themeSlice = createSlice({
    initialState,
    name: 'theme',
    reducers: {
        setDarkTheme: state => {
            state.currentTheme = ThemeNames.darkTheme;
        },
        setLightTheme: state => {
            state.currentTheme = ThemeNames.lightTheme;
        },
    },
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;