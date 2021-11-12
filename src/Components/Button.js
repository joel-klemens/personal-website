import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.a`
    color: white;
    padding: 10px;
    background-color: var(--dark-jungle-green);
    border-radius: 8px;
    font-size: 1.5em;
    font-weight: 600;
:hover {
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
        transform: scale(1.01);
    }
`;

const Button = ({title, link, clickFunc}) => {
    return (
        <ButtonStyled href={link} onClick={clickFunc}>
            {title}
        </ButtonStyled>
    )
}

export default Button;

