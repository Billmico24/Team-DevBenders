import React from 'react';
import { createPortal } from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { TeamCard } from './TeamCard'; // Adjust the import path as needed
import { Overlay, ModalWindowTeam, CloseArrow, ButtonClose } from '../Modal/Modal.styled'; // Updated import path

const modalRoot = document.querySelector('#root');

const teamMembers = [
  { name: 'Bill Mico Malazarte', role: 'Team Leader', contributions: 'In charge of the backend, Product Management', link: 'https://www.linkedin.com/in/bill-mico-malazarte/' },
  { name: 'Alexander Dinoy Jr.', role: 'Scrum-master', contributions: 'In charge of the frontend, Calculator and Modal', link: 'https://www.linkedin.com/in/alexander-d-18b292216/' },
  { name: 'Jovelyn Molos', role: 'Frontend developer', contributions: 'User Summary & Food not recommended', link: 'https://www.linkedin.com/in/jovelyn-molos-139100114/' },
  { name: 'Franci Reyes Giordani', role: 'Frontend developer', contributions: 'Home file, favicon', link: 'https://www.linkedin.com/in/franci-giordani-581014156/' },
  { name: 'Judielyn Pagente', role: 'Frontend developer', contributions: 'User Dashboard and Diary/Add product', link: 'https://www.linkedin.com/in/judielyn-pagente-9a3127169/' },
  { name: 'Crisanto Pedroso', role: 'Frontend developer', contributions: 'Footer and Team Modal', link: 'mailto:budiepeds@gmail.com' },
  { name: 'Jed Alston Fallorina', role: 'Backend developer', contributions: 'Daily Calorie Allowance and Foods', link: 'https://www.linkedin.com/in/jed-alston-fallorina-992853254/' },
  { name: 'Cyfred Odarve', role: 'Backend developer', contributions: 'Authentication and Authorization', link: 'https://www.linkedin.com/in/cyfred-odarve-6a68b890/' },
  { name: 'Percival Aceron', role: 'Backend developer', contributions: 'Daily Information and Documentation', link: 'https://www.linkedin.com/in/percival-aceron/' }
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
