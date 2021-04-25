import CloseButton from 'components/CloseButton';
import React from 'react';
import { Link } from 'react-router-dom';
import telegramLogo from 'assets/svg/telegram_white.svg';
import instagramLogo from 'assets/svg/instagram_white.svg';
import facebookLogo from 'assets/svg/facebook_white.svg';
import './menu.scss';
import LanguageButton from 'components/LanguageButton';

const menuItems = [
  { title: 'ПАРКОВКА', link: '/' },
  { title: 'СТРАХОВКА', link: '/' },
  { title: 'БЕНЗИН', link: '/' },
  { title: 'ОБСЛУЖИВАНИЕ', link: '/' },
];

const Menu = ({ setOpen }) => {
  const handleClose = () => {
    console.log('handleClose');
    setOpen(false);
  };

  return (
    <nav className="menu">
      <CloseButton onClick={handleClose} />

      <div className="menu__wrapper">
        <ul className="menu__list">
          {menuItems.map((item) => (
            <li className="menu__item" key={item.title}>
              <Link to={item.link} className="menu__item__link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="social">
          <img src={telegramLogo} alt="telegram" className="social__item" />
          <img src={facebookLogo} alt="facebook" className="social__item" />
          <img src={instagramLogo} alt="instagram" className="social__item" />
        </div>
      </div>

      <div className="menu__language-btn-wrapper">
        <LanguageButton />
      </div>
    </nav>
  );
};

export default Menu;
