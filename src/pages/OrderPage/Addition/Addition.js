import ButtonRadio from 'components/ButtonRadio';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColorAction } from 'redux/actions/orderActions';
import { colorSelector, modelSelector } from 'redux/selectors/orderSelectors';
import styles from './addition.module.scss';

const Addition = () => {
  const dispatch = useDispatch();
  const { colors } = useSelector(modelSelector);
  const curentColor = useSelector(colorSelector);

  const handleClick = (color) => () => {
    dispatch(setColorAction(color));
  };

  return (
    <section className={styles.wrapper}>
      <p className={styles.text}>Цвет</p>
      <div className={styles.colorList}>
        <ButtonRadio name="Любой" active={curentColor === 'Любой'} onClick={handleClick('Любой')} />
        {colors.map((color) => (
          <ButtonRadio name={color} active={color === curentColor} onClick={handleClick(color)} />
        ))}
      </div>

      <p className={styles.text}>Дата аренды</p>
      <p className={styles.text}>Тариф</p>
      <p className={styles.text}>Доп услуги</p>
    </section>
  );
};

export default Addition;
