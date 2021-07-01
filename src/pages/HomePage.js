import React from 'react'
import styled from 'styled-components'
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .hero-area{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .link-icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .link-icon{
                border: 2px solid var(--font-light-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #6f42c1;
                    color: #6f42c1;
                }
            }
            .i-linkedin{
                &:hover{
                    border: 2px solid #0a66c2;
                    color: #0a66c2;
                }
            }
        }
    }
    span{
        font-weight: 1000;
    }
    #scroll {
        margin: 0 auto; 
        position: sticky;
        height: 40px;
        width: 50%;
        background: black;
        text-align: center;
        color: red;
    }
`;


function HomePage() {
    return (
        <HomePageStyled>
            <div className ="hero-area">
                <h1>Hello my name is <span> Joel Klemens</span></h1>
                <p>Software Developer - Personal Portfolio Website</p>
                <div className ="link-icons">
                    <a href="https://github.com/joel-klemens" className="link-icon i-github">
                        <GithubIcon /> 
                    </a>
                    <a href="https://www.linkedin.com/in/joel-klemens-09242a185" className="link-icon i-linkedin">
                        <LinkedInIcon /> 
                    </a>
                </div>
            </div>
            
        </HomePageStyled>
    )
}

export default HomePage;
