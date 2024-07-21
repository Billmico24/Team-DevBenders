import { PacmanLoader } from 'react-spinners';
import css from './LoaderNew.module.css';

export const LoaderNew = () => {
  return (
    <div className={css.container}>
      <PacmanLoader color="#FFFF" size={100} />
    </div>
  );
};
