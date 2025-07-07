import React from 'react';
import cl from './Home.module.css';
import Header from "../../components/header/Header.jsx";
import HeroSection from "../../components/sections/heroSection/HeroSection.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
        </>
    );
};

export default Home;