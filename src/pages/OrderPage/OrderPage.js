import React, { useEffect, useRef } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router';
import SideBar from 'components/SideBar';
import MenuButton from 'components/ButtonMenu';
import Header from 'components/Header';
import BreadCrumbs from 'components/BreadCrumbs';
import Location from 'pages/OrderPage/Location';
import Car from 'pages/OrderPage/Car';
import Addition from 'pages/OrderPage/Addition';
import OrderInfo from 'pages/OrderPage/OrderInfo';
import styles from './orderPage.module.scss';
import cn from 'classnames';
import Result from './Result';
import { setPageSizeAction } from 'redux/actions/mainActions';
import { useDispatch, useSelector } from 'react-redux';
import { pageSizeSelector } from 'redux/selectors/mainSelectors';

const OrderPage = () => {
  const pageRef = useRef(null);
  const history = useHistory();
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

  useEffect(() => {
    history.push('/order/location');
  }, [history]);

  return (
    <div className={styles.wrapper} ref={pageRef}>
      <MenuButton />
      <SideBar />

      <section className={styles.content}>
        <Header className={styles.container} />

        <nav className={styles.navBlock}>
          <div className={styles.horizontLine} />
          <BreadCrumbs className={styles.container} />
          <div className={styles.horizontLine} />
        </nav>

        <main className={cn(styles.order, styles.container)}>
          <Switch>
            <Route path="/order/location" exact component={Location} />
            <Route path="/order/car" exact component={Car} />
            <Route path="/order/addition" exact component={Addition} />
            <Route path="/order/result" exact component={Result} />
            <Redirect to="/order/location" />
          </Switch>

          {!pageSize.tablet && <OrderInfo open />}
        </main>
      </section>
    </div>
  );
};

export default OrderPage;
