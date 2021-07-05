import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.header`
    height: 100%;
    .card-body{
        height: 100%;
        background: rgb(121 90 58 / 60%);;
        box-shadow: 5px 10px 20px 1px rgba(0,0,0,0.25);
        border-radius: 20px;
        margin: 10px;
        padding: 10px;
        .card-title{
            font-size: 40px;
            color: black;
            text-align: left;
        }
        .card-description{
            font-size: 20px;
            font-weight: 300;
            vertical-align: center;
            margin-top: 10%; 
            text-align: left;
           // color: #c7935e;
        }
        @media screen and (max-width:1000px){
            .card-title{
                font-size: 24px;
            }
            .card-description{
                margin-top: 0%;
                font-size: 15px;;
            }
        }
    }
`; 

const Card = ({title, img, imgDesc, desc, desc2, buttonLink, buttonTxt}) => {
    return (
        <CardStyled> 
            <div className="card-body">
                <div className="card-title">
                    <p>{title}</p>
                </div>
                {img && (
                    <div className="overflow">
                        <img src={img} alt={imgDesc} /> 
                    </div>
                )}
                <div className="card-description">
                    <p>{desc}<br /><br />{desc2}</p>
                </div>
                <div className="button">
                    <a href={buttonLink}>
                        {buttonTxt}
                    </a>      
                </div>         
            </div>
        </CardStyled>
    )
}

export default Card
