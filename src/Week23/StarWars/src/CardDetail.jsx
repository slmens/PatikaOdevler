import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import "./CardDetail.css";

function CardDetail() {
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [ship, setShip] = useState({});
  const history = useHistory();

  function fetchStarWars() {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => setList(data.results))
      .catch((error) => console.error("Error fetching Star Wars data:", error));
  }

  useEffect(() => {
    fetchStarWars();
  }, []);

  useEffect(() => {
    // Ensure that the id is a valid index in the list
    if (id >= 0 && id < list.length) {
      setShip(list[id]);
    }
  }, [id, list]);

  if (!ship.model) {
    return <div>Loading...</div>;
  }

  function goBack() {
    history.push("/");
  }

  return (
    <div id="cardDetailContainer">
      <div id="backButton" onClick={goBack}>
        Back
      </div>
      <div id="cardDetailInnerContainer">
        <h3>{ship.model}</h3>
        <img src="../src/assets/falcon.jpg" alt="ship" />
        <h4>Model: {ship.model}</h4>
        <h4>Hyperdrive Rating: {ship.hyperdrive_rating}</h4>
        <h4>Passengers: {ship.passengers}</h4>
        <h4>Max Speed: {ship.max_atmosphering_speed}</h4>
        <h4>Crew: {ship.crew}</h4>
      </div>
    </div>
  );
}

export default CardDetail;
