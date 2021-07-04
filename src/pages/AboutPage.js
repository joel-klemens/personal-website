import React, { Component } from "react"
import styled from 'styled-components';
import Section from '../Components/Section'; 
//images
import hikeFernie from '../images/climbing.jpg';

const AboutStyled = styled.div``;

class AboutPage extends Component{
    render() {
        return (
            <AboutStyled >
                {/* About */}
                <Section 
                    sectionID="about"
                    title="About me"
                    desc="Learn what I'm about"
                    backgroundimg={hikeFernie}
                    aboutMe
                />
            </AboutStyled >
        )
    }
}

export default AboutPage;
