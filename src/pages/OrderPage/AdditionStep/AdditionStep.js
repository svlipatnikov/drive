import ButtonRadio from 'components/ButtonRadio';
import ButtonCheckBox from 'components/ButtonCheckBox';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getRateAction from 'redux/thunk/getRateAction';
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
import styles from './additionStep.module.scss';
import DateInput from 'components/DateInput';
import Loader from 'components/Loader';
import getStatusAction from 'redux/thunk/getStatusAction';

const AdditionStep = () => {
  const dispatch = useDispatch();
  const { colors } = useSelector(modelSelector);
  const curentColor = useSelector(colorSelector);
  const curentRate = useSelector(rateSelector);
  const options = useSelector(optionsSelector);
  const dbRate = useSelector(dbRateSelector);
  const dateFrom = useSelector(dateFromSelector);
  const dateTo = useSelector(dateToSelector);

  useEffect(() => {
    dispatch(getRateAction());
    dispatch(getStatusAction());
  }, [dispatch]);

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

  return (
    <section className={styles.wrapper}>
      <div className={styles.itemWrapper}>
        <p className={styles.itemText}>Цвет</p>
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
      </div>

      <div className={styles.itemWrapper}>
        <p className={styles.itemText}>Дата аренды</p>
        <div className={styles.dateWrapper}>
          <DateInput
            label="С"
            date={dateFrom}
            action={setDateFromAction}
            minDate={new Date()}
            maxDate={dateTo}
          />
          <DateInput
            label="По"
            date={dateTo}
            action={setDateToAction}
            minDate={dateFrom}
            maxDate={null}
          />
        </div>
      </div>

      <div className={styles.itemWrapper}>
        <p className={styles.itemText}>Тариф</p>
        <div className={styles.rateList}>
          {dbRate.isLoading && <Loader />}
          {dbRate.isFailed && (
            <div className={styles.errorMessage}>Не удалось загрузить тарифы</div>
          )}
          {dbRate.isOk &&
            dbRate.data.map((rate) => (
              <ButtonRadio
                key={rate.id}
                name={`${rate.rateTypeId.name}, ${rate.price} \u20bd/${rate.rateTypeId.unit}`}
                onClick={handleRateClick(rate)}
                active={curentRate ? rate.id === curentRate.id : false}
                className={styles.rateItem}
              />
            ))}
        </div>
      </div>

      <div className={styles.itemWrapper}>
        <p className={styles.itemText}>Доп услуги</p>
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
      </div>
    </section>
  );
};

export default AdditionStep;
