import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const SideNavBarStyled = styled.div`
    width: 100vw;
    position: fixed;
    display: flex;
    top:0;
    margin: 15px;
    margin-top: 15px;
    z-index: 100;
    height: 10rem;
    background-color: transparent;
    overflow: hidden;
    transition: all .4s ease-in-out;
    transform: translateX(0);
    z-index: 20;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
    }
`;

function SideNavBar() {
    return (
        <SideNavBarStyled>
            <Nav /> 
        </SideNavBarStyled>
    )
}

export default SideNavBar;
