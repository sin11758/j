import React from "react";
import "../css/MessageBox.css"
import { Call, Room, Email, WatchLater } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';


function MessageBox() {

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1x0y109', 'template_6xd09ov', e.target, 'J87oQuRNaxT7ll2gK')
            .then((result) => {
                console.log(result.text);
                alert("MessageBox sent successfully!");
            }, (error) => {
                console.log(error.text);
                // Optionally, show an error message to the user
                alert("Oops! Something went wrong. Please try again later.");
            });
    };


    return (
        <div id="MessageBox">


            <form className="form" onSubmit={handleSubmit} id="contact-form" method="post">
                <div className="message">
                    <div className="leftMessage">
                        <p>Please provide your details and our team will contact you shortly.</p>
                    </div>
                    <div className="rightMessage ">
                        <div>
                            {/* <label htmlFor="name">Name:</label> */}
                            <input type="text" id="name" name="name" placeholder=" Name:" required />
                        </div>
                        <div>
                            {/* <label htmlFor="email">Email:</label> */}
                            <input type="email" id="email" name="email" placeholder=" Email:" required />
                        </div>
                        <div>
                            {/* <label for="phone">Phone:</label> */}
                            <input type="tel" id="phone" name="phone" placeholder=" Phone:" required />
                        </div>
                        <div>
                            {/* <label for="message">MessageBox:</label> */}
                            <textarea id="message" name="message" placeholder=" MessageBox:" rows="5" required></textarea>
                        </div>
                    </div>
                    {/* <div className="leftMessage hide">
                        <p>Thank you for getting in touch. Our team will be in contact with you shortly. Have a great day!</p>
                    </div> */}
                </div>
                <button class="activeButton messageBox" type="submit">Send</button>
            </form>

        </div>
    );
}

export default MessageBox;
