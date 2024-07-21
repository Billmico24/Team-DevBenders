import React from 'react';
import { footerStyle, emStyle } from './footer.styled'; // Adjust path if necessary

const Footer = () => {
  return (
    <footer style={footerStyle}>
      &copy; {new Date().getFullYear()} Slim Mom Apps created by <em style={emStyle}>Team 3 | "Team Devbenders"</em>
    </footer>
  );
};

export default Footer;
