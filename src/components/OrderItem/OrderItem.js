import React from 'react';
import styles from './orderItem.module.scss';

const OrderItem = ({ name, items }) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.dots} />
      <div className={styles.items}>
        {items.map((value, index) => (
          <div key={value + index} className={styles.itemValue}>
            {value}
          </div>
        ))}
      </div>
    </li>
  );
};

export default OrderItem;
