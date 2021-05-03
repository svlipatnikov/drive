import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router';
import SideBar from 'components/SideBar';
import MenuButton from 'components/ButtonMenu';
import Header from 'components/Header';
import BreadCrumps from 'components/BreadCrumps';
import Location from 'pages/OrderPage/Location';
import Car from 'pages/OrderPage/Car';
import OrderInfo from 'pages/OrderPage/OrderInfo';
import styles from './orderPage.module.scss';
import cn from 'classnames';
import Addition from './Addition/Addition';

const OrderPage = () => {
  const history = useHistory();
  useEffect(() => {
    history.push('/order/location');
  }, [history]);

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
          <Switch>
            <Route path="/order/location" exact component={Location} />
            <Route path="/order/car" exact component={Car} />
            <Route path="/order/addition" exact component={Addition} />
            <Route path="/order/result" exact />
            <Redirect to="/order/location" />
          </Switch>

          <OrderInfo />
        </main>
      </section>
    </div>
  );
};

export default OrderPage;
