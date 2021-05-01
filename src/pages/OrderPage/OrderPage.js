import React from 'react';
import SideBar from 'components/SideBar';
import MenuButton from 'components/ButtonMenu';
import Header from 'components/Header';
import BreadCrumps from 'components/BreadCrumps';
import Location from 'pages/OrderPage/Location';
import OrderInfo from 'pages/OrderPage/OrderInfo';
import styles from './orderPage.module.scss';
import cn from 'classnames';

const OrderPage = () => {
  return (
    <div className={styles.wrapper}>
      <MenuButton />
      <SideBar />

      <section className={styles.content}>
        <Header className={styles.container} />

        <nav className={styles.navBlock}>
          <div className={styles.horizontLine} />
          <BreadCrumps className={styles.container} />
          <div className={styles.horizontLine} />
        </nav>

        <main className={cn(styles.order, styles.container)}>
          <Location />
          <OrderInfo />
        </main>
      </section>
    </div>
  );
};

export default OrderPage;
