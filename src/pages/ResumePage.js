import React from 'react';
import resumePDF from '../PDF/Joel_Klemens_Resume.pdf';
import styled from 'styled-components';
//import Title from '../Components/Title'
//import bgndImg from '../images/hike-fernie-top.jpg';
import resumeImg from "../images/resume-img.png"

const ResumeStyled = styled.div`
    padding: 6rem;
    background: linear-gradient(to bottom, #8e7b87 35%, #ffa96e 150%);
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;
    background-size: cover;

    .resume-holder {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        margin-top: 2%;
        
        img {
            width: 100%;
            box-shadow: 5px 5px 10px 10px #747474;
        }
        a {
            margin: 20px;
            width: 150px;
            height: 30px;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            color: #425154;
            background: #c1a471;
            border: 2px solid #425154;
            box-shadow: 5px 5px 0 #425154,
                -5px -5px 0 #425154,
                -5px 5px 0 #425154,
                5px -5px 0 #425154;
            transition: 500ms ease-in-out;
            text-align: center;
        }       
        a:hover {
            box-shadow: 20px 5px 0 #425154, -20px -5px 0 #425154;
        }
        a:focus {
            outline: none;
        }
    }
    .page-title {
        display:none; 
    }
    @media screen and (max-width: 1200px) {
        padding: 4rem;
        .resume-holder {
            margin-top: 6%;
        }
    }
    @media screen and (max-width: 1000px) {
        .page-title {
            display: inline; 
        }
        .resume-holder {
            margin-top: 0;
        }
    }
    @media screen and (max-width: 750px) {
        height: 100vh;
    }
    @media screen and (max-width: 700px) {
        padding: 2rem;
    }
`;

function ResumePage() {
    return (
        <ResumeStyled> 
            {/* <Resume /> */}
            <div className="resume-holder">
                <h1 className="page-title">My Resume</h1> 
                <a href={resumePDF}>Download</a>
                <img src={resumeImg} alt="resume, use download button for screen reader accessibility"></img>
            </div>
        </ResumeStyled>
    )
}

export default ResumePage