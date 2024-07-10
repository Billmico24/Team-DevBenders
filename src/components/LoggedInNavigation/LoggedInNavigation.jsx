
import { NavLink } from 'react-router-dom';
import s from '../LoggedInNavigation/LoggedInNavigation.module.scss';

export function LoggedInNavigation() {
  return (
    <>
      <li className={s.navigation__item}>
        <NavLink
          to="/diary"
          className={({ isActive }) => (isActive ? s.active : s.default)}
        >
          Diary
        </NavLink>
      </li>
      <li className={s.navigation__item}>
        <NavLink
          to="/calculator"
          className={({ isActive }) => (isActive ? s.active : s.default)}
        >
          Calculator
        </NavLink>
      </li>
    </>
  );
}
