import React, { Component } from "react"
import styled from 'styled-components';
//import Section from '../Components/Section'; 
//images
import fernieTop from '../images/hike-fernie-top.jpg';

const AboutStyled = styled.div`
    height: 100vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    .about-section {
        margin: 20px;
        height: 80%;
        width: 800px;
        background-color: rgba(255, 255, 255, 0.36);
        border-radius: 10px;
        backdrop-filter: blur(8px);
        border: 2px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
        padding: 50px 35px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-evenly;
        align-items: stretch;
        h2 {
            color: black;
            font-weight: bolder;
            font-size: 2.5em;
            align-self: center;
        }
        p {
            color: black;
            font-weight: bold;
            font-size: 1.2em;
        }
    }
    @media screen and (max-width: 730px){
        .about-section {
            height: auto;
            padding: 5px;
            backdrop-filter: none;
            background-color: rgba(255, 255, 255, 0.75);
            p {
                font-size: 1em;
            }
        }
    }
    @media screen and (max-width: 450px){
        .about-section {
            height: auto;
            padding: 5px;

            p {
                font-size: 0.75em;
            }
        }
    }
    
`;

class AboutPage extends Component{
    render() {
        return (
            <AboutStyled 
                style={{ backgroundImage: `url(${fernieTop})` }} >
                    <div className="about-section" >
                        <h2>About me</h2>
                        <p>
                            After graduating from the University of Guelph in 2019,
                            I began my career in various support and implementation
                            roles, however, I was quickly promoted and completed my
                            goal of becoming a Junior Developer.
                        </p>
                        <br /> 
                        <p>
                            My primary function
                            was to complete development level support tickets that
                            required debugging and problem-solving a leading
                            Corporate Wellness Software Platform which is used daily
                            by thousands globally. I worked with UI/UX designers to
                            create web pages using HTML, CSS, and JavaScript for the
                            Corporate marketing website. Other languages I used
                            frequently were jQuery and Kendo tools for
                            client-specific theme development as well as C#,
                            Typescript, and SQL to complete platform bug fixes,
                            change requests, and updates.
                        </p>
                        <br /> 
                        <p>
                            Each day I seek to enhance my knowledge of software
                            development by initiating my own projects with
                            enthusiasm and energy. I am known for getting involved,
                            demonstrating leadership, being dependable, and
                            hardworking. My ability to effectively manage my time
                            allows for a balance between professional development,
                            athletics, social life, and volunteering.
                        </p>
                        <br /> 
                        <p>
                            In my free time, I stay very active and continually look
                            for new physical challenges. Currently, I am working
                            towards completing a marathon, look me up on Strava if
                            you would like to follow my progress! I also enjoy
                            backcountry camping, rock climbing, and hiking.
                        </p>
                    </div>
                {/* About */}
                {/* <Section 
                    sectionID=""
                    title=""
                    desc=""
                    backgroundimg={johnsFamilyClimb}
                    aboutMe
                    //first
                /> */}
                {/* <Section 
                    sectionID=""
                    title=""
                    desc=""
                    backgroundimg={johnsFamilyClimb}
                    //aboutMe
                    //first
                /> */}
            </AboutStyled >
        )
    }
}

export default AboutPage;
