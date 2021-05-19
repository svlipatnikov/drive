import React from 'react';
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
import ButtonNav from 'components/ButtonNav';
import styles from './breadCrumbs.module.scss';

const BreadCrumps = () => {
  const orderStep = useSelector(orderStepSelector);
  const locationIsFilled = useSelector(locationIsFilledSelector);
  const carIsFilled = useSelector(carIsFilledSelector);
  const additionIsFilled = useSelector(additionIsFilledSelector);
  const { mobile } = useSelector(pageSizeSelector);

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

  return (
    <nav className={styles.wrapper}>
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
  );
};

export default BreadCrumps;
