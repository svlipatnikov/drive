import React from 'react';
import cn from 'classnames';
import styles from './ButtonLanguageLayout.module.scss';

const ButtonLanguageLayout = ({ label, onClick, className, ...props }) => {
  return (
    <button className={cn(styles.languageBtn, className)} onClick={onClick} {...props}>
      {label}
    </button>
  );
};

export default ButtonLanguageLayout;
