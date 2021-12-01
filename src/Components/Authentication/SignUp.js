import { Auth } from 'aws-amplify';
import { Button } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import styled from 'styled-components'

const SignUpStyled = styled.div`
    margin-top: 100px;
    margin-left: 20%;
    margin-right: 20%; 
    .signUp {
        height: 520px;
        width: 400px;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        border-radius: 10px;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(4px);
        border: 2px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
        padding: 50px 35px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: stretch;
    }
    .verify {
        height: 300px;
        width: 400px;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        border-radius: 10px;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(4px);
        border: 2px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
        padding: 50px 35px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: stretch;
    }
    .verified {
        height: 300px;
        width: 400px;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        border-radius: 10px;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(4px);
        border: 2px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
        padding: 50px 35px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: center;
        h1 {
            color: #232720ff; 
            text-align: center;
        }
        a {
            color: white; 
            background-color: #232720ff;
            padding: 6px 16px;
            font-size: 0.875rem;
            min-width: 64px;
            box-sizing: border-box;
            transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            font-weight: 500;
            line-height: 1.75;
            border-radius: 4px;
            letter-spacing: 0.02857em;
            text-transform: uppercase;
            :hover{
                background-color: #232720ff;
                transform: scale(1.05);
            }
        }
    }
    .MuiButtonBase-root{
        background-color: #232720ff;
        :hover{
            background-color: #232720ff;
            transform: scale(1.05);
        }
    }
    .MuiButton-label {
        color: white;
        margin: 10px;
        background-color:#232720ff;
    }
    .MuiTouchRipple-root {
        background-color:#232720ff;
        display:none;
    }
    .MuiFormLabel-root{
        color: black; 
       // font-size: 1.5em;
    }
    .MuiFormLabel-root.Mui-focused {
        color: black;
    }
    //border around the username 
    .Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: black; 
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
    #passwordConfirm {
        margin: 10px;
    }
    #email {
        margin: 10px;
    }
    .no-match {
        color: red; 
    }
    @media screen and (max-width: 600px){
        .signUp {
            width: 360px;
        }
        .verify {
            width: 360px;
        }
        .verified {
            width: 360px;
        }
    }
`; 

const SignUp = () => {
    const [formState, setformState] = useState('signUp');
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm ] = useState('');
    const [matchingPass, setMatchingPass] = useState(true);
    const [code, setCode] = useState('');
    
    const signUp = async() => {
        try {   
            //check if the passwords match 
            if(passwordConfirm === password){
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
            } else {
                //if they don't put message on screen
                setMatchingPass(false);
            }
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
                    <div className="signUp">
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
                        <TextField
                            id='passwordConfirm'
                            label='Confirm Password'
                            type='password'
                            value={passwordConfirm}
                            onChange={e => setPasswordConfirm(e.target.value)}
                        />
                        {matchingPass ? <></> : <p className="no-match">Passwords do not match</p> }
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
                        <h1>You have been verified </h1>
                        <a href="/signin">Sign In</a>
                    </div>
                )
            }
        </SignUpStyled>
    )
}
export default SignUp; 