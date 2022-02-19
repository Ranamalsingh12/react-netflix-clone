import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import Netflix from '../assets/images/Netflix.svg';
import SearchLogo from '../assets/images/search-icon.svg';
import '../assets/Css/Navbar.css';

const Navbar = () => {

  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if(window.scrollY){
      setShow(true);
    }else{
      setShow(false);
    }
  }
  
  useEffect(() => {
    // window.addEventListner("scroll", transitionNavbar);
    return () => {
      window.removeEventListner("scroll", transitionNavbar)
    }
  }, [])
  


  return (
    <nav className={`navigationBar nav ${show &&'nav_black'}`}>
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
        <div>
          <input type="text" placeholder="Search Movies, Shows .." />
        </div>
        <div className='navigation__container-link pseudo-link'>KIDS</div>
        <div className='navigation__container-link pseudo-link'>DVD</div>
      </div>
    </nav>
  )
}

export default Navbar