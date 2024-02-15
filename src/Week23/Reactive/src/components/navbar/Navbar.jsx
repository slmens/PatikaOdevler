import React from "react";
import "./Navbar.css";

function Navbar() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    var scrollY = window.scrollY;

    if (scrollY > 90) {
      navbar.style.backgroundColor = "#355493";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });

  function makeBlock() {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display =
      dropdownContent.style.display === "none" ? "block" : "none";
  }

  return (
    <nav id="navbar">
      <img id="navLogo" src="../../src/assets/logo.png" alt="logo" />
      <div
        onClick={makeBlock}
        id="dropdownContainer"
        className="dropdownContainer"
      >
        <div className="dropdownChild"></div>
        <div className="dropdownChild"></div>
        <div className="dropdownChild"></div>
        <div id="dropdownContent" className="dropdown-content">
          <div id="dropdownContentContainer">
            <a href="#heroSection">Home</a>
            <a href="#ourClassesSection">Classes</a>
            <a href="#ourBestTrainersSection">Trainer</a>
            <a href="#reviewSection">Review</a>
            <a href="#contactSection">Contact</a>
            <a id="btnJoinUs" href="#mapAndFooterSection">
              JOIN US
            </a>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <a href="#heroSection"> Home </a>
        </li>
        <li>
          <a href="#ourClassesSection"> Classes </a>
        </li>
        <li>
          <a href="#trainersSection"> Trainers </a>
        </li>
        <li>
          <a href="#reviewSection"> Review </a>
        </li>
        <li>
          <a href="#contactSection"> Contact </a>
        </li>
        <li id="btnLiJoinUs">
          <a href=""> JOIN US </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
