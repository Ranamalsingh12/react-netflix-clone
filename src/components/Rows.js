import React, { useState, useEffect } from "react";
import "../assets/Css/Row.css";
import axios from "../Api/axios";

const Rows = ({ title, fetchUrl, bigRow = false, selectMovieHandler }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <div className="row">
        <h2>{title}</h2>

        <div className="row_detail">
          {movies.map(
            (movie) =>
              ((bigRow && movie.poster_path) ||
                (!bigRow && movie.backdrop_path)) && (
                <img
                  onClick={() => {
                    selectMovieHandler(movie);
                  }}
                  className={`row_image ${bigRow && "row_large_image"}`}
                  key={movie.id}
                  src={`${base_url}${
                    bigRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie}
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Rows;
