import React from "react";
import "./Bmi.css";

function Bmi() {
  return (
    <section id="bmiSection">
      <div id="bmiCalcTop">
        <h2>BMI CALCULATOR</h2>
        <p className="bmiCalcTopP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          veniam eius ipsam qui dolore est perspiciatis pariatur, suscipit
          expedita enim.
        </p>
        <p className="bmiCalcTopP">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          obcaecati optio eveniet ut nisi laboriosam quas distinctio, nesciunt
          iusto praesentium.
        </p>
        <div id="bmiCalcInputContainer">
          <div id="heightContainer">
            <input id="bmiHeigth" type="text" placeholder="Your Height" />
            <p>cm</p>
          </div>
          <div id="weightContainer">
            <input id="bmiWeigth" type="text" placeholder="Your Weigt" />
            <p>kg</p>
          </div>
        </div>
      </div>
      <div id="bmiCalcBottom">
        <h4 id="bmiResult">Your BMI</h4>
        <img src="../../src/assets/bmi-index.jpg" alt="bmiIndex" />
        <div id="bmiIndexSelection" className="bmiIndexUnderweight"></div>
      </div>
    </section>
  );
}

export default Bmi;
