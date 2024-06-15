import React, { useEffect, useState } from "react";
import "./schedule.css";
import Card from "./Card";

function Schedule() {
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setMovies(data);
  });

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/data/movieData.json");
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section id="schedule" className="schedule">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Opening this week</h4>
        </div>
        <div className="row">
          <div className="filters">
            <p>Filters</p>
          </div>
        </div>
        <div className="row mt-5">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <Card  key={movie._id} movie={movie} />)}
        </div>
      </div>
    </section>
  );
}

export default Schedule;
