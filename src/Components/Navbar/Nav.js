import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import portrait from '../../images/canoe-algonquin.JPG'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';

const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        height: 8rem;
        width: 130px;
        margin-top: 7px;
        img{
            width: 100%;
            border-radius: 100%;
        }
    }
    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    //background-color: var( --primary-color);
                    background: linear-gradient(to right, white,var(--primary-color-light));
                    transition: All 0.6s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.4;
                    z-index: -1;
                }
                .icon{
                    //display: none;
                    margin-right: 5px;
                    vertical-align: sub;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
            
        }
    }
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;

function Nav() {
    return (
        <NavStyled>
            <div className="avatar">
                <img src={portrait} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact><HomeIcon className="icon"/>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact><InfoIcon className="icon"/>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact><ListAltIcon className="icon"/> Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact><PersonIcon className="icon"/>Contact</NavLink>
                </li>
            </ul>
            <div className="menu">
                <p>Menu Button</p>
            </div>
        </NavStyled>
    )
}

export default Nav;
