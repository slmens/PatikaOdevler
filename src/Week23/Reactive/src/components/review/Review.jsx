import React from "react";
import "./Review.css";

function Review() {
  return (
    <section id="reviewSection">
      <div id="reviewIntro">
        <h2>REVIEW CLIENT</h2>
        <div id="reviewOrangeBox"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis
          necessitatibus error quasi fugiat suscipit incidunt quam provident.
        </p>
      </div>
      <div id="reviewBottom">
        <div className="reviewCard">
          <div className="reviewCardTop">
            <div>
              <img
                src="../../src/assets/client1.jpg"
                width="70px"
                height="70px"
                alt="client"
              />
            </div>
            <div className="reviewCardTopBottom">
              <h4>Diet Expert</h4>
              <h5>CFO</h5>
            </div>
          </div>
          <div className="reviewCardBottom">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              nam recusandae neque placeat nobis. Minus asperiores sapiente
              adipisci quos. Iure sint beatae non obcaecati voluptatum ab,
              recusandae dolore facilis illum.
            </p>
            <div className="leftRibbon"></div>
            <div className="rightRibbon"></div>
          </div>
        </div>
        <div className="reviewCard">
          <div className="reviewCardTop">
            <div>
              <img
                src="../../src/assets/client2.jpg"
                width="70px"
                height="70px"
                alt="client"
              />
            </div>
            <div className="reviewCardTopBottom">
              <h4>Cardio Trainer</h4>
              <h5>CEO</h5>
            </div>
          </div>
          <div className="reviewCardBottom">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              nam recusandae neque placeat nobis. Minus asperiores sapiente
              adipisci quos. Iure sint beatae non obcaecati voluptatum ab,
              recusandae dolore facilis illum.
            </p>
            <div className="leftRibbon"></div>
            <div className="rightRibbon"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
