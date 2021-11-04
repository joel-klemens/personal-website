import React from 'react'
import styled from 'styled-components';
import AboutInfo from '../Components/AboutInfo'
// images
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//icons
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SectionStyled = styled.header`
    .section{
        height: 100vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        scroll-snap-align: start;
    }
    .section-container{
        width: 40vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        .section-text{
            text-align: center;
            margin-top: 25%;
            display: flex;
            flex-direction: column;
            font-size: 44px;
            color: black;
            align-items: center;
            flex: 1;
            .section-description{
                font-weight: 500;
                font-size: 20px;
            }
        }
        .lower-third{
            margin-bottom: 5%;
            display: flex;
            flex-direction: column;
            .link-icons{
                display: flex;
                justify-content: center;
                margin-top: 1rem;
                color: black;
                .link-icon{
                    border: 2px solid black;
                    position: relative;
                    top: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all .4s ease-in-out;
                    cursor: pointer;
                    &:hover{
                        border: 2px solid black;
                        color: black;
                    }
                    &:not(:last-child){
                        margin-right: 5rem;
                    }
                    svg{
                        margin: .75rem;
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
            .scroll-down{
                color: black;
                width: 100%;
                justify-content: center;
                align-items: center;
                .MuiSvgIcon-root{
                    display: block;
                    margin: auto;
                    justify-content: center;
                    width: 2.5em;
                    height: 2.5em;
                }
            }
        }
    }
`;

//these are going to be the main sections on the homepage 
const section = ({sectionID, title, desc, backgroundimg, first, gitHubLinkedIn, aboutMe}) => {
    return (
        <SectionStyled>
            <div className="section" id={sectionID} style={{ backgroundImage: `url(${backgroundimg})` }}>
                <div className='section-container'>
                    <div className="section-text">
                        <p>{title}</p>
                        <div className="section-description">
                            <p>{desc}</p>
                        </div>
                        {aboutMe && (
                            <AboutInfo /> 
                        )}
                    </div>
                    <div className="lower-third">
                        <div className="section-buttons">
                            {gitHubLinkedIn && (
                                <div className ="link-icons">
                                    <a href="https://github.com/joel-klemens" className="link-icon i-github">
                                        <GithubIcon /> 
                                    </a>
                                    <a href="https://www.linkedin.com/in/joel-klemens-09242a185" className="link-icon i-linkedin">
                                        <LinkedInIcon /> 
                                    </a>
                                </div>
                            )}
                        </div>
                        {/* If this is the first section on the page */}
                        {first && (
                            <div className="scroll-down">
                                <ExpandMoreIcon /> 
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SectionStyled>
    )
}

export default section
