import React from 'react';
import Banner from '../components/Banner';
import TopCitiesSection from '../components/TopCitiesSection';
import Faq from '../components/Faq';
import FeaturedPosts from '../components/FeaturedPosts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedPosts></FeaturedPosts>
            <TopCitiesSection></TopCitiesSection>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;