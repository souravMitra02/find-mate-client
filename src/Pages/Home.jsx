import React from 'react';
import Banner from '../components/Banner';
import TopCitiesSection from '../components/TopCitiesSection';
import Faq from '../components/Faq';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCitiesSection></TopCitiesSection>
            <Faq></Faq>
        </div>
    );
};

export default Home;