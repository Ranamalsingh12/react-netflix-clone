import React, { useState } from 'react'
// import ReactPlayer from 'react-player';
import PlayBtn from '../assets/images/playbtn.svg'
// import MuteBtn from '../assets/images/mute-icon.svg';
// import UnMuteBtn from '../assets/images/unmute-icon.svg';
import AddList from '../assets/images/add-icon.svg';
import '../assets/Css/Header.css';

const Header = () => {

    const [muted, setMuted] = useState(true);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

  return (
    <div className="header_main" style={{
        backgroundImage:`url("https://cdn.mediaincanada.com/wp/wp-content/uploads/2020/09/netflix-banner.png?8766fc")`,
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
        <h1 className='header_content_name'>Narcos</h1>
        <button
            onClick={() => alert('not a movie!')}
            className='header_content_PlayBtn'
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
        <p className='header__container_overview'>{truncate(` A gritty chronicle of the war against Colombia's infamously violent and powerful drug cartels.`,150)}</p>
            
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