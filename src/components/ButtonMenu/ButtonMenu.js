import Menu from 'components/Menu';
import React, { useState } from 'react';
import { ReactComponent as HamburgerBtn } from 'assets/svg/hamburger.svg';
import styles from './buttonMenu.module.scss';

const ButtonMenu = () => {
  const [open, setOpen] = useState(false);

  const handleclick = () => {
    setOpen(true);
  };

  return (
    <>
      {open ? (
        <Menu setOpen={setOpen} />
      ) : (
        <button className={styles.hamburgerBtn} onClick={handleclick}>
          <HamburgerBtn />
        </button>
      )}
    </>
  );
};

export default ButtonMenu;
