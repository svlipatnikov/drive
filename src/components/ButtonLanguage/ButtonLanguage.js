import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguageAction } from 'redux/actions/mainActions';
import { languageSelector } from 'redux/selectors/mainSelectors';
import './buttonLanguage.scss';

const ButtonLanguage = ({ className }) => {
  const language = useSelector(languageSelector);
  const dispatch = useDispatch();
  console.log(language);

  const handleClick = () => {
    language === 'Eng' ? dispatch(setLanguageAction('Рус')) : dispatch(setLanguageAction('Eng'));
  };

  return (
    <button className={`language-btn ${!!className ? className : ''}`} onClick={handleClick}>
      {language}
    </button>
  );
};

export default ButtonLanguage;
