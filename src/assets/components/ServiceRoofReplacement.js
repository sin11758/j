import React from "react";
import "../css/services.css"
import { Link } from 'react-router-dom';

function ServiceRoofReplacement() {
    const aboutMore = () => {
        window.scrollTo({ top: 0 });
      
    };
    return (
        <section id="services" className="servicesChild">
            <div  className="services servicesChild section" >
                <h2 className="heading animated fadeInDown">Roofing Services for Re-Roofing and New Construction</h2>
                <div className="para animated2">
                <p>At Great Pyramid Roofing Services Inc., we specialize in providing top-notch roofing solutions for both re-roofing projects and new construction. With a commitment to quality and excellence, we ensure the installation of premium roofing products sourced from renowned manufacturers worldwide, such as Owens Corning, Landmark, and GAF.</p>
                <p>Adhering to the highest standards, we meticulously install roofing products in strict accordance with the comprehensive instructions provided by the manufacturers. Additionally, we strictly follow the guidelines outlined in the building code, guaranteeing compliance and structural integrity.</p>
                <p>To instill confidence and provide peace of mind to our customers, we offer an extensive workmanship warranty that spans up to 15 years. This warranty ensures that any issues arising from our installation process will be promptly addressed and resolved. Moreover, as a testament to the quality and durability of the roofing products we utilize, we provide manufacturer warranties that extend up to an impressive 40 years.</p>
                <p>At Great Pyramid Roofing Services Inc., we are dedicated to delivering exceptional roofing solutions with unparalleled craftsmanship and superior materials. Trust us to protect your home and investment with our reliable and long-lasting roofing services. Contact us today to discuss your roofing needs and benefit from our expertise and commitment to excellence.</p>
                </div>
                <div>
                <Link onClick={aboutMore} to="/work" className="animated fadeInUp"><button className="inActiveButton button2 animated fadeInUp">View work</button></Link>
                <Link onClick={aboutMore} to="/" className="animated fadeInUp"><button className="activeButton animated fadeInUp">Contact us</button></Link>
                </div>
            </div>
        </section>

    );
}

export default ServiceRoofReplacement;
