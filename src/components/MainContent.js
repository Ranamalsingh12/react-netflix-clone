import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from './Header';
import Rows from './Rows';
import requests from '../Api/Request';
import BackDrop from "./BackDrop";
import Footer from './Footer';

const MainContent = () => 
{

  const [movieDetails, setMovieDetails] = useState({});

  const [openModal, setOpenModal] = useState(false);

  const selectMovieHandler = async (movie) => {
    setMovieDetails(movie)
    setOpenModal(true)
  }

  return (
    <div className='main_content'>
        {/* NavBar  */}
        <Navbar closeModal={setOpenModal} />
        
        {/* Header  */}
        <Header closeModal={setOpenModal} />

        {/* Rows  */}
        <Rows selectMovieHandler={selectMovieHandler} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} bigRow />
        <Rows selectMovieHandler={selectMovieHandler} title="Trending" fetchUrl={requests.fetchTrending} />
        <Rows selectMovieHandler={selectMovieHandler} title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Rows selectMovieHandler={selectMovieHandler} title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Rows selectMovieHandler={selectMovieHandler} title="Comedy Movies" fetchUrl={requests.fetchComedynMovies} />
        <Rows selectMovieHandler={selectMovieHandler} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Rows selectMovieHandler={selectMovieHandler} title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Rows selectMovieHandler={selectMovieHandler} title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

        {openModal && <BackDrop closeModal={setOpenModal} movieDetails={movieDetails} />}
        {/* {openModal && <Modal movieDetails={movieDetails} closeModal={setOpenModal}/>} */}


        {/* Footer  */}
        <Footer />
        
    </div>
  )
}

export default MainContent