import React from 'react';
import Modal from "./Modal"
import '../assets/Css/BackDrop.css';

const BackDrop = ({openModal, movieDetails, closeModal}) => {
  return (
    <div className='backDrop'>
        <Modal movieDetails={movieDetails} closeModal={closeModal}/>
    </div>
  )
}

export default BackDrop