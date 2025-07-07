import React from 'react';
import cl from './Home.module.css';
import Header from "../../components/header/Header.jsx";
import HeroSection from "../../components/sections/heroSection/HeroSection.jsx";
import StylesSection from "../../components/sections/stylesSection/StylesSection.jsx";
import CultureSection from "../../components/sections/cultureSection/CultureSection.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <StylesSection />
            <CultureSection />
        </>
    );
};

export default Home;