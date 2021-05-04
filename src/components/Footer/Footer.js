import React from 'react';
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.wrapper}>
    <span className={styles.licence}>© 2016-2019 «Need for drive»</span>
    <a className={styles.phone} href="tel:+74952342244">
      8 (495) 234-22-44
    </a>
  </footer>
);

export default Footer;
