import React from 'react'
import styled from 'styled-components'
import Contact from '../Components/Contact';
import ParticlesBG from "../Components/Particles-bg";

const ContactPageStyled = styled.section`
    padding: 6rem;
    //background: linear-gradient(to bottom, #8e7b87 35%, #ffa96e 150%);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    height: 100vh;
    background-size: cover;

    .contact-item-section{
        margin: 1px;
        form {
            margin: 10px;
            height: 520px;
            width: 800px;
            //background-color: rgba(255, 255, 255, 0.13);
            position: absolute;
            transform: translate(-50%, -50%);
            top: 60%;
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
        .form-group {
            display: flex; 
            flex-direction: column;
            align-items: stretch;
        }
        .form-label {
            color: #425154; 
            font-size: 1.5em;
            margin-bottom: 15px;
        }
        input {
            font-size: 1em;
            padding: 5px;
            border: 2px solid white;
            border-radius: 5px;
            box-shadow: 1px 1px 5px #555 inset;
        }
        textarea {
            padding: 5px;
            font-size: 1em;
            border: 2px solid white;
            border-radius: 5px;
            box-shadow: 1px 1px 5px #555 inset;
        }
        button {
            align-self: center;
            margin: 20px;
            width: 150px;
            height: 30px;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            color: #425154;
            background: #c1a47100;
            border: 2px solid #425154;
            box-shadow: 5px 5px 0 #425154,
                -5px -5px 0 #425154,
                -5px 5px 0 #425154,
                5px -5px 0 #425154;
            transition: 500ms ease-in-out;
            text-align: center;
        }       
        button:hover {
            box-shadow: 20px 5px 0 #425154, -20px -5px 0 #425154;
        }
        button:focus {
            outline: none;
        }
        .d-inline {
            align-self: center;
            font-weight: bolder;
            font-size: 1.5em;
        }
        .success-msg {
            color: green; 
        }
        .err-msg {
            color: red; 
        }
    }
    @media screen and (max-width: 830px){
        h2 {
            text-align: center; 
        }
        .contact-item-section form {
            margin-top: 40px;
            width: 85%;
            height: 70%;
        }
    }
    @media screen and (max-width: 830px){
        h2 {
            font-size: 2.5rem;
        }
    }
`;

class ContactPage extends React.Component {
    render() {
        return(
            <>
                <ParticlesBG />
                <Contact /> 
            </>
        )
    }
}
export default ContactPage;