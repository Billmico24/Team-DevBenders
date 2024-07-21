import React from 'react';
import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { TeamCard } from './TeamCard'; // Adjust the import path as needed
import { Overlay, ModalWindowTeam, CloseArrow, ButtonClose } from '../Modal/Modal.styled'; // Updated import path

const modalRoot = document.querySelector('#root');

const teamMembers = [
  { name: 'Bill Mico Malazarte', role: 'Team Leader', contributions: 'Product Management', link: 'https://www.linkedin.com/in/billmico/' },
  { name: 'Alexander Dinoy Jr.', role: 'Scrum-master', contributions: 'Calculator and Modal', link: 'https://www.linkedin.com/in/alexanderdinoy/' },
  { name: 'Jovelyn Molos', role: 'Frontend developer', contributions: 'User Summary & Food not recommended', link: 'https://www.linkedin.com/in/jovelynmolos/' },
  { name: 'Franci Reyes Giordani', role: 'Frontend developer', contributions: 'Home file, favicon', link: 'https://www.linkedin.com/in/francireyesgiordani/' },
  { name: 'Judielyn Pagente', role: 'Frontend developer', contributions: 'User Dashboard and Diary/Add product', link: 'https://www.linkedin.com/in/judielynpagente/' },
  { name: 'Crisanto Pedroso', role: 'Frontend developer', contributions: 'Footer and Team Modal', link: 'https://www.linkedin.com/in/crisantopedroso/' },
  { name: 'Jed Alston Fallorina', role: 'Backend developer', contributions: 'Daily Calorie Allowance and Foods', link: 'https://www.linkedin.com/in/jedalstonfallorina/' },
  { name: 'Cyfred Odarve', role: 'Backend developer', contributions: 'Authentication and Authorization', link: 'https://www.linkedin.com/in/cyfredodarve/' },
  { name: 'Percival Aceron', role: 'Backend developer', contributions: 'Daily Information and Documentation', link: 'https://www.linkedin.com/in/percivalaceron/' }
];

export const TeamModal = ({ onClose }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose(false);
    }
  };

  return createPortal(
    <Overlay onClick={handleBackDropClick}>
      <ModalWindowTeam
        style={
          isMobile
            ? {
                paddingTop: '30px',
                height: '90vh',
                transform: 'translate(-50%,-62%)',
              }
            : { paddingTop: '50px' }
        }
      >
        <CloseArrow onClick={() => onClose(false)} />
        <h2 style={{ textAlign: 'center' }}>
          Team DevBenders
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {teamMembers.map(member => (
            <TeamCard 
              key={member.name} 
              name={member.name} 
              role={member.role} 
              contributions={member.contributions}
              link={member.link}
            />
          ))}
        </div>
        <ButtonClose onClick={() => onClose(false)}>Close</ButtonClose>
      </ModalWindowTeam>
    </Overlay>,
    modalRoot
  );
};
