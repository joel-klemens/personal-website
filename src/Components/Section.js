import React from 'react'
import styled from 'styled-components';
import AboutInfo from '../Components/AboutInfo'
// images
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//icons
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SectionStyled = styled.header`
    .section {
        height: 100vh;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        scroll-snap-align: start;
    }
    .section-container {
        width: 40vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        .section-text {
            text-align: center;
            margin-top: 25%;
            display: flex;
            flex-direction: column;
            font-size: 44px;
            color: black;
            align-items: center;
            flex: 1;
            p {
                font-family: 'Sriracha', cursive;
            }
            .section-description {
                p{
                    font-weight: 500;
                    font-size: 20px;
                    font-family: 'Press Start 2P', cursive;
                }
                
            }
        }
        .lower-third {
            margin-bottom: 1%;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .link-icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            color: black;
        }
        .link-icon {
            margin: 35px;
            border: 2px solid black;
            position: relative;
            border-radius: 50%;
            transition: all 0.4s ease-in-out;
            cursor: pointer;
            color: black;
            &:hover {
                border: 2px solid black;
                color: black;
            }
            svg {
                margin: 0.75rem;
            }
        }
        .i-github {
            &:hover {
                border: 2px solid #6f42c1;
                color: #6f42c1;
            }
        }
        .i-linkedin {
            &:hover {
                border: 2px solid #0a66c2;
                color: #0a66c2;
            }
        }
        .scrolldown {
            --color: black;
            --sizeX: 30px;
            --sizeY: 50px;
            position: relative;
            width: var(--sizeX);
            height: var(--sizeY);
            margin-left: var(sizeX / 2);
            border: calc(var(--sizeX) / 10) solid var(--color);
            border-radius: 50px;
            box-sizing: border-box;
            //margin-bottom: 16px;
        }

        .scrolldown::before {
            content: "";
            position: absolute;
            bottom: 30px;
            left: 50%;
            width: 6px;
            height: 6px;
            margin-left: -3px;
            background-color: var(--color);
            border-radius: 100%;
            animation: scrolldown-anim 2s infinite;
            box-sizing: border-box;
            box-shadow: 0px -5px 3px 1px #ffffff66;
        }

        @keyframes scrolldown-anim {
            0% {
                opacity: 0;
                height: 6px;
            }
            40% {
                opacity: 1;
                height: 10px;
            }
            80% {
                transform: translate(0, 20px);
                height: 10px;
                opacity: 0;
            }
            100% {
                height: 3px;
                opacity: 0;
            }
        }
        .chevrons {
            padding: 6px 0 0 0;
            margin-left: -3px;
            margin-top: 48px;
            width: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .chevrondown {
            margin-top: -6px;
            position: relative;
            border: solid var(--color);
            border-width: 0 3px 3px 0;
            display: inline-block;
            width: 10px;
            height: 10px;
            transform: rotate(45deg);
        }
        .chevrondown:nth-child(odd) {
            animation: pulse 500ms ease infinite alternate;
        }
        .chevrondown:nth-child(even) {
            animation: pulse 500ms ease infinite alternate 250ms;
        }
        @keyframes pulse {
            from {
                opacity: 0;
            }
            to {
                opacity: 0.5;
            }
        }
    }
`;

//these are going to be the main sections on the homepage 
const section = ({sectionID, title, desc, backgroundimg, first, gitHubLinkedIn, aboutMe}) => {
    return (
        <SectionStyled>
            <div
                className="section"
                id={sectionID}
                style={{ backgroundImage: `url(${backgroundimg})` }}
            >
                <div className="section-container">
                    <div className="section-text">
                        <p>{title}</p>
                        <div className="section-description">
                            <p>{desc}</p>
                        </div>
                        {aboutMe && <AboutInfo />}
                    </div>
                    <div className="lower-third">
                        <a
                            href="https://github.com/joel-klemens"
                            className="link-icon i-github section-buttons"
                        >
                            <GithubIcon />
                        </a>
                        { first && (
                            <div className="scrolldown">
                                <div className="chevrons">
                                    <div className="chevrondown"></div>
                                    <div className="chevrondown"></div>
                                </div>
                            </div>
                        )} 
                        <a
                            href="https://www.linkedin.com/in/joel-klemens"
                            className="link-icon i-linkedin section-buttons"
                        >
                            <LinkedInIcon />
                        </a>
                    </div>
                    {/* <div className="lower-third">
                        <div className="section-buttons">
                            {gitHubLinkedIn && (
                                <div className="link-icons">
                                    <a
                                        href="https://github.com/joel-klemens"
                                        className="link-icon i-github"
                                    >
                                        <GithubIcon />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/joel-klemens"
                                        className="link-icon i-linkedin"
                                    >
                                        <LinkedInIcon />
                                    </a>
                                    /* If this is the first section on the page
                                    first && (
                                        <div className="scrolldown">
                                            <div className="chevrons">
                                                <div className="chevrondown"></div>
                                                <div className="chevrondown"></div>
                                            </div>
                                        </div>
                                    )
                                </div>
                            )
                        </div>
                    </div> */}
                </div>
            </div>
        </SectionStyled>
    );
}

export default section
