import ButtonAccent from 'components/ButtonAccent';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { orderSelector } from 'redux/selectors/orderSelectors';
import { dbOrderSelector, dbStatusSelector } from 'redux/selectors/dbSelectors';
import postNewOrderAction from 'redux/thunk/postNewOrder';
import styles from './confirmationModal.module.scss';
import { setOrderStepAction } from 'redux/actions/mainActions';

const ConfirmationModal = ({ setOpen }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { location, car, addition, finalPrice } = useSelector(orderSelector);
  const status = useSelector(dbStatusSelector);
  const dbOrder = useSelector(dbOrderSelector);

  const getOrderData = () => ({
    orderStatusId: status.data[0],
    cityId: location.city,
    pointId: location.point,
    carId: car.model,
    color: addition.color,
    dateFrom: addition.dateFrom.getTime(),
    dateTo: addition.dateTo.getTime(),
    rateId: addition.rate,
    price: finalPrice,
    isFullTank: addition.options.fullTank.checked,
    isNeedChildChair: addition.options.babyChair.checked,
    isRightWheel: addition.options.rightSteering.checked,
  });

  useEffect(() => {
    if (dbOrder.data) {
      history.push(`/order/result/${dbOrder.data.id}`);
      dispatch(setOrderStepAction('Заказ подтвержден'));
      setOpen(false);
    }
  }, [dbOrder, dispatch, history, setOpen]);

  const handleAccept = () => {
    const newOrder = getOrderData();
    dispatch(postNewOrderAction(newOrder));
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Подтвердить заказ</p>
      <div className={styles.btnContainer}>
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
