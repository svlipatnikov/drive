import React from 'react';
import styles from './buttonClose.module.scss';
import cn from 'classnames';
import { ReactComponent as CloseBtn } from 'assets/svg/closeBtn.svg';

const ButtonClose = ({ onClick, dark, size = 'large', className }) => {
  const btnCloseStyle = cn(styles.closeBtn, styles[size], { [styles.dark]: dark }, className);

  return (
    <button className={btnCloseStyle} onClick={onClick}>
      <CloseBtn className={styles[size]} />
    </button>
  );
};

export default ButtonClose;
