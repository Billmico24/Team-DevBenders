import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 10px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  text-align: center;

  @media (max-width: 426px) {
    max-width: 90%;
  }

  body.nightmode & {
    background: radial-gradient(ellipse at bottom, #003267 0%, #170b0b 100%);
  }
`;

const Name = styled.a`
  font-size: 18px;
  margin: 0;
  color: #0073b1;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Role = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0;
`;

const Contributions = styled.p`
  font-size: 12px;
  color: #777;
`;

export const TeamCard = ({ name, role, contributions, link }) => (
  <Card>
    <Name href={link} target="_blank" rel="noopener noreferrer">
      {name}
    </Name>
    <Role>{role}</Role>
    <Contributions>{contributions}</Contributions>
  </Card>
);
