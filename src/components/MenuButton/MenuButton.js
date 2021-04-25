import Menu from 'components/Menu';
import React, { useState } from 'react';
import './menuButton.scss';

const MenuButton = () => {
  const [open, setOpen] = useState(false);

  const handleclick = () => {
    setOpen(true);
    console.log('handleclick MenuButton');
  };

  return (
    <>
      {open ? (
        <Menu setOpen={setOpen} />
      ) : (
        <div className="hamburger-btn" onClick={handleclick}>
          <div />
          <div />
          <div />
        </div>
      )}
    </>
  );
};

export default MenuButton;
