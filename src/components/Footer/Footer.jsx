// Footer.jsx
import React, { useState } from 'react';
import { FooterWrapper, EmText } from './footer.styled'; // Adjust path if necessary
import { TeamModal } from 'components/TeamModal/TeamModal'; // Adjust path if necessary

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FooterWrapper>
        &copy; {new Date().getFullYear()} Slim Mom Apps created by &nbsp;
        <EmText 
          onClick={openModal} // Add click handler
          role="button"
          aria-label="Open Team Devbenders modal"
        >
          Team 3 | "Team Devbenders"
        </EmText>
      </FooterWrapper>

      {isModalOpen && <TeamModal onClose={closeModal} />}
    </>
  );
};

export default Footer;
