import React from 'react'
import styled from 'styled-components';
import AboutPageImg from '../images/hike-fernie.jpg';
{/* import PrimaryButton from './PrimaryButton'; */}

const AboutInfoStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--font-dark-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

function AboutInfo() {
    return (
        <AboutInfoStyled>
            <div className="left-content">
                <img src={AboutPageImg} alt=""/>
            </div>
            <div className="right-content">
                <h4>Hello I am <span>Joel Klemens</span></h4>
                <p className="paragraph">
                    After graduating from the University of Guelph Ontario I moved to Kelowna British Columbia where I currently reside.
                    I am a big advocate of active healthy living and enjoy spending my free time doing athletics such as running, cycling and golf.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Joel Klemens</p>
                        <p>: 25</p>
                        <p>: Canadian </p>
                        <p>: Kelowna, British Columbia </p>
                        <p>: Full stack developer, freelance </p>
                    </div>
                </div>
               {/* <PrimaryButton title={'Download Cv'} /> */}
            </div>
        </AboutInfoStyled>
    )
}

export default AboutInfo;
