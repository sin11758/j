import React from "react";
import "../css/welcome.css"
import { Link } from 'react-router-dom';

function Welcome() {
  const contact = () => {
    const element = document.getElementById('Contact');
    if (element) {
      const offset = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };
  return (
<section className="welcome"  id="home">
        <h1 className="animated fadeInDown">Great Pyramid Roofing Services Inc.</h1>
        <p className="animated fadeInUp">We offer professional and affordable roofing solutions to meet your needs.</p>
        <Link onClick={contact} to="/" className="animated fadeInUp"><button className="activeButton">Contact us</button></Link>
</section> 
  );
}

export default Welcome;
