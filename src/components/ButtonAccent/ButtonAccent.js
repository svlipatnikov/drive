import React from 'react';
import cn from 'classnames';
import styles from './buttonAccent.module.scss';

const ButtonAccent = ({ text, className, onClick, active }) => {
  const buttonStyle = cn({
    [styles.btn]: true,
    [className]: !!className,
    [styles.activeBtn]: active,
  });

  return (
    <button className={buttonStyle} onClick={active ? onClick : undefined}>
      {text}
    </button>
  );
};

export default ButtonAccent;
