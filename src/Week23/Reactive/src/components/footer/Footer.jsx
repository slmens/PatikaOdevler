import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section id="footerSection">
      <img src="../../src/assets/logo.png" alt="logo" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores amet
        voluptatum soluta architecto id, dicta fugiat obcaecati temporibus modi,
        unde eos blanditiis aliquid enim at.
      </p>
      <div id="footerBottomContainer">
        <div class="footerBottomContainer">
          <h3>Information</h3>
          <h4>About Us</h4>
          <h4>Classes</h4>
          <h4>Blog</h4>
          <h4>Contact</h4>
        </div>
        <div class="footerBottomContainer">
          <h3>Helpful Links</h3>
          <h4>Services</h4>
          <h4>Supports</h4>
          <h4>Terms & Condition</h4>
          <h4>Privacy Policy</h4>
        </div>
      </div>
    </section>
  );
}

export default Footer;
