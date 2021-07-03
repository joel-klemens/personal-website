import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import logo from '../../images/logo.png'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';

const NavStyled = styled.nav`
    display: flex;
    height: 100%;
    width: 100vw ;
    .nav-logo{
        height: 53px;
        width: 200px;
        margin-top: 0px;
        img{
            width: 100%;
        }
    }
    .nav-items{
        flex: 1;
        display: flex;
        justify-content: center;
        margin: 10px;
        margin-top: 20px;
        .active-class{
            color: black;
            font-weight: 700;
        }
        p{
            a{
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                letter-spacing: 1px;
                margin: 10px;
                font-weight: 600;
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
    .nav-items-right{
        display: flex;
        justify-content: flex-end;
        text-transform: uppercase;
        margin-top: 9px;
        .active-class{
            color: black;
            font-weight: 700;
        }
        p{
            text-transform: uppercase;
            transition: all .4s ease-in-out;
            letter-spacing: 1px;
            margin: 10px;
            font-weight: 600;
            a{
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                letter-spacing: 1px;
                //margin: 10px;
                margin-right: 30px;
                font-weight: 600;
                .icon{
                    //display: none;
                    margin-right: 5px;
                    vertical-align: sub;
                }
            }
        }
    }
`;

function Nav() {
    return (
        <NavStyled>
            <div className="nav-logo">
                <img src={logo} alt="Joel Klemens Logo"/>
            </div>
            <div className="nav-items">
                <p>
                    <NavLink to="/" activeClassName="active-class" exact><HomeIcon className="icon"/>Home</NavLink>
                </p>
                <p>
                    <NavLink to="/about" activeClassName="active-class" exact><InfoIcon className="icon"/>About</NavLink>
                </p>
                <p>
                    <NavLink to="/resume" activeClassName="active-class" exact><ListAltIcon className="icon"/> Resume</NavLink>
                </p>
                <p>
                    <NavLink to="/projects" activeClassName="active-class" exact><ListAltIcon className="icon"/> Projects</NavLink>
                </p>
                <p>
                    <NavLink to="/papers" activeClassName="active-class" exact><ListAltIcon className="icon"/> Papers</NavLink>
                </p>
            </div>
            <div className="nav-items-right">
                <p>
                    <NavLink to="/contact" activeClassName="active-class" exact><PersonIcon className="icon"/>Contact</NavLink>
                </p>
            </div>
        </NavStyled>
    )
}

export default Nav;
