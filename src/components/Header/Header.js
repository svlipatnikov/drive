import React from 'react';
import './header.scss';

const Header = ({ className }) => {
  return (
    <header className={`header ${!!className ? className : ''}`}>
      <div className="header__logo">Need for drive</div>
      <div className="header__location">Ульяновск</div>
    </header>
  );
};

export default Header;
