// import ImageCarousel from './ImageCarousel';
import React from 'react';
import DayDetails from './DayDetails';
import NavBar from '../../components/navbar/NavBar';
import Intro from '../../components/sections/Intro'

import './SingleExperience.css'


function SingleExperience() {

    return (
        <div className="experience-page">
            <header>
                <NavBar></NavBar>
            </header>
            <Intro
                title={"From France to Navarra"}
                content={""}
                imageUrl={"https://cdn.sanity.io/images/k15yl91v/production/b19fd74bc0b18baa206f3132bd3b002314b5849f-1920x1080.jpg?w=2560&q=75&fit=max&auto=format"}>
            </Intro>
            <main className="experience-main">
                <div className="carousel-section-2">
                    {/* Aquí iría tu componente Carousel */}
                </div>
                <div className="details-section">
                    <DayDetails />
                </div>
            </main>
        </div>
    );
}

export default SingleExperience;