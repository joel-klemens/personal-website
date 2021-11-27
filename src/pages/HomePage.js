import React from 'react'
import styled from 'styled-components'
import Section from '../Components/Section'; 
//images
import surfSunset from '../images/surf-sunset-2.JPG.png';

const HomePageStyled = styled.header`

`;

function HomePage() {
    return (
        <HomePageStyled>
            {/* home */}
            <Section 
                sectionID="home"
                title="Welcome to my site"
                desc="Scroll down to find more"
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
