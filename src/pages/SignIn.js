//@ts-check
import Auth from "@aws-amplify/auth";
import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from 'styled-components'

const SignInStyled = styled.div`
    margin-top: 100px;
    margin-left: 20%;
    margin-right: 20%; 
    .signin {
        display: flex;
        align-content: center;
        flex-wrap: nowrap;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    button {
        margin: 10px;
    }
    #username {
        margin: 10px; 
    }
    #password {
        margin: 10px;
    }
`; 

const SignIn = ({ onSignIn }) => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const history = useHistory();
    
    const signIn = async() => {
        try {
            await Auth.signIn(username, password);
            history.push('/'); 
            onSignIn();
        } catch (error) {
            console.log('There was an error logging in: ',error);
        }
    }

    return (
        <SignInStyled>
            <div className="signin">
                <TextField
                    id='username'
                    label='Username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    id='password'
                    label='Password'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={signIn}>
                    Sign In
                </Button> 
            </div>
        </SignInStyled>
    )
}
export default SignIn; 