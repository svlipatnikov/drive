import React from 'react';
import './breadCrumps.scss';

const BreadCrumps = ({ className }) => {
  return (
    <div className={`bread-crumps ${!!className ? className : ''}`}>
      Местоположение - Модель - Дополнительно - Итого
    </div>
  );
};

export default BreadCrumps;
