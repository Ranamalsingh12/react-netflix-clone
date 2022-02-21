import React from "react";
import "../assets/Css/Modal.css";

const Modal = ({ closeModal, movieDetails }) => {
  console.log(movieDetails);

  return (
    <div className="modal_background">
      <div
        className="modal_container"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${
            movieDetails.backdrop_path || movieDetails.poster_path
          }")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <div className="container">
          <div className="titleCloseBtn">
            <div>
              <h1>{movieDetails.original_title || movieDetails.name}</h1>
            </div>
            <div>
              <button onClick={() => closeModal(false)}> X </button>
            </div>
          </div>
          <div className="rating">
            <p><span>Rating{movieDetails.vote_average * 10}%</span>
            {movieDetails.release_date || movieDetails.first_air_date}</p>
          </div>
          <div className="body">
            <p>{movieDetails.overview}</p>
          </div>
          <div className="footer">
            <button id='play_btn'>Play</button>
            <button>My List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
