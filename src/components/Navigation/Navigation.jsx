import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.scss';

export function Navigation() {
  return (
    <>
      <li className={s.navigation__item}>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? s.active : s.default)}
        >
          LOG IN
        </NavLink>
      </li>

      <li className={s.navigation__item}>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? s.active : s.default)}
        >
          REGISTRATION
        </NavLink>
      </li>
    </>
  );
}
