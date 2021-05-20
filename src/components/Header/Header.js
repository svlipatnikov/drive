import React from 'react';
import styles from './header.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { citySelector } from 'redux/selectors/orderSelectors';

const Header = ({ className }) => {
  const city = useSelector(citySelector);

  return (
    <header className={cn(styles.wrapper, className)}>
      <div className={styles.logo}>Need for drive</div>
      {city && <div className={styles.location}>{city.name}</div>}
    </header>
  );
};

export default Header;
