import styled, { css } from 'styled-components';

export const ButtonStylePlh=css` 
display: flex;
text-align: center;
justify-content: center;

width: 100%;
padding: 13px 25px;
background: var(--accent-color);
box-shadow: 0px 4px 10px var(--accent-shadow);
border-radius: 30px;
border: 2px solid var(--accent-color);

color: var(--white);
cursor: pointer;
transition: color var(--transition-params);
transition: background var(--transition-params);

&:hover,
&:focus {
    color: var(--accent-color);
    background: transparent;
}

&:disabled {
    background: var(--secondary-text-color);
    box-shadow: 0px 4px 10px var(--secondary-text-color);
}

`;

export const Btn=styled.button` $ {
    ButtonStylePlh
}

`;