import React from 'react';
import "./Modal.scss";

const Modal = ({ movie, setIsModalOpen }) => {
    
    const closeModalHandler = (event) => {
        if (event.target.className === 'modal-background') {
            setIsModalOpen(false)
        }
    }
    return (
        <div className='modal-background' onClick={closeModalHandler}>
                <div className='modal'>
                <button onClick={() => setIsModalOpen(false)}>X</button>
                <p>Modal</p>
            </div>
        </div>
    );
};

export default Modal;