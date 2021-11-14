import { Auth } from 'aws-amplify';
import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import styled from 'styled-components'

const SignUpStyled = styled.div`
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
    #email {
        margin: 10px;
    }
`; 

const SignUp = () => {
    const [formState, setformState] = useState('signUp');
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    
    const signUp = async() => {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    // optional
                    // optional - E.164 number convention
                    // other custom attributes 
                }
            });
            console.log(user);
            setformState('verify');
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    //confirm sign up email verification 
    const verify = async() => {
        try {
            await Auth.confirmSignUp(username, code);
            console.log('user verified');
            setformState('verified');
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }
    return (
        <SignUpStyled>
            {
                formState === 'signUp' && (
                    <div className="signup">
                        <TextField
                            id='username'
                            label='Email'
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
                        <Button variant="contained" color="primary" onClick={signUp}>
                            Sign Up
                        </Button> 
                    </div>
                )
            }
            {
                formState === 'verify' && (
                    <div className="verify">
                        <TextField
                                id='verify-code'
                                label='Verification Code'
                                value={code}
                                onChange={e => setCode(e.target.value)}
                        />
                        <Button variant="contained" color="primary" onClick={verify}>
                            Verify
                        </Button> 
                    </div>
                )
            }
            {
                formState === 'verified' && (
                    <div className="verified">
                        <h1>You have been verified <a href="/signin">click here</a> to sign in!</h1>
                    </div>
                )
            }
        </SignUpStyled>
    )
}
export default SignUp; 