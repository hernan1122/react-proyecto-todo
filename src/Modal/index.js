import React from 'react';
//se usa para hacer render del modal
import ReactDOM from "react-dom";
import '../css/Modal.css'

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className='ModalBackground'>
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };