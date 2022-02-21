import React, { useState, useEffect } from 'react'
// import ReactPlayer from 'react-player';
// import PlayBtn from '../assets/images/playbtn.svg'
// import MuteBtn from '../assets/images/mute-icon.svg';
// import UnMuteBtn from '../assets/images/unmute-icon.svg';
// import AddList from '../assets/images/add-icon.svg';
import '../assets/Css/Header.css';
import axios from '../Api/axios';
import requests from '../Api/Request';

const Header = () => {

    // const [muted, setMuted] = useState(true);

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
    <div className="header_main" style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition: "center center"
    }}>
        {/* <ReactPlayer
            // playing
            muted
            width='100%'
            height='100vh'
            className='header_video'
            config={{ file: { attributes: {
                autoPlay: true,
                muted: true
            }}}}
            url='https://vimeo.com/384025132'
      /> */}

      <div className="header_content">
        <h1 className='header_content_name'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <button
            onClick={() => alert('not a movie!')}
            className='header_content_PlayBtn btn-play'
        >
            {/* <img src={PlayBtn} className='header_content_PlayBtn_btnplay' alt="" /> */}
            Play
        </button>
        <button
            className='header_content_PlayBtn'
        >
            {/* <img src={AddList} className='header_content_PlayBtn_btnplay' alt="" /> */}
            My List
        </button>
        <p className='header__container_overview'>{truncate(movie?.overview,150)}</p>
            
        {/* {muted ? (
        <button onClick={() => setMuted(false)} className='header_content_volBtn'>
            <img src={MuteBtn} alt="" />
        </button>
        ) : (
        <button onClick={() => setMuted(true)} className='header_content_volBtn'>
            <img src={UnMuteBtn} alt="" />
        </button>
        )} */}
      </div>

      <div className="header_content-fade"></div>

    </div>
  )
}

export default Header