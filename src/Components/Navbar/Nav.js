//@ts-check

import React, { Component } from "react"
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
//import {Link} from 'react-scroll'
//logo image
import logo from '../../images/logo.png'
//icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
//siging in and out 
import SignOut from "../Authentication/SignOut";

const NavStyled = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    /* .background-blur {
        position: absolute;
        width: 100%;
        height: 100%;
        filter: blur(8px); 
    } */
    .nav-logo{
        height: 53px;
        width: 273px;
        margin-top: 0px;
        display: flex;
        align-items: center;
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
            border-radius: 28px;
            background-color: rgba(0,0,0,0.2);
            padding: 7px;
            padding-top: 9px;
            padding-right: 10px;
        }
        div{
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
        align-items: center;
        flex-direction: row;
        justify-content: left;
        text-transform: uppercase;
        margin-top: 9px;
        .active-class{
            color: black;
            font-weight: 700;
            border-radius: 28px;
            background-color: rgba(0,0,0,0.2);
            padding: 7px;
            padding-top: 9px;
            padding-right: 10px;
        }
        div{
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


class NavTop extends Component{
    render() {
        return (
            <NavStyled>
                <div className="nav-logo">
                <NavLink to="/"exact><img src={logo} alt="Joel Klemens Logo"/></NavLink>
                </div>
                <div className="nav-items">
                    <div>
                        <NavLink to="/" activeClassName="active-class" exact><HomeIcon className="icon"/>Home </NavLink>
                    </div>
                    {/* <p>
                        <NavLink to="/about" activeClassName="active-class" exact><InfoIcon className="icon"/>About</NavLink>
                        <Link to="about" activeClass="active-class" spy={true} smooth={true} offset={50} duration={500}>
                            <InfoIcon className="icon"/>About
                        </Link>
                    </p> */}
                    <div>
                        <NavLink to="/resume" activeClassName="active-class" exact><InfoIcon className="icon"/> Resume </NavLink>
                    </div>
                    <div>
                        <NavLink to="/projects" activeClassName="active-class" exact><ListAltIcon className="icon"/> Projects </NavLink>
                    </div>
                    {/* <div>
                        <NavLink to="/papers" activeClassName="active-class" exact><ListAltIcon className="icon"/> Papers </NavLink>
                    </div> */}
                </div>
                <div className="nav-items-right">
                    <div>
                        <NavLink to="/contact" activeClassName="active-class" exact><PersonIcon className="icon"/> Contact </NavLink>
                    </div> 
                    <div>
                        <SignOut /> 
                    </div>
                </div>
            </NavStyled>
        )
    }
}
export default NavTop;
