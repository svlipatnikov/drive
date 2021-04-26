import React from 'react';
import './buttonAccent.scss';

const ButtonAccent = ({ text, className, onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className={`button ${!!className ? className : ''}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ButtonAccent;
