import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="heroSection">
      <div className="heroContainer">
        <div className="heroTextContainer">
          <h2>POWERFULL</h2>
          <h1>Group Practice With Trainer</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.totam odio
            harum quas voluptatem vel unde consequuntur eum. Dicta quis
            similique assumenda eveniet quae illo error eos rem quaerat? Saepe.
          </p>
          <div id="heroButtonContainer">
            <button id="signUpButton">Sign Up</button>
            <button id="detailsButton">Details</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
