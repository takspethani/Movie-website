import React from "react";
import "./movieContent.css";
import Button from "./Button"; // Import your custom Button component

function MovieContent({movie}) {
  return (
    <div className={`content ${movie.active ? 'active' : 'undefined'}`}>
      <img src={movie.titleImg} alt="Movie title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.length}</span>
        <span>{movie.category}</span>
      </h4>
      <p>
        {movie.description}
      </p>
      <Button
        icon={<ion-icon name="bookmark"></ion-icon> }
        name="Book"
        color="#ff3700"
        bgColor="#ffffff"
      />
      <Button
        icon={<ion-icon name="add-outline"></ion-icon> }
        name="My List"
      />
    </div>
  );
}

export default MovieContent;
