import Menu from 'components/Menu';
import React, { useState } from 'react';
import './buttonMenu.scss';

const ButtonMenu = ({ className }) => {
  const [open, setOpen] = useState(false);

  const handleclick = () => {
    setOpen(true);
  };

  return (
    <>
      {open ? (
        <Menu setOpen={setOpen} />
      ) : (
        <div className={`hamburger-btn ${!!className ? className : ''}`} onClick={handleclick}>
          <div />
          <div />
          <div />
        </div>
      )}
    </>
  );
};

export default ButtonMenu;
