import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "./Card.jsx";

function Home() {
  const [list, setList] = useState([]);

  const [filterInput, setFilterInput] = useState("");

  function fetchStarWars() {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => setList(data.results))
      .catch((error) => console.error("Error fetching Star Wars data:", error));
  }

  function filterStarWars() {
    if (filterInput === "") {
      fetchStarWars();
    } else {
      const filteredList = list.filter((ship) => {
        return ship.model === filterInput || ship.name === filterInput;
      });
      setList(filteredList);
    }
  }

  function handleChange(e) {
    setFilterInput(e.target.value);
  }

  useEffect(() => {
    fetchStarWars(); // Don't forget to invoke the function
    console.log("a");
  }, []);

  return (
    <div id="home">
      <div id="upContainer">
        <h1>STAR WARS</h1>
        <div>
          <h6>Name/Model</h6>
          <input onChange={handleChange} type="text" placeholder="Name/Model" />
          <button onClick={filterStarWars} id="filterButton">
            Filter
          </button>
        </div>
      </div>
      <div id="bottomContainer">
        {list.map((ship, index) => {
          return (
            <Link
              key={ship.model}
              to={`/${index}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                img={"../src/assets/falcon.jpg"}
                title={ship.model}
                model={ship.name}
                rating={ship.hyperdrive_rating}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
