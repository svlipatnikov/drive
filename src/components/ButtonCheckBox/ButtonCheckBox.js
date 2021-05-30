import React from 'react';
import styles from './buttonCheckBox.module.scss';
import cn from 'classnames';
import { ReactComponent as CheckMark } from 'assets/svg/checkMark.svg';

const ButtonCheckBox = ({ text, checked, className, onClick }) => {
  const checkBoxStyle = cn({
    [styles.checkBox]: true,
    [styles.checkBoxChecked]: checked,
  });

  const labelStyle = cn({
    [styles.label]: true,
    [styles.labelChecked]: checked,
  });

  return (
    <div className={cn(styles.wrapper, className)} onClick={onClick}>
      <div className={checkBoxStyle}>{checked && <CheckMark className={styles.checkMark} />}</div>
      <div className={labelStyle}>{text}</div>
    </div>
  );
};

export default ButtonCheckBox;
