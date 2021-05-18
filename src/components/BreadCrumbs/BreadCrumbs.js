import React, { useState } from 'react';
import cn from 'classnames';
import styles from './breadCrumbs.module.scss';
import ButtonNav from 'components/ButtonNav';
import { useSelector } from 'react-redux';
import {
  locationIsFilledSelector,
  carIsFilledSelector,
  additionIsFilledSelector,
} from 'redux/selectors/orderSelectors';
import { orderStepSelector, pageSizeSelector } from 'redux/selectors/mainSelectors';
import { ReactComponent as Location } from 'assets/breadCrumbsSvg/location.svg';
import { ReactComponent as Car } from 'assets/breadCrumbsSvg/car.svg';
import { ReactComponent as Addition } from 'assets/breadCrumbsSvg/info.svg';
import { ReactComponent as Confirm } from 'assets/breadCrumbsSvg/result.svg';
import { ReactComponent as OrderSvg } from 'assets/breadCrumbsSvg/order.svg';
import OrderInfo from 'pages/OrderPage/OrderInfo';

const BreadCrumps = ({ className }) => {
  const [open, setOpen] = useState(false);
  const orderStep = useSelector(orderStepSelector);
  const locationIsFilled = useSelector(locationIsFilledSelector);
  const carIsFilled = useSelector(carIsFilledSelector);
  const additionIsFilled = useSelector(additionIsFilledSelector);
  const { mobile, tablet } = useSelector(pageSizeSelector);

  const navigation = [
    {
      text: 'Местоположение',
      icon: Location,
      link: '/order/location',
      disabled: false,
    },
    {
      text: 'Модель',
      icon: Car,
      link: '/order/car',
      disabled: !locationIsFilled,
    },
    {
      text: 'Дополнительно',
      icon: Addition,
      link: '/order/addition',
      disabled: !locationIsFilled || !carIsFilled,
    },
    {
      text: 'Итого',
      icon: Confirm,
      link: '/order/confirm',
      disabled: !locationIsFilled || !carIsFilled || !additionIsFilled,
    },
  ];

  const handleOrderClick = () => {
    setOpen(true);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <nav className={styles.nav}>
        {navigation.map((nav) => (
          <ButtonNav
            key={nav.text}
            link={nav.link}
            step={nav.text}
            active={orderStep === nav.text}
            disabled={nav.disabled}
          >
            {mobile ? <nav.icon className={styles.icon} /> : nav.text}
          </ButtonNav>
        ))}
      </nav>

      {tablet && (
        <button className={styles.orderBtn} onClick={handleOrderClick}>
          {mobile ? (
            <OrderSvg className={cn(styles.icon, styles.orderIcon)} />
          ) : (
            <div className={styles.orderText}>Ваш заказ</div>
          )}
        </button>
      )}

      {tablet && <OrderInfo setOpen={setOpen} open={open} />}
    </div>
  );
};

export default BreadCrumps;
