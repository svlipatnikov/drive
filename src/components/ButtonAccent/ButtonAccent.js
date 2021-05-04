import React from 'react';
import cn from 'classnames';
import styles from './buttonAccent.module.scss';

const ButtonAccent = ({ text, className, handleClick }) => {
  return (
    <button className={cn(styles.accentBtn, className)} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ButtonAccent;
