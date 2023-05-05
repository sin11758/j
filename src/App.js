import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Main from './assets/components/Main';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Work from './assets/components/Work';
import MoreAbout from './assets/components/MoreAbout';
import ServiceRoofReplacement from './assets/components/ServiceRoofReplacement';
import ServiceRoofRepair from './assets/components/ServiceRoofRepair';
import ServiceRoofInspection from './assets/components/ServiceRoofInspection';
import ServiceExteriorRepair from './assets/components/ServiceExteriorRepair';
import MoreContact from './assets/components/MoreContact';
import FAQ from './assets/components/FAQ';

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
    <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work" element={<Work />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/moreAboutUs" element={<MoreAbout />} />
        <Route path="/contact" element={<MoreContact />} />
        <Route path="/services/roofReplacement" element={<ServiceRoofReplacement />} />
        <Route path="/services/roofRepair" element={<ServiceRoofRepair />} />
        <Route path="/services/roofInspection" element={<ServiceRoofInspection />} />
        <Route path="/services/exteriorRepair" element={<ServiceExteriorRepair />} />
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
