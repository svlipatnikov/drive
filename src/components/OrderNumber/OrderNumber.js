import React from 'react';
import { useSelector } from 'react-redux';
import { dbOrderSelector } from 'redux/selectors/dbSelectors';

import styles from './orderNumber.module.scss';

const OrderNumber = () => {
  const { data, isOk, isFailed } = useSelector(dbOrderSelector);

  if (!isOk || isFailed) return null;

  return <div className={styles.orderNum}>{`Заказ номер ${data.id || ''}`}</div>;
};

export default OrderNumber;
