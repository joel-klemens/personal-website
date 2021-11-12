import React from 'react';
import Resume from '../Components/Resume';
import styled from 'styled-components';
//import bgndImg from '../images/hike-fernie-top.jpg';

const ResumeStyled = styled.div`
    padding: 5rem;
    background: linear-gradient(to bottom, #dee5f7ff 35%, #d4dd9fff 150%);
`;

function ResumePage() {
    return (
        //<MainLayout>
        <ResumeStyled> 
            <Resume />
        </ResumeStyled>
            
       // </MainLayout>
    )
}

export default ResumePage