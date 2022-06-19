import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import HeroSection from './HeroSection';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HeroSection/>
            <Footer/>
        </div>
    );
};

export default Home;