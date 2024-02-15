import React, { useEffect } from "react";
import "./OurClasses.css";

function OurClasses() {
  // Classes
  useEffect(() => {
    const buttons = document.querySelectorAll(".ourClassesButton");
    const triangles = document.querySelectorAll(".triangle");
    const img = document.querySelector("#ourClassesImg");

    buttons.forEach((button, index) => {
      button.addEventListener("click", function () {
        removeAllChoosen(buttons);
        removeAllTriangles(triangles);

        switch (button.id) {
          case "btn1":
            button.classList.add("choosen");
            img.src = "../../src/assets/yoga.jpg";
            document.querySelector("#btn1tri").classList.remove("destroy-tri");
            break;
          case "btn2":
            button.classList.add("choosen");
            img.src = "../../src/assets/group.webp";
            document.querySelector("#btn2tri").classList.remove("destroy-tri");
            break;
          case "btn3":
            button.classList.add("choosen");
            img.src = "../../src/assets/solo.jpg";
            document.querySelector("#btn3tri").classList.remove("destroy-tri");
            break;
          case "btn4":
            button.classList.add("choosen");
            img.src = "../../src/assets/stret.webp";
            document.querySelector("#btn4tri").classList.remove("destroy-tri");
            break;
        }
      });
    });
  }, []);

  function removeAllChoosen(buttons) {
    buttons.forEach((button) => {
      button.classList.remove("choosen");
    });
  }

  function removeAllTriangles(triangles) {
    triangles.forEach((triangle) => {
      triangle.classList.add("destroy-tri");
    });
  }

  return (
    <section id="ourClassesSection">
      <div className="circular-background"></div>
      <div id="ourClassesTop">
        <div id="ourClassesIntro">
          <h2>OUR CLASSES</h2>
          <div id="ourClassesOrangeBox"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. omnis
            necessitatibus error quasi fugiat suscipit incidunt quam provident.
          </p>
        </div>
        <div id="ourClassesButtonContainer">
          <div className="ourClassButtonContainerInd">
            <button id="btn1" className="ourClassesButton choosen">
              Yoga
            </button>
            <div id="btn1tri" className="triangle"></div>
          </div>
          <div className="ourClassButtonContainerInd">
            <button id="btn2" className="ourClassesButton">
              Group
            </button>
            <div id="btn2tri" className="triangle destroy-tri"></div>
          </div>
          <div className="ourClassButtonContainerInd">
            <button id="btn3" className="ourClassesButton">
              Solo
            </button>
            <div id="btn3tri" className="triangle destroy-tri"></div>
          </div>
          <div className="ourClassButtonContainerInd">
            <button id="btn4" className="ourClassesButton">
              Stretching
            </button>
            <div id="btn4tri" className="triangle destroy-tri"></div>
          </div>
        </div>
      </div>
      <div id="ourClassesBottom">
        <div id="ourClassesBottomText">
          <div id="ourClassesYoga">
            <h2>Why are your Yoga?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              corporis impedit facere explicabo, vitae omnis tenetur quisquam
              commodi autem sequi ipsam qui! Magni, animi cum deserunt vel harum
              iure qui incidunt necessitatibus ratione autem eligendi quis
              architecto! Nobis earum voluptatem iure! Sunt officia nemo eius?
            </p>
          </div>

          <div id="ourClassesYogaTimes">
            <h2>When comes Yoga Your Time.</h2>
            <h4>Saturday-Sunday: 8:00am - 10:00am</h4>
            <h4>Monday-Tuesday: 10:00am - 12:00pm</h4>
            <h4>Wednesday-Friday: 3:00pm - 6:00pm</h4>
          </div>
        </div>
        <img
          id="ourClassesImg"
          src="../../src/assets/yoga.jpg"
          alt="yogaPhoto"
        />
      </div>
    </section>
  );
}

export default OurClasses;
