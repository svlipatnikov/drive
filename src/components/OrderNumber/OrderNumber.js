import React from 'react';
import { useSelector } from 'react-redux';
import { dbOrderSelector } from 'redux/selectors/dbSelectors';

import styles from './orderNumber.module.scss';

const OrderNumber = () => {
  const { id } = useSelector(dbOrderSelector); ///TODO

  return <div className={styles.orderNum}>{`Заказ номер ${id || ''}`}</div>;
};

export default OrderNumber;
