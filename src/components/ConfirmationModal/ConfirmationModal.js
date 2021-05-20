import ButtonAccent from 'components/ButtonAccent';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { orderSelector } from 'redux/selectors/orderSelectors';
import postNewOrderAction from 'redux/thunk/postNewOrder';
import styles from './confirmationModal.module.scss';

const ConfirmationModal = ({ setOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { location, car, addition, finalPrice } = useSelector(orderSelector);

  const getOrderData = () => ({
    orderStatusId: {}, /// ??
    cityId: location.city, // {}
    pointId: location.point, // {}
    carId: car.model, // {}
    color: addition.color,
    dateFrom: addition.dateFrom.getTime(),
    dateTo: addition.dateTo.getTime(),
    rateId: addition.rate, //{}
    price: finalPrice,
    isFullTank: addition.options.fullTank.checked,
    isNeedChildChair: addition.options.babyChair.checked,
    isRightWheel: addition.options.rightSteering.checked,
  });

  console.log('getOrderData', getOrderData());
  console.log('getOrderData', JSON.stringify(getOrderData()));

  const handleAccept = () => {
    setOpen(false);
    history.push('/order/result');
    const newOrder = getOrderData();
    dispatch(postNewOrderAction(newOrder));
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Подтвердить заказ</p>
      <div>
        <ButtonAccent
          className={styles.button}
          text={'Подтвердить'}
          active
          onClick={handleAccept}
        />
        <ButtonAccent
          className={styles.button}
          text={'Вернуться'}
          negative
          onClick={handleCancel}
        />
      </div>
    </div>
  );
};

export default ConfirmationModal;
