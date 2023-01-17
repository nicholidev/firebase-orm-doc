import React from 'react';
import {HeroImage, HeroWrap} from './style';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

const Hero = () => {

    return (
        <HeroWrap>
            <h1 className="title">Firebase ORM</h1>
            <p className="description">The query builder for the firestore</p>
            <Link to="/docs/overview" className="hero-action">
                Read Docs
            </Link>

            <HeroImage
                sources ={{
                    light: useBaseUrl('/img/bg.jpg'),
                    dark: useBaseUrl('/img/bg.jpg')
                }}
            />
        </HeroWrap>
    );
};

export default Hero;
