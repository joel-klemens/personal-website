import React from 'react'
import styled from 'styled-components'

const CardStyled = styled.div`
    height: 100%;
    width: 50%;
    max-width: 50vw;
    .card-body{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: stretch;
        height: 100%;
        background: rgb(64 45 25 / 60%);
        backdrop-filter: blur(4px);
        box-shadow: 5px 10px 20px 1px rgba(0,0,0,0.85);
        border-radius: 20px;
        margin: 20px;
        padding: 15px;
        .card-title{
            font-size: 40px;
            color: #f5c68b;
            text-align: center;
        }
        .card-description{
            font-size: 20px;
            font-weight: 300;
            vertical-align: center;
            margin-top: 10%; 
            text-align: left;
            color: #f5c68b;
        }
        .card-img {
            align-self: center;
            max-height: 100%;
            max-width: 100%;
            margin-top: 15px;
            img {
                border-radius: 5%;
                max-height: 70vh;
                max-width: 34vw;
            }
        }
        .button {
            align-self: center;
            text-transform: uppercase;
            margin: 10px;
            margin-top: 15px;
            padding: 2px;
            width: 95px;
            cursor: pointer;
            font-size: 17px;
            font-weight: bold;
            color: #f5c68b;
            background: #ffffff00;
            border: 2px solid #f5c68b;
            box-shadow: 3px 3px 0 #f5c68b,
                -3px -3px 0 #f5c68b,
                -3px 3px 0 #f5c68b,
                3px -3px 0 #f5c68b;
            transition: 800ms ease-in-out;
            text-align: center;
        }       
        .button:hover {
            box-shadow: 20px 5px 0 #f5c68b, -20px -5px 0 #f5c68b;
        }
        .button:focus {
            outline: none;
        }
    }
    @media screen and (max-width:1000px){
        height: 100%;
        width: 90%;
        max-width: 90vw;
    }
`; 

const Card = ({title, img, imgDesc, desc, desc2, buttonLink, buttonTxt}) => {
    return (
        <CardStyled> 
            <div className="card-body">
                <div className="card-title">
                    <h2>{title}</h2>
                </div>
                {img && (
                    <div className="card-img">
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
