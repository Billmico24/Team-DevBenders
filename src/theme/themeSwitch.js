import { ThemeNames } from '../types/themeNames';

const storageThemeKeyName = 'theme';

const setHtmlTagClassname = (themeName) => {
    document.documentElement.className = themeName;
};

const setTheme = (themeName) => {
    localStorage.setItem(storageThemeKeyName, themeName);
    setHtmlTagClassname(themeName);
};

export { ThemeNames, storageThemeKeyName, setHtmlTagClassname, setTheme };