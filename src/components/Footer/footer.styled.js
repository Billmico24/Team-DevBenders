// footer.styled.js
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  border-top: 1px solid #444;
`;

export const EmText = styled.em`
  font-style: italic;
  color: #ffdd57;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #fff; // Change to the color you want on hover
  }
`;
