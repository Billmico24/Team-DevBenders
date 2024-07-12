// import { MagnifyingGlass } from 'react-loader-spinner';
// import React from 'react';
// import scss from './Loader.module.scss';
// export const Loader = () => {
//   return (
//     <div className={scss.loader}>
//       {' '}
//       <MagnifyingGlass
//         visible={true}
//         height="80"
//         width="80"
//         ariaLabel="MagnifyingGlass-loading"
//         wrapperStyle={{}}
//         wrapperClass="MagnifyingGlass-wrapper"
//         glassColor="#c0efff"
//         color="#e15b64"
//       />
//     </div>
//   );
// };


import React from 'react';
import Scales from 'images/loader/loader.png';
import SpinnerBase from 'images/loader/loader-mini.png';
import scss from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={scss.loader}>
      <div className={scss.spinnerContainer}>
        <img src={Scales} alt="scales" className={scss.scales} />
      </div>
      <div className={scss.spinner}>
        <img src={SpinnerBase} alt="spinner" className={scss.arrow} />
      </div>
    </div>
  );
};
