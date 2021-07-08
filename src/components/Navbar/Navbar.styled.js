import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
    background: #fff;
    height: 15vh;
    width: 100%;
    position: relative;
    /* box-shadow: 0 0 10px 5px rgba(0,0,0,0.1); */
`;

export const Nav = styled.nav`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width:900px){
        width: 90%;
    }
`;

export const NavLogo = styled(Link)`
    flex-basis: auto;
`;

export const HamBurger = styled.div`
    display: none;
    cursor: pointer;
    color: #9e9aa7;
    font-size: 2rem;
    @media (max-width:900px){
        display: block;
    }
`;

export const NavBox = styled.div`
    flex-basis: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    @media (max-width:900px){
        /* display: none; */
        position: absolute;
        background:  #3b3054;
        /* transform: translate(-50%,-50%); */
        transition: all 500ms ease;
        top: ${({click})=>(click ? '100%' : '0%')};
        opacity: ${({click})=>(click ? 1 : 0)};
        pointer-events:${({click})=>(click ? 'normal' : 'none')};
        left: 5%;
        flex-direction: column;
        justify-content:center;
        width: 90%;
        /* height: 50vh; */
        margin: 0 auto;
        border-radius: 10px;        
    }

`;

export const NavMenu = styled.ul`
    display: flex;
    @media (max-width:900px){
        flex-direction: column;
        text-align: center;
        /* margin: 1em 0; */
        width: 80%;
        &:nth-child(1){
            &::after{
                content: '';
                width: 100%;
                height: 0.5px;
                margin: 0 auto;
                background: #9e9aa7;
            }
        }
    }
    
`;

export const NavItem = styled.li`
    list-style: none;
    margin-left: 1.5em;
    @media (max-width:900px){
        margin: 0;
        margin-bottom: 2em;
        &:first-child{
            margin-top: 2em;
        }
    }
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #bfbfbf;
    font-weight: 700;
    transition: 200ms;
    &:hover{
        color: #333;
    }
    @media (max-width:900px){
        
        &:hover{
            color: #fff;
        }
    }
`;

export const LinkBtn = styled(Link)`
    text-decoration: none;
    color: #fff;
    background: #2acfcf;
    font-weight: 700;
    padding: 0.5em 1.5em;
    border-radius: 50px;
    transition: 200ms;
    @media (max-width:900px){
       padding: 0.5em 4em;
    }
    &:hover{
        opacity: 0.7;
    }
`;