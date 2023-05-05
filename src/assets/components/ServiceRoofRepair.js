import React from "react";
import "../css/services.css"
import { Link } from 'react-router-dom';

function ServiceRoofRepair() {
    const aboutMore = () => {
        window.scrollTo({ top: 0 });
      
    };
    return (
        <section id="services" className="servicesChild">
            <div  className="services servicesChild section" >
                <h2 className="heading animated fadeInDown">Prompt Repairs to Safeguard Your Home</h2>
                <div className="para animated2">
                <p>At Great Pyramid Roofing Services Inc., we understand the urgency of timely repairs to protect your home from potential damage. Our dedicated team operates efficiently and expeditiously, working around the clock to ensure that all necessary repairs are promptly executed. By taking swift action, we prevent issues such as rotten plywood, compromised insulation, and other rain-induced damages from plaguing your residence.</p>
                <p>When it comes to repairs, we prioritize maintaining the aesthetic harmony of your roof. Our meticulous approach entails installing shingles that perfectly match the brand and color of your existing roof. This attention to detail ensures a seamless integration, preserving the visual integrity of your home's exterior.</p>
                <p>To keep you well-informed and involved throughout the repair process, our skilled technicians provide comprehensive reports. These detailed documents outline the precise condition of your roof, as well as the specific repairs carried out. In addition, we believe in visual transparency, providing you with before and after photographs, capturing the transformation and showcasing the work performed.</p>
                <p>Rest assured that at Great Pyramid Roofing Services Inc., we prioritize the swift resolution of any roofing issues, employing our expertise to safeguard your home from further damage. Trust us to deliver prompt, efficient repairs and keep your residence in optimal condition. Contact us today to schedule a consultation and experience our commitment to exceptional service.</p>
                </div>
                <div>
                <Link onClick={aboutMore} to="/work" className="animated fadeInUp"><button className="inActiveButton button2 animated fadeInUp">View work</button></Link>
                <Link onClick={aboutMore} to="/" className="animated fadeInUp"><button className="activeButton animated fadeInUp">Contact us</button></Link>
                </div>
            </div>
        </section>

    );
}

export default ServiceRoofRepair;
