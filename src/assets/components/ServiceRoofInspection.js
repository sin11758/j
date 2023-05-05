import React from "react";
import "../css/services.css"
import { Link } from 'react-router-dom';

function ServiceRoofInspection() {
    const aboutMore = () => {
        window.scrollTo({ top: 0 });
      
    };
    return (
        <section id="services" className="servicesChild">
            <div  className="services servicesChild section" >
                <h2 className="heading animated fadeInDown">Complimentary Roof Inspection and Detailed Report</h2>
                <div className="para animated2">
                <p>At Great Pyramid Roofing Services Inc., we take pride in providing exceptional service to our valued customers. As part of our commitment to your satisfaction and the longevity of your roof, we offer a complimentary roof inspection conducted by our team of highly skilled and professional employees.</p>
                <p>During the inspection process, our experts meticulously examine every aspect of your roof, thoroughly assessing its condition and identifying any potential roof leaks or issues. With keen attention to detail, we employ industry-leading techniques to ensure a comprehensive evaluation.</p>
                <p>Upon completion of the inspection, you will receive a detailed inspection report that provides an accurate and thorough assessment of your roof's condition. This comprehensive report includes insightful information and accompanying photographs, enabling you to gain a clear understanding of your roof's current state.</p>
                <p>Our aim is to empower you with knowledge, allowing you to make informed decisions regarding any necessary repairs or potential roof replacement. By providing you with a comprehensive report, we ensure transparency and provide a solid foundation for discussing the best course of action for your specific roofing needs.</p>
                <p>Don't leave the condition of your roof to chance. Take advantage of our complimentary roof inspection and receive a detailed report that will guide you in safeguarding your home and investment. Contact us today to schedule your inspection and benefit from our expertise and commitment to exceptional service.</p>
                </div>
                <div>
                <Link onClick={aboutMore} to="/work" className="animated fadeInUp"><button className="inActiveButton button2 animated fadeInUp">View work</button></Link>
                <Link onClick={aboutMore} to="/" className="animated fadeInUp"><button className="activeButton animated fadeInUp">Contact us</button></Link>
                </div>
            </div>
        </section>

    );
}

export default ServiceRoofInspection;
