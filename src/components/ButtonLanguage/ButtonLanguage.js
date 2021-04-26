import React, { useState } from 'react';
import './buttonLanguage.scss';

const ButtonLanguage = ({ className }) => {
  const [english, setEnglish] = useState(true);

  const handleClick = () => {
    setEnglish((english) => !english);
  };

  return (
    <button className={`language-btn ${!!className ? className : ''}`} onClick={handleClick}>
      {english ? 'Eng' : 'Rus'}
    </button>
  );
};

export default ButtonLanguage;
