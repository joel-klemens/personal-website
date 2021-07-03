import React from 'react'
import styled from 'styled-components';
import Section from '../Components/Section'; 
//images
import hikeFernie from '../images/hike-fernie.jpg';

const AboutStyled = styled.div``;

function AboutPage() {
    return (
        <AboutStyled >
             {/* About */}
            <Section 
                title="About me"
                desc="Learn what I'm about"
                backgroundimg={hikeFernie}
                first
            />
        </AboutStyled >
    )
}

export default AboutPage;
