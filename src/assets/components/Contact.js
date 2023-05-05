import React from "react";
import "../css/contact.css"
import { Call, Room, Email, WatchLater } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';


function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_1x0y109', 'template_6xd09ov', e.target, 'J87oQuRNaxT7ll2gK')
          .then((result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          }, (error) => {
            console.log(error.text);
            // Optionally, show an error message to the user
            alert("Oops! Something went wrong. Please try again later.");
        });
    };
    
    
    return (
        <section id="Contact">
            <div class="Contact section" >
                <h2>Contact Us</h2>
            {/* <p>Our dedicated team is here to assist you with any inquiries or concerns; simply leave us a message and expect a prompt response.</p> */}

                <div className="row">



                        <form className="form" onSubmit={handleSubmit} id="contact-form" method="post">
                            <div>
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" placeholder=" Name:" required />
                            </div>
                            <div>
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder=" Email:" required />
                            </div>
                            <div>
                                <label for="phone">Phone:</label>
                                <input type="tel" id="phone" name="phone" placeholder=" Phone:" required />
                            </div>
                            <div>
                                <label for="message">Message:</label>
                                <textarea id="message" name="message" placeholder=" Message:" rows="5" required></textarea>
                            </div>
                            <button class="activeButton" type="submit">Send</button>
                        </form>

                    <div class="contact-info">
                        <ul>

                            <li><Call /></li>
                            <li><a href="tel:+16479791002">(647) 979-1002</a></li>
                            <li><a href="tel:+16472910045">(647) 291-0045</a></li>
                            <br/>
                            <li><Room /></li>
                            <li><a target="blank" href="https://www.google.com/maps/search/?api=1&query=3153+Steels+Avenue+W+#3+,+Milton,+ON+L9T+2V4">3153 Steels Avenue W, Milton, ON L9T 2V4 (Unit-3)</a></li>
                            <br/>
                            <li><Email /></li>
                            <li><a href="mailto:info@greatpyramidroofing.com?subject=Information%20Request%20for%20Roof%20Services%20from%20The%20Great%20Pyramid%20Roofing">info@greatpyramidroofing.com</a></li>
                            <br/>
                            <li><WatchLater /></li>
                            <li>Mon - Fri6:00 am - 5:00 pm</li>
                            <li>Sat - Sun9:00 am - 5:00 pm</li>
                        </ul>
                        {/* <Link to="/contact" ><button className="inActiveButton" type="submit">LearnMore</button></Link> */}
                    </div>

                </div>
            </div>
        </section>

    );
}

export default Contact;
