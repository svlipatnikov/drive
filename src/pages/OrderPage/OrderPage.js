import React, { useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import SideBar from 'components/SideBar';
import ButtonMenu from 'components/ButtonMenu';
import Header from 'components/Header';
import BreadCrumbs from 'components/BreadCrumbs';

import LocationStep from 'pages/OrderPage/LocationStep';
import CarStep from 'pages/OrderPage/CarStep';
import AdditionStep from 'pages/OrderPage/AdditionStep';
import OrderConfirmStep from './OrderConfirmStep';
import ResultStep from './ResultStep';

import OrderInfo from 'pages/OrderPage/OrderInfo';
import styles from './orderPage.module.scss';
import cn from 'classnames';

import { setPageSizeAction } from 'redux/actions/mainActions';
import { useDispatch, useSelector } from 'react-redux';
import { pageSizeSelector } from 'redux/selectors/mainSelectors';
import OrderNumber from 'components/OrderNumber';
import ButtonOrder from 'components/ButtonOrder';

const OrderPage = () => {
  const pageRef = useRef(null);
  const dispatch = useDispatch();
  const pageSize = useSelector(pageSizeSelector);

  useEffect(() => {
    const hanldeResize = () => {
      const curentSize = {
        mobileCompact: pageRef.current.offsetWidth <= 470,
        mobile: pageRef.current.offsetWidth <= 767,
        tablet: pageRef.current.offsetWidth <= 1023,
        desktopMin: pageRef.current.offsetWidth <= 1439,
      };
      JSON.stringify(pageSize) !== JSON.stringify(curentSize) &&
        dispatch(setPageSizeAction(curentSize));
    };
    hanldeResize();

    window.addEventListener('resize', hanldeResize);
    return () => {
      window.removeEventListener('resize', hanldeResize);
    };
  }, [dispatch, pageSize]);

  return (
    <div className={styles.wrapper} ref={pageRef}>
      <ButtonMenu />
      <SideBar />

      <section className={styles.content}>
        <Header className={styles.container} />

        <nav className={styles.navBlock}>
          <div className={styles.horizontLine} />

          <div className={cn(styles.container, styles.navBar)}>
            <Switch>
              <Route path="/order/result/:orderId" exact component={OrderNumber} />
              <Route path="/order" component={BreadCrumbs} />
            </Switch>
            <ButtonOrder />
          </div>

          <div className={styles.horizontLine} />
        </nav>

        <main className={cn(styles.order, styles.container)}>
          <Switch>
            <Route path="/order/location" exact component={LocationStep} />
            <Route path="/order/car" exact component={CarStep} />
            <Route path="/order/addition" exact component={AdditionStep} />
            <Route path="/order/confirm" exact component={OrderConfirmStep} />
            <Route path="/order/result/:orderId" component={ResultStep} />
            <Redirect to="/order/location" />
          </Switch>

          {!pageSize.tablet && <OrderInfo open />}
        </main>
      </section>
    </div>
  );
};

export default OrderPage;
