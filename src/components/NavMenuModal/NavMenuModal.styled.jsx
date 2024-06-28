import { TransitionAnimation } from 'animations/TransitionAnimation.styled';
import { breakpoints } from 'assets/sizes';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Thumb = styled.div`
  position: absolute;
  top: 80px;
  z-index: 50;

  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding-top: 60px;
  font-size: 18px;
  text-transform: uppercase;

  background-color: var(--blue-txt-color);

  animation: ${TransitionAnimation} 0.5s linear infinite;
  animation-iteration-count: 1;

  @media ${breakpoints.minTablet} {
    font-size: 24px;
    line-height: 2.1;
    padding-top: 100px;
  }

  @media ${breakpoints.desktop} {
    display: none;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: var(--white);
  cursor: pointer;

  &.active,
  &:hover,
  &:focus {
    color: var(--secondary-text-color);
    transition: color var(--transition-params);
  }
`;
