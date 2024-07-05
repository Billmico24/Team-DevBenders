import { MagnifyingGlass } from 'react-loader-spinner';
import React from 'react';
import scss from './Loader.module.scss';
export const Loader = () => {
  return (
    <div className={scss.loader}>
      {' '}
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};
