import React from 'react';
import styles from './buttonRadio.module.scss';
import cn from 'classnames';

const ButtonRadio = ({ name, active, onClick, className }) => {
  console.log('className', className);
  const checkBoxStyles = cn({
    [styles.checkBox]: true,
    [styles.checkBoxActive]: active,
  });

  const textStyles = cn({
    [styles.text]: true,
    [styles.textActive]: active,
  });

  return (
    <button className={cn(styles.button, className)} onClick={onClick}>
      <div className={checkBoxStyles} />
      <div className={textStyles}>{name}</div>
    </button>
  );
};

export default ButtonRadio;
