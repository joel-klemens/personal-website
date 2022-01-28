import React, { useContext } from 'react';
import  { Auth } from 'aws-amplify';
import styled from 'styled-components'
//import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const SignInStyled = styled.p`
    button {
        text-transform: uppercase;
        margin: 10px;
        padding: 2px;
        width: 95px;
        cursor: pointer;
        font-size: 17px;
        font-weight: bold;
        color: #606060;
        background: #ffffff00;
        border: 2px solid #606060;
        box-shadow: 3px 3px 0 #606060,
            -3px -3px 0 #606060,
            -3px 3px 0 #606060,
            3px -3px 0 #606060;
        transition: 800ms ease-in-out;
        text-align: center;
    }       
    button:hover {
        box-shadow: 20px 5px 0 #606060, -20px -5px 0 #606060;
    }
    button:focus {
        outline: none;
    }
`;

const SignOut = () => {
    //get logged in from user context 
    const {loggedIn, setloggedIn} = useContext(UserContext); 

    const signOut = async() => {
        try {
            await Auth.signOut();
            setloggedIn(false);
            //console.log('Signing out...')
        } catch (error) {
            console.log('error signing out ', error);
        }
    } 
    return (
        <SignInStyled>
            { loggedIn ? (<button onClick={signOut} >Sign Out</button>
			) : (
			<Link to="/signin"><button>Sign In</button></Link>)}
        </SignInStyled>
    )
}
export default SignOut; 