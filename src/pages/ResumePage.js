import React from 'react';
//import Resume from '../Components/Resume';
import styled from 'styled-components';
//import Title from '../Components/Title'
//import bgndImg from '../images/hike-fernie-top.jpg';
import resumeImg from "../images/resume-img.png"

const ResumeStyled = styled.div`
    padding: 6rem;
    background: linear-gradient(to bottom, #dee5f7ff 35%, #d4dd9fff 150%);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;

    .resume-holder {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        margin-top: 2%;
        .dl-button {
            padding: 5px; 

        }
        img {
            width: 100%;
        }
    }
    @media screen and (max-width:1200px){
		padding: 4rem;
        .resume-holder {
            margin-top: 6%;
        }
	}
    @media screen and (max-width:1000px){
        .resume-holder {
            margin-top: 0;
        }
	}
    @media screen and (max-width:700px){
		padding: 2rem;
	}
`;

function ResumePage() {
    return (
        //<MainLayout>
        <ResumeStyled> 
            {/* <Resume /> */}
            <div className="resume-holder">
                <a className="dl-button" href >Download a Copy</a>
                <img src={resumeImg} alt="resume, use download button for screen reader accessibility"></img>
            </div>
        </ResumeStyled>
            
       // </MainLayout>
    )
}

export default ResumePage