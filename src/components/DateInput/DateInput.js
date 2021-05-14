import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import styles from './dateInput.module.scss';
import {
  setMinutes,
  setHours,
  isToday,
  roundToNearestMinutes,
  addMinutes,
  addHours,
  subMinutes,
} from 'date-fns';

const DateInput = ({ label, date, action, minDate, maxDate }) => {
  const [inputDate, setInputDate] = useState(date);
  const dispatch = useDispatch();

  const handleChangeDate = (date) => {
    setInputDate(date);
  };

  const handleClose = () => {
    dispatch(action(roundToNearestMinutes(inputDate, { nearestTo: 30 })));
  };

  const handleOpen = () => {
    if (!date)
      setInputDate(roundToNearestMinutes(addMinutes(minDate || new Date(), 30), { nearestTo: 30 }));
  };

  const getMinTime = () => {
    if (minDate && inputDate) {
      return inputDate.getDate() === minDate.getDate()
        ? addMinutes(minDate, 30)
        : setHours(setMinutes(minDate, 0), 0);
    }
    if (inputDate) {
      return isToday(inputDate) ? addHours(new Date(), 1) : setHours(setMinutes(new Date(), 0), 0);
    }
    return setHours(setMinutes(new Date(), 0), 0);
  };

  const getMaxTime = () => {
    if (maxDate && inputDate) {
      return inputDate.getDate() === subMinutes(maxDate, 30).getDate()
        ? subMinutes(maxDate, 30)
        : setHours(setMinutes(subMinutes(maxDate, 30), 59), 23);
    }
    return setHours(setMinutes(new Date(), 59), 23);
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
        maxDate={subMinutes(maxDate, 30)}
        minTime={getMinTime()}
        maxTime={getMaxTime()}
      />
    </div>
  );
};

export default DateInput;
