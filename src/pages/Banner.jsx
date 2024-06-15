import React, { useEffect, useState } from "react";
import "./banner.css";
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";
import MovieSwiper from "../components/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleSlideChange = (id) => {
    const newMovies = movies.map((movie) => {
      movie.active = false;
      if (movie._id === id) {
        movie.active = true;
      }
      return movie;
    });
    setMovies(newMovies);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/data/movieData.json");
      const data = await response.json();
      console.log(data);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="banner">
      {movies && movies.length > 0 && movies.map((movie) => (
        <div key={movie._id} className="movie">
          <img src={movie.bgImg} alt="Background" className={`bgImg ${movie.active ? 'active' : ''}`} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent movie={movie} />
              </div>
              <div className="col-lg-6 col-md-12">
                <MovieDate movie={movie} />
                <PlayBtn movie={movie} />
              </div>
            </div>
          </div>
        </div>
      ))}
      {movies && movies.length > 0 && <MovieSwiper slides={movies} handleSlideChange={handleSlideChange} />}
    </div>
  );
}

export default Banner;
