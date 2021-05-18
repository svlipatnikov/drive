import React from 'react';
import styles from './buttonCheckBox.module.scss';
import cn from 'classnames';
import { ReactComponent as CheckMark } from 'assets/svg/checkMark.svg';

const ButtonCheckBox = ({ text, checked, className, onClick }) => {
  const checkBoxStyle = cn({
    [styles.checkBox]: true,
    [styles.checked]: checked,
  });

  const textStyle = cn({
    [styles.text]: true,
    [styles.textChecked]: checked,
  });

  return (
    <button className={cn(styles.button, className)} onClick={onClick}>
      <div className={checkBoxStyle} />
      <div className={textStyle}>{text}</div>
      {checked && <CheckMark className={styles.checkMark} />}
    </button>
  );
};

export default ButtonCheckBox;
