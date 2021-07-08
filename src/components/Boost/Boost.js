import React from 'react';
import {
    BoostBanner,
    TagLine,
    CallToAction
} from './Boost.styled';

function Boost() {
    return (
        <BoostBanner>
            <TagLine>
                Boost your links today
            </TagLine>
            <CallToAction to="/">Get Started</CallToAction>
        </BoostBanner>
    )
}

export default Boost
