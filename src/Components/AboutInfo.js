import React from 'react'
import styled from 'styled-components';
import Card from './Card';

const AboutInfoStyled = styled.div`
    width: 99.1vw;
    margin-top: 5%;
    margin-left: 10px;
    display: flex;
    .card{
        height: 50vh;
        width: 33%
    }
    :after{
        content:"";
        display: table;
        clear: both;
    }
    @media screen and (max-width:1000px){
        flex-direction: column;
        .card{
            height: 22vh;
            margin-bottom: 5px;
        }
    }
`;

function AboutInfo() {
    return (
        <AboutInfoStyled>
            <div className="card">
                <Card
                    title="Education"
                    desc="I studied at the University of Guelph and graduated in 2019. I achieved a Bachelor of Computing with Honours Major computer 
                    science while also attaining a minor in Business Administration."
                    desc2="Throughout my university career, I have always excelled in a team setting for software development. I have also worked with 
                    diverse 
                    groups of people both in school and in previous work placements which have allowed me to develop strong communication and 
                    interpersonal skills."
                />
            </div>
            <div className="card">
                <Card
                    title="Work"
                    desc="After graduating I moved to Kelowna British Columbia and starting working at Corehealth Technologies."
                    desc2="I was first a Support Ninja then became and Implementation Specialist and eventually became a Junior Developer."
                />
            </div>
            <div className="card">
                <Card
                    title="Hobbies"
                    desc="In my free time, I like to stay very active participating in many different activities including running, cycling and golf. I also like to take trips backcountry camping and rock climbing."
                />
            </div>
        </AboutInfoStyled>
    )
}

export default AboutInfo;
