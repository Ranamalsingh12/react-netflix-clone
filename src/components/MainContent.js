import React from 'react';
import Navbar from '../components/Navbar';
import Header from './Header';

const MainContent = () => {
  return (
    <div className='main_content'>
        {/* NavBar  */}
        <Navbar />
        
        {/* Header  */}
        <Header />
    </div>
  )
}

export default MainContent