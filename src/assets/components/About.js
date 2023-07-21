import React from "react";
import "../css/about.css"
import { Link } from 'react-router-dom';
import img from '../img/about.svg';

function About() {
    const aboutMore = () => {
          window.scrollTo({ top: 0 });
        
      };
    return ( 
        <section id="about">
            <div  className="about section" >
                <h2>About Us</h2>
                <div id="aboutBox">
                    <p>Great Pyramid Roofing Services Inc. is your trusted partner for all your residential roofing needs. We take pride in providing high-quality roofing services to ensure the best customer experience. Our commitment to excellence is evident in our use of only the finest roofing materials, coupled with our professional workmanship and exceptional customer service. With liability insurance and WSIB coverage, you can trust that our team is fully insured and certified to work at heights. We stand behind our work with a workmanship warranty of up to 15 years and a manufacturer warranty of up to 40 years, providing our clients with peace of mind.</p>
                    <img src={img} alt="about"/>
                </div>
                <Link onClick={aboutMore} to="/moreAboutUs" alt="about"><button className="animated fadeInUp aboutButton inActiveButton">Learn More</button></Link>
            </div>
        </section>

    );
}

export default About;
