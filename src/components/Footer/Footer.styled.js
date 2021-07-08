import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterBg = styled.footer`
    padding: 5em 3em;
    background: #232127;
`;

export const FooterSection = styled.section`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width:900px){
        flex-direction: column;
        text-align: center;
    }
`;

export const FooterLogo = styled.h1`
    color: #fff;
    font-size: 2rem;
    @media (max-width:900px){
        margin-bottom: 1.5em;
    }
`;

export const FooterNav = styled.nav`
    display: flex;
    justify-content: space-between;
    @media (max-width:900px){
        flex-direction: column;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0 2.5rem;
    @media (max-width:900px){
        margin-bottom: 2em;
    }
`;

export const NavHeading = styled.h3`
    color: #fff;
    margin-bottom: 1em;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #bfbfbf;
    margin-bottom: 0.5em;
    font-weight: 500;
    transition: 200ms;
    &:hover{
        color: #fff;
    }
`;

export const SocialSection = styled.div`

`;
export const SocialLink = styled(Link)`
    margin-left: 1.5em;
`;
