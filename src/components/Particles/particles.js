import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Particles from 'particles.js';

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Ensure particles are behind other content */
`;

const ParticlesEffect = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (particlesRef.current) {
      Particles.init({
        selector: particlesRef.current,
        color: '#ffffff', // Adjust particle color
        connectParticles: true,
        maxParticles: 100, // Adjust particle count
        responsive: [
          {
            breakpoint: 768,
            options: {
              maxParticles: 80,
            },
          },
          {
            breakpoint: 425,
            options: {
              maxParticles: 50,
            },
          },
          {
            breakpoint: 320,
            options: {
              maxParticles: 30,
            },
          },
        ],
      });
    }
  }, []);

  return <ParticleContainer ref={particlesRef} />;
};

export default ParticlesEffect;
