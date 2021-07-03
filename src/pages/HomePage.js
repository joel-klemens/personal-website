import React from 'react'
import styled from 'styled-components'
import Section from '../Components/Section'; 
//images
import hikeFernie from '../images/hike-fernie.jpg';
import surfSunset from '../images/surf-sunset-2.JPG.png';

const HomePageStyled = styled.header`

`;

function HomePage() {
    return (
        <HomePageStyled>
            {/* home */}
            <Section 
                title="Welcome to my site"
                desc="Scroll down to find out more about me"
                backgroundimg={surfSunset}
                first
                mePointer
                gitHubLinkedIn
            />
            {/* Resume */}
            <Section 
                title="My Resume"
                desc="Looking to hire?"
                backgroundimg={hikeFernie}
            /> 
        </HomePageStyled>
    )
}

export default HomePage;
