import React, { useState } from 'react';
import Logo from '../../assets/svgs/logo.svg';
import {
    Header,
    Nav,
    NavLogo,
    HamBurger,
    NavMenu,
    NavBox,
    NavItem,
    NavLink,
    LinkBtn
} from './Navbar.styled';
function Navbar() {
    const [click,setClick]=useState(false);
    return (
            <Header>
                <Nav>
                    <NavLogo to="/" >
                        <img src={Logo} alt="logo" />
                    </NavLogo>
                    <HamBurger onClick={(e)=>setClick(!click)}>
                        &#9776;
                    </HamBurger>
                    <NavBox click={click} onClick={()=>setClick(!click)}>
                        <NavMenu>
                            <NavItem>
                                <NavLink to="/features">
                                    Features
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/pricing">
                                    Pricing
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/Resources">
                                    Resources
                                </NavLink>
                            </NavItem>
                        </NavMenu>
                        <NavMenu>
                        <NavItem>
                                <NavLink to="/login">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <LinkBtn to="/register">
                                    Sign Up
                                </LinkBtn>
                            </NavItem>
                        </NavMenu>
                    </NavBox>
                </Nav>
            </Header>
    )
}

export default Navbar
