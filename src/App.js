import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';


import Main from './assets/components/Main';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Work from './assets/components/Work';
import MoreAbout from './assets/components/MoreAbout';
import ServiceRoofReplacement from './assets/components/ServiceRoofReplacement';
import ServiceRoofRepair from './assets/components/ServiceRoofRepair';
import ServiceRoofInspection from './assets/components/ServiceRoofInspection';
import ServiceExteriorRepair from './assets/components/ServiceExteriorRepair';
import Contact from './assets/components/Contact.js';
import FAQ from './assets/components/FAQ';
import MessageBox from './assets/components/MessageBox';
import MessageButton from './assets/components/MessageButton';
import Services from './assets/components/Services';

function App() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && scrollDirection !== 'up') {
        setScrollDirection('up');
        document.body.classList.add('shrink');
        document.body.classList.remove('expand');
      } else if (window.scrollY <= 0 && scrollDirection !== 'down') {
        document.body.classList.add('expand');
        document.body.classList.remove('shrink');
        setScrollDirection('down');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);


  const [messageBoxVisible, setMessageBoxVisible] = useState(false);

  const handleButtonClick = (selected) => {
    setMessageBoxVisible(selected);
  };


  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var background = document.getElementById('background');
    background.style.zIndex = -1 * scrollTop;
  });
  

  return (
    <>
    <Router className="background" basename={process.env.PUBLIC_URL}>
    <div id="background"></div>
    <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/moreAboutUs" element={<MoreAbout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/roofReplacement" element={<ServiceRoofReplacement />} />
        <Route path="/services/roofRepair" element={<ServiceRoofRepair />} />
        <Route path="/services/roofInspection" element={<ServiceRoofInspection />} />
        <Route path="/services/exteriorRepair" element={<ServiceExteriorRepair />} />
      </Routes>
    <Footer/>
    <MessageButton  onClick={handleButtonClick}  />
    {messageBoxVisible && <MessageBox />}
    </Router>
    </>
  );
}

export default App;
