import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const TopNavBarStyled = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    top:0;
    background-color: transparent;
    overflow: hidden;
    transition: all .4s ease-in-out;
    transform: translateX(0);
    backdrop-filter: blur(10px);
    @media screen and (max-width:1000px){
        transform: translateX(-100%);
        z-index: 20;
    }
`;

function TopNavBar() {
    return (
        <TopNavBarStyled>
            <Nav /> 
        </TopNavBarStyled>
    )
}

export default TopNavBar;
