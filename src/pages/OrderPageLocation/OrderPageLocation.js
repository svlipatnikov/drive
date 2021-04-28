import React from 'react';
import './orderPageLocation.scss';

const OrderPageLocation = ({ className }) => {
  return (
    <section className={`location ${!!className ? className : ''}`}>OrderPageLocation</section>
  );
};

export default OrderPageLocation;
