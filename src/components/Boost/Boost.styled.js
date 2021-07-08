import { Link } from "react-router-dom";
import styled from "styled-components";
import BgBoostDesktop from '../../assets/svgs/bg-boost-desktop.svg';

export const BoostBanner = styled.section`
    display: grid;
    place-items: center;
    width: 100%;
    padding: 3em 0;
    background: #3b3054;
    background-image: url(${BgBoostDesktop});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width:900px){
        padding: 5em 0;
    }
`;

export const TagLine = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: .5em;
    color: #fff;
    @media (max-width:900px){
        font-size: 1.8rem;
    }
`;

export const CallToAction = styled(Link)`
    text-decoration: none;
    color: #fff;
    background: #2acfcf;
    font-weight: 700;
    padding: .7em 2em;
    border-radius: 50px;
    font-size: 1.2rem;
    transition: opacity 200ms;
    &:hover{
        opacity: 0.8;
    }
`;