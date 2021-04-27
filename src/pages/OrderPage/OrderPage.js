import React from 'react';
import SideBar from 'components/SideBar';
import MenuButton from 'components/ButtonMenu';
import './orderPage.scss';
import Header from 'components/Header';

const OrderPage = () => {
  return (
    <div className="wrapper-order">
      <MenuButton />
      <SideBar />

      <section className="order-container">
        <div className="order-container__inner">
          <Header />
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
