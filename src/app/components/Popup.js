import React, { useEffect } from 'react';
import './Popup.css';

const Popup = ({ content, handleClose }) => {
  useEffect(() => {
    // Disable scrolling on the body when the popup is open
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when the popup is closed
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={handleClose}>×</button>
        <div className="popup-content">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Popup;