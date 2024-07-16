// import { ThemeContext } from 'components/Context/Context';
// import React, { useContext } from 'react';
// import { TailSpin } from 'react-loader-spinner';
// import { LoaderWrapper, MainLoader } from './Loader.styled';

// export const Loader = () => {
//   const { isChristmas } = useContext(ThemeContext);

//   return (
//     <MainLoader>
//       <LoaderWrapper>
//         <TailSpin
//           color={isChristmas ? '#D6001C' : '#FC842D'}
//           arialLabel="loading-indicator"
//           height="120"
//           width="120"
//           wrapperStyle={{}}
//           wrapperClass=""
//           visible={true}
//           ariaLabel="three-circles-rotating"
//           outerCircleColor=""
//           innerCircleColor=""
//           middleCircleColor=""
//         />
//       </LoaderWrapper>
//     </MainLoader>
//   );
// };

import React from 'react';
import Scales from '../Loader/loader/images/loader.png';
import SpinnerBase from '../Loader/loader/images/loader-mini.png';
import { LoaderWrapper, MainLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <MainLoader>
    <LoaderWrapper>
        <img src={Scales} alt="scales" />
        <img src={SpinnerBase} alt="spinner" />
    </LoaderWrapper>
  </MainLoader>
  );
};
