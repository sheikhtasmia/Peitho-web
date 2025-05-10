import React from 'react';
import Banner from '../../HeroBanner/Banner';
import About from '../About/About';
import Service from '../Service/Service';
import CaseStudy from '../Work/CaseStudy';
import PeithologyIdeas from '../PeithologyIdeas/PeithologyIdeas';
import Contact from '../Contact/Contact ';


const Home = () => {
    return (
        <div>
            <Banner></Banner>

            {/* about */}
            <About></About>

            <Service></Service>

            <CaseStudy></CaseStudy>

            <PeithologyIdeas></PeithologyIdeas>

            <Contact></Contact>
        </div>
    );
};

export default Home;