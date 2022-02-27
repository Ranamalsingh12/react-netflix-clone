import React, { useState, useEffect } from 'react'
import '../assets/Css/Header.css';
import axios from '../Api/axios';
import requests from '../Api/Request';

const Header = ({closeModal}) => {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor((Math.random() * request.data.results.length) - 1)
                ]
            );
            return request;
        }

        fetchData()
    }, [])


  return (
    <div className="header_main" onClick={() => closeModal(false)} style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
    }}>
      <div className="header_content">
        <h1 className='header_content_name'>{movie?.title || movie?.name || movie?.original_name}</h1>

        <p className='header__container_overview'>{truncate(movie?.overview,150)}</p>

        <button
            onClick={() => alert('not a movie!')}
            className='header_content_PlayBtn btn-play'
        >
            Play
        </button>
        <button
            className='header_content_PlayBtn'
        >
            My List
        </button>
      </div>

      <div className="header_content-fade"></div>

    </div>
  )
}

export default Header