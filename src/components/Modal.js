import React from 'react'
import '../assets/Css/Modal.css';

const Modal = ({ closeModal, movies, title, fetchUrl }) => {
  
  console.log(movies);
  console.log(title);
  console.log(fetchUrl);


  return (
    <div className='modal_background'>
        <div className="modal_container" style={{
          // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies[0]?.backdrop_path}")`
        }}>
          <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="title">
            <h1>Name</h1>
          </div>
          <div className="body">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate magni vero officia ipsum dolor, error ad maxime voluptatem cumque architecto accusantium iusto rem ea laboriosam perspiciatis consectetur impedit amet recusandae!</p>
          </div>
          <div className="footer">
            <button>continue</button>
            <button onClick={() => closeModal(false)}>close</button>
          </div>
        </div>
    </div>
  )
}

export default Modal;