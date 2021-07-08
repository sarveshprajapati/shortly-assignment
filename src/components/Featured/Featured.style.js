// import { Link } from "react-router-dom";
import styled from "styled-components";
import BgShortenDesktop from '../../assets/svgs/bg-shorten-desktop.svg';

export const FeaturedSection = styled.section`
    background: #eee;
    position: relative;
    padding-bottom: 5em;
`;

export const InputForm = styled.form`
    padding: 2em 3em;
    width: 80%;
    background: #3b3054;
    background-image: url(${BgShortenDesktop});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 0%;
    left: 50%;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    @media (max-width:900px){
        padding: 0.5em 1em;
    }
    div{
        flex: 700px;
        margin: 1em .5em;
        position: relative;
    }
    p{
        position: absolute;
        color: #f46262;
        font-style: italic;
        font-weight: 500;
    }
    input{
        background: none;
        outline: none;
        background: #fff;
        padding: 0.6em 1em;
        border-radius: 5px;
        font-size: 1.1rem;
        width: 100%;
        /* margin: 0 auto; */
        border: ${({err})=>(err ? '2px solid #f46262' : '2px solid #fff')};        
        
    }
    
    button{
        background: none;
        outline: none;
        border: none;
        padding: 0.8em 1em;
        background: #2acfcf;
        font-size: 1.1rem;
        border-radius: 5px;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
        flex: 50px;
        margin: 1em;
        transition: 200ms;
        &:hover{
            opacity: .8;
        }
        @media (max-width:900px){
            padding: 0.5em 1em;
            margin: 0.5em;
        }
        /* margin-left: 1em; */
    }
`;

export const ShortenedLinks = styled.section`
    width: 80%;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    padding-top: 6em;
`;

export const ShortedCard = styled.div`
    width: 100%;
    height: auto;
    background: #fff;
    box-shadow:0 0  rgba(0,0,0,0.1);
    margin: 1em 0;
    padding:1em;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    @media (max-width:900px){
        flex-direction: column;
        align-items: center;
        div{
            width: 100%;
            height: 0.5px;
            margin: 0 auto;
            background: #9e9aa7;
        }
    }
    p{
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 500;
        margin: 0 1em;
        text-align: left;
        color: #3b3054;
        width: 60%;
        @media (max-width:900px){
            width: 100%;
            margin: 0.5em 0;
        }
    }
    input{
        background: none;
        width: 100%;    
        border: none;
        font-size: 1.2rem;
        font-weight: 500;
        outline: none;
        color:#2acfcf;
        &::selection{
            background: none;
        }
        @media (max-width:900px){
            width: 100%;
            margin: 0.5em 0;
        }
    }
    button{
        background: none;
        outline: none;
        border: none;
        padding: 0.5em 3em;
        background: ${({copied})=>(copied ? '#3b3054' : '#2acfcf')};
        font-size: 1.1rem;
        border-radius: 5px;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
        margin: 0 1em;
        transition: 200ms;
        &:hover{
            opacity: 0.8;
        }
        @media (max-width:900px){
            width: 100%;
            margin: 0.5em 0;
        }
    }
`;

export const Statistics = styled.section`
    width: 80%;
    padding-top: 9em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    @media (max-width:900px){
        width: 100%;
        /* padding-bottom:3em ; */
    }
`;

export const StatHeading = styled.h1`
    font-size: 3rem;
    color: #35323e;
    /* font-weight: 700; */
    text-align:center;
    margin-bottom: .5em;
    @media (max-width:900px){
        font-size: 2.2rem;
    }
`; 
export const StatDesc = styled.p`
    text-align: center;
    font-size: 1.3rem;
    font-weight: 500;
    width: 50%;
    color: #9e9aa7;
    padding-bottom: 2em;
    @media (max-width:900px){
        width: 90%;
    }
`;

export const CardContainer = styled.div`
    width: 80%;
    min-height:350px ;
    margin:0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    position: relative;
    @media (max-width:1100px){
        width: 90%;
        flex-direction: column;
    }   

    &::after{
        content: '';
        width: 80%;
        height: 10px;
        background: #2acfcf;
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
        @media (max-width:1100px){
            width: 10px;
            height: 90%;
        }   
    }
    
`;

export const Card = styled.div`
    background: #fff;
    box-shadow:0 0  rgba(0,0,0,0.1);
    flex: 200px;
    margin: 1em;
    padding: 2em 2.5em;
    border-radius: 5px;
    position: relative;
    z-index: 1;
    @media (max-width:900px){
        margin: 3em 0.5em;
        text-align: center;
        padding: 2em 2em
    }   
    
    img{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 0;
        left: 20%;
        background: #3b3054;
        padding: 1.2em;
        border-radius: 50px;
        @media (max-width:900px){
            left: 50%;
        }   
    }
    h3{
        font-size: 1.5rem;
        font-weight: bold;
        padding-top: 2em;
        margin-bottom: .5em;
        color:#35323e
    }
    p{
        color: #9e9aa7;
        font-weight: 600;
        font-size: 1.1rem;
        padding-bottom: 1em;
    }
    &:nth-child(1){
        align-self: flex-start;
    }
    &:nth-child(2){
        align-self: center;
    }
    &:nth-child(3){
        align-self: flex-end;
    }
`;