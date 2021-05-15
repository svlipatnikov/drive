import ButtonClose from 'components/ButtonClose';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ReactComponent as TelegramLogo } from 'assets/svg/telegram.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import LanguageButton from 'components/ButtonLanguage';
import styles from './menu.module.scss';
import cn from 'classnames';

const menuItems = [
  { title: 'ПАРКОВКА', link: '/' },
  { title: 'СТРАХОВКА', link: '/' },
  { title: 'БЕНЗИН', link: '/' },
  { title: 'ОБСЛУЖИВАНИЕ', link: '/' },
];

const Menu = ({ setOpen }) => {
  let match = useRouteMatch();

  const wrapperStyle = cn({
    [styles.wrapper]: true,
    [styles.wrapperCover]: match.path === '/order',
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className={wrapperStyle}>
      <ButtonClose handleClose={handleClose} />

      <div className={styles.menu}>
        <ul className={styles.navList}>
          {menuItems.map((item) => (
            <li className={styles.navItem} key={item.title}>
              <Link to={item.link} className={styles.navLink}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.social}>
          <a href="/#" className={styles.socialItem}>
            <TelegramLogo />
          </a>
          <a href="/#" className={styles.socialItem}>
            <FacebookLogo />
          </a>
          <a href="/#" className={styles.socialItem}>
            <InstagramLogo />
          </a>
        </div>
      </div>

      <LanguageButton className={styles.languageBtnMenu} />
    </nav>
  );
};

export default Menu;
