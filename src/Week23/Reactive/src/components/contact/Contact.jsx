import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contactSection">
      <div id="contactIntro">
        <h2>CONTACT US</h2>
        <div id="contactOrangeBox"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis
          necessitatibus error quasi fugiat suscipit incidunt quam provident.
        </p>
      </div>
      <div id="contactBottom">
        <div id="contactTextContainer">
          <div id="contactTextTop">
            <div id="mobileNumberContainer">
              <h3>Mobile Number</h3>
              <h5>+135 773 321 4442</h5>
            </div>
            <div id="emailContainer">
              <h3>Email Address</h3>
              <h5>demo@demo.com</h5>
            </div>
          </div>
          <div id="contactTextBottom">
            <h3>Make An Appointment</h3>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </div>
        </div>
        <div id="contactMapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.680381865283!2d-0.12720032297905945!3d51.500732511189916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben!5e0!3m2!1str!2str!4v1706886907178!5m2!1str!2str"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
