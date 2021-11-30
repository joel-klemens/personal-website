import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import MenuIcon from '@mui/icons-material/Menu';

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

    .burger-menu {
        display:none; 
    }
    @media screen and (max-width:1000px){
        Nav {
            display:none;
        } 
        .burger-menu {
            display: flex;
        }
    }
`;

function TopNavBar() {
    return (
        <TopNavBarStyled>
            <Nav /> 
            <div className="burger-menu">
                <MenuIcon />
            </div>
        </TopNavBarStyled>
    )
}

export default TopNavBar;
