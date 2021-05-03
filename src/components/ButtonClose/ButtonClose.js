import React from 'react';
import styles from './buttonClose.module.scss';
import { ReactComponent as CloseBtn } from 'assets/svg/closeBtn.svg';

const ButtonClose = ({ handleClose }) => {
  return (
    <button className={styles.closeBtn} onClick={handleClose}>
      <CloseBtn />
    </button>
  );
};

export default ButtonClose;
