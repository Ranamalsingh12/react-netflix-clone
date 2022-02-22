import React, { useState, useEffect } from 'react';
import Netflix from '../assets/images/Netflix.svg';
import SearchLogo from '../assets/images/search-icon.svg';
import '../assets/Css/Navbar.css';

const Navbar = ({closeModal}) => {

  const [show, setShow] = useState(false);
  
  const transitionNavbar = (e) => {
    if(window.scrollY){
      setShow(true);
    }else{
      setShow(false);
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar)
    }
  }, [])

  return (
    <nav className={`navigationBar nav ${show && "nav_black"}`} onClick={() => closeModal(false)}>
      <div className="navbar_head_left">
          <img
              className='navigation__container__logo'
              src={Netflix}
              alt='Loading...'
            />
          <div className='navbar_container_links'>Home</div>
          <div className='navbar_container_links'>TV Shows</div>
          <div className='navbar_container_links'>Movies</div>
          <div className='navbar_container_links'>
            Recently Added
          </div>
          <div className='navbar_container_links'>My List</div>
      </div>

      <div className="navbar_head_right">
        <div className='search_logo_img'>
          <img src={SearchLogo} alt="" />
        </div>
        <div className='navbar_container_links pseudo-link links'>KIDS</div>
        <div className='navbar_container_links pseudo-link links'>DVD</div>
      </div>
    </nav>
  )
}

export default Navbar