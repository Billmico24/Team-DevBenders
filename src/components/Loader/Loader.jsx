import { ThemeContext } from 'components/Context/Context';
import React, { useContext } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { LoaderWrapper, MainLoader } from './Loader.styled';

export const Loader = () => {
  const { isChristmas } = useContext(ThemeContext);

  return (
    <MainLoader>
      <LoaderWrapper>
        <TailSpin
          color={isChristmas ? '#FFFF' : '#FFFF'}
          arialLabel="loading-indicator"
          height="120"
          width="120"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </LoaderWrapper>
    </MainLoader>
  );
};


