import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeroBanner = styled.main`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 7rem;
    overflow: hidden;
    @media (max-width:900px){
        flex-direction: column-reverse;
    }
    
`;

export const Content = styled.div`
    margin-left:9em;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    @media (max-width:900px){
        margin: 0 auto;
        width: 80%;
        display: grid;
        place-items: center;
    }
`;

export const Tagline = styled.h1`
    font-size: 5rem;
    color: #35323e;
    width: 75%;
    line-height: 1.1;

    @media (max-width:1200px){
        font-size: 3.5rem;
    }
    @media (max-width:900px){
        font-size: 3rem;
        width: 100%;
        text-align: center;
        margin-bottom: 5px;
    }
    @media (max-width:500px){
        font-size: 2.5rem;
       
    }
`;

export const Description = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    color:#9e9aa7 ;
    width: 75%;

    @media (max-width:1200px){
        font-size: 1.2rem;
    }
    @media (max-width:900px){
        width: 100%;
        text-align: center;
        margin-bottom: 5px;
    }
`;

export const CallToAction = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: 1.3rem;
    font-weight: 700;
    background: #2acfcf;
    padding: 0.7rem 2rem;
    border-radius: 50px;
    margin: 20px 0;
    transition: 200ms;
    &:hover{
        opacity: 0.8;
    }
    @media (max-width:1200px){
        padding: 0.5rem 1rem;
        font-size: 1.1rem;
    }
    @media (max-width:900px){
        padding: 0.7rem 2rem;
        margin-bottom: 2em;
        font-size: 1.3rem;
    }
`;

export const HeroImage = styled.div`
    
   @media (max-width:900px){
        width: 90%;
        margin-left: 5em;
    }
    img{
        max-width: 100%;
        object-fit: cover;
    }
    
`;