import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import styles from './dateInput.module.scss';
import { setMinutes, setHours, isToday, roundToNearestMinutes } from 'date-fns';

const DateInput = ({ label, date, action, minDate, maxDate, disabled }) => {
  const [inputDate, setInputDate] = useState(date);
  const dispatch = useDispatch();

  const handleChangeDate = (date) => {
    setInputDate(date);
  };

  const handleClose = () => {
    dispatch(action(inputDate));
  };

  const handleOpen = () => {
    if (!date) setInputDate(roundToNearestMinutes(minDate, { nearestTo: 30 }));
  };

  const getMinTime = () => {
    if (label === 'С') {
      return isToday(inputDate) ? minDate : null;
    } else if (inputDate) {
      return inputDate.getDate() === minDate.getDate() ? minDate : null;
    }
    return null;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <DatePicker
        className={styles.input}
        selected={inputDate}
        onChange={handleChangeDate}
        onCalendarClose={handleClose}
        onCalendarOpen={handleOpen}
        showTimeSelect
        timeIntervals={30}
        timeFormat="HH:mm"
        timeCaption="Время"
        dateFormat="dd.MM.yyyy HH:mm"
        placeholderText="Введите дату и время"
        minDate={minDate}
        maxDate={maxDate}
        minTime={getMinTime()}
        maxTime={!!getMinTime() ? setHours(setMinutes(minDate, 59), 23) : null}
        disabled={disabled}
      />
    </div>
  );
};

export default DateInput;
