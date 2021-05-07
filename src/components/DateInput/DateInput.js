import React from 'react';
import styles from './dateInput.module.scss';

const DateInput = ({ label }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <input className={styles.input} placeholder="Введите дату и время" />
    </div>
  );
};

export default DateInput;
