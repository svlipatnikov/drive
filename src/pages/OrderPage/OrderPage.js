import React from 'react';
import SideBar from 'components/SideBar';
import MenuButton from 'components/ButtonMenu';
import './orderPage.scss';
import Header from 'components/Header';
import BreadCrumps from 'components/BreadCrumps';
import OrderPageLocation from 'pages/OrderPageLocation';
import OrderInfo from 'components/OrderInfo';

const OrderPage = () => {
  return (
    <div className="wrapper-order">
      <MenuButton />

      <section className="wrapper-order__side-bar">
        <SideBar />
      </section>

      <section className="wrapper-order__content">
        <Header className="inner-container header--order" />

        <div className="horizont-line" />
        <BreadCrumps className="inner-container" />
        <div className="horizont-line" />

        <div className="inner-container order-content">
          <OrderPageLocation />
          <div className="vertical-line" />
          <OrderInfo />
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
