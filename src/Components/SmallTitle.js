import React from 'react'
import styled from 'styled-components'

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    h3{
        color: var(--rocket-metallic);
        font-size: 2rem;
    }
`;

function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled >
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled >
    )
}

export default SmallTitle
