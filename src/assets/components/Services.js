import React from "react";
import "../css/services.css"
import img from "../img/cursor.svg"
import { Link } from 'react-router-dom';
import roofReplaceImage from '../img/roofReplace.jpg';
import roofRepairImage from '../img/repair.jpg';
import roofInspectionImage from '../img/inspection.jpg';
import roofExteriorReplacementImage from '../img/ExteriorReplacement.jpg';

function Services() {
    const aboutMore = () => {
        window.scrollTo({ top: 0 });
      
    };
    return (
        <section id="services">
            <div   class="services section" >
                <h2 className="heading">Services</h2>
                <div class="container alignCol">
                    <div class="container">
                        <Link className="animated fadeInUp" onClick={aboutMore} to="/services/roofReplacement" alt="services">
                            <div className="box" id="box1">
                                <div className="card">
                                    <div className="image-container">
                                    <img src={roofReplaceImage}alt="Card" />
                                    </div>
                                    <div className="content">
                                    <h2>Roof Replacement</h2>
                                    <p>we specialize in providing top-notch roofing solutions, offering premium products from renowned manufacturers like Owens Corning, Landmark, and GAF.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="animated fadeInUp" onClick={aboutMore} to="/services/roofRepair" alt="services">
                            <div class="box" id="box2">
                            <div className="card">
                                    <div className="image-container">
                                    <img src={roofRepairImage}alt="Card" />
                                    </div>
                                    <div className="content">
                                    <h2>Roof Reparis</h2>
                                    <p>we swiftly execute timely repairs, preventing potential home damages. Our meticulous approach integrates perfectly matched shingles, preserving your home's aesthetic harmony.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="animated fadeInUp" onClick={aboutMore} to="/services/roofInspection" alt="services">
                            <div class="box" id="box3">
                            <div className="card">
                                    <div className="image-container">
                                    <img src={roofInspectionImage}alt="Card" />
                                    </div>
                                    <div className="content">
                                <h2>Roof Inspections</h2>
                                    <p> we offer exceptional service with a complimentary roof inspection by our skilled team. Our meticulous experts assess every aspect, identifying issues and providing a detailed report with photos. Schedule your inspection today!</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link className="animated fadeInUp" onClick={aboutMore} to="/services/exteriorRepair" alt="services">
                            <div class="box" id="box4">
                            <div className="card">
                                    <div className="image-container">
                                    <img src={roofExteriorReplacementImage}alt="Card" />
                                    </div>
                                    <div className="content">
                                <h2>Exterior Repairs</h2>
                                    <p>We specialize in delivering comprehensive repair services for exteriors, specifically gutters, soffit, and fascia. Our skilled technicians expertly address any damage, ensuring a seamless outcome with meticulous color matching for a visually cohesive finish.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Services;
