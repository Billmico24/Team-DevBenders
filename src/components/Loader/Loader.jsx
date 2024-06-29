import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Overlay, LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay>
      <LoaderContainer>
        <ThreeDots
          type="ThreeDots"
          color="#FC842D"
          height={100}
          width={100}
          timeout={3000}
        />
      </LoaderContainer>
    </Overlay>
  );
};