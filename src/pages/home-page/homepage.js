import React from 'react';

import './homepage.css';
import Header from '../../components/header/header';
import Hero from '../../components/hero/heropage';
import Booknow from '../../components/book-now/booknow';

import Footer from '../../components/footer/footer';
import Aboutus from '../../components/about-us/aboutus';
import Whyus from '../../components/why-us/whyus';
import Testimonials from '../../components/testimonials/testimonials';
import Gallery from '../../components/gallery/gallery';
import PlacesToVisit from '../../components/places-to-visit/PlacesToVisit';

const Homepage = () => {
    return (
        <div className="homepage">
            
            <Header />
            <Hero />
            <Booknow />
            <Aboutus />
            <Whyus />
            <Gallery   />
            <PlacesToVisit />
            <Testimonials />
            <Footer />
       
        </div>
    );
}

export default Homepage;