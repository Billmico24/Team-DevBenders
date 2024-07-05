import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../../redux/theme/themeSlice';
import { setTheme, storageThemeKeyName } from '../../theme/themeSwitch';
import { ThemeNames } from '../../types/themeNames';
import './ThemeSwitcher.css';
import css from './ThemeSwitcher.module.css';

function ThemeSwitcher() {
    const [check, setCheck] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.getItem(storageThemeKeyName) === ThemeNames.darkTheme
            ? setCheck(true)
            : setCheck(false);
    }, []);

    const toggleTheme = () => {
        const savedTheme = localStorage.getItem(storageThemeKeyName);
        if (savedTheme === ThemeNames.darkTheme) {
            setTheme(ThemeNames.lightTheme);
            dispatch(setLightTheme());
            setCheck(false);
        } else {
            setTheme(ThemeNames.darkTheme);
            dispatch(setDarkTheme());
            setCheck(true);
        }
    };
    return (
        <div className={css.container}>
            <label className="switch">
                <input className="inputBox" type="checkbox" checked={check} onChange={toggleTheme} />
                <span className="round slider"></span>
            </label>
        </div>
    );
};

export default ThemeSwitcher;