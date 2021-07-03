import React from 'react'
import styled from 'styled-components';
// images
import pointer from '../images/pointer.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core'

const SectionStyled = styled.header`
    .section{
        height: 100vh;
        width: 99.1vw;
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
            margin-top: 20%;
            display: flex;
            flex-direction: column;
            font-size: 34px;
            color: black;
            align-items: center;
            flex: 1;
            .section-description{
                font-weight: 200;
                font-size: 14px;
            }
        }
        .lower-third{
            margin-bottom: 5%;
            display: flex;
            flex-direction: column;
            .section-buttons{
                display: flex;
            }
            .scroll-down{
                color: black;
                width: 100%;
                margin-top: 3%;
                justify-content: center;
                align-items: center;
                .MuiSvgIcon-root{
                    display: block;
                    margin: auto;
                    justify-content: center;
                    width: 2em;
                    height: 2em;
                }
            }
        }
    }
`;

//these are going to be the main sections on the homepage 
const section = ({title, desc, backgroundimg, first, mePointer}) => {
    return (
        <SectionStyled>
            <div className="section" style={{ backgroundImage: `url(${backgroundimg})` }}>
                <div className='section-container'>
                    <div className="section-text">
                        <p>{title}</p>
                        <div className="section-description">
                            <p>{desc}</p>
                        </div>
                    </div>
                    {/* {mePointer && (
                        <div className="me-pointer">
                            <img src={pointer} alt="Arrow pointing at me"/>
                        </div>
                    )} */}
                    <div className="lower-third">
                        <div className="section-buttons">
                            <Button /> 
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
