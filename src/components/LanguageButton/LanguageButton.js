import React, { useState } from 'react';
import './languageButton.scss';

const LanguageButton = () => {
  const [english, setEnglish] = useState(true);

  const handleClick = () => {
    setEnglish((english) => !english);
  };

  return (
    <button className="language-btn" onClick={handleClick}>
      {english ? 'Eng' : 'Rus'}
    </button>
  );
};

export default LanguageButton;
