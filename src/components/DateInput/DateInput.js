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
  subMinutes,
  getMinutes,
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
    if (!inputDate) {
      if (minDate) {
        getMinutes(minDate) % 30 === 0
          ? setInputDate(addMinutes(minDate, 31))
          : setInputDate(addMinutes(minDate, 30));
      } else {
        getMinutes(new Date()) % 30 === 0
          ? setInputDate(addMinutes(new Date(), 61))
          : setInputDate(addMinutes(new Date(), 60));
      }
    }
  };

  const handleBlur = () => {
    setInputDate(() => {
      dispatch(action(null));
    });
  };

  const getMinTime = () => {
    if (inputDate) {
      if (minDate) {
        return inputDate.getDate() === minDate.getDate()
          ? addMinutes(minDate, 30)
          : setHours(setMinutes(minDate, 0), 0);
      }
      return isToday(inputDate)
        ? addMinutes(new Date(), 60)
        : setHours(setMinutes(new Date(), 0), 0);
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
        onBlur={handleBlur}
        showTimeSelect
        timeIntervals={30}
        timeFormat="HH:mm"
        timeCaption="Время"
        dateFormat="dd.MM.yyyy HH:mm"
        placeholderText="Введите дату и время"
        minDate={addMinutes(minDate || new Date(), 30)}
        maxDate={subMinutes(maxDate, 30)}
        minTime={getMinTime()}
        maxTime={getMaxTime()}
      />
    </div>
  );
};

export default DateInput;
