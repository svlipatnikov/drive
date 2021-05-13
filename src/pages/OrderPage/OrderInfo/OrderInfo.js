import ButtonAccent from 'components/ButtonAccent';
import OrderItem from 'components/OrderItem';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setOrderStepAction } from 'redux/actions/orderActions';
import {
  citySelector,
  colorSelector,
  dateFromSelector,
  dateToSelector,
  locationIsFilledSelector,
  modelSelector,
  optionsSelector,
  orderStepSelector,
  pointSelector,
  rateSelector,
  carIsFilledSelector,
  additionIsFilledSelector,
} from 'redux/selectors/orderSelectors';
import styles from './orderInfo.module.scss';

const OrderInfo = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const city = useSelector(citySelector);
  const point = useSelector(pointSelector);
  const model = useSelector(modelSelector);
  const color = useSelector(colorSelector);
  const rate = useSelector(rateSelector);
  const { fullTank, babyChair, rightSteering } = useSelector(optionsSelector);
  const dateFrom = useSelector(dateFromSelector);
  const dateTo = useSelector(dateToSelector);

  const orderStep = useSelector(orderStepSelector);
  const locationIsFilled = useSelector(locationIsFilledSelector);
  const carIsFilled = useSelector(carIsFilledSelector);
  const additionIsFilled = useSelector(additionIsFilledSelector);

  let daysRange;
  let hoursRange;
  if (dateFrom && dateTo) {
    const range = dateTo - dateFrom;
    daysRange = Math.floor(range / (1000 * 60 * 60 * 24));
    hoursRange =
      Math.round(((range - daysRange * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * 10) / 10;
  }

  const btnText = getBtnText(orderStep);

  const btnActive =
    (orderStep === 'Местоположение' && locationIsFilled) ||
    (orderStep === 'Модель' && carIsFilled) ||
    (orderStep === 'Дополнительно' && additionIsFilled);

  const handleBtnClick = () => {
    dispatch(setOrderStepAction(getNextStep(orderStep)));
    history.push(getNextLink(orderStep));
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>Ваш заказ:</div>

      <ul className={styles.itemList}>
        {city && <OrderItem name="Пункт выдачи" items={[city, point]} />}
        {model.name && <OrderItem name="Модель" items={[model.name]} />}
        {color && <OrderItem name="Цвет" items={[color]} />}
        {dateFrom && dateTo && (
          <OrderItem name="Длительность аренды" items={[daysRange + 'д ' + hoursRange + 'ч']} />
        )}
        {rate && <OrderItem name="Тариф" items={[rate]} />}
        {fullTank.checked && <OrderItem name="Полный бак" items={['Да']} />}
        {babyChair.checked && <OrderItem name="Детское кресло" items={['Да']} />}
        {rightSteering.checked && <OrderItem name="Правый руль" items={['Да']} />}
      </ul>

      <ButtonAccent text={btnText} active={btnActive} onClick={handleBtnClick} />
    </section>
  );
};

export default OrderInfo;

const getBtnText = (step) => {
  switch (step) {
    case 'Местоположение':
      return 'Выбрать модель';

    case 'Модель':
      return 'Дополнительно';

    case 'Дополнительно':
      return 'Итого';

    default:
      return '';
  }
};

const getNextStep = (step) => {
  switch (step) {
    case 'Местоположение':
      return 'Модель';

    case 'Модель':
      return 'Дополнительно';

    case 'Дополнительно':
      return 'Итого';

    default:
      return 'Местоположение';
  }
};

const getNextLink = (step) => {
  switch (step) {
    case 'Местоположение':
      return '/order/car';

    case 'Модель':
      return '/order/addition';

    case 'Дополнительно':
      return '/order/result';

    default:
      return 'Местоположение';
  }
};
