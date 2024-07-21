import { ThemeContext } from 'components/Context/Context';
import React, { useContext } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { LoaderWrapper, MainLoader } from './Loader.styled';

export const Loader = () => {
  const { isNightMode } = useContext(ThemeContext);

  // Define colors based on night mode
  const colors = isNightMode
    ? ['#D6001C', '#FC842D', '#FF5722', '#FF9800', '#FFC107']
    : ['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87'];

  return (
    <MainLoader>
      <LoaderWrapper>
        <ColorRing
          visible={true}
          height="120"
          width="120"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={colors}
        />
      </LoaderWrapper>
    </MainLoader>
  );
};
