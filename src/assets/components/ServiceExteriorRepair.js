import React from "react";
import "../css/services.css"
import { Link } from 'react-router-dom';

function ServiceExteriorRepair() {
    const aboutMore = () => {
        window.scrollTo({ top: 0 });
      
    };
    
    return (
        <section id="services" className="servicesChild">
            <div  className="services servicesChild section" >
                <h2 className="heading animated fadeInDown">Gutters, Soffit, and Fascia Repair Specialists</h2>
                <div className="para animated2">
                <p> we specialize in delivering comprehensive repair services for exteriors, specifically gutters, soffit, and fascia. Our highly skilled technicians are dedicated to restoring the integrity and aesthetics of these crucial elements, ensuring that any damage is expertly addressed.</p>
                <p>When it comes to repairing gutters, soffit, and fascia, we go above and beyond to ensure a seamless and inconspicuous outcome. Our technicians meticulously match the color of the repair materials with the existing components, leaving no trace that any repair work was performed. This meticulous attention to detail ensures that the repaired sections blend seamlessly with the surrounding areas, resulting in a visually cohesive and aesthetically pleasing finish.</p>
                <p>Our team takes pride in their expertise and craftsmanship, ensuring that each repair is executed with precision and care. By utilizing materials of the highest quality, we guarantee the longevity and durability of our repair work, providing lasting solutions that stand the test of time.</p>
                <p>Whether it's repairing damaged gutters, addressing issues with soffit, or restoring the functionality and appeal of fascia, we have the knowledge and experience to tackle any repair project. Rest assured, our technicians are equipped with the necessary skills and tools to deliver exceptional results, leaving your exteriors looking flawless and well-maintained.</p>
                <p>Don't let damaged gutters, soffit, or fascia compromise the beauty and functionality of your property. Trust the professionals at [Your Company Name] to handle your repair needs with the utmost professionalism and expertise. Contact us today to schedule a consultation and let us restore the integrity and appearance of your exteriors to their former glory.</p>
                </div>
                <div>
                <Link onClick={aboutMore} to="/work" className="animated  fadeInUp"><button className="inActiveButton button2 animated  fadeInUp">View work</button></Link>
                <Link onClick={aboutMore}  to="/" className="animated fadeInUp"><button className="activeButton animated  fadeInUp">Contact us</button></Link>
                </div>
            </div>
        </section>

    );
}

export default ServiceExteriorRepair;
