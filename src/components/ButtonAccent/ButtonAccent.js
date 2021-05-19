import React from 'react';
import cn from 'classnames';
import styles from './buttonAccent.module.scss';

const ButtonAccent = ({ text, className, onClick, active, negative }) => {
  const buttonStyle = cn({
    [styles.btn]: true,
    [styles.activeBtn]: active,
    [styles.negativeBtn]: negative,
    [className]: !!className,
  });

  return (
    <button className={buttonStyle} onClick={active || negative ? onClick : undefined}>
      {text}
    </button>
  );
};

export default ButtonAccent;
