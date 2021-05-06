import ButtonRadio from 'components/ButtonRadio';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDbRateAction } from 'redux/actions/dbActions';
import { setColorAction, setRateAction } from 'redux/actions/orderActions';
import { dbRateSelector } from 'redux/selectors/dbSelectors';
import { colorSelector, modelSelector, rateSelector } from 'redux/selectors/orderSelectors';
import styles from './addition.module.scss';

const Addition = () => {
  const dispatch = useDispatch();
  const { colors } = useSelector(modelSelector);
  const curentColor = useSelector(colorSelector);
  const curentRate = useSelector(rateSelector);
  const dbRate = useSelector(dbRateSelector);

  useEffect(() => {
    if (!dbRate.length) dispatch(setDbRateAction());
  }, [dbRate.length, dispatch]);

  const handleColorClick = (color) => () => {
    dispatch(setColorAction(color));
  };

  const handleRateClick = (rate) => () => {
    dispatch(setRateAction(rate));
  };

  return (
    <section className={styles.wrapper}>
      <p className={styles.text}>Цвет</p>
      <div className={styles.colorList}>
        <ButtonRadio
          name="Любой"
          active={curentColor === 'Любой'}
          onClick={handleColorClick('Любой')}
        />
        {colors.map((color) => (
          <ButtonRadio
            key={color}
            name={color}
            active={color === curentColor}
            onClick={handleColorClick(color)}
          />
        ))}
      </div>

      <p className={styles.text}>Дата аренды</p>

      <p className={styles.text}>Тариф</p>
      <div className={styles.rateList}>
        {dbRate.map((rate) => (
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
    </section>
  );
};

export default Addition;
