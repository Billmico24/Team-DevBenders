import scss from './Btn.module.scss';
import {clsx} from 'clsx';

export const Btn = ({ children, onBtnClick, type = 'submit', variant}) => {
  return (
    <button className={clsx(scss[variant])} type={type} onClick={onBtnClick}>
      {children}
    </button>
  );
};
