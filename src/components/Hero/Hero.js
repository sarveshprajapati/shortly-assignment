import React from 'react';
import Workingillustration from '../../assets/svgs/illustration-working.svg';
import {
    HeroBanner,
    Content,
    Tagline,
    Description,
    CallToAction,
    HeroImage
} from './Hero.styled';
function Hero() {
    return (
       <HeroBanner>
           <Content>
                <Tagline>More than just shorter links</Tagline>
                <Description>
                    Build your brand's recognition and get detailed
                    insights on how your links are performing
                </Description>
                <CallToAction to="/">Get started</CallToAction>
           </Content>
           <HeroImage>
                <img src={Workingillustration} alt="working" />
           </HeroImage>
       </HeroBanner>
    )
}

export default Hero
