import React from 'react';
import Resume from '../Components/Resume';
import styled from 'styled-components';

const ProjectsStyled = styled.div`
    padding: 5rem;
    background: linear-gradient(to bottom, #dee5f7ff 35%, #d4dd9fff 150%);
`;

function ProjectsPage() {
    return (
        <ResumeStyled> 
            <Resume />
        </ResumeStyled>
    )
}

export default ProjectsPage