import React from 'react';
import styles from './header.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { citySelector } from 'redux/selectors/orderSelectors';
import { dbOrderSelector } from 'redux/selectors/dbSelectors';

const Header = ({ className }) => {
  const city = useSelector(citySelector);
  const { data } = useSelector(dbOrderSelector);

  const getCity = () => {
    if (data) {
      return data.cityId.name;
    } else if (city) {
      return city.name;
    }
    return 'Ваше местоположение';
  };

  return (
    <header className={cn(styles.wrapper, className)}>
      <div className={styles.logo}>Need for drive</div>
      <div className={styles.location}>{getCity()}</div>
    </header>
  );
};

export default Header;
