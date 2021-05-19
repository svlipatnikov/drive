import React, { useState } from 'react';
import { ReactComponent as OrderSvg } from 'assets/breadCrumbsSvg/order.svg';
import { useSelector } from 'react-redux';
import { pageSizeSelector } from 'redux/selectors/mainSelectors';
import OrderInfo from 'pages/OrderPage/OrderInfo';
import styles from './buttonOrder.module.scss';

const ButtonOrder = () => {
  const [open, setOpen] = useState(false);
  const { tablet, mobile } = useSelector(pageSizeSelector);

  const handleOrderClick = () => {
    setOpen(true);
  };

  if (!tablet) return null;

  return (
    <>
      <button className={styles.orderBtn} onClick={handleOrderClick}>
        {mobile ? (
          <OrderSvg className={styles.orderIcon} />
        ) : (
          <div className={styles.orderText}>Ваш заказ</div>
        )}
      </button>

      <OrderInfo setOpen={setOpen} open={open} />
    </>
  );
};

export default ButtonOrder;
