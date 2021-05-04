import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguageAction } from 'redux/actions/mainActions';
import { languageSelector } from 'redux/selectors/mainSelectors';
import styles from './buttonLanguage.module.scss';
import cn from 'classnames';

const ButtonLanguage = ({ className }) => {
  const language = useSelector(languageSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    language === 'Eng' ? dispatch(setLanguageAction('Рус')) : dispatch(setLanguageAction('Eng'));
  };

  return (
    <button className={cn(styles.languageBtn, className)} onClick={handleClick}>
      {language}
    </button>
  );
};

export default ButtonLanguage;
