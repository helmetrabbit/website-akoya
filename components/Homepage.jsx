import React from 'react';
import Navbar from './Navbar';
import Features from './Features';
import Testimonials from './Testimonials';
import Footer from './Footer';
import AmbientBackground from './AmbientBackground';

function Homepage() {
    return (
        <div>
            <Navbar />
            <AmbientBackground />
            <Features />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default Homepage;
