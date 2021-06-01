import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguageAction } from 'redux/actions/mainActions';
import { languageSelector } from 'redux/selectors/mainSelectors';
import ButtonLanguageLayout from './ButtonLanguageLayout';

const ButtonLanguage = ({ ...props }) => {
  const language = useSelector(languageSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setLanguageAction(language === 'Eng' ? 'Рус' : 'Eng'));
  };

  return <ButtonLanguageLayout label={language} onClick={handleClick} {...props} />;
};

export default ButtonLanguage;
