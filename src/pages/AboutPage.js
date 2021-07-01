import React from 'react'
import styled from 'styled-components';
import AboutInfo from '../Components/AboutInfo';
import Title from '../Components/Title';
import {MainLayout} from '../Styles/Layout';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <AboutInfo />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage;
