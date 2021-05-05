import React from 'react';
import styles from './buttonRadio.module.scss';
import cn from 'classnames';

const ButtonCategory = ({ name, active, onClick }) => {
  const checkBoxStyles = cn({
    [styles.checkBox]: true,
    [styles.checkBoxActive]: active,
  });

  const textStyles = cn({
    [styles.text]: true,
    [styles.textActive]: active,
  });

  return (
    <button className={styles.button} onClick={onClick}>
      <div className={checkBoxStyles} />
      <div className={textStyles}>{name}</div>
    </button>
  );
};

export default ButtonCategory;
