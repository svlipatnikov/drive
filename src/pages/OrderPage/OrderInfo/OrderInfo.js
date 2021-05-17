import ButtonAccent from 'components/ButtonAccent';
import OrderItem from 'components/OrderItem';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setOrderStepAction } from 'redux/actions/mainActions';
import { orderStepSelector, pageSizeSelector } from 'redux/selectors/mainSelectors';
import {
  locationSelector,
  carSelector,
  additionSelector,
  optionsSelector,
  locationIsFilledSelector,
  carIsFilledSelector,
  additionIsFilledSelector,
} from 'redux/selectors/orderSelectors';
import { ReactComponent as CloseBtn } from 'assets/svg/closeBtn.svg';
import styles from './orderInfo.module.scss';
import cn from 'classnames';

const OrderInfo = ({ setOpen, open }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const orderStep = useSelector(orderStepSelector);

  const { city, point } = useSelector(locationSelector);
  const { model } = useSelector(carSelector);
  const { color, rate, dateFrom, dateTo } = useSelector(additionSelector);
  const { fullTank, babyChair, rightSteering } = useSelector(optionsSelector);
  const { tablet } = useSelector(pageSizeSelector);

  const locationIsFilled = useSelector(locationIsFilledSelector);
  const carIsFilled = useSelector(carIsFilledSelector);
  const additionIsFilled = useSelector(additionIsFilledSelector);

  const range = dateFrom && dateTo ? dateTo - dateFrom : null;
  const daysRange = range ? Math.floor(range / (1000 * 60 * 60 * 24)) : null;
  const hoursRange = range
    ? Math.round(((range - daysRange * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * 10) / 10
    : null;

  const btnActive =
    (orderStep === 'Местоположение' && locationIsFilled) ||
    (orderStep === 'Модель' && carIsFilled) ||
    (orderStep === 'Дополнительно' && additionIsFilled);

  const finalPrice = useMemo(() => getFinalPrice(rate, range, fullTank, babyChair, rightSteering), [
    rate,
    range,
    fullTank,
    babyChair,
    rightSteering,
  ]);

  const handleBtnClick = () => {
    dispatch(setOrderStepAction(getNextStep(orderStep)));
    history.push(getNextLink(orderStep));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className={cn({ [styles.wrapper]: true, [styles.notOpen]: !open })}>
      {tablet && (
        <button className={styles.closeBtn} onClick={handleClose}>
          <CloseBtn />
        </button>
      )}

      <div className={styles.title}>Ваш заказ:</div>

      <ul className={styles.itemList}>
        {city && <OrderItem name="Пункт выдачи" items={[city, point]} />}
        {model.name && <OrderItem name="Модель" items={[model.name]} />}
        {color && color !== 'Любой' && <OrderItem name="Цвет" items={[color]} />}
        {dateFrom && dateTo && (
          <OrderItem name="Длительность аренды" items={[daysRange + 'д ' + hoursRange + 'ч']} />
        )}
        {rate && <OrderItem name="Тариф" items={[rate.rateTypeId.name]} />}
        {fullTank.checked && <OrderItem name="Полный бак" items={['Да']} />}
        {babyChair.checked && <OrderItem name="Детское кресло" items={['Да']} />}
        {rightSteering.checked && <OrderItem name="Правый руль" items={['Да']} />}
      </ul>

      {finalPrice && <div className={styles.finalPrice}>{`Цена: ${finalPrice} \u20bd`}</div>}

      {!finalPrice && model.priceMin && model.priceMax && (
        <div className={styles.finalPrice}>
          {`Цена: ${model.priceMin} - ${model.priceMax} \u20bd`}
        </div>
      )}

      <ButtonAccent
        text={getBtnText(orderStep)}
        active={btnActive}
        onClick={handleBtnClick}
        className={styles.button}
      />
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

const getFinalPrice = (rate, range, fullTank, babyChair, rightSteering) => {
  if (!rate || !range) return null;

  let price = 0;
  if (fullTank.checked) price += 500;
  if (babyChair.checked) price += 200;
  if (rightSteering.checked) price += 1600;

  switch (rate.rateTypeId.unit) {
    case 'мин':
      price += rate.price * Math.ceil(range / (1000 * 60));
      break;

    case 'сутки':
      price += rate.price * Math.ceil(range / (1000 * 60 * 60 * 24));
      break;

    case '7 дней':
      price += rate.price * Math.ceil(range / (1000 * 60 * 60 * 24 * 7));
      break;

    default:
      price += 0;
      break;
  }

  return price;
};
