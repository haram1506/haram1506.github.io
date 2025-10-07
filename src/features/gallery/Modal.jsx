import React from 'react';
import './Modal.css';

const Modal = ({ illustration, onClose }) => {
  if (!illustration) {
    return null;
  }

  return (
    // The backdrop darkens the rest of the page
    <div className="modal-backdrop" onClick={onClose}>
      {/* This prevents closing the modal when clicking on the content itself */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={illustration.src} alt={illustration.title} className="modal-image" />
        <div className="modal-details">
          <h2 className="modal-title">{illustration.title}</h2>
          <p className="modal-description">{illustration.description}</p>
        </div>
        <button className="modal-close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Modal;