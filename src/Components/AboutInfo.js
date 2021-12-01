import React from "react";
import styled from "styled-components";
//import Card from "./Card";
//import ReactCardFlip from "react-card-flip";

const AboutInfoStyled = styled.div`
    width: 99.1vw;
    margin-top: 5%;
    margin-left: 10px;
    display: flex;
    .card {
        height: 50vh;
        width: 32vw;
    }
    .card-back {
        height: 50vh;
        width: 32vw;
    }
    :after {
        content: "";
        display: table;
        clear: both;
    }
    @media screen and (max-width: 1000px) {
        flex-direction: column;
        .card {
            height: 22vh;
            margin-bottom: 5px;
            width: 100%;
        }
    }
`;

class AboutInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <AboutInfoStyled>
                <div className="about-section">
                    <p>
                        After graduating from the University of Guelph in 2019,
                        I began my career in various support and implementation
                        roles, however, I was quickly promoted and completed my
                        goal of becoming a Junior Developer. My primary function
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
                    <p>
                        Each day I seek to enhance my knowledge of software
                        development by initiating my own projects with
                        enthusiasm and energy. I am known for getting involved,
                        demonstrating leadership, being dependable, and
                        hardworking. My ability to effectively manage my time
                        allows for a balance between professional development,
                        athletics, social life, and volunteering.
                    </p>
                    <p>
                        In my free time, I stay very active and continually look
                        for new physical challenges. Currently, I am working
                        towards completing a marathon, look me up on Strava if
                        you would like to follow my progress! I also enjoy
                        backcountry camping, rock climbing, and hiking.
                    </p>
                </div>

                {/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="card" onClick={this.handleClick}>
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
                    <div className="card-back" onClick={this.handleClick}>
                            <Card
                                title="Back of education"
                                desc="I studied at the University of Guelph and graduated in 2019. I achieved a Bachelor of Computing with Honours Major computer 
                                science while also attaining a minor in Business Administration."
                                desc2="Throughout my university career, I have always excelled in a team setting for software development. I have also worked with 
                                diverse 
                                groups of people both in school and in previous work placements which have allowed me to develop strong communication and 
                                interpersonal skills."
                            />
                        </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="card" onClick={this.handleClick}>
                        <Card
                            title="Work"
                            desc="After graduating I moved to Kelowna British Columbia and starting working at Corehealth Technologies."
                            desc2="I was first a Support Ninja then became and Implementation Specialist and eventually became a Junior Developer."
                        />
                    </div>
                    <div className="card-back" onClick={this.handleClick}>
                        <Card
                            title="Work back side"
                            desc="After graduating I moved to Kelowna British Columbia and starting working at Corehealth Technologies."
                            desc2="I was first a Support Ninja then became and Implementation Specialist and eventually became a Junior Developer."
                        />
                    </div>
                </ReactCardFlip>
                <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div className="card" onClick={this.handleClick}>
                        <Card
                            title="Hobbies"
                            desc="In my free time, I like to stay very active participating in many different activities including running, cycling and golf. I also like to take trips backcountry camping and rock climbing."
                        />
                    </div>
                    <div className="card-back" onClick={this.handleClick}>
                        <Card
                            title="Hobbies back"
                            desc="In my free time, I like to stay very active participating in many different activities including running, cycling and golf. I also like to take trips backcountry camping and rock climbing."
                        />
                    </div>
                </ReactCardFlip> */}
            </AboutInfoStyled>
        );
    }
}

export default AboutInfo;
