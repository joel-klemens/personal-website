import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import NavTop from './Nav'
import BurgerMenu from './burger-nav'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close';

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
    z-index: 1000;

    .burger-menu {
        display:none; 
    }
    @media screen and (max-width:1000px){
        width: auto;
        Nav {
            display:none;
        } 
        .burger-menu {
            display: flex;
            width: 80px;
            height: 80px;
            svg {
                width: 100%;
                height: 100%;
            }
        }
    }
`;

function TopNavBar() {
    const [burger, setBurger] = useState(false)

    const handleBurger = () => {
        setBurger(!burger) 
        //console.log("Burger: ", burger)
    }

    return (
        <TopNavBarStyled>
            <NavTop /> 
            <div className="burger-menu">
                { burger ? <CloseIcon onClick={handleBurger}/> : <MenuIcon onClick={handleBurger} /> } 
            </div>
            {burger ? <BurgerMenu  onClick={handleBurger}/> : <></>} 
        </TopNavBarStyled>
    )
}

export default TopNavBar;
