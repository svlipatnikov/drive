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
      <SideBar />

      <div className="wrapper-order__container">
        <Header className="inner-container header--order" />

        <div className="horizont-line" />
        <BreadCrumps className="inner-container" />
        <div className="horizont-line" />

        <div className="inner-container order-content">
          <OrderPageLocation />
          <div className="vertical-line" />
          <OrderInfo />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
