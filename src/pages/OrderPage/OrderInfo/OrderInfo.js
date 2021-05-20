import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { pageSizeSelector } from 'redux/selectors/mainSelectors';
import {
  locationSelector,
  carSelector,
  additionSelector,
  optionsSelector,
  finalPriceSelector,
} from 'redux/selectors/orderSelectors';
import { ReactComponent as CloseBtn } from 'assets/svg/closeBtn.svg';
import { setFinalPriceAction } from 'redux/actions/orderActions';
import getFinalPrice from 'helpers/getFinalPrice';
import ButtonNextStep from 'components/ButtonNextStep';
import OrderItem from 'components/OrderItem';
import styles from './orderInfo.module.scss';
import cn from 'classnames';
import getDateRange from 'helpers/getDateRange';
import { dbOrderSelector } from 'redux/selectors/dbSelectors';

const OrderInfo = ({ setOpen, open }) => {
  const dispatch = useDispatch();

  const { city, point } = useSelector(locationSelector);
  const { model } = useSelector(carSelector);
  const { color, rate, dateFrom, dateTo } = useSelector(additionSelector);
  const { fullTank, babyChair, rightSteering } = useSelector(optionsSelector);
  const { tablet } = useSelector(pageSizeSelector);
  const finalPrice = useSelector(finalPriceSelector);
  const { data } = useSelector(dbOrderSelector);

  useEffect(() => {
    const calcPrice = getFinalPrice(rate, dateFrom, dateTo, fullTank, babyChair, rightSteering);
    dispatch(setFinalPriceAction(calcPrice));
  }, [dispatch, babyChair, fullTank, rate, rightSteering, dateFrom, dateTo]);

  const handleClose = () => {
    setOpen(false);
  };

  const itemCity = (data && data.cityId.name) || (city && city.name);
  const itemPoint = (data && data.pointId.address) || (point && point.address);
  const itemModel = (data && data.carId.name) || (model && model.name);
  const itemColor = (data && data.color !== 'Любой' && data.color) || (color !== 'Любой' && color);
  const itemDateRange =
    (data && getDateRange(data.dateFrom, data.dateTo)) ||
    (dateFrom && dateTo && getDateRange(dateFrom, dateTo));
  const itemRate = (data && data.rateId.rateTypeId.name) || (rate && rate.rateTypeId.name);
  const itemFullTank = (data && data.isFullTank) || fullTank.checked;
  const itemBabyChair = (data && data.isNeedChildChair) || babyChair.checked;
  const itemRightSteering = (data && data.isRightWheel) || rightSteering.checked;
  const itemPrice = (data && data.price) || finalPrice;

  return (
    <section className={cn({ [styles.wrapper]: true, [styles.notOpen]: !open })}>
      {tablet && (
        <button className={styles.closeBtn} onClick={handleClose}>
          <CloseBtn />
        </button>
      )}

      <div className={styles.title}>Ваш заказ:</div>

      <ul className={styles.itemList}>
        {itemCity && <OrderItem name="Пункт выдачи" items={[itemCity, itemPoint]} />}
        {itemModel && <OrderItem name="Модель" items={[itemModel]} />}
        {itemColor && <OrderItem name="Цвет" items={[itemColor]} />}

        {itemDateRange && (
          <OrderItem
            name="Длительность аренды"
            items={[itemDateRange[1] + 'д ' + itemDateRange[2] + 'ч']}
          />
        )}

        {itemRate && <OrderItem name="Тариф" items={[itemRate]} />}
        {itemFullTank && <OrderItem name="Полный бак" items={['Да']} />}
        {itemBabyChair && <OrderItem name="Детское кресло" items={['Да']} />}
        {itemRightSteering && <OrderItem name="Правый руль" items={['Да']} />}
      </ul>

      {itemPrice && <div className={styles.finalPrice}>{`Цена: ${finalPrice} \u20bd`}</div>}

      {!itemPrice && model.priceMin && model.priceMax && (
        <div className={styles.finalPrice}>
          {`Цена: ${model.priceMin} - ${model.priceMax} \u20bd`}
        </div>
      )}

      <ButtonNextStep />
    </section>
  );
};

export default OrderInfo;
