import React from 'react';
import LandingCarousel from 'components/LandingCarousel';
import ClassPricing from 'components/ClassPricing';
import AboutCards from 'components/AboutCards';
import StoreCards from 'components/StoreCards';
import ContactUsCards from 'components/ContactUsCards';

const Home = () => {
    return (
        <>
            <LandingCarousel />
            <AboutCards />
            <ClassPricing />
            <StoreCards />
            <ContactUsCards />
        </>
    )
}

export default Home;
