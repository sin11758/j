import React from "react";
import "../css/services.css"
import img from "../img/cursor.svg"
import { Link } from 'react-router-dom';

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
                        <Link onClick={aboutMore} to="/services/roofReplacement" alt="services">
                            <div class="box" id="box1">
                                <h2>Roof Replacement</h2>
                            </div>
                        </Link>
                        <Link onClick={aboutMore} to="/services/roofRepair" alt="services">
                            <div class="box" id="box2">
                                <h2>Roof Reparis</h2>
                            </div>
                        </Link>
                    </div>
                    <div class="container">
                        <Link onClick={aboutMore} to="/services/roofInspection" alt="services">
                            <div class="box" id="box3">
                                <h2>Roof Inspections</h2>
                            </div>
                        </Link>
                        <Link onClick={aboutMore} to="/services/exteriorRepair" alt="services">
                            <div class="box" id="box4">
                                <h2>Exterior Repairs</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Services;
