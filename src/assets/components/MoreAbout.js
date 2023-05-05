import React from "react";
import "../css/about.css"
import { AccountCircleOutlined, LocationOnOutlined, SchoolOutlined, WorkspacePremiumOutlined } from '@mui/icons-material';


function MoreAbout() {
    return (
        <section id="MoreAbout">
            <div className="MoreAbout" >
                {/* about */}
                <div className=" section about2" >
                    <h2 className=" heading animated fadeInDown">Overview</h2>
                    <div className="para animated3">
                        <p> Great Pyramid Roofing Services Inc. is a leading provider of residential roofing solutions, dedicated to delivering top-notch services and ensuring utmost customer satisfaction. As a company, we prioritize excellence in every aspect of our work. From using premium roofing materials to employing highly skilled professionals, we go above and beyond to ensure exceptional results.</p>
                        <p>Our commitment to quality is reflected in our meticulous attention to detail and our unwavering dedication to providing the best customer experience. With extensive liability insurance and WSIB coverage, our clients can have complete confidence in the safety and reliability of our team, knowing that we are fully insured and certified to work at heights.</p>
                        <p>At Great Pyramid Roofing, we firmly believe in the longevity and durability of our work. That's why we offer an impressive workmanship warranty of up to 15 years, in addition to manufacturer warranties of up to 40 years. These warranties provide our valued clients with peace of mind, knowing that their investment in our services is protected for years to come.</p>
                        <p>When you choose Great Pyramid Roofing Services Inc., you can trust that your residential roofing needs will be met with the highest standards of quality, professionalism, and integrity. We take pride in our work and look forward to exceeding your expectations with our superior craftsmanship and unparalleled customer service.</p>
                    </div>
                </div>
                {/* trust */}
                <div className="parent">
                    <div className="child">
                        <AccountCircleOutlined color="disabled" fontSize="large" />
                        <div className="text1">Best quality</div>
                        <div className="text2">We guarantee your full satisfaction</div>
                    </div>
                    <div className="child">
                        <LocationOnOutlined color="disabled" fontSize="large" />
                        <div className="text1">Trust</div>
                        <div className="text2">We are responsible and careful</div>
                    </div>
                    <div className="child">
                        <SchoolOutlined color="disabled" fontSize="large" />
                        <div className="text1">Licensed professional</div>
                        <div className="text2">Fully qualified in our field</div>
                    </div>
                    <div className="child">
                        <WorkspacePremiumOutlined color="disabled" fontSize="large" />
                        <div className="text1">Custom service</div>
                        <div className="text2">A professional, personalized experience</div>
                    </div>
                </div>

                {/* shingle brands */}
                <div className="parent2">

                    <h1>SHINGLE BRANDS WE INSTALL</h1>
                    <div className="shingle-brands">
                        {/* <div> */}
                            <a target="blank" href="https://www.owenscorning.com/"><img src="https://lirp.cdn-website.com/c53da632/dms3rep/multi/opt/1200px-Owens_Corning_logo.svg-1920w.png" alt="Owens Corning" /></a>
                            <a target="blank" href="https://www.gaf.com/"><img src="https://lirp.cdn-website.com/c53da632/dms3rep/multi/opt/1200px-GAF_logo.svg-1920w.png" alt="GAF" /></a>
                        {/* </div> */}
                        {/* <div> */}
                            <a target="blank" href="https://www.certainteed.com/"><img src="https://lirp.cdn-website.com/c53da632/dms3rep/multi/opt/Certainteed-Logo-with-Roofing-1920w.png" alt="CertainTeed" /></a>
                            <a target="blank" href="https://www.iko.com/na/"><img src="https://lirp.cdn-website.com/c53da632/dms3rep/multi/opt/IKOLogo-Square-1920w.jpg" alt="IKO" /></a>
                        {/* </div> */}
                    </div>
                </div>

                {/* spetial features */}
                <div className="parent">
                    <div className="child">
                        <AccountCircleOutlined color="disabled" fontSize="large" />
                        <div className="number">2,005</div>
                        <div className="text">Roof Replacements</div>
                    </div>
                    <div className="child">
                        <LocationOnOutlined color="disabled" fontSize="large" />
                        <div className="number">2</div>
                        <div className="text">Locations</div>
                    </div>
                    <div className="child">
                        <SchoolOutlined color="disabled" fontSize="large" />
                        <div className="number">18</div>
                        <div className="text">Staff</div>
                    </div>
                    <div className="child">
                        <WorkspacePremiumOutlined color="disabled" fontSize="large" />
                        <div className="number">15</div>
                        <div className="text">Years Experience</div>
                    </div>
                </div>

                <div className="parent2">

                    <h1>Why people believe in us</h1>
                    <div className="testimonial">
                        <div className="quote">
                            <p>"I contacted GreatPyramid Roofing along with other roofing companies to get quotes. GreatPyramid Roofing provided a reasonable quote and accommodated my preference for weekend work to minimize noise disruption. They demonstrated professionalism and offered competitive pricing. I highly recommend them based on their efficient completion of a new roof installation within a day and their excellent cleanup. I would not hesitate to engage their services again in the future."</p>
                            <div className="author">Victoria Laskowskiy.</div>
                        </div>
                        <div className="quote">
                            <p>"We were highly impressed with the exceptional quality, professionalism, and friendly service provided. The team went above and beyond by replacing a damaged downspout, ensuring the integrity of the roof. Remarkably, they even accommodated our needs by returning on a Saturday night. We wholeheartedly recommend their services and would not hesitate to utilize them again in the future."</p>
                            <div className="author">Dave Lackie</div>
                        </div>
                        <div className="quote">
                            <p>"Experience seamless roofing services with a highly skilled and professional team. From start to finish, they ensured a smooth and hassle-free experience. The workers displayed extensive knowledge and expertise, resulting in a flawlessly executed roof installation. Their commitment to excellence was evident as they addressed all my queries with clarity and confidence. I wholeheartedly recommend their services to anyone in need of roofing solutions."</p>
                            <div className="author">Vikrant K</div>
                        </div>
                        <div className="quote">
                            <p>"I highly recommend their exceptional service and prompt response. These professionals possess remarkable speed and an unwavering attention to detail. As someone who manages buildings myself, I confidently endorse their services for any related needs."</p>
                            <div className="author">Dean Lee</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    );
}

export default MoreAbout;
