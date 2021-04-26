import React from 'react';
import './buttonClose.scss';

const ButtonClose = ({ onClick, className }) => {
  const handleClick = () => {
    onClick();
  };

  return <div className={`close-btn ${!!className ? className : ''}`} onClick={handleClick} />;
};

export default ButtonClose;
