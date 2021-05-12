import OrderItem from 'components/OrderItem';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  citySelector,
  colorSelector,
  dateFromSelector,
  dateToSelector,
  modelSelector,
  optionsSelector,
  pointSelector,
  rateSelector,
} from 'redux/selectors/orderSelectors';
import styles from './orderInfo.module.scss';

const OrderInfo = () => {
  const city = useSelector(citySelector);
  const point = useSelector(pointSelector);
  const model = useSelector(modelSelector);
  const color = useSelector(colorSelector);
  const rate = useSelector(rateSelector);
  const { fullTank, babyChair, rightSteering } = useSelector(optionsSelector);
  const dateFrom = useSelector(dateFromSelector);
  const dateTo = useSelector(dateToSelector);

  const daysRange = Math.ceil((dateTo - dateFrom) / (1000 * 60 * 60 * 24));
  const hoursRange = Match.ceil(dateTo - dateFrom);

  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>Ваш заказ:</div>
      <ul className={styles.itemList}>
        {city && <OrderItem name="Пункт выдачи" items={[city, point]} />}
        {model.name && <OrderItem name="Модель" items={[model.name]} />}
        {color && <OrderItem name="Цвет" items={[color]} />}
        <OrderItem name="Длительность аренды" items={[]} />
        {rate && <OrderItem name="Тариф" items={[rate]} />}
        {fullTank.checked && <OrderItem name="Полный бак" items={['Да']} />}
        {babyChair.checked && <OrderItem name="Детское кресло" items={['Да']} />}
        {rightSteering.checked && <OrderItem name="Правый руль" items={['Да']} />}
      </ul>
    </section>
  );
};

export default OrderInfo;
