import Menu from 'components/Menu';
import React, { useState } from 'react';
import { ReactComponent as HamburgerBtn } from 'assets/svg/hamburger.svg';
import './buttonMenu.scss';

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
        <button className="hamburger-btn" onClick={handleclick}>
          <HamburgerBtn />
        </button>
      )}
    </>
  );
};

export default ButtonMenu;
