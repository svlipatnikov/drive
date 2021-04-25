import React from 'react';
import './closeButton.scss';

const CloseButton = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return <div className="close-btn" onClick={handleClick} />;
};

export default CloseButton;
