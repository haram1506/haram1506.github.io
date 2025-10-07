import React from 'react';
import './Illustration.css';

const Illustration = ({ src, alt, onClick }) => {
  return (
    <div className="illustration-item" onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Illustration;