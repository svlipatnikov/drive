import ButtonLanguage from 'components/ButtonLanguage';
import React from 'react';
import styles from './sideBar.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <ButtonLanguage />
    </div>
  );
};

export default SideBar;
