import React from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import styles from './dateInput.module.scss';

const DateInput = ({ label, date, action, minDate }) => {
  const dispatch = useDispatch();

  const handleChangeDate = (date) => {
    dispatch(action(date));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <DatePicker
        className={styles.input}
        minDate={minDate || new Date()}
        placeholderText="Введите дату и время"
        selected={date}
        onChange={handleChangeDate}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="Время"
        dateFormat="dd.MM.yyyy HH:mm"
      />
    </div>
  );
};

export default DateInput;
