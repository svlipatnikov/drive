import React from 'react';
import cn from 'classnames';
import styles from './breadCrumps.module.scss';
import { ReactComponent as Tringle } from 'assets/svg/tringle.svg';
import ButtonNav from 'components/ButtonNav';
import { useSelector } from 'react-redux';
import {
  activeSelector,
  locationIsFilledSelector,
  carIsFilledSelector,
  additionIsFilledSelector,
} from 'redux/selectors/orderSelectors';

const BreadCrumps = ({ className }) => {
  const active = useSelector(activeSelector);
  const locationIsFilled = useSelector(locationIsFilledSelector);
  const carIsFilled = useSelector(carIsFilledSelector);
  const additionIsFilled = useSelector(additionIsFilledSelector);

  return (
    <nav className={cn(styles.wrapper, className)}>
      <ButtonNav
        text="Местоположение"
        link="/order/location"
        active={active === 'Местоположение'}
      />

      <Tringle className={styles.tringle} />

      <ButtonNav
        text="Модель"
        link="/order/car"
        active={active === 'Модель'}
        disabled={!locationIsFilled}
      />

      <Tringle className={styles.tringle} />

      <ButtonNav
        text="Дополнительно"
        link="/order/addition"
        active={active === 'Дополнительно'}
        disabled={!carIsFilled}
      />

      <Tringle className={styles.tringle} />

      <ButtonNav
        text="Итого"
        link="/order/result"
        active={active === 'Итого'}
        disabled={!additionIsFilled}
      />
    </nav>
  );
};

export default BreadCrumps;
