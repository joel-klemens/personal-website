import React from 'react';
import styled from 'styled-components';
import ParticlesBGFloat from '../Components/Particles-bg-float';
import Card from '../Components/Card';
import syncronicity from '../images/login_page_sync.png'
import websitePic from '../images/website-screenshot.png'
import fitpoints from '../images/fitpoints.png'
import todoreact from '../images/to-do-react.png'

const ProjectsStyled = styled.div`
    padding: 3rem;
    padding-top: 5rem;

    .projects-row {
        display: flex;
        flex-direction: row;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media screen and (max-width: 1200px){
        .card-title {
            h2{
                font-size: 3rem;
            }
        }
    }
    @media screen and (max-width: 1000px){
        padding: 2rem;
        .projects-row {
            flex-direction: column;
            align-items: center;
        }
    }
    @media screen and (max-width: 600px){
        padding: 1.5rem;
        .projects-row {
            h2 {
                font-size: 2rem;;
            }
            p {
                font-size: 1rem;
            }
        }
    }
    @media screen and (max-width: 420px){
        padding: 1rem;
        .projects-row {
            h2 {
                font-size: 1.5rem;;
            }
            p {
                font-size: 1rem;
            }
        }
    }
`;

function ProjectsPage() {
    return (
        <>
            <ParticlesBGFloat />
            <ProjectsStyled>
                <div className="projects-row">
                    <Card
                        title="Syncronicity"
                        img={syncronicity}
                        imgDesc="Log in page of mobile app"
                        desc="Our goal was to expand upon a preexisting OPEN SOURCE project to learn how to work as a group on a single project following the SCRUM framework. We started with the Minimal-Todo android application by avjinder (https://github.com/avjinder /Minimal-Todo). 
                        This was a great choice for us as it was simple and had great functionality and we had strong idea's of how to make it better."
                        desc2="User can register a profile or sign in using google (facilitated by firebase database) so that they can access the application from multiple different devices and access their todo lists. Storage of all relevant profile options and data stored both locally and on database. User can create (and delete) multiple lists so that they can achieve better organization. Example: grocery list, homework, athletics, due dates.... User can submit feedback via email within the application letting us know how to improve the application. View individual lists or all todo items at one time."
                        buttonLink="https://github.com/joel-klemens/Syncronicity"
                        buttonTxt="Code"
                    />
                    <Card
                        title="joelklemens.com"
                        img={websitePic}
                        imgDesc="website login page"
                        desc="An ongoing project used for project blogs, networking, and resume purposes."
                        desc2="Developed using React for the front end, AWS Amplify for API, database, and storage.  Utilizes Node.js to create a small express webserver to route contact emails through sendgrid."
                        buttonLink="https://github.com/joel-klemens/personal-website"
                        buttonTxt="Code"
                    />
                </div>
                <div className="projects-row">
                    <Card
                        title="FitPoints"
                        img={fitpoints}
                        imgDesc="fitpoints homepage"
                        desc="The program works as a simple workout logging system that has functionality for users to create a profile and earn points for exercise. Depending on how hard and for how long you work out for you are rewarded points."
                        desc2="It can be hard to compete against your friends when you are on different levels of physical fitness, however, with FitPoints you can compete based on how much relative effort you give over the duration of an exercise based on average heart rate."
                        buttonLink="https://github.com/joel-klemens/FitPoints"
                        buttonTxt="Code"
                    />
                    <Card
                        title="To-Do React App"
                        img={todoreact}
                        imgDesc="homepage of to do list app"
                        desc="Use this app to create and manage lists of to-do items. All data is saved in your broswer cache so you can keep coming back to update your to-do items!"
                        desc2="Single page to-do list manager encompassing the basics of react. This project started as a single to-do list but was adapted to so a user can manage multiple lists of to-do items."
                        buttonLink="https://github.com/joel-klemens/Syncronicity"
                        buttonTxt="Code"
                    />
                </div>
            </ProjectsStyled>
        </>
    );
}

export default ProjectsPage