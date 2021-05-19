import React from 'react';
import { useSelector } from 'react-redux';
import { orderIdSelector } from 'redux/selectors/orderSelectors';
import styles from './orderNumber.module.scss';

const OrderNumber = () => {
  const orderId = useSelector(orderIdSelector);

  return <div className={styles.orderNum}>{`Заказ номер ${orderId || ''}`}</div>;
};

export default OrderNumber;
