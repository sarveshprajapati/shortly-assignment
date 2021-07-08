import React from 'react';
import FbIcon from '../../assets/svgs/icon-facebook.svg';
import TwIcon from '../../assets/svgs/icon-twitter.svg';
import PinIcon from '../../assets/svgs/icon-pinterest.svg';
import InstaIcon from '../../assets/svgs/icon-instagram.svg';
import {
    FooterBg,
    FooterSection,
    FooterLogo,
    FooterNav,
    NavMenu,
    NavHeading,
    NavLink,
    SocialSection,
    SocialLink
} from './Footer.styled';

function Footer() {
    return (
        <FooterBg>
            <FooterSection>
                <FooterLogo>Shortly</FooterLogo>
                <FooterNav>
                    <NavMenu>
                        <NavHeading>Features</NavHeading>
                        <NavLink to="/">Link Shortening</NavLink>
                        <NavLink to="/">Branded Links</NavLink>
                        <NavLink to="/">Analytics</NavLink>
                    </NavMenu>
                    <NavMenu>
                        <NavHeading>Resources</NavHeading>
                        <NavLink to="/">Blog</NavLink>
                        <NavLink to="/">Developers</NavLink>
                        <NavLink to="/">Support</NavLink>
                    </NavMenu>
                    <NavMenu>
                        <NavHeading>Company</NavHeading>
                        <NavLink to="/">About</NavLink>
                        <NavLink to="/">Our Team</NavLink>
                        <NavLink to="/">Careers</NavLink>
                        <NavLink to="/">Contact</NavLink>
                    </NavMenu>
                </FooterNav>
                <SocialSection>
                    <SocialLink to="/">
                        <img src={FbIcon} alt="facebook" />
                    </SocialLink>
                    <SocialLink to="/">
                        <img src={TwIcon} alt="twitter" />
                    </SocialLink>
                    <SocialLink to="/">
                        <img src={PinIcon} alt="pinterest" />
                    </SocialLink>
                    <SocialLink to="/">
                        <img src={InstaIcon} alt="instagram" />
                    </SocialLink>
                </SocialSection>
            </FooterSection>
        </FooterBg>
    )
}

export default Footer
