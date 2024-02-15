import React from "react";
import "./Card.css";

function Card({ img, title, model, rating }) {
  return (
    <div id="cardContainer">
      <img src={img} alt="ship" />
      <h2>{title}</h2>
      <div id="cardBottomContainer">
        <h5>Model: {model}</h5>
        <h5>Hyperdrive Rating: {rating}</h5>
      </div>
    </div>
  );
}

export default Card;
