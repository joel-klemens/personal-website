import React, { useContext } from 'react';
import  { Auth } from 'aws-amplify';
import styled from 'styled-components'
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const SignInStyled = styled.p`
    margin: 10px; 
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
            { loggedIn ? (<Button onClick={signOut} variant="contained" color="primary">Sign Out</Button>
			) : (
			<Link to="/signin"><Button variant="contained" color="primary">Sign In</Button></Link>)}
        </SignInStyled>
    )
}
export default SignOut; 