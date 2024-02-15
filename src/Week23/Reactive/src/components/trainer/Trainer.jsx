import React from "react";
import "./Trainer.css";

function Trainer() {
  return (
    <section id="trainersSection">
      <div id="trainersIntro">
        <h2>OUR BEST TRAINERS</h2>
        <div id="trainersOrangeBox"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis
          necessitatibus error quasi fugiat suscipit incidunt quam provident.
        </p>
      </div>
      <div id="trainersCardContainer">
        <div id="trainerCard1" className="trainerCard">
          <img src="../../src/assets/trainer1.jpg" alt="trainer" />
          <div className="trainerHorizontalFrame"></div>
          <div className="trainerVerticalFrame"></div>
          <div id="trainerInfoCardContainer">
            <div id="trainerInfoBigSquare">
              <h3>Jane Doe</h3>
              <h4>Cardio Trainer</h4>
            </div>
            <div id="trainerInfoBackground"></div>
          </div>
        </div>
        <div id="trainerCard2" className="trainerCard">
          <img src="../../src/assets/trainer2.jpg" alt="trainer" />
          <div className="trainerHorizontalFrame"></div>
          <div className="trainerVerticalFrame"></div>
          <div id="trainerInfoCardContainer">
            <div id="trainerInfoBigSquare">
              <h3>John Cee</h3>
              <h4>Fitness Trainer</h4>
            </div>
            <div id="trainerInfoBackground"></div>
          </div>
        </div>
        <div id="trainerCard3" className="trainerCard">
          <img src="../../src/assets/trainer3.jpg" alt="trainer" />
          <div className="trainerHorizontalFrame"></div>
          <div className="trainerVerticalFrame"></div>
          <div id="trainerInfoCardContainer">
            <div id="trainerInfoBigSquare">
              <h3>Juliet Foo</h3>
              <h4>Aerobic Trainer</h4>
            </div>
            <div id="trainerInfoBackground"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trainer;
