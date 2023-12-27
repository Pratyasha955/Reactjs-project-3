import React from 'react';
import './ErrorMsg.css';

const PopupError = ({ onClose, message }) => {
  return (
    <div className="backdrop" onClick={onClose}>
      <div className="popup">
        <header className="popup-header">
          <h2>Invalid Input</h2>
        </header>
        <div className="popup-content">
          <p>{message}</p>
        </div>
        <footer className="popup-actions">
          <button onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default PopupError;
