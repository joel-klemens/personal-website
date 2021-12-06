import React from 'react'
import styled from 'styled-components'
import Section from '../Components/Section'; 
//images
import surfSunset from '../images/surf-sunset-2.JPG.png';

const HomePageStyled = styled.header`
    @media screen and (max-width: 600px){
        .section-container {
            .lower-third {
                margin-bottom: 41%;
            }
        }
    }
`;

function HomePage() {
    return (
        <HomePageStyled>
            {/* home */}
            <Section 
                sectionID="home"
                title="Hi, I'm Joel"
                desc="Software Developer"
                backgroundimg={surfSunset}
                first
                mePointer
                gitHubLinkedIn
            />
            {/* Resume */}
            {/* <Section 
                title="My Resume"
                desc="Looking to hire?"
                backgroundimg={hikeFernie}
            />  */}
        </HomePageStyled>
    )
}

export default HomePage;
