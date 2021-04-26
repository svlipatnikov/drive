import CloseButton from 'components/ButtonClose';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as TelegramLogo } from 'assets/svg/telegram.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import LanguageButton from 'components/ButtonLanguage';
import './menu.scss';

const menuItems = [
  { title: 'ПАРКОВКА', link: '/' },
  { title: 'СТРАХОВКА', link: '/' },
  { title: 'БЕНЗИН', link: '/' },
  { title: 'ОБСЛУЖИВАНИЕ', link: '/' },
];

const Menu = ({ setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="menu">
      <CloseButton onClick={handleClose} />

      <div className="menu__wrapper">
        <ul className="nav-list">
          {menuItems.map((item) => (
            <li className="nav-list__item" key={item.title}>
              <Link to={item.link} className="nav-list__item__link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="social">
          <a href="/#" className="social__item">
            <TelegramLogo />
          </a>
          <a href="/#" className="social__item">
            <FacebookLogo />
          </a>
          <a href="/#" className="social__item">
            <InstagramLogo />
          </a>
        </div>
      </div>

      <LanguageButton className="language-btn--menu" />
    </nav>
  );
};

export default Menu;
