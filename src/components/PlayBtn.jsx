import React, { useState } from "react";
import "./playBtn.css";
import Modal from "./Modal"; // Ensure the correct import

function PlayBtn({ movie }) {
  const [modal, setModal] = useState(false);
  const toggleModal = (e) => {
    e.preventDefault(); // Prevent the default action for the anchor tag
    setModal(!modal);
  };

  return (
    <>
      <div
        className={`trailer d-flex justify-content-center align-items-center ${
          movie.active ? "active" : ""
        }`}
      >
        <a href="#" className="playBtn" onClick={toggleModal}>
          <ion-icon name="play-outline"></ion-icon>
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && <Modal status={modal} movie={movie} toggleModal={toggleModal} />}
    </>
  );
}

export default PlayBtn;
