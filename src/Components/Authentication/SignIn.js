//@ts-check
import Auth from "@aws-amplify/auth";
import { Button } from "@material-ui/core";
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from 'styled-components';
import ParticlesBG from "../Particles-bg";

const SignInStyled = styled.div`
    margin-top: 100px;
    margin-left: 20%;
    margin-right: 20%; 
    .signin {    
        height: 520px;
        width: 400px;
        //background-color: rgba(255, 255, 255, 0.13);
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
        p {
            color: white; 
            text-align: center;
            a {
                text-decoration: underline;
                :hover{
                    font-size: 1.1rem;
                }
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
    .Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: black; 
    }
    input {
        background-color: transparent;
    }
    #username {
        margin: 10px; 
    }
    #password {
        margin: 10px;
    }
    #tsparticles canvas {
        z-index: -1;
    }
    #username {
        background-image: none;
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
                    id="username"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className="sign-in-button" variant="contained" color="inherit" onClick={signIn}>
                    Sign In
                </Button>
                <p>
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </SignInStyled>
    );
}
export default SignIn; 