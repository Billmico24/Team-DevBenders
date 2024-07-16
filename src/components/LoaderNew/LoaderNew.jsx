import { RingLoader } from 'react-spinners';
import css from './LoaderNew.module.css';

export const LoaderNew = () => {
  return (
    <div className={css.container}>
      <RingLoader color="#FFFF" size={100} />
    </div>
  );
};
