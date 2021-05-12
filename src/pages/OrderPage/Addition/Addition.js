import ButtonRadio from 'components/ButtonRadio';
import ButtonCheckBox from 'components/ButtonCheckBox';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDbRateAction } from 'redux/actions/dbActions';
import {
  setColorAction,
  setRateAction,
  setOptionsAction,
  setDateFromAction,
  setDateToAction,
} from 'redux/actions/orderActions';
import { dbRateSelector } from 'redux/selectors/dbSelectors';
import {
  colorSelector,
  modelSelector,
  rateSelector,
  optionsSelector,
  dateFromSelector,
  dateToSelector,
} from 'redux/selectors/orderSelectors';
import styles from './addition.module.scss';
import DateInput from 'components/DateInput';

const Addition = () => {
  const dispatch = useDispatch();
  const { colors } = useSelector(modelSelector);
  const curentColor = useSelector(colorSelector);
  const curentRate = useSelector(rateSelector);
  const options = useSelector(optionsSelector);
  const dbRate = useSelector(dbRateSelector);
  const dateFrom = useSelector(dateFromSelector);
  const dateTo = useSelector(dateToSelector);

  useEffect(() => {
    if (!dbRate.length) dispatch(setDbRateAction());
  }, [dbRate.length, dispatch]);

  const handleColorClick = (color) => () => {
    dispatch(setColorAction(color));
  };

  const handleRateClick = (rate) => () => {
    dispatch(setRateAction(rate));
  };

  const handleOptionClick = (option) => () => {
    dispatch(
      setOptionsAction({
        [option]: { name: options[option].name, checked: !options[option].checked },
      })
    );
  };

  if (dateFrom && dateTo && dateTo <= dateFrom) {
    dispatch(setDateToAction(null));
  }

  return (
    <section className={styles.wrapper}>
      <p className={styles.text}>Цвет</p>
      <div className={styles.colorList}>
        <ButtonRadio
          name="Любой"
          active={curentColor === 'Любой'}
          onClick={handleColorClick('Любой')}
          className={styles.colorItem}
        />
        {colors &&
          !!colors.length &&
          colors.map((color) => (
            <ButtonRadio
              key={color}
              name={color}
              active={color === curentColor}
              onClick={handleColorClick(color)}
              className={styles.colorItem}
            />
          ))}
      </div>

      <p className={styles.text}>Дата аренды</p>
      <div className={styles.dateWrapper}>
        <DateInput label="С" date={dateFrom} action={setDateFromAction} minDate={new Date()} />
        <DateInput label="По" date={dateTo} action={setDateToAction} minDate={dateFrom} />
      </div>

      <p className={styles.text}>Тариф</p>
      <div className={styles.rateList}>
        {dbRate &&
          !!dbRate.length &&
          dbRate.map((rate) => (
            <ButtonRadio
              key={rate.id}
              name={`${rate.rateTypeId.name}, ${rate.price} \u20bd\\сутки`}
              onClick={handleRateClick(rate.rateTypeId.name)}
              active={rate.rateTypeId.name === curentRate}
              className={styles.rateItem}
            />
          ))}
      </div>

      <p className={styles.text}>Доп услуги</p>
      <div className={styles.optionsList}>
        {Object.entries(options).map(([option, value]) => (
          <ButtonCheckBox
            key={option}
            text={value.name}
            checked={value.checked}
            onClick={handleOptionClick(option)}
          />
        ))}
      </div>
    </section>
  );
};

export default Addition;
