import { breakpoints } from 'assets/sizes';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  overflow-y: scroll;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 672px;
  padding: 64px 80px 80px;
  border-radius: 5px;
  background-color: var(--white);

  @media ${breakpoints.maxMobile} {
    padding: 60px 20px 30px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonsSet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;

  width: 100%;

  @media ${breakpoints.minTablet} {
    flex-direction: row;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  @media ${breakpoints.minTablet} {
    font-size: 26px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 16px;
  margin-bottom: 40px;
`;
