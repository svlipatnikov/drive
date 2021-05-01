import React from 'react';
import cn from 'classnames';
import styles from './breadCrumps.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Tringle } from 'assets/svg/tringle.svg';

const BreadCrumps = ({ className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <Link className={cn(styles.item, styles.itemActive)} to="/location">
        Местоположение
      </Link>
      <Tringle className={styles.tringle} />
      <Link className={styles.item} to="/car">
        Модель
      </Link>
      <Tringle className={styles.tringle} />
      <Link className={styles.item} to="/addition">
        Дополнительно
      </Link>
      <Tringle className={styles.tringle} />
      <Link className={styles.item} to="/result">
        Итого
      </Link>
    </div>
  );
};

export default BreadCrumps;
