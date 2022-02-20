import React from 'react';
import Navbar from '../components/Navbar';
import Header from './Header';
import Rows from './Rows';
import requests from '../Api/Request';

const MainContent = () => {
  return (
    <div className='main_content'>
        {/* NavBar  */}
        <Navbar />
        
        {/* Header  */}
        <Header />

        {/* Rows  */}
        <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} bigRow />
        <Rows title="Trending" fetchUrl={requests.fetchTrending} />
        <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Rows title="Comedy Movies" fetchUrl={requests.fetchComedynMovies} />
        <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  )
}

export default MainContent