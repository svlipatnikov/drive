import React from 'react';
import styles from './header.module.scss';
import cn from 'classnames';

const Header = ({ className }) => {
  return (
    <header className={cn(styles.wrapper, className)}>
      <div className={styles.logo}>Need for drive</div>
      <div className={styles.location}>Ульяновск</div>
    </header>
  );
};

export default Header;
