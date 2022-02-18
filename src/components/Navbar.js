import React from 'react';
// import { NavLink } from 'react-router-dom';
import Netflix from '../assets/images/Netflix.svg';
import SearchLogo from '../assets/images/search-icon.svg';

const Navbar = () => {
  return (
    <nav className='navigationBar'>
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